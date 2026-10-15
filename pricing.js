
(function (window, document) {
  'use strict';

  const PRICING_CONFIG = Object.freeze({

    tiers: {
      'essential-task': {
        id: 'essential-task',
        title: 'Essential Task',
        category: 'Single Discipline',
        desc: 'Ideal for an individual home task: mount a television, assemble a wardrobe, realign sticking doors, or replace a light fixture.',
        priceDisplay: 'Request a Quote',
        priceStatus: 'Single Task Scope',
        priceCaption: 'Estimate tailored to specific job requirements',
        detailsUrl: 'services.html',
        bookUrl: 'services details.html?service=furniture-assembly#book',
        inclusions: [
          '1 Dedicated home discipline of your choice',
          'Laser-level calibration & verified anchors',
          'Floor protection & complete packaging removal',
          'Standard guild workmanship guarantee'
        ]
      },
      'multi-task-popular': {
        id: 'multi-task-popular',
        title: 'Multi-Task Package',
        category: 'Resident Favorite',
        badge: 'Most Popular Choice',
        desc: 'Our most popular tier. Bundle up to three tasks across multiple rooms in a single appointment for maximum home efficiency.',
        priceDisplay: 'Request a Quote',
        priceStatus: 'Multi-Task Scope',
        priceCaption: 'Priority estimate • Multi-task bundle advantage',
        detailsUrl: '#comparison-table',
        bookUrl: 'services details.html?service=furniture-assembly#book',
        inclusions: [
          'Combine up to 3 tasks across disciplines',
          'Mounting, flat-pack assembly & hinge tune-ups',
          'Priority appointment slot reservation',
          'Full packaging bundling & clean floor turnover'
        ]
      },
      'custom-project': {
        id: 'custom-project',
        title: 'Custom Project',
        category: 'Bespoke Scope',
        desc: 'For extensive home improvements, multi-room setups, chandelier installations, complex plumbing lines, or bespoke architectural needs.',
        priceDisplay: 'Custom Quote',
        priceStatus: 'Assessment-Based',
        priceCaption: 'Full scope & blueprint evaluation by master craftsman',
        detailsUrl: 'services.html',
        bookUrl: 'contact.html?service=custom-project',
        inclusions: [
          'Full project consultation & multi-craftsman support',
          'Complex substrate & electrical/plumbing diagnostic',
          'Dedicated guild concierge manager',
          'Extended multi-phase workmanship warranty'
        ]
      }
    },

    disciplines: {
      'furniture-assembly': {
        id: 'furniture-assembly',
        title: 'Furniture Assembly',
        category: 'Assembly & Setup',
        detailsUrl: 'services details.html?service=furniture-assembly'
      },
      'minor-repairs': {
        id: 'minor-repairs',
        title: 'Minor Home Repairs',
        category: 'General Maintenance',
        detailsUrl: 'services details.html?service=minor-repairs'
      },
      'wall-mounting': {
        id: 'wall-mounting',
        title: 'Wall Mounting',
        category: 'Precision Mounting',
        detailsUrl: 'services details.html?service=wall-mounting'
      },
      'small-installations': {
        id: 'small-installations',
        title: 'Small Installations',
        category: 'Fittings & Fixtures',
        detailsUrl: 'services details.html?service=small-installations'
      },
      'plumbing-fixes': {
        id: 'plumbing-fixes',
        title: 'Plumbing Fixes',
        category: 'Flow & Drainage',
        detailsUrl: 'services details.html?service=plumbing-fixes'
      },
      'electrical-fixes': {
        id: 'electrical-fixes',
        title: 'Electrical Fixes',
        category: 'Certified Fixtures',
        detailsUrl: 'services details.html?service=electrical-fixes'
      }
    }
  });

  function initSmoothAnchorLinks() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          event.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (history.pushState) {
            history.pushState(null, '', targetId);
          }
        }
      });
    });
  }

  function initCardDeepLinking() {
    const urlParams = new URLSearchParams(window.location.search);
    const tierParam = urlParams.get('tier') || urlParams.get('service');
    const hashParam = window.location.hash ? window.location.hash.replace('#', '') : null;
    const targetParam = tierParam || hashParam;

    if (!targetParam) return;

    let targetCard = document.querySelector(`[data-tier-id="${targetParam}"]`) ||
                     document.querySelector(`[data-service-id="${targetParam}"]`) ||
                     document.getElementById(targetParam);

    if (targetCard) {
      setTimeout(() => {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.style.outline = '2px solid #D4AF37';
        targetCard.style.outlineOffset = '4px';

        setTimeout(() => {
          targetCard.style.transition = 'outline-color 1s ease';
          targetCard.style.outlineColor = 'transparent';
          setTimeout(() => {
            targetCard.style.outline = '';
            targetCard.style.outlineOffset = '';
            targetCard.style.transition = '';
          }, 1000);
        }, 2200);
      }, 400);
    }
  }

  function verifyPricingHydration() {
    const cards = document.querySelectorAll('.homera-pricing-card--tier');
    cards.forEach((card) => {
      const tierId = card.getAttribute('data-tier-id');
      const data = PRICING_CONFIG.tiers[tierId];
      if (!data) return;

      const viewBtn = card.querySelector('.homera-pricing-card__btn-view');
      if (viewBtn && data.detailsUrl) {
        viewBtn.setAttribute('href', data.detailsUrl);
      }

      const bookBtn = card.querySelector('.homera-pricing-card__btn-book');
      if (bookBtn && data.bookUrl) {
        bookBtn.setAttribute('href', data.bookUrl);
      }
    });
  }

  function initPricingPage() {
    initSmoothAnchorLinks();
    initCardDeepLinking();
    verifyPricingHydration();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPricingPage, { once: true });
  } else {
    initPricingPage();
  }

  window.HOMERA_PRICING = Object.freeze({
    config: PRICING_CONFIG,
    version: '2.0.0'
  });

})(window, document);
