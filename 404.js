
(function () {
  'use strict';

  const STORAGE_KEYS = {
    theme: 'fixora-theme',
    dir: 'fixora-dir'
  };

  const docEl = document.documentElement;

  function initPreferences() {
    try {
      const storedTheme = localStorage.getItem(STORAGE_KEYS.theme);
      if (storedTheme === 'dark' || storedTheme === 'light') {
        docEl.setAttribute('data-theme', storedTheme);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        docEl.setAttribute('data-theme', 'dark');
      }

      const storedDir = localStorage.getItem(STORAGE_KEYS.dir);
      if (storedDir === 'rtl' || storedDir === 'ltr') {
        docEl.setAttribute('dir', storedDir);
      }
    } catch (e) {
      console.warn('Storage access restricted:', e);
    }
  }

  function setupThemeToggle() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    function updateLabel(theme) {
      const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
    }

    updateLabel(docEl.getAttribute('data-theme') || 'light');

    btn.addEventListener('click', function () {
      const current = docEl.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';

      docEl.setAttribute('data-theme', next);
      try {
        localStorage.setItem(STORAGE_KEYS.theme, next);
      } catch (e) {}

      updateLabel(next);
    });
  }

  function setupDirToggle() {
    const btn = document.getElementById('rtlToggle');
    if (!btn) return;

    const labelSpan = btn.querySelector('[data-dir-label]');

    function updateDirUI(dir) {
      const current = dir.toUpperCase();
      const target = dir === 'rtl' ? 'left-to-right' : 'right-to-left';
      if (labelSpan) labelSpan.textContent = current;
      btn.setAttribute('aria-label', `${current} layout. Switch to ${target}`);
      btn.setAttribute('title', `Switch to ${target} layout`);
    }

    updateDirUI(docEl.getAttribute('dir') || 'ltr');

    btn.addEventListener('click', function () {
      const current = docEl.getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr';
      const next = current === 'rtl' ? 'ltr' : 'rtl';

      docEl.setAttribute('dir', next);
      try {
        localStorage.setItem(STORAGE_KEYS.dir, next);
      } catch (e) {}

      updateDirUI(next);
    });
  }

  function setupMoving404Parallax() {
    const wrap = document.getElementById('errorNumberWrap');
    const movingEl = document.getElementById('moving404');
    if (!wrap || !movingEl) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = null;

    function onMouseMove(e) {
      const rect = wrap.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX = (e.clientX - centerX) / (window.innerWidth / 2);
      const offsetY = (e.clientY - centerY) / (window.innerHeight / 2);

      targetX = offsetX * 14;
      targetY = offsetY * 10;
    }

    function renderParallax() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      movingEl.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotateX(${-currentY * 0.8}deg) rotateY(${currentX * 0.8}deg)`;

      rafId = requestAnimationFrame(renderParallax);
    }

    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      rafId = requestAnimationFrame(renderParallax);
    }

    if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission !== 'function') {
      window.addEventListener('deviceorientation', function (e) {
        if (e.gamma !== null && e.beta !== null) {
          targetX = Math.max(-12, Math.min(12, e.gamma * 0.5));
          targetY = Math.max(-10, Math.min(10, (e.beta - 45) * 0.5));
        }
      }, { passive: true });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initPreferences();
    setupThemeToggle();
    setupDirToggle();
    setupMoving404Parallax();
  });

  initPreferences();
})();
