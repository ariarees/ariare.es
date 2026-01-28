// CV Page Interactive Effects

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c> cat cv.txt', 'color: #a8dadc; font-family: monospace; font-size: 14px;');
  console.log('%c  Clove Twilight - Curriculum Vitae', 'color: #d4c5f9; font-family: monospace;');
  console.log('%c  Loading professional profile...', 'color: #b8e0d2; font-family: monospace;');

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Add terminal-style cursor to section headers on hover
  const sectionHeaders = document.querySelectorAll('.cv-section h3');
  sectionHeaders.forEach(header => {
    header.addEventListener('mouseenter', () => {
      if (!header.querySelector('.hover-cursor')) {
        const cursor = document.createElement('span');
        cursor.className = 'hover-cursor';
        cursor.textContent = '_';
        cursor.style.color = 'var(--pastel-green)';
        cursor.style.marginLeft = '0.25rem';
        cursor.style.animation = 'blink 1s infinite';
        header.appendChild(cursor);
      }
    });

    header.addEventListener('mouseleave', () => {
      const cursor = header.querySelector('.hover-cursor');
      if (cursor) {
        cursor.remove();
      }
    });
  });

  // Easter egg: typing animation on first load
  const animateHeader = () => {
    const h1 = document.querySelector('.cv-header h1');
    if (h1 && !sessionStorage.getItem('cv-animated')) {
      const text = h1.textContent;
      h1.textContent = '';
      let i = 0;
      
      const typeChar = () => {
        if (i < text.length) {
          h1.textContent += text.charAt(i);
          i++;
          setTimeout(typeChar, 50);
        } else {
          sessionStorage.setItem('cv-animated', 'true');
        }
      };
      
      setTimeout(typeChar, 300);
    }
  };

  // Only run animation on first visit in session
  // animateHeader(); // Uncomment if you want the typing effect

  // Highlight current section on scroll (optional)
  const observeSections = () => {
    const sections = document.querySelectorAll('.cv-section');
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-100px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });
  };

  observeSections();

  console.log('%c> cv loaded successfully', 'color: #b8e0d2; font-family: monospace;');
  console.log('%c> _', 'color: #a8dadc; font-family: monospace;');
});