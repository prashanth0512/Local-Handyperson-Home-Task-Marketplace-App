
(function (window, document) {
  'use strict';

  const reducedMotionMq = window.matchMedia('(prefers-reduced-motion: reduce)');

  function initYear(root) {
    const year = String(new Date().getFullYear());
    root.querySelectorAll('[data-current-year]').forEach((el) => { el.textContent = year; });
  }

  function initBackToTop(root) {
    const button = root.querySelector('[data-back-to-top]');
    if (!button) return;

    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: reducedMotionMq.matches ? 'auto' : 'smooth' });

      const target = document.querySelector('.site-header .brand') || document.getElementById('main-content');
      if (target) target.focus({ preventScroll: true });
    });
  }

  function initFooter(root) {
    if (!root || root.getAttribute('data-initialized') === 'true') return;
    root.setAttribute('data-initialized', 'true');

    initYear(root);
    initBackToTop(root);
  }

  const Fixora = window.Fixora || {};
  if (typeof Fixora.registerComponent === 'function') {
    Fixora.registerComponent('footer', initFooter);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      initFooter(document.querySelector('.site-footer'));
    });
  }
})(window, document);
