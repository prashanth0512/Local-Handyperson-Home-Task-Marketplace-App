(function (window, document) {
  'use strict';

  if (window.Fixora && window.Fixora.__loaderReady) return;

  const STORAGE_KEYS = Object.freeze({ theme: 'fixora-theme', dir: 'fixora-dir' });
  const docEl = document.documentElement;

  const readStorage = (key) => {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  };

  (function applyPreferences() {
    let theme = readStorage(STORAGE_KEYS.theme);
    if (theme !== 'light' && theme !== 'dark') {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      theme = prefersDark ? 'dark' : 'light';
    }
    docEl.setAttribute('data-theme', theme);

    const dir = readStorage(STORAGE_KEYS.dir) === 'rtl' ? 'rtl' : 'ltr';
    docEl.setAttribute('dir', dir);
  })();

  const registry = Object.create(null);
  const mounted = Object.create(null);

  function initComponent(name) {
    const init = registry[name];
    const root = mounted[name];
    if (!init || !root || root.getAttribute('data-initialized') === 'true') return;

    try {
      init(root);
      root.setAttribute('data-initialized', 'true');
    } catch (error) {
      console.error(`[Fixora] Failed to initialise the "${name}" component.`, error);
    }
  }

  function registerComponent(name, init) {
    if (typeof init !== 'function') return;
    registry[name] = init;
    initComponent(name);
  }

  const TEMPLATES = {
  "header": "<header class=\"site-header\">\n  <a class=\"skip-link\" href=\"#main-content\">Skip to main content</a>\n\n  <div class=\"site-header__inner\">\n    <a class=\"brand\" href=\"index.html\" aria-label=\"HOMERA — Exceptional Care for Every Home\">\n      <img class=\"brand__logo-img\" src=\"assets/images/homera-logo.png\" alt=\"HOMERA Logo\" width=\"58\" height=\"38\" />\n      <span class=\"brand__text\">\n        <span class=\"brand__name\">HOMERA<span class=\"brand__dot\" aria-hidden=\"true\"></span></span>\n        <span class=\"brand__tagline\">Exceptional Care for Every Home</span>\n      </span>\n    </a>\n\n    <nav class=\"site-nav\" id=\"site-nav-panel\" aria-label=\"Primary\">\n      <ul class=\"site-nav__list\">\n        <li class=\"site-nav__item site-nav__item--has-dropdown\">\n          <button class=\"site-nav__link site-nav__trigger\" type=\"button\"\n                  aria-expanded=\"false\" aria-controls=\"site-nav-home-menu\" data-dropdown-trigger>\n            <span>Home</span>\n            <svg class=\"site-nav__chevron\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n              <path d=\"m6 9 6 6 6-6\" />\n            </svg>\n          </button>\n          <ul class=\"site-nav__dropdown\" id=\"site-nav-home-menu\" data-dropdown-menu>\n            <li>\n              <a class=\"site-nav__dropdown-link\" href=\"index.html\">\n                <span class=\"site-nav__dropdown-index\" aria-hidden=\"true\">01</span>\n                <span>Home 1</span>\n              </a>\n            </li>\n            <li>\n              <a class=\"site-nav__dropdown-link\" href=\"home2.html\">\n                <span class=\"site-nav__dropdown-index\" aria-hidden=\"true\">02</span>\n                <span>Home 2</span>\n              </a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"site-nav__item\"><a class=\"site-nav__link\" href=\"about.html\">About Us</a></li>\n        <li class=\"site-nav__item\"><a class=\"site-nav__link\" href=\"services.html\">Services</a></li>\n        <li class=\"site-nav__item\"><a class=\"site-nav__link\" href=\"pricing.html\">Pricing</a></li>\n        <li class=\"site-nav__item\"><a class=\"site-nav__link\" href=\"how-it-works.html\">How It Works</a></li>\n        <li class=\"site-nav__item\"><a class=\"site-nav__link\" href=\"contact.html\">Contact</a></li>\n        <li class=\"site-nav__item\"><a class=\"site-nav__link\" href=\"dashboard.html\">Dashboard</a></li>\n      </ul>\n\n      <div class=\"site-nav__panel-actions\">\n        <button class=\"dir-toggle js-dir-toggle\" type=\"button\" aria-label=\"LTR layout. Switch to right-to-left\" title=\"Switch layout direction\">\n          <svg class=\"dir-toggle__icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n            <path d=\"M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4\" />\n          </svg>\n        </button>\n        <a class=\"btn-login\" href=\"login.html\">\n          <span>Login</span>\n          <svg class=\"btn-login__icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n            <path d=\"M5 12h14M12 5l7 7-7 7\" />\n          </svg>\n        </a>\n      </div>\n    </nav>\n\n    <div class=\"header-actions\">\n      <button class=\"icon-btn theme-toggle js-theme-toggle\" type=\"button\" aria-label=\"Switch to dark mode\">\n        <svg class=\"theme-toggle__icon theme-toggle__icon--moon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n          <path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z\" />\n        </svg>\n        <svg class=\"theme-toggle__icon theme-toggle__icon--sun\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n          <circle cx=\"12\" cy=\"12\" r=\"4\" />\n          <path d=\"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41\" />\n        </svg>\n      </button>\n\n      <button class=\"icon-btn dir-toggle js-dir-toggle header-actions__dir\" type=\"button\" aria-label=\"LTR layout. Switch to right-to-left\" title=\"Switch layout direction\">\n        <svg class=\"dir-toggle__icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n          <path d=\"M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4\" />\n        </svg>\n      </button>\n\n      <a class=\"btn-login header-actions__login\" href=\"login.html\">\n        <span>Login</span>\n        <svg class=\"btn-login__icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n          <path d=\"M5 12h14M12 5l7 7-7 7\" />\n        </svg>\n      </a>\n\n      <button class=\"icon-btn menu-toggle\" type=\"button\"\n              aria-expanded=\"false\" aria-controls=\"site-nav-panel\" aria-label=\"Open menu\" data-menu-toggle>\n        <span class=\"menu-toggle__bars\" aria-hidden=\"true\"><span></span><span></span><span></span></span>\n      </button>\n    </div>\n\n  </div>\n</header>\n",
  "footer": "<footer class=\"site-footer\">\r\n  <div class=\"site-footer__inner\">\r\n\r\n    \r\n\r\n    <div class=\"footer-grid\">\r\n\r\n      <section class=\"footer-col footer-col--brand\" aria-label=\"About HOMERA\">\r\n        <a class=\"footer-brand\" href=\"index.html\" aria-label=\"HOMERA — Exceptional Care for Every Home\">\r\n          <img class=\"footer-brand__logo-img\" src=\"assets/images/homera-logo.png\" alt=\"HOMERA logo\" width=\"67\" height=\"44\" />\r\n          <span class=\"footer-brand__text\">\r\n            <span class=\"footer-brand__name\">HOMERA<span class=\"footer-brand__dot\" aria-hidden=\"true\"></span></span>\r\n            <span class=\"footer-brand__tagline\">Exceptional Care for Every Home</span>\r\n          </span>\r\n        </a>\r\n\r\n        <p class=\"footer-brand__desc\">\r\n          Exceptional care for every home. Reliable professionals for everyday home repairs, installations, and household tasks.\r\n          Quality workmanship, convenient booking, and dependable service—all in one place.\r\n        </p>\r\n\r\n        <ul class=\"footer-social\" role=\"list\" aria-label=\"HOMERA on social media\">\r\n          <li>\r\n            <a class=\"footer-social__link\" href=\"https://www.instagram.com/\" target=\"_blank\" rel=\"noopener noreferrer\"\r\n              aria-label=\"Instagram (opens in a new tab)\" data-placeholder-link>\r\n              <svg class=\"footer-icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n                <rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" />\r\n                <path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01\" />\r\n              </svg>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a class=\"footer-social__link\" href=\"https://www.facebook.com/\" target=\"_blank\" rel=\"noopener noreferrer\"\r\n              aria-label=\"Facebook (opens in a new tab)\" data-placeholder-link>\r\n              <svg class=\"footer-icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n                <path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\" />\r\n              </svg>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a class=\"footer-social__link\" href=\"https://www.linkedin.com/\" target=\"_blank\" rel=\"noopener noreferrer\"\r\n              aria-label=\"LinkedIn (opens in a new tab)\" data-placeholder-link>\r\n              <svg class=\"footer-icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n                <path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z\" />\r\n                <rect x=\"2\" y=\"9\" width=\"4\" height=\"12\" />\r\n                <circle cx=\"4\" cy=\"4\" r=\"2\" />\r\n              </svg>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a class=\"footer-social__link\" href=\"https://www.youtube.com/\" target=\"_blank\" rel=\"noopener noreferrer\"\r\n              aria-label=\"YouTube (opens in a new tab)\" data-placeholder-link>\r\n              <svg class=\"footer-icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n                <path\r\n                  d=\"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17\" />\r\n                <path d=\"m10 15 5-3-5-3z\" />\r\n              </svg>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </section>\r\n\r\n      <nav class=\"footer-col\" aria-labelledby=\"footer-services-title\">\r\n        <h2 class=\"footer-col__title\" id=\"footer-services-title\">Our Services</h2>\r\n        <ul class=\"footer-links\" role=\"list\">\r\n          <li>\r\n            <a href=\"services.html#furniture-assembly\">\r\n              <svg class=\"footer-link__arrow\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n                <path d=\"m9 18 6-6-6-6\" />\r\n              </svg>\r\n              <span>Furniture Assembly</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"services.html#minor-repairs\">\r\n              <svg class=\"footer-link__arrow\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n                <path d=\"m9 18 6-6-6-6\" />\r\n              </svg>\r\n              <span>Minor Repairs</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"services.html#wall-mounting\">\r\n              <svg class=\"footer-link__arrow\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n                <path d=\"m9 18 6-6-6-6\" />\r\n              </svg>\r\n              <span>Wall Mounting</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"services.html#installations\">\r\n              <svg class=\"footer-link__arrow\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n                <path d=\"m9 18 6-6-6-6\" />\r\n              </svg>\r\n              <span>Small Installations</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"services.html\">\r\n              <svg class=\"footer-link__arrow\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n                <path d=\"m9 18 6-6-6-6\" />\r\n              </svg>\r\n              <span>All Services</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"services details.html\">\r\n              <svg class=\"footer-link__arrow\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n                <path d=\"m9 18 6-6-6-6\" />\r\n              </svg>\r\n              <span>Service Details</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n\r\n      <nav class=\"footer-col\" aria-labelledby=\"footer-explore-title\">\r\n        <h2 class=\"footer-col__title\" id=\"footer-explore-title\">Explore</h2>\r\n        <ul class=\"footer-links\" role=\"list\">\r\n          <li>\r\n            <a href=\"pricing.html\">\r\n              <svg class=\"footer-link__arrow\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n                <path d=\"m9 18 6-6-6-6\" />\r\n              </svg>\r\n              <span>Pricing</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"how-it-works.html\">\r\n              <svg class=\"footer-link__arrow\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n                <path d=\"m9 18 6-6-6-6\" />\r\n              </svg>\r\n              <span>How It Works</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"contact.html\">\r\n              <svg class=\"footer-link__arrow\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n                <path d=\"m9 18 6-6-6-6\" />\r\n              </svg>\r\n              <span>Contact Us</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"dashboard.html\">\r\n              <svg class=\"footer-link__arrow\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n                <path d=\"m9 18 6-6-6-6\" />\r\n              </svg>\r\n              <span>Customer Dashboard</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"comingsoon.html\">\r\n              <svg class=\"footer-link__arrow\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n                <path d=\"m9 18 6-6-6-6\" />\r\n              </svg>\r\n              <span>Coming Soon</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"404.html\">\r\n              <svg class=\"footer-link__arrow\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n                <path d=\"m9 18 6-6-6-6\" />\r\n              </svg>\r\n              <span>404 Page</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n\r\n      <section class=\"footer-col footer-col--contact\" aria-labelledby=\"footer-contact-title\">\r\n        <div class=\"footer-contact__header\">\r\n          <h2 class=\"footer-col__title\" id=\"footer-contact-title\">Contact &amp; Support</h2>\r\n          <div class=\"footer-contact__badge\" title=\"Live concierge assistance\">\r\n            <span class=\"footer-contact__pulse\" aria-hidden=\"true\"></span>\r\n            <span>Live Care</span>\r\n          </div>\r\n        </div>\r\n\r\n        <address class=\"footer-contact\">\r\n          <ul class=\"footer-contact__list\" role=\"list\">\r\n            <li class=\"footer-contact__item\">\r\n              <a class=\"footer-contact__card\" href=\"mailto:hello@homera.example\" dir=\"ltr\" aria-label=\"Email HOMERA concierge at hello@homera.example\">\r\n                <span class=\"footer-contact__icon\" aria-hidden=\"true\">\r\n                  <svg class=\"footer-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\r\n                    <rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\" />\r\n                    <path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\" />\r\n                  </svg>\r\n                </span>\r\n                <span class=\"footer-contact__body\">\r\n                  <span class=\"footer-contact__meta\">\r\n                    <span class=\"footer-contact__label\">Email Concierge</span>\r\n                    <span class=\"footer-contact__chip\">Quick Reply</span>\r\n                  </span>\r\n                  <span class=\"footer-contact__value\">hello@homera.example</span>\r\n                </span>\r\n                <svg class=\"footer-contact__chevron\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n                  <path d=\"m9 18 6-6-6-6\" />\r\n                </svg>\r\n              </a>\r\n            </li>\r\n            <li class=\"footer-contact__item\">\r\n              <a class=\"footer-contact__card\" href=\"tel:+15550100199\" dir=\"ltr\" aria-label=\"Call HOMERA direct care at +1 555 010 0199\">\r\n                <span class=\"footer-contact__icon\" aria-hidden=\"true\">\r\n                  <svg class=\"footer-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\r\n                    <path\r\n                      d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\" />\r\n                  </svg>\r\n                </span>\r\n                <span class=\"footer-contact__body\">\r\n                  <span class=\"footer-contact__meta\">\r\n                    <span class=\"footer-contact__label\">Direct Care Line</span>\r\n                    <span class=\"footer-contact__chip\">Toll-Free</span>\r\n                  </span>\r\n                  <span class=\"footer-contact__value\">+1 (555) 010-0199</span>\r\n                </span>\r\n                <svg class=\"footer-contact__chevron\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n                  <path d=\"m9 18 6-6-6-6\" />\r\n                </svg>\r\n              </a>\r\n            </li>\r\n\r\n            <li class=\"footer-contact__item\">\r\n              <div class=\"footer-contact__card footer-contact__card--static\">\r\n                <span class=\"footer-contact__icon\" aria-hidden=\"true\">\r\n                  <svg class=\"footer-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\r\n                    <path d=\"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z\" />\r\n                    <circle cx=\"12\" cy=\"10\" r=\"3\" />\r\n                  </svg>\r\n                </span>\r\n                <span class=\"footer-contact__body\">\r\n                  <span class=\"footer-contact__meta\">\r\n                    <span class=\"footer-contact__label\">Service Coverage</span>\r\n                    <span class=\"footer-contact__chip\">Nationwide</span>\r\n                  </span>\r\n                  <span class=\"footer-contact__value\">All Major Metros &amp; Suburbs</span>\r\n                </span>\r\n              </div>\r\n            </li>\r\n\r\n            <li class=\"footer-contact__item\">\r\n              <div class=\"footer-contact__card footer-contact__card--static\">\r\n                <span class=\"footer-contact__icon\" aria-hidden=\"true\">\r\n                  <svg class=\"footer-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\r\n                    <circle cx=\"12\" cy=\"12\" r=\"10\" />\r\n                    <path d=\"M12 6v6l4 2\" />\r\n                  </svg>\r\n                </span>\r\n                <span class=\"footer-contact__body\">\r\n                  <span class=\"footer-contact__meta\">\r\n                    <span class=\"footer-contact__label\">Operating Hours</span>\r\n                    <span class=\"footer-contact__chip footer-contact__chip--active\">Active Now</span>\r\n                  </span>\r\n                  <span class=\"footer-contact__value\">Mon–Sat · 8:00 AM – 8:00 PM</span>\r\n                </span>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </address>\r\n      </section>\r\n\r\n    </div>\r\n\r\n    <div class=\"footer-bottom\">\r\n      <p class=\"footer-bottom__copy\">© <span data-current-year>2026</span> HOMERA. All rights reserved.</p>\r\n\r\n      <ul class=\"footer-bottom__links\" role=\"list\">\r\n        <li><a href=\"privacy-policy.html\">Privacy Policy</a></li>\r\n        <li><a href=\"terms.html\">Terms &amp; Conditions</a></li>\r\n      </ul>\r\n\r\n      <button class=\"back-to-top\" type=\"button\" data-back-to-top>\r\n        <svg class=\"footer-icon back-to-top__icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\r\n          <path d=\"m5 12 7-7 7 7M12 19V5\" />\r\n        </svg>\r\n        <span>Back to top</span>\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n</footer>\r\n"
};

  function applyHtml(mountEl, name, html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();

    const root = template.content.firstElementChild;
    if (!root) throw new Error(`The fragment "${name}" is empty.`);

    root.setAttribute('data-component-root', name);

    mountEl.replaceWith(template.content);

    mounted[name] = root;
    initComponent(name);
    return { name, ok: true };
  }

  function renderFallback(mountEl, name, error) {
    mountEl.setAttribute('data-mount-state', 'error');

    const notice = document.createElement('p');
    notice.className = 'component-fallback';
    notice.setAttribute('role', 'status');
    notice.textContent = window.location.protocol === 'file:'
      ? `The site ${name} could not be loaded because this page was opened directly from the file system. Please preview it through a local server (for example, VS Code Live Server).`
      : `The site ${name} is temporarily unavailable. Please refresh the page.`;
    mountEl.replaceChildren(notice);

    console.warn(`[Fixora] Could not load the "${name}" component.`, error);
  }

  function mount(mountEl) {
    const name = mountEl.getAttribute('data-component');
    const src = mountEl.getAttribute('data-src');

    if (!name || mountEl.hasAttribute('data-mount-state')) {
      return Promise.resolve({ name, ok: false });
    }
    mountEl.setAttribute('data-mount-state', 'loading');

    if (TEMPLATES[name]) {
      try {
        return Promise.resolve(applyHtml(mountEl, name, TEMPLATES[name]));
      } catch (err) {
        console.warn(`[Fixora] Template load error for "${name}":`, err);
      }
    }

    if (!src) {
      return Promise.resolve({ name, ok: false });
    }

    return fetch(src, { credentials: 'same-origin', cache: 'no-cache' })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status} while requesting ${src}`);
        return response.text();
      })
      .then((html) => {
        const cleanHtml = html.replace(/<!-- Code injected by live-server -->[\s\S]*?<\/script>/gi, '');
        return applyHtml(mountEl, name, cleanHtml);
      })
      .catch((error) => {
        if (TEMPLATES[name]) {
          try {
            return applyHtml(mountEl, name, TEMPLATES[name]);
          } catch (templateError) {
            renderFallback(mountEl, name, templateError);
            return { name, ok: false };
          }
        }
        renderFallback(mountEl, name, error);
        return { name, ok: false };
      });
  }

  let resolveReady;
  const componentsReady = new Promise((resolve) => { resolveReady = resolve; });

  function mountAll() {
    document.querySelectorAll('[data-component-root]').forEach((root) => {
      const name = root.getAttribute('data-component-root');
      if (name && !mounted[name]) {
        mounted[name] = root;
        initComponent(name);
      }
    });

    const mountPoints = Array.from(document.querySelectorAll('[data-component]'));

    Promise.all(mountPoints.map(mount)).then((results) => {
      const preMounted = Object.keys(mounted);
      const loadedNames = Array.from(new Set([...preMounted, ...results.filter((r) => r.ok).map((r) => r.name)]));
      const failedNames = results.filter((r) => !r.ok && r.name && !mounted[r.name]).map((r) => r.name);
      const detail = {
        loaded: loadedNames,
        failed: failedNames,
      };
      document.dispatchEvent(new CustomEvent('fixora:components-ready', { detail }));
      document.dispatchEvent(new CustomEvent('homera:components-ready', { detail }));
      resolveReady(detail);
    });
  }

  const api = {
    STORAGE_KEYS,
    registerComponent,
    componentsReady,
    __loaderReady: true,
  };
  window.Fixora = Object.assign(window.Fixora || {}, api);
  window.Homera = Object.assign(window.Homera || {}, api);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountAll, { once: true });
  } else {
    mountAll();
  }
})(window, document);
