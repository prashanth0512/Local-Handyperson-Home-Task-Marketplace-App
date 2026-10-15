
(function () {
  'use strict';

  const STORAGE_KEYS = {
    theme: 'fixora-theme',
    dir: 'fixora-dir',
    countdown: 'homera-countdown-target-v1'
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

  function setupCountdown() {
    const daysEl = document.getElementById('countDays');
    const hoursEl = document.getElementById('countHours');
    const minutesEl = document.getElementById('countMinutes');
    const secondsEl = document.getElementById('countSeconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    const FIFTEEN_DAYS_MS = 15 * 24 * 60 * 60 * 1000;
    let targetTime = null;

    try {
      const saved = localStorage.getItem(STORAGE_KEYS.countdown);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed > Date.now()) {
          targetTime = parsed;
        }
      }

      if (!targetTime) {
        targetTime = Date.now() + FIFTEEN_DAYS_MS;
        localStorage.setItem(STORAGE_KEYS.countdown, targetTime.toString());
      }
    } catch (e) {
      targetTime = Date.now() + FIFTEEN_DAYS_MS;
    }

    function updateDisplay(el, val, padZero = true) {
      const text = padZero ? String(val).padStart(2, '0') : String(val);
      if (el.textContent !== text) {
        el.textContent = text;
        el.style.transform = 'scale(1.08)';
        setTimeout(() => { el.style.transform = 'scale(1)'; }, 180);
      }
    }

    function tick() {
      const now = Date.now();
      const diff = Math.max(0, targetTime - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      updateDisplay(daysEl, days, false);
      updateDisplay(hoursEl, hours, true);
      updateDisplay(minutesEl, minutes, true);
      updateDisplay(secondsEl, seconds, true);

      if (diff <= 0) {
        clearInterval(timerId);
      }
    }

    tick();

    const timerId = setInterval(tick, 1000);
  }

  document.addEventListener('DOMContentLoaded', function () {
    initPreferences();
    setupThemeToggle();
    setupDirToggle();
    setupCountdown();
  });

  initPreferences();
})();
