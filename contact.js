
(function (window, document) {
  'use strict';

  function initFaqAccordion() {
    const accordion = document.getElementById('contact-faq-accordion');
    if (!accordion) return;

    const items = accordion.querySelectorAll('[data-faq-item]');

    items.forEach((item, index) => {
      const trigger = item.querySelector('.faq-trigger');
      const content = item.querySelector('.faq-content');

      if (!trigger || !content) return;

      if (index === 0) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        content.removeAttribute('hidden');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        trigger.setAttribute('aria-expanded', 'false');
        content.setAttribute('hidden', '');
        content.style.maxHeight = '0px';
      }

      trigger.addEventListener('click', function () {
        const isOpen = item.classList.contains('is-open');

        items.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('is-open')) {
            otherItem.classList.remove('is-open');
            const otherTrigger = otherItem.querySelector('.faq-trigger');
            const otherContent = otherItem.querySelector('.faq-content');
            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
            if (otherContent) {
              otherContent.style.maxHeight = '0px';
              setTimeout(() => {
                if (!otherItem.classList.contains('is-open')) {
                  otherContent.setAttribute('hidden', '');
                }
              }, 300);
            }
          }
        });

        if (isOpen) {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          content.style.maxHeight = '0px';
          setTimeout(() => {
            if (!item.classList.contains('is-open')) {
              content.setAttribute('hidden', '');
            }
          }, 300);
        } else {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
          content.removeAttribute('hidden');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });

      trigger.addEventListener('keydown', function (e) {
        let targetTrigger = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          e.preventDefault();
          const nextItem = items[index + 1] || items[0];
          targetTrigger = nextItem.querySelector('.faq-trigger');
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const prevItem = items[index - 1] || items[items.length - 1];
          targetTrigger = prevItem.querySelector('.faq-trigger');
        } else if (e.key === 'Home') {
          e.preventDefault();
          targetTrigger = items[0].querySelector('.faq-trigger');
        } else if (e.key === 'End') {
          e.preventDefault();
          targetTrigger = items[items.length - 1].querySelector('.faq-trigger');
        }

        if (targetTrigger) {
          targetTrigger.focus();
        }
      });
    });

    window.addEventListener('resize', function () {
      items.forEach(item => {
        if (item.classList.contains('is-open')) {
          const content = item.querySelector('.faq-content');
          if (content) {
            content.style.maxHeight = content.scrollHeight + 'px';
          }
        }
      });
    });
  }

  function initContactForm() {
    const form = document.getElementById('contact-inquiry-form');
    if (!form) return;

    const submitBtn = document.getElementById('contact-submit-btn');
    const feedbackBanner = document.getElementById('contact-form-feedback');

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const phoneInput = document.getElementById('contact-phone');
    const postcodeInput = document.getElementById('contact-postcode');
    const serviceSelect = document.getElementById('contact-service');
    const messageTextarea = document.getElementById('contact-message');
    const consentCheckbox = document.getElementById('contact-consent');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\+\(\)\-]{7,20}$/;

    [nameInput, emailInput, phoneInput, postcodeInput, serviceSelect, messageTextarea].forEach(input => {
      if (!input) return;
      const field = input.closest('.homera-contact-field');
      input.addEventListener('input', function () {
        if (field) field.classList.remove('has-error');
      });
      input.addEventListener('change', function () {
        if (field) field.classList.remove('has-error');
      });
    });

    if (consentCheckbox) {
      consentCheckbox.addEventListener('change', function () {
        const wrap = consentCheckbox.closest('.homera-contact-checkbox-wrap');
        if (wrap) wrap.classList.remove('has-error');
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let hasError = false;
      let firstErrorEl = null;

      const nameVal = nameInput ? nameInput.value.trim() : '';
      const nameField = nameInput ? nameInput.closest('.homera-contact-field') : null;
      if (!nameVal || nameVal.length < 2) {
        if (nameField) nameField.classList.add('has-error');
        hasError = true;
        if (!firstErrorEl) firstErrorEl = nameInput;
      } else if (nameField) {
        nameField.classList.remove('has-error');
      }

      const emailVal = emailInput ? emailInput.value.trim() : '';
      const emailField = emailInput ? emailInput.closest('.homera-contact-field') : null;
      if (!emailVal || !emailRegex.test(emailVal)) {
        if (emailField) emailField.classList.add('has-error');
        hasError = true;
        if (!firstErrorEl) firstErrorEl = emailInput;
      } else if (emailField) {
        emailField.classList.remove('has-error');
      }

      const phoneVal = phoneInput ? phoneInput.value.trim() : '';
      const phoneField = phoneInput ? phoneInput.closest('.homera-contact-field') : null;
      if (!phoneVal || !phoneRegex.test(phoneVal)) {
        if (phoneField) phoneField.classList.add('has-error');
        hasError = true;
        if (!firstErrorEl) firstErrorEl = phoneInput;
      } else if (phoneField) {
        phoneField.classList.remove('has-error');
      }

      const postcodeVal = postcodeInput ? postcodeInput.value.trim() : '';
      const postcodeField = postcodeInput ? postcodeInput.closest('.homera-contact-field') : null;
      if (!postcodeVal || postcodeVal.length < 2) {
        if (postcodeField) postcodeField.classList.add('has-error');
        hasError = true;
        if (!firstErrorEl) firstErrorEl = postcodeInput;
      } else if (postcodeField) {
        postcodeField.classList.remove('has-error');
      }

      const serviceVal = serviceSelect ? serviceSelect.value : '';
      const serviceField = serviceSelect ? serviceSelect.closest('.homera-contact-field') : null;
      if (!serviceVal) {
        if (serviceField) serviceField.classList.add('has-error');
        hasError = true;
        if (!firstErrorEl) firstErrorEl = serviceSelect;
      } else if (serviceField) {
        serviceField.classList.remove('has-error');
      }

      const messageVal = messageTextarea ? messageTextarea.value.trim() : '';
      const messageField = messageTextarea ? messageTextarea.closest('.homera-contact-field') : null;
      if (!messageVal || messageVal.length < 10) {
        if (messageField) messageField.classList.add('has-error');
        hasError = true;
        if (!firstErrorEl) firstErrorEl = messageTextarea;
      } else if (messageField) {
        messageField.classList.remove('has-error');
      }

      const consentField = consentCheckbox ? consentCheckbox.closest('.homera-contact-checkbox-wrap') : null;
      if (consentCheckbox && !consentCheckbox.checked) {
        if (consentField) consentField.classList.add('has-error');
        hasError = true;
        if (!firstErrorEl) firstErrorEl = consentCheckbox;
      } else if (consentField) {
        consentField.classList.remove('has-error');
      }

      if (hasError) {
        if (firstErrorEl) firstErrorEl.focus();
        showFeedback(feedbackBanner, 'error', 'Please complete all required fields correctly before submitting.');
        return;
      }

      if (submitBtn) {
        submitBtn.classList.add('is-submitting');
        submitBtn.disabled = true;
      }

      setTimeout(function () {
        if (submitBtn) {
          submitBtn.classList.remove('is-submitting');
          submitBtn.disabled = false;
        }

        showFeedback(
          feedbackBanner,
          'success',
          `Thank you, ${nameVal}! Your concierge inquiry (#HMR-${Math.floor(1000 + Math.random() * 9000)}) has been registered. Our lead coordinator will contact you at ${emailVal} within 25 minutes.`
        );

        form.reset();

        if (feedbackBanner) {
          feedbackBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 1200);
    });
  }

  function showFeedback(el, type, message) {
    if (!el) return;
    el.className = 'homera-contact-feedback homera-contact-feedback--' + type;
    el.innerHTML = `
      <svg viewBox="0 0 24 24" style="width: 18px; height: 18px; stroke: currentColor; stroke-width: 2.2; fill: none; flex-shrink: 0;" aria-hidden="true">
        ${type === 'success'
          ? '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>'
          : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'}
      </svg>
      <span>${message}</span>
    `;
    el.removeAttribute('hidden');
  }

  function onReady() {
    initFaqAccordion();
    initContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

})(window, document);
