(function (window, document) {
  'use strict';

  const docEl = document.documentElement;
  const LABELS = { light: 'Light', dark: 'Dark', ltr: 'LTR', rtl: 'RTL' };

  const els = {
    theme: document.querySelector('[data-preview-theme]'),
    dir: document.querySelector('[data-preview-dir]'),
    components: document.querySelector('[data-preview-components]'),
  };

  function syncPreferences() {
    if (els.theme) els.theme.textContent = LABELS[docEl.getAttribute('data-theme')] || 'Light';
    if (els.dir) els.dir.textContent = LABELS[docEl.getAttribute('dir')] || 'LTR';
  }

  function showComponentStatus({ loaded = [], failed = [] }) {
    if (!els.components) return;
    els.components.textContent = failed.length
      ? `Failed: ${failed.join(', ')}`
      : `${loaded.length} mounted`;
  }

  document.addEventListener('fixora:themechange', syncPreferences);
  document.addEventListener('fixora:dirchange', syncPreferences);

  if (window.Fixora && window.Fixora.componentsReady) {
    window.Fixora.componentsReady.then(showComponentStatus);
  } else if (els.components) {
    els.components.textContent = 'Loader missing';
  }

  syncPreferences();
})(window, document);
