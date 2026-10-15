
(function (window, document) {
  'use strict';

  const Fixora = window.Fixora || {};
  const KEYS = Fixora.STORAGE_KEYS || { theme: 'fixora-theme', dir: 'fixora-dir' };
  const THEME_COLORS = { light: '#F8FAFC', dark: '#0B1120' };
  const docEl = document.documentElement;

  const desktopMq = window.matchMedia('(min-width: 1140px)');
  const hoverMq = window.matchMedia('(hover: hover) and (pointer: fine)');
  const reducedMotionMq = window.matchMedia('(prefers-reduced-motion: reduce)');
  const systemDarkMq = window.matchMedia('(prefers-color-scheme: dark)');

  const storage = {
    get(key) {
      try { return window.localStorage.getItem(key); } catch (error) { return null; }
    },
    set(key, value) {
      try { window.localStorage.setItem(key, value); } catch (error) {}
    },
  };

  const onMediaChange = (mq, handler) => {
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else if (mq.addListener) mq.addListener(handler);
  };

  const emit = (name, detail) => document.dispatchEvent(new CustomEvent(name, { detail }));

  const getTheme = () => (docEl.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  function applyTheme(theme, root) {
    docEl.setAttribute('data-theme', theme);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', THEME_COLORS[theme]);

    const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
    root.querySelectorAll('.js-theme-toggle').forEach((btn) => {
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
    });

    emit('fixora:themechange', { theme });
    emit('homera:themechange', { theme });
  }

  function initTheme(root) {
    applyTheme(getTheme(), root);

    root.querySelectorAll('.js-theme-toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const next = getTheme() === 'dark' ? 'light' : 'dark';
        storage.set(KEYS.theme, next);

        const update = () => applyTheme(next, root);
        if (document.startViewTransition && !reducedMotionMq.matches) {
          document.startViewTransition(update);
        } else {
          update();
        }
      });
    });

    onMediaChange(systemDarkMq, (event) => {
      if (storage.get(KEYS.theme)) return;
      applyTheme(event.matches ? 'dark' : 'light', root);
    });
  }

  const getDir = () => (docEl.getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr');

  function applyDir(dir, root) {
    docEl.setAttribute('dir', dir);

    const current = dir.toUpperCase();
    const target = dir === 'rtl' ? 'left-to-right' : 'right-to-left';

    root.querySelectorAll('.js-dir-toggle').forEach((btn) => {
      const label = btn.querySelector('[data-dir-label]');
      if (label) label.textContent = current;
      btn.setAttribute('aria-label', `${current} layout. Switch to ${target}`);
      btn.setAttribute('title', `Switch to ${target} layout`);
    });

    emit('fixora:dirchange', { dir });
    emit('homera:dirchange', { dir });
  }

  function initDirection(root, onChange) {
    applyDir(getDir(), root);

    root.querySelectorAll('.js-dir-toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const next = getDir() === 'rtl' ? 'ltr' : 'rtl';
        storage.set(KEYS.dir, next);
        applyDir(next, root);
        onChange();
      });
    });
  }

  function initDropdowns(root) {
    const controllers = [];
    const canHover = () => desktopMq.matches && hoverMq.matches;

    root.querySelectorAll('.site-nav__item--has-dropdown').forEach((item) => {
      const trigger = item.querySelector('[data-dropdown-trigger]');
      const menu = item.querySelector('[data-dropdown-menu]');
      if (!trigger || !menu) return;

      let hoverTimer = null;
      let openedByHover = false;

      const links = () => Array.from(menu.querySelectorAll('a[href]'));
      const isOpen = () => trigger.getAttribute('aria-expanded') === 'true';

      const controller = {
        item,
        trigger,
        menu,
        isOpen,
        open() {
          controllers.forEach((other) => { if (other !== controller) other.close(); });
          trigger.setAttribute('aria-expanded', 'true');
          item.classList.add('is-open');
        },
        close(returnFocus) {
          clearTimeout(hoverTimer);
          openedByHover = false;
          if (!isOpen()) return;
          trigger.setAttribute('aria-expanded', 'false');
          item.classList.remove('is-open');
          if (returnFocus) trigger.focus();
        },
      };

      trigger.addEventListener('click', () => {
        if (isOpen() && openedByHover) {
          openedByHover = false;
          return;
        }
        if (isOpen()) controller.close();
        else controller.open();
      });

      trigger.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
        event.preventDefault();
        controller.open();
        const items = links();
        const target = event.key === 'ArrowDown' ? items[0] : items[items.length - 1];
        if (target) target.focus();
      });

      menu.addEventListener('keydown', (event) => {
        const items = links();
        const index = items.indexOf(document.activeElement);
        let next = null;

        switch (event.key) {
          case 'ArrowDown': next = items[(index + 1) % items.length]; break;
          case 'ArrowUp': next = items[(index - 1 + items.length) % items.length]; break;
          case 'Home': next = items[0]; break;
          case 'End': next = items[items.length - 1]; break;
          default: return;
        }
        event.preventDefault();
        if (next) next.focus();
      });

      item.addEventListener('mouseenter', () => {
        if (!canHover()) return;
        clearTimeout(hoverTimer);
        if (!isOpen()) {
          controller.open();
          openedByHover = true;
        }
      });

      item.addEventListener('mouseleave', () => {
        if (!canHover() || !openedByHover) return;
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(() => controller.close(), 160);
      });

      item.addEventListener('focusout', (event) => {
        if (desktopMq.matches && !item.contains(event.relatedTarget)) controller.close();
      });

      controllers.push(controller);
    });

    document.addEventListener('click', (event) => {
      controllers.forEach((c) => {
        if (c.isOpen() && !c.item.contains(event.target)) c.close();
      });
    });

    const closeAll = () => controllers.forEach((c) => c.close());
    onMediaChange(desktopMq, closeAll);

    return {
      closeAll,
      closeOpen() {
        const open = controllers.find((c) => c.isOpen());
        if (!open) return false;
        open.close(open.item.contains(document.activeElement));
        return true;
      },
    };
  }

  function initMobileMenu(root, dropdowns) {
    const toggle = root.querySelector('[data-menu-toggle]');
    const panel = root.querySelector('#site-nav-panel');
    if (!toggle || !panel) return { isOpen: () => false, close() {} };

    const isOpen = () => root.classList.contains('is-menu-open');

    function setOpen(open, { returnFocus = false } = {}) {
      root.classList.toggle('is-menu-open', open);
      docEl.classList.toggle('has-menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');

      if (open) {
        window.requestAnimationFrame(() => {
          const first = panel.querySelector('a[href], button:not([disabled])');
          if (first) first.focus({ preventScroll: true });
        });
      } else {
        dropdowns.closeAll();
        if (returnFocus) toggle.focus();
      }
    }

    toggle.addEventListener('click', () => setOpen(!isOpen()));

    panel.addEventListener('click', (event) => {
      if (isOpen() && event.target.closest('a[href]')) setOpen(false);
    });

    root.addEventListener('keydown', (event) => {
      if (event.key !== 'Tab' || !isOpen()) return;

      const focusable = Array.from(root.querySelectorAll('a[href], button:not([disabled])'))
        .filter((el) => !el.classList.contains('skip-link') && el.getClientRects().length > 0);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    onMediaChange(desktopMq, (event) => {
      if (event.matches && isOpen()) setOpen(false);
    });

    return {
      isOpen,
      close: (options) => setOpen(false, options),
    };
  }

  const pageName = (pathname) => {
    try {
      return decodeURIComponent(pathname.split('/').pop() || 'index.html').toLowerCase();
    } catch (e) {
      return (pathname.split('/').pop() || 'index.html').toLowerCase();
    }
  };

  function markActiveLinks(root) {
    const current = pageName(window.location.pathname);

    root.querySelectorAll('.site-nav__list a[href]').forEach((link) => {
      const url = new URL(link.getAttribute('href'), window.location.href);
      const linkPage = pageName(url.pathname);
      const isMatch = linkPage === current || (linkPage === 'services.html' && (current === 'services details.html' || current === 'services-details.html'));
      if (url.hash || !isMatch) return;

      link.setAttribute('aria-current', 'page');
      const parent = link.closest('.site-nav__item--has-dropdown');
      if (parent) parent.classList.add('is-current');
    });
  }

  function initScrollState(root) {
    let ticking = false;
    const update = () => {
      root.classList.toggle('is-scrolled', window.scrollY > 8);
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }, { passive: true });

    update();
  }

  function initHeader(root) {
    if (!root || root.getAttribute('data-initialized') === 'true') return;
    root.setAttribute('data-initialized', 'true');

    const dropdowns = initDropdowns(root);
    const mobileMenu = initMobileMenu(root, dropdowns);

    initTheme(root);
    initDirection(root, dropdowns.closeAll);
    markActiveLinks(root);
    initScrollState(root);

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      if (dropdowns.closeOpen()) return;
      if (mobileMenu.isOpen()) mobileMenu.close({ returnFocus: true });
    });
  }

  if (typeof Fixora.registerComponent === 'function') {
    Fixora.registerComponent('header', initHeader);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      initHeader(document.querySelector('.site-header'));
    });
  }
})(window, document);
