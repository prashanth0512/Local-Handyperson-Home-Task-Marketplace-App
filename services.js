
(function (window, document) {
  'use strict';

  const reducedMotionMq = window.matchMedia('(prefers-reduced-motion: reduce)');

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();
        const header = document.querySelector('.site-header');
        const headerOffset = header ? header.offsetHeight + 16 : 90;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: reducedMotionMq.matches ? 'auto' : 'smooth'
        });

        if (target.hasAttribute('tabindex')) {
          target.focus();
        } else {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      });
    });
  }

  function handleInitialHash() {
    const hash = window.location.hash;
    if (!hash) return;

    let target = document.querySelector(hash);
    if (!target) {
      if (hash === '#installations') target = document.querySelector('#installations');
      else if (hash === '#plumbing') target = document.querySelector('#plumbing');
      else if (hash === '#electrical') target = document.querySelector('#electrical');
    }

    if (target && target.classList.contains('homera-services-card')) {
      setTimeout(() => {
        const header = document.querySelector('.site-header');
        const headerOffset = header ? header.offsetHeight + 24 : 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: reducedMotionMq.matches ? 'auto' : 'smooth'
        });

        target.style.transition = 'box-shadow 400ms ease, border-color 400ms ease';
        target.style.borderColor = 'var(--brand-gold, #D4AF37)';
        target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.4)';

        setTimeout(() => {
          target.style.borderColor = '';
          target.style.boxShadow = '';
        }, 2200);
      }, 350);
    }
  }

  function init() {
    initSmoothScroll();
    handleInitialHash();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window, document);
