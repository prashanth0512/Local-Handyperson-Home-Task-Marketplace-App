
(function (window, document) {
  'use strict';

  const DASHBOARD_DATA = Object.freeze({
    customer: {
      name: 'Alex Morgan',
      email: 'alex.morgan@example.com',
      membership: 'Gold Resident',
      address: '42 Kensington Park Gardens, Apt 4B'
    },
    bookings: [
      {
        id: 'HMR-8492',
        service: 'Wall Mounting',
        category: 'Precision Mounting',
        scope: 'Laser-level mounting of 65″ OLED display into brick masonry with concealed cabling.',
        date: 'Tomorrow, Oct 16, 2026',
        time: '10:00 AM – 12:00 PM',
        technician: 'Marcus Sterling',
        techRole: 'Senior Mounting Specialist',
        techRating: '4.98 (142 reviews)',
        techAvatar: 'MS',
        status: 'Confirmed',
        amount: '£95.00',
        timelineStep: 3
      },
      {
        id: 'HMR-8501',
        service: 'Plumbing Fixes',
        category: 'Flow & Drainage',
        scope: 'Kitchen mixer tap drip diagnostics and ceramic cartridge replacement.',
        date: 'Oct 19, 2026',
        time: '2:00 PM – 4:00 PM',
        technician: 'Guild Dispatch Pending',
        techRole: 'Flow Diagnostics Craftsman',
        techRating: '5.0 (Guild Standard)',
        techAvatar: 'GD',
        status: 'Pending',
        amount: '£65.00',
        timelineStep: 1
      },
      {
        id: 'HMR-7921',
        service: 'Furniture Assembly',
        category: 'Assembly & Setup',
        scope: 'Three-door hinged mirrored wardrobe & king storage divan frame assembly.',
        date: 'Sep 28, 2026',
        time: '1:00 PM – 4:30 PM',
        technician: 'David Miller',
        techRole: 'Master Cabinetry Craftsman',
        techRating: '4.96 (188 reviews)',
        techAvatar: 'DM',
        status: 'Completed',
        amount: '£140.00',
        invoiceId: 'INV-2026-081',
        timelineStep: 5
      },
      {
        id: 'HMR-7410',
        service: 'Minor Home Repairs',
        category: 'General Maintenance',
        scope: 'Door planing, latch strike realignment, and kitchen soft-close hinge adjustment.',
        date: 'Sep 12, 2026',
        time: '10:30 AM – 12:30 PM',
        technician: 'Elena Rostova',
        techRole: 'Architectural Tune-Up Specialist',
        techRating: '4.97 (110 reviews)',
        techAvatar: 'ER',
        status: 'Completed',
        amount: '£85.00',
        invoiceId: 'INV-2026-072',
        timelineStep: 5
      },
      {
        id: 'HMR-6983',
        service: 'Small Installations',
        category: 'Fittings & Fixtures',
        scope: 'Drapery poles and custom blackout roller blind fitting across three rooms.',
        date: 'Aug 24, 2026',
        time: '9:00 AM – 11:30 AM',
        technician: 'Arthur Price',
        techRole: 'Fixture & Fitting Specialist',
        techRating: '4.95 (95 reviews)',
        techAvatar: 'AP',
        status: 'Completed',
        amount: '£110.00',
        invoiceId: 'INV-2026-064',
        timelineStep: 5
      },
      {
        id: 'HMR-6512',
        service: 'Electrical Fixes',
        category: 'Certified Fixtures',
        scope: 'Designer dining chandelier mounting and smart dimmer switch upgrades.',
        date: 'Aug 02, 2026',
        time: '2:00 PM – 4:00 PM',
        technician: 'Julian Hayes',
        techRole: 'Certified Lighting Specialist',
        techRating: '4.99 (214 reviews)',
        techAvatar: 'JH',
        status: 'Completed',
        amount: '£135.00',
        invoiceId: 'INV-2026-055',
        timelineStep: 5
      },
      {
        id: 'HMR-5991',
        service: 'Plumbing Fixes',
        category: 'Flow & Drainage',
        scope: 'Bathroom sink P-trap overhaul and silent toilet cistern valve installation.',
        date: 'Jul 18, 2026',
        time: '11:00 AM – 1:00 PM',
        technician: 'Marcus Sterling',
        techRole: 'Flow Diagnostics Craftsman',
        techRating: '4.98 (142 reviews)',
        techAvatar: 'MS',
        status: 'Completed',
        amount: '£90.00',
        invoiceId: 'INV-2026-048',
        timelineStep: 5
      },
      {
        id: 'HMR-5420',
        service: 'Wall Mounting',
        category: 'Precision Mounting',
        scope: 'Laser-level installation of 9-piece hardwood art gallery frame set.',
        date: 'Jun 29, 2026',
        time: '10:00 AM – 1:00 PM',
        technician: 'Marcus Sterling',
        techRole: 'Senior Mounting Specialist',
        techRating: '4.98 (142 reviews)',
        techAvatar: 'MS',
        status: 'Completed',
        amount: '£125.00',
        invoiceId: 'INV-2026-039',
        timelineStep: 5
      },
      {
        id: 'HMR-4911',
        service: 'Furniture Assembly',
        category: 'Assembly & Setup',
        scope: 'Dual-motor executive standing desk and modular filing tower assembly.',
        date: 'Jun 08, 2026',
        time: '1:30 PM – 4:00 PM',
        technician: 'David Miller',
        techRole: 'Master Cabinetry Craftsman',
        techRating: '4.96 (188 reviews)',
        techAvatar: 'DM',
        status: 'Completed',
        amount: '£115.00',
        invoiceId: 'INV-2026-031',
        timelineStep: 5
      },
      {
        id: 'HMR-4402',
        service: 'Small Installations',
        category: 'Fittings & Fixtures',
        scope: 'Dual heated towel warmer rails fitted into porcelain bathroom tiles.',
        date: 'May 17, 2026',
        time: '9:30 AM – 11:30 AM',
        technician: 'Arthur Price',
        techRole: 'Fixture & Fitting Specialist',
        techRating: '4.95 (95 reviews)',
        techAvatar: 'AP',
        status: 'Completed',
        amount: '£80.00',
        invoiceId: 'INV-2026-022',
        timelineStep: 5
      },
      {
        id: 'HMR-3918',
        service: 'Minor Home Repairs',
        category: 'General Maintenance',
        scope: 'Pantry drawer slide realignment, latch resets, and trim touch-ups.',
        date: 'Apr 22, 2026',
        time: '2:00 PM – 3:30 PM',
        technician: 'Elena Rostova',
        techRole: 'Architectural Tune-Up Specialist',
        techRating: '4.97 (110 reviews)',
        techAvatar: 'ER',
        status: 'Completed',
        amount: '£75.00',
        invoiceId: 'INV-2026-015',
        timelineStep: 5
      },
      {
        id: 'HMR-3380',
        service: 'Electrical Fixes',
        category: 'Certified Fixtures',
        scope: 'Three hallway pendant lights replaced and circuit isolation verified.',
        date: 'Mar 14, 2026',
        time: '10:00 AM – 12:00 PM',
        technician: 'Julian Hayes',
        techRole: 'Certified Lighting Specialist',
        techRating: '4.99 (214 reviews)',
        techAvatar: 'JH',
        status: 'Completed',
        amount: '£105.00',
        invoiceId: 'INV-2026-008',
        timelineStep: 5
      },
      {
        id: 'HMR-2804',
        service: 'Furniture Assembly',
        category: 'Assembly & Setup',
        scope: 'Solid walnut 8-seater dining table and matching upholstered bench setup.',
        date: 'Feb 02, 2026',
        time: '11:00 AM – 1:30 PM',
        technician: 'David Miller',
        techRole: 'Master Cabinetry Craftsman',
        techRating: '4.96 (188 reviews)',
        techAvatar: 'DM',
        status: 'Completed',
        amount: '£95.00',
        invoiceId: 'INV-2026-001',
        timelineStep: 5
      },
      {
        id: 'HMR-2101',
        service: 'Wall Mounting',
        category: 'Precision Mounting',
        scope: 'Heavy architectural hallway statement mirror with drywall toggle anchors.',
        date: 'Jan 15, 2026',
        time: '10:00 AM – 11:30 AM',
        technician: 'Marcus Sterling',
        techRole: 'Senior Mounting Specialist',
        techRating: '4.98 (142 reviews)',
        techAvatar: 'MS',
        status: 'Completed',
        amount: '£70.00',
        invoiceId: 'INV-2026-000',
        timelineStep: 5
      }
    ],
    invoices: [
      {
        invoiceId: 'INV-2026-089',
        bookingId: 'HMR-8501',
        service: 'Plumbing Fixes',
        issued: 'Oct 14, 2026',
        due: 'Oct 21, 2026',
        amount: '£85.00',
        status: 'Pending'
      },
      {
        invoiceId: 'INV-2026-081',
        bookingId: 'HMR-7921',
        service: 'Furniture Assembly',
        issued: 'Sep 28, 2026',
        due: 'Oct 05, 2026',
        amount: '£140.00',
        status: 'Paid'
      },
      {
        invoiceId: 'INV-2026-072',
        bookingId: 'HMR-7410',
        service: 'Minor Home Repairs',
        issued: 'Sep 12, 2026',
        due: 'Sep 19, 2026',
        amount: '£85.00',
        status: 'Paid'
      },
      {
        invoiceId: 'INV-2026-064',
        bookingId: 'HMR-6983',
        service: 'Small Installations',
        issued: 'Aug 24, 2026',
        due: 'Aug 31, 2026',
        amount: '£110.00',
        status: 'Paid'
      },
      {
        invoiceId: 'INV-2026-055',
        bookingId: 'HMR-6512',
        service: 'Electrical Fixes',
        issued: 'Aug 02, 2026',
        due: 'Aug 09, 2026',
        amount: '£135.00',
        status: 'Paid'
      },
      {
        invoiceId: 'INV-2026-048',
        bookingId: 'HMR-5991',
        service: 'Plumbing Fixes',
        issued: 'Jul 18, 2026',
        due: 'Jul 25, 2026',
        amount: '£90.00',
        status: 'Paid'
      },
      {
        invoiceId: 'INV-2026-039',
        bookingId: 'HMR-5420',
        service: 'Wall Mounting',
        issued: 'Jun 29, 2026',
        due: 'Jul 06, 2026',
        amount: '£125.00',
        status: 'Paid'
      },
      {
        invoiceId: 'INV-2026-031',
        bookingId: 'HMR-4911',
        service: 'Furniture Assembly',
        issued: 'Jun 08, 2026',
        due: 'Jun 15, 2026',
        amount: '£115.00',
        status: 'Paid'
      },
      {
        invoiceId: 'INV-2026-022',
        bookingId: 'HMR-4402',
        service: 'Small Installations',
        issued: 'May 17, 2026',
        due: 'May 24, 2026',
        amount: '£80.00',
        status: 'Paid'
      },
      {
        invoiceId: 'INV-2026-015',
        bookingId: 'HMR-3918',
        service: 'Minor Home Repairs',
        issued: 'Apr 22, 2026',
        due: 'Apr 29, 2026',
        amount: '£75.00',
        status: 'Paid'
      },
      {
        invoiceId: 'INV-2026-008',
        bookingId: 'HMR-3380',
        service: 'Electrical Fixes',
        issued: 'Mar 14, 2026',
        due: 'Mar 21, 2026',
        amount: '£105.00',
        status: 'Paid'
      },
      {
        invoiceId: 'INV-2026-001',
        bookingId: 'HMR-2804',
        service: 'Furniture Assembly',
        issued: 'Feb 02, 2026',
        due: 'Feb 09, 2026',
        amount: '£95.00',
        status: 'Paid'
      }
    ],
    monthlyTrends: [
      { month: 'Jan', count: 1 },
      { month: 'Feb', count: 1 },
      { month: 'Mar', count: 1 },
      { month: 'Apr', count: 1 },
      { month: 'May', count: 1 },
      { month: 'Jun', count: 2 },
      { month: 'Jul', count: 1 },
      { month: 'Aug', count: 2 },
      { month: 'Sep', count: 2 },
      { month: 'Oct', count: 2 }
    ],
    categoryCounts: [
      { name: 'Furniture Assembly', count: 4, short: 'Furniture' },
      { name: 'Wall Mounting', count: 3, short: 'Mounting' },
      { name: 'Minor Home Repairs', count: 3, short: 'Repairs' },
      { name: 'Small Installations', count: 2, short: 'Fittings' },
      { name: 'Plumbing Fixes', count: 2, short: 'Plumbing' },
      { name: 'Electrical Fixes', count: 2, short: 'Electrical' }
    ]
  });

  const STORAGE_KEYS = Object.freeze({
    theme: 'fixora-theme',
    dir: 'fixora-dir'
  });

  const docEl = document.documentElement;

  function initTheme() {
    let savedTheme = null;
    try {
      savedTheme = window.localStorage.getItem(STORAGE_KEYS.theme);
    } catch (e) {  }

    if (savedTheme !== 'light' && savedTheme !== 'dark') {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      savedTheme = prefersDark ? 'dark' : 'light';
    }

    docEl.setAttribute('data-theme', savedTheme);
    updateThemeToggleLabel(savedTheme);
  }

  function toggleTheme() {
    const current = docEl.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    docEl.setAttribute('data-theme', next);
    try {
      window.localStorage.setItem(STORAGE_KEYS.theme, next);
    } catch (e) {  }
    updateThemeToggleLabel(next);
    renderAllCharts();
    showToast(`Switched to ${next} mode`);
  }

  function updateThemeToggleLabel(theme) {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;
    const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
  }

  function initDirection() {
    let savedDir = 'ltr';
    try {
      savedDir = window.localStorage.getItem(STORAGE_KEYS.dir) === 'rtl' ? 'rtl' : 'ltr';
    } catch (e) {  }
    docEl.setAttribute('dir', savedDir);
    updateDirToggleLabel(savedDir);
  }

  function toggleDirection() {
    const current = docEl.getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr';
    const next = current === 'rtl' ? 'ltr' : 'rtl';
    docEl.setAttribute('dir', next);
    try {
      window.localStorage.setItem(STORAGE_KEYS.dir, next);
    } catch (e) {  }
    updateDirToggleLabel(next);
    renderAllCharts();
    showToast(`Layout direction switched to ${next.toUpperCase()}`);
  }

  function updateDirToggleLabel(dir) {
    const labelEl = document.getElementById('dir-toggle-label');
    const btn = document.getElementById('dir-toggle-btn');
    if (labelEl) labelEl.textContent = dir.toUpperCase();
    if (btn) {
      const target = dir === 'rtl' ? 'left-to-right' : 'right-to-left';
      btn.setAttribute('aria-label', `${dir.toUpperCase()} layout. Switch to ${target}`);
      btn.setAttribute('title', `Switch to ${target} layout`);
    }
  }

  let toastTimer = null;
  function showToast(msg) {
    const toast = document.getElementById('dashboard-toast');
    const msgEl = document.getElementById('dashboard-toast-msg');
    if (!toast || !msgEl) return;

    if (toastTimer) clearTimeout(toastTimer);
    msgEl.textContent = msg;
    toast.removeAttribute('hidden');

    toastTimer = setTimeout(() => {
      toast.setAttribute('hidden', '');
    }, 2800);
  }

  function openModal(title, htmlContent) {
    const modal = document.getElementById('dashboard-modal');
    const titleEl = document.getElementById('modal-title');
    const bodyEl = document.getElementById('modal-body');
    if (!modal || !titleEl || !bodyEl) return;

    titleEl.textContent = title;
    bodyEl.innerHTML = htmlContent;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    const modal = document.getElementById('dashboard-modal');
    if (!modal) return;
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  const VIEW_HEADINGS = {
    overview: {
      title: 'Welcome back, Alex!',
      sub: "Here's what's happening with your home services today."
    },
    bookings: {
      title: 'My Bookings',
      sub: 'Monitor active appointments, scheduled dates, and home task requests.'
    },
    tracking: {
      title: 'Track Assigned Technician',
      sub: 'Real-time status updates and milestone verification for your booking.'
    },
    history: {
      title: 'Service History',
      sub: 'Archived records of completed visits, hardware calibrations, and receipts.'
    },
    invoices: {
      title: 'Invoices & Payments',
      sub: 'Review transparent billing records, paid invoices, and outstanding balances.'
    }
  };

  function switchView(targetViewId) {
    const views = document.querySelectorAll('.homera-dashboard-view');
    const navButtons = document.querySelectorAll('.homera-dashboard-nav__link');

    views.forEach((v) => {
      v.classList.remove('is-active');
      v.setAttribute('hidden', '');
    });

    navButtons.forEach((btn) => {
      btn.classList.remove('is-active');
      btn.removeAttribute('aria-current');
      if (btn.getAttribute('data-view-target') === targetViewId) {
        btn.classList.add('is-active');
        btn.setAttribute('aria-current', 'page');
      }
    });

    const targetView = document.getElementById(`view-${targetViewId}`);
    if (targetView) {
      targetView.removeAttribute('hidden');
      targetView.classList.add('is-active');
    }

    const headingEl = document.getElementById('dashboard-welcome-heading');
    const subEl = document.getElementById('dashboard-welcome-sub');
    if (headingEl && subEl && VIEW_HEADINGS[targetViewId]) {
      headingEl.textContent = VIEW_HEADINGS[targetViewId].title;
      subEl.textContent = VIEW_HEADINGS[targetViewId].sub;
    }

    closeMobileSidebar();

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (targetViewId === 'overview') {
      setTimeout(renderAllCharts, 50);
    }
  }

  function closeMobileSidebar() {
    const sidebar = document.getElementById('dashboard-sidebar');
    const backdrop = document.getElementById('dashboard-backdrop');
    const toggleBtn = document.getElementById('sidebar-toggle-btn');
    if (sidebar) sidebar.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-open');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
  }

  function toggleMobileSidebar() {
    const sidebar = document.getElementById('dashboard-sidebar');
    const backdrop = document.getElementById('dashboard-backdrop');
    const toggleBtn = document.getElementById('sidebar-toggle-btn');
    if (!sidebar || !backdrop || !toggleBtn) return;

    const isOpen = sidebar.classList.contains('is-open');
    if (isOpen) {
      closeMobileSidebar();
    } else {
      sidebar.classList.add('is-open');
      backdrop.classList.add('is-open');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  }

  function renderLineChart() {
    const container = document.getElementById('line-chart-container');
    if (!container) return;

    const isDark = docEl.getAttribute('data-theme') === 'dark';
    const data = DASHBOARD_DATA.monthlyTrends;
    const w = 540;
    const h = 230;
    const pTop = 20;
    const pBottom = 35;
    const pLeft = 35;
    const pRight = 20;

    const plotW = w - pLeft - pRight;
    const plotH = h - pTop - pBottom;
    const maxVal = 4;

    const getX = (idx) => pLeft + (idx / (data.length - 1)) * plotW;
    const getY = (val) => pTop + plotH - (val / maxVal) * plotH;

    let points = data.map((d, i) => `${getX(i)},${getY(d.count)}`).join(' ');
    let linePathD = `M ${data.map((d, i) => `${getX(i)} ${getY(d.count)}`).join(' L ')}`;
    let areaPathD = `${linePathD} L ${getX(data.length - 1)} ${pTop + plotH} L ${getX(0)} ${pTop + plotH} Z`;

    const gridLines = [1, 2, 3, 4].map((v) => {
      const y = getY(v);
      return `
        <line x1="${pLeft}" y1="${y}" x2="${w - pRight}" y2="${y}" class="homera-chart-axis-line" />
        <text x="${pLeft - 10}" y="${y + 4}" class="homera-chart-axis-text" text-anchor="end">${v}</text>
      `;
    }).join('');

    const xLabels = data.map((d, i) => {
      const x = getX(i);
      return `<text x="${x}" y="${h - 10}" class="homera-chart-axis-text" text-anchor="middle">${d.month}</text>`;
    }).join('');

    const dots = data.map((d, i) => {
      const x = getX(i);
      const y = getY(d.count);
      return `
        <circle cx="${x}" cy="${y}" r="4.5" class="homera-chart-data-dot" data-val="${d.count}" data-month="${d.month}">
          <title>${d.month}: ${d.count} booking${d.count > 1 ? 's' : ''}</title>
        </circle>
      `;
    }).join('');

    const lineColor = isDark ? '#3B82F6' : '#1E2A78';
    const gradColor = isDark ? '#3B82F6' : '#1E2A78';

    container.innerHTML = `
      <svg viewBox="0 0 ${w} ${h}" class="homera-chart-svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="bookingAreaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="${gradColor}" stop-opacity="0.35" />
            <stop offset="100%" stop-color="${gradColor}" stop-opacity="0.0" />
          </linearGradient>
        </defs>
        ${gridLines}
        <path d="${areaPathD}" class="homera-chart-area-path" />
        <path d="${linePathD}" class="homera-chart-line-path" stroke="${lineColor}" />
        ${dots}
        ${xLabels}
      </svg>
    `;
  }

  function renderBarChart() {
    const container = document.getElementById('bar-chart-container');
    if (!container) return;

    const isDark = docEl.getAttribute('data-theme') === 'dark';
    const data = DASHBOARD_DATA.categoryCounts;
    const w = 460;
    const h = 230;
    const pTop = 15;
    const pBottom = 35;
    const pLeft = 30;
    const pRight = 15;

    const plotW = w - pLeft - pRight;
    const plotH = h - pTop - pBottom;
    const maxVal = 5;

    const barW = Math.min(36, (plotW / data.length) - 14);

    const gridLines = [1, 2, 3, 4].map((v) => {
      const y = pTop + plotH - (v / maxVal) * plotH;
      return `
        <line x1="${pLeft}" y1="${y}" x2="${w - pRight}" y2="${y}" class="homera-chart-axis-line" />
        <text x="${pLeft - 8}" y="${y + 4}" class="homera-chart-axis-text" text-anchor="end">${v}</text>
      `;
    }).join('');

    const bars = data.map((d, i) => {
      const x = pLeft + (i * (plotW / data.length)) + ((plotW / data.length - barW) / 2);
      const barH = (d.count / maxVal) * plotH;
      const y = pTop + plotH - barH;
      const isTopDiscipline = d.count >= 4;
      const fillColor = isTopDiscipline ? '#D4AF37' : (isDark ? '#1E2A78' : '#1E2A78');

      return `
        <g class="homera-chart-bar-group">
          <rect x="${x}" y="${y}" width="${barW}" height="${barH}" class="homera-chart-bar" style="fill: ${fillColor}">
            <title>${d.name}: ${d.count} tasks</title>
          </rect>
          <text x="${x + barW / 2}" y="${h - 12}" class="homera-chart-axis-text" text-anchor="middle">
            ${d.short}
          </text>
        </g>
      `;
    }).join('');

    container.innerHTML = `
      <svg viewBox="0 0 ${w} ${h}" class="homera-chart-svg" preserveAspectRatio="none">
        ${gridLines}
        ${bars}
      </svg>
    `;
  }

  function renderDonutChart() {
    const container = document.getElementById('donut-chart-container');
    if (!container) return;

    const isDark = docEl.getAttribute('data-theme') === 'dark';
    const total = 14;
    const segments = [
      { id: 'completed', label: 'Completed', count: 11, color: '#10B981' },
      { id: 'confirmed', label: 'Confirmed', count: 2, color: isDark ? '#3B82F6' : '#1E2A78' },
      { id: 'pending', label: 'Pending', count: 1, color: '#D4AF37' }
    ];

    const cx = 100;
    const cy = 100;
    const r = 70;
    const strokeW = 24;
    const circumference = 2 * Math.PI * r;

    let accumulatedOffset = 0;
    const circles = segments.map((seg) => {
      const pct = seg.count / total;
      const strokeDash = pct * circumference;
      const gap = circumference - strokeDash;
      const offset = -accumulatedOffset;
      accumulatedOffset += strokeDash;

      return `
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none"
                stroke="${seg.color}" stroke-width="${strokeW}"
                stroke-dasharray="${strokeDash.toFixed(2)} ${gap.toFixed(2)}"
                stroke-dashoffset="${offset.toFixed(2)}"
                class="donut-slice"
                data-slice="${seg.id}">
          <title>${seg.label}: ${seg.count} (${Math.round(pct * 100)}%)</title>
        </circle>
      `;
    }).join('');

    const legendItems = segments.map((seg) => {
      const pct = Math.round((seg.count / total) * 100);
      return `
        <div class="homera-donut-legend-item" data-legend="${seg.id}" tabindex="0" role="button" aria-label="${seg.label}: ${seg.count} bookings (${pct}%)">
          <div class="homera-donut-legend-item__left">
            <span class="homera-donut-legend-item__dot" style="background-color: ${seg.color}; box-shadow: 0 0 8px ${seg.color}80;"></span>
            <span class="homera-donut-legend-item__label">${seg.label}</span>
          </div>
          <div class="homera-donut-legend-item__right">
            <span class="homera-donut-legend-item__count">${seg.count}</span>
            <span class="homera-donut-legend-item__pct">${pct}%</span>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="homera-donut-chart">
        <div class="homera-donut-chart__visual">
          <svg viewBox="0 0 200 200" class="homera-donut-chart__svg" role="img" aria-label="Booking lifecycle status donut chart">
            <circle cx="${cx}" cy="${cy}" r="${r}" fill="none"
                    stroke="${isDark ? '#1A2742' : '#F1F5F9'}"
                    stroke-width="${strokeW}" opacity="0.8"></circle>
            ${circles}
          </svg>
          <div class="homera-donut-chart__center">
            <span class="homera-donut-chart__total">${total}</span>
            <span class="homera-donut-chart__label">Total Tasks</span>
          </div>
        </div>
        <div class="homera-donut-chart__legend">
          ${legendItems}
        </div>
      </div>
    `;

    const slices = container.querySelectorAll('.donut-slice');
    const legends = container.querySelectorAll('.homera-donut-legend-item');

    const setHighlight = (id) => {
      slices.forEach((s) => {
        if (s.getAttribute('data-slice') === id) {
          s.classList.add('is-highlighted');
          s.setAttribute('stroke-width', strokeW + 4);
        } else {
          s.classList.remove('is-highlighted');
          s.setAttribute('stroke-width', strokeW);
        }
      });
      legends.forEach((l) => {
        if (l.getAttribute('data-legend') === id) {
          l.classList.add('is-highlighted');
        } else {
          l.classList.remove('is-highlighted');
        }
      });
    };

    const clearHighlight = () => {
      slices.forEach((s) => {
        s.classList.remove('is-highlighted');
        s.setAttribute('stroke-width', strokeW);
      });
      legends.forEach((l) => l.classList.remove('is-highlighted'));
    };

    slices.forEach((s) => {
      const id = s.getAttribute('data-slice');
      s.addEventListener('mouseenter', () => setHighlight(id));
      s.addEventListener('mouseleave', clearHighlight);
    });

    legends.forEach((l) => {
      const id = l.getAttribute('data-legend');
      l.addEventListener('mouseenter', () => setHighlight(id));
      l.addEventListener('mouseleave', clearHighlight);
    });
  }

  function renderAllCharts() {
    renderLineChart();
    renderBarChart();
    renderDonutChart();
  }

  function populateOverviewRecentBookings() {
    const tbody = document.getElementById('overview-recent-bookings-tbody');
    if (!tbody) return;

    const recent = DASHBOARD_DATA.bookings.slice(0, 4);
    tbody.innerHTML = recent.map((b) => {
      const badgeClass = b.status === 'Confirmed' ? 'status-badge--confirmed' :
                         b.status === 'Pending' ? 'status-badge--pending' : 'status-badge--completed';
      return `
        <tr>
          <td><strong style="color: var(--hdb-indigo);">${b.id}</strong></td>
          <td>${b.service}</td>
          <td>${b.date}</td>
          <td>${b.technician}</td>
          <td><span class="status-badge ${badgeClass}">${b.status}</span></td>
          <td class="text-end">
            <button class="homera-dashboard-btn homera-dashboard-btn--secondary"
                    type="button"
                    style="height: 32px; padding: 0 12px; font-size: 12px;"
                    data-action="view-booking-details"
                    data-booking-id="${b.id}">
              Details
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  function renderBookingsTable() {
    const tbody = document.getElementById('bookings-tbody');
    const emptyState = document.getElementById('bookings-empty-state');
    const searchVal = (document.getElementById('bookings-search-input')?.value || '').toLowerCase().trim();
    const statusVal = document.getElementById('bookings-status-filter')?.value || 'all';
    const serviceVal = document.getElementById('bookings-service-filter')?.value || 'all';

    if (!tbody) return;

    const filtered = DASHBOARD_DATA.bookings.filter((b) => {
      const matchesSearch = !searchVal ||
        b.service.toLowerCase().includes(searchVal) ||
        b.id.toLowerCase().includes(searchVal) ||
        b.technician.toLowerCase().includes(searchVal) ||
        b.category.toLowerCase().includes(searchVal);

      const matchesStatus = statusVal === 'all' || b.status === statusVal;
      const matchesService = serviceVal === 'all' || b.service === serviceVal;

      return matchesSearch && matchesStatus && matchesService;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = '';
      if (emptyState) emptyState.removeAttribute('hidden');
      return;
    }

    if (emptyState) emptyState.setAttribute('hidden', '');

    tbody.innerHTML = filtered.map((b) => {
      const badgeClass = b.status === 'Confirmed' ? 'status-badge--confirmed' :
                         b.status === 'Pending' ? 'status-badge--pending' : 'status-badge--completed';

      const trackBtn = b.status !== 'Completed' ? `
        <button class="homera-dashboard-btn homera-dashboard-btn--gold"
                type="button"
                style="height: 32px; padding: 0 12px; font-size: 12px;"
                data-action="track-booking"
                data-booking-id="${b.id}">
          Track
        </button>
      ` : '';

      return `
        <tr>
          <td>
            <div style="display: flex; flex-direction: column;">
              <strong>${b.service}</strong>
              <span style="font-size: 11.5px; color: var(--hdb-text-muted);">${b.category}</span>
            </div>
          </td>
          <td><code style="padding: 2px 6px; background-color: var(--hdb-bg-hover); border-radius: 4px;">#${b.id}</code></td>
          <td>
            <div style="display: flex; flex-direction: column;">
              <span>${b.date}</span>
              <span style="font-size: 11.5px; color: var(--hdb-text-muted);">${b.time}</span>
            </div>
          </td>
          <td>${b.technician}</td>
          <td><span class="status-badge ${badgeClass}">${b.status}</span></td>
          <td class="text-end">
            <div style="display: inline-flex; gap: 8px;">
              ${trackBtn}
              <button class="homera-dashboard-btn homera-dashboard-btn--secondary"
                      type="button"
                      style="height: 32px; padding: 0 12px; font-size: 12px;"
                      data-action="view-booking-details"
                      data-booking-id="${b.id}">
                Details
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  function renderHistoryTable() {
    const tbody = document.getElementById('history-tbody');
    const emptyState = document.getElementById('history-empty-state');
    const searchVal = (document.getElementById('history-search-input')?.value || '').toLowerCase().trim();
    const discVal = document.getElementById('history-discipline-filter')?.value || 'all';

    if (!tbody) return;

    const completed = DASHBOARD_DATA.bookings.filter((b) => b.status === 'Completed');

    const filtered = completed.filter((b) => {
      const matchesSearch = !searchVal ||
        b.service.toLowerCase().includes(searchVal) ||
        b.id.toLowerCase().includes(searchVal) ||
        b.technician.toLowerCase().includes(searchVal);

      const matchesDisc = discVal === 'all' || b.service === discVal;
      return matchesSearch && matchesDisc;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = '';
      if (emptyState) emptyState.removeAttribute('hidden');
      return;
    }

    if (emptyState) emptyState.setAttribute('hidden', '');

    tbody.innerHTML = filtered.map((b) => `
      <tr>
        <td><strong>${b.date}</strong></td>
        <td>
          <div style="display: flex; flex-direction: column;">
            <span>${b.service}</span>
            <span style="font-size: 11.5px; color: var(--hdb-text-muted);">${b.scope.slice(0, 48)}…</span>
          </div>
        </td>
        <td>${b.technician}</td>
        <td><code style="padding: 2px 6px; background-color: var(--hdb-bg-hover); border-radius: 4px;">#${b.id}</code></td>
        <td><strong>${b.amount}</strong></td>
        <td><span class="status-badge status-badge--completed">100% Quality Sign-Off</span></td>
        <td class="text-end">
          <button class="homera-dashboard-btn homera-dashboard-btn--secondary"
                  type="button"
                  style="height: 32px; padding: 0 12px; font-size: 12px;"
                  data-action="view-receipt"
                  data-booking-id="${b.id}">
            View Receipt
          </button>
        </td>
      </tr>
    `).join('');
  }

  function renderInvoicesTable() {
    const tbody = document.getElementById('invoices-tbody');
    const statusVal = document.getElementById('invoices-status-filter')?.value || 'all';
    if (!tbody) return;

    const filtered = DASHBOARD_DATA.invoices.filter((inv) => {
      return statusVal === 'all' || inv.status === statusVal;
    });

    tbody.innerHTML = filtered.map((inv) => {
      const badgeClass = inv.status === 'Paid' ? 'status-badge--paid' : 'status-badge--pending';
      return `
        <tr>
          <td><strong style="color: var(--hdb-indigo);">${inv.invoiceId}</strong></td>
          <td>
            <div style="display: flex; flex-direction: column;">
              <span>${inv.service}</span>
              <span style="font-size: 11.5px; color: var(--hdb-text-muted);">Ref: #${inv.bookingId}</span>
            </div>
          </td>
          <td>${inv.issued}</td>
          <td>${inv.due}</td>
          <td><strong style="font-size: 15px;">${inv.amount}</strong></td>
          <td><span class="status-badge ${badgeClass}">${inv.status}</span></td>
          <td class="text-end">
            <button class="homera-dashboard-btn homera-dashboard-btn--secondary"
                    type="button"
                    style="height: 32px; padding: 0 12px; font-size: 12px;"
                    data-action="view-invoice-modal"
                    data-invoice-id="${inv.invoiceId}">
              View Invoice
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  function updateTrackingView(bookingId) {
    const booking = DASHBOARD_DATA.bookings.find((b) => b.id === bookingId) || DASHBOARD_DATA.bookings[0];
    if (!booking) return;

    const techNameEl = document.getElementById('tracking-tech-name');
    const techRoleEl = document.getElementById('tracking-tech-role');
    const techRatingEl = document.getElementById('tracking-tech-rating');
    const techAvatarEl = document.getElementById('tracking-tech-avatar');
    const serviceTitleEl = document.getElementById('tracking-service-title');
    const serviceDateEl = document.getElementById('tracking-service-date');
    const statusBadgeEl = document.getElementById('tracking-status-badge');

    if (techNameEl) techNameEl.textContent = booking.technician;
    if (techRoleEl) techRoleEl.textContent = booking.techRole;
    if (techRatingEl) techRatingEl.textContent = booking.techRating;
    if (techAvatarEl) techAvatarEl.textContent = booking.techAvatar;
    if (serviceTitleEl) serviceTitleEl.textContent = `${booking.service} (#${booking.id})`;
    if (serviceDateEl) serviceDateEl.textContent = `${booking.date} • ${booking.time}`;
    if (statusBadgeEl) {
      statusBadgeEl.textContent = booking.status;
      statusBadgeEl.className = `status-badge ${booking.status === 'Confirmed' ? 'status-badge--confirmed' : 'status-badge--pending'}`;
    }

    const selectEl = document.getElementById('tracking-booking-select');
    if (selectEl && selectEl.value !== booking.id) {
      selectEl.value = booking.id;
    }
  }

  function showBookingDetailsModal(bookingId) {
    const b = DASHBOARD_DATA.bookings.find((item) => item.id === bookingId);
    if (!b) return;

    const content = `
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <div class="modal-detail-row">
          <span class="modal-detail-row__label">Booking Reference</span>
          <span class="modal-detail-row__value">#${b.id}</span>
        </div>
        <div class="modal-detail-row">
          <span class="modal-detail-row__label">Service Discipline</span>
          <span class="modal-detail-row__value">${b.service} (${b.category})</span>
        </div>
        <div class="modal-detail-row">
          <span class="modal-detail-row__label">Scheduled Appointment</span>
          <span class="modal-detail-row__value">${b.date} &bull; ${b.time}</span>
        </div>
        <div class="modal-detail-row">
          <span class="modal-detail-row__label">Assigned Craftsman</span>
          <span class="modal-detail-row__value">${b.technician} (${b.techRating})</span>
        </div>
        <div class="modal-detail-row">
          <span class="modal-detail-row__label">Residence Address</span>
          <span class="modal-detail-row__value">${DASHBOARD_DATA.customer.address}</span>
        </div>
        <div class="modal-detail-row">
          <span class="modal-detail-row__label">Estimate / Amount</span>
          <span class="modal-detail-row__value">${b.amount}</span>
        </div>
        <div class="modal-detail-row">
          <span class="modal-detail-row__label">Lifecycle Status</span>
          <span class="modal-detail-row__value">${b.status}</span>
        </div>
        <div style="margin-top: 14px; padding: 14px; background-color: var(--hdb-bg-hover); border-radius: 12px; font-size: 13px; line-height: 1.5;">
          <strong>Work Scope &amp; Inclusions:</strong><br>
          ${b.scope}
        </div>
      </div>
    `;

    openModal(`Booking Details — #${b.id}`, content);
  }

  function showReceiptModal(bookingId) {
    const b = DASHBOARD_DATA.bookings.find((item) => item.id === bookingId);
    if (!b) return;

    const content = `
      <div style="text-align: center; margin-bottom: 20px;">
        <div style="width: 48px; height: 48px; border-radius: 50%; background-color: var(--hdb-success-bg); color: var(--hdb-success); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 10px;">
          <svg viewBox="0 0 24 24" style="width: 24px; height: 24px; stroke: currentColor; stroke-width: 2.5; fill: none;"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h4 style="margin: 0; font-size: 18px; font-weight: 800;">HOMERA Guild Verified Receipt</h4>
        <p style="margin: 4px 0 0 0; font-size: 12.5px; color: var(--hdb-text-muted);">Invoice Ref: #${b.invoiceId || 'INV-PAID'}</p>
      </div>

      <div class="modal-detail-row">
        <span class="modal-detail-row__label">Service</span>
        <span class="modal-detail-row__value">${b.service}</span>
      </div>
      <div class="modal-detail-row">
        <span class="modal-detail-row__label">Completion Date</span>
        <span class="modal-detail-row__value">${b.date}</span>
      </div>
      <div class="modal-detail-row">
        <span class="modal-detail-row__label">Executed by Specialist</span>
        <span class="modal-detail-row__value">${b.technician}</span>
      </div>
      <div class="modal-detail-row">
        <span class="modal-detail-row__label">Total Settled</span>
        <span class="modal-detail-row__value" style="font-size: 16px; color: var(--hdb-indigo);">${b.amount} (Paid in Full)</span>
      </div>

      <div style="margin-top: 18px; padding: 12px; border-left: 3px solid var(--hdb-gold); background-color: var(--hdb-bg-hover); font-size: 12px; color: var(--hdb-text-secondary);">
        Work inspected, aligned according to HOMERA Craft Standards, and protected by the 90-day guild workmanship warranty.
      </div>
    `;

    openModal(`Receipt — #${b.id}`, content);
  }

  function showInvoiceModal(invoiceId) {
    const inv = DASHBOARD_DATA.invoices.find((item) => item.invoiceId === invoiceId);
    if (!inv) return;

    const content = `
      <div style="padding-bottom: 14px; border-bottom: 1px solid var(--hdb-border); margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--hdb-gold);">Tax Invoice</span>
          <h4 style="margin: 2px 0 0 0; font-size: 20px; font-weight: 800;">${inv.invoiceId}</h4>
        </div>
        <span class="status-badge ${inv.status === 'Paid' ? 'status-badge--paid' : 'status-badge--pending'}">${inv.status}</span>
      </div>

      <div class="modal-detail-row">
        <span class="modal-detail-row__label">Bill To</span>
        <span class="modal-detail-row__value">${DASHBOARD_DATA.customer.name}</span>
      </div>
      <div class="modal-detail-row">
        <span class="modal-detail-row__label">Service Description</span>
        <span class="modal-detail-row__value">${inv.service}</span>
      </div>
      <div class="modal-detail-row">
        <span class="modal-detail-row__label">Booking Reference</span>
        <span class="modal-detail-row__value">#${inv.bookingId}</span>
      </div>
      <div class="modal-detail-row">
        <span class="modal-detail-row__label">Issue Date</span>
        <span class="modal-detail-row__value">${inv.issued}</span>
      </div>
      <div class="modal-detail-row">
        <span class="modal-detail-row__label">Payment Due Date</span>
        <span class="modal-detail-row__value">${inv.due}</span>
      </div>
      <div class="modal-detail-row" style="margin-top: 10px; padding-top: 14px; border-top: 2px solid var(--hdb-border);">
        <span class="modal-detail-row__label" style="font-size: 15px; font-weight: 700; color: var(--hdb-text-primary);">Total Due</span>
        <span class="modal-detail-row__value" style="font-size: 20px; font-weight: 800; color: var(--hdb-indigo);">${inv.amount}</span>
      </div>
    `;

    openModal(`Statement — ${inv.invoiceId}`, content);
  }

  function initEventListeners() {

    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }

    const dirBtn = document.getElementById('dir-toggle-btn');
    if (dirBtn) {
      dirBtn.addEventListener('click', toggleDirection);
    }

    document.addEventListener('click', (e) => {
      const targetBtn = e.target.closest('[data-view-target]');
      if (targetBtn) {
        e.preventDefault();
        const targetViewId = targetBtn.getAttribute('data-view-target');
        if (targetViewId) {
          switchView(targetViewId);
        }
      }
    });

    const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
    const backdrop = document.getElementById('dashboard-backdrop');

    if (sidebarToggleBtn) sidebarToggleBtn.addEventListener('click', toggleMobileSidebar);
    if (sidebarCloseBtn) sidebarCloseBtn.addEventListener('click', closeMobileSidebar);
    if (backdrop) backdrop.addEventListener('click', closeMobileSidebar);

    const notifBtn = document.getElementById('notifications-btn');
    const notifPanel = document.getElementById('notifications-panel');
    const markAllReadBtn = document.getElementById('mark-all-read-btn');
    const notifIndicator = document.getElementById('notification-indicator');
    const notifCounterBadge = document.getElementById('notification-counter-badge');

    function closeNotificationPanel() {
      if (notifPanel) {
        notifPanel.setAttribute('hidden', '');
        notifPanel.style.display = 'none';
        notifPanel.classList.remove('is-open');
      }
      if (notifBtn) {
        notifBtn.setAttribute('aria-expanded', 'false');
      }
    }

    function openNotificationPanel() {
      closeAllDropdowns();
      if (notifPanel) {
        notifPanel.removeAttribute('hidden');
        notifPanel.style.display = 'flex';
        notifPanel.classList.add('is-open');
      }
      if (notifBtn) {
        notifBtn.setAttribute('aria-expanded', 'true');
      }
    }

    function closeProfileMenu() {
      if (profileMenu) {
        profileMenu.setAttribute('hidden', '');
        profileMenu.style.display = 'none';
        profileMenu.classList.remove('is-open');
      }
      if (profileBtn) {
        profileBtn.setAttribute('aria-expanded', 'false');
      }
    }

    function openProfileMenu() {
      closeAllDropdowns();
      if (profileMenu) {
        profileMenu.removeAttribute('hidden');
        profileMenu.style.display = 'flex';
        profileMenu.classList.add('is-open');
      }
      if (profileBtn) {
        profileBtn.setAttribute('aria-expanded', 'true');
      }
    }

    function closeAllDropdowns() {
      closeNotificationPanel();
      closeProfileMenu();
    }

    if (notifBtn && notifPanel) {
      notifBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !notifPanel.hasAttribute('hidden') && notifPanel.style.display !== 'none';
        if (isOpen) {
          closeNotificationPanel();
        } else {
          openNotificationPanel();
        }
      });
    }

    if (notifPanel) {
      notifPanel.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }

    if (markAllReadBtn) {
      markAllReadBtn.addEventListener('click', () => {
        document.querySelectorAll('.notification-item').forEach((item) => {
          item.classList.remove('is-unread');
        });
        if (notifIndicator) notifIndicator.classList.add('is-hidden');
        if (notifCounterBadge) notifCounterBadge.textContent = '0 New';
        showToast('All notifications marked as read');
      });
    }

    document.addEventListener('click', (e) => {
      const dot = e.target.closest('.notification-item__status-dot');
      if (dot) {
        const item = dot.closest('.notification-item');
        if (item) {
          item.classList.remove('is-unread');
          const remaining = document.querySelectorAll('.notification-item.is-unread').length;
          if (notifCounterBadge) notifCounterBadge.textContent = `${remaining} New`;
          if (remaining === 0 && notifIndicator) notifIndicator.classList.add('is-hidden');
        }
      }
    });

    const profileBtn = document.getElementById('profile-menu-btn');
    const profileMenu = document.getElementById('profile-menu');
    if (profileBtn && profileMenu) {
      profileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !profileMenu.hasAttribute('hidden') && profileMenu.style.display !== 'none';
        if (isOpen) {
          closeProfileMenu();
        } else {
          openProfileMenu();
        }
      });
    }

    if (profileMenu) {
      profileMenu.addEventListener('click', (e) => {
        if (e.target.closest('button, a')) {
          closeAllDropdowns();
        } else {
          e.stopPropagation();
        }
      });
    }

    const logoutBtn = document.getElementById('menu-item-logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        closeAllDropdowns();
        showToast('Demo session: In production this will clear active auth tokens.');
      });
    }

    const settingsBtn = document.getElementById('menu-item-profile');
    if (settingsBtn) {
      settingsBtn.addEventListener('click', () => {
        closeAllDropdowns();
        showToast('Resident profile settings opened');
      });
    }

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.homera-dashboard-dropdown-wrap')) {
        closeAllDropdowns();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllDropdowns();
        closeModal();
        closeMobileSidebar();
      }
    });

    closeAllDropdowns();

    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalDismissBtn = document.getElementById('modal-dismiss-btn');
    const modalBackdrop = document.getElementById('modal-backdrop');

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

    document.addEventListener('click', (e) => {
      const actionBtn = e.target.closest('[data-action]');
      if (!actionBtn) return;

      const action = actionBtn.getAttribute('data-action');
      const bookingId = actionBtn.getAttribute('data-booking-id');
      const invoiceId = actionBtn.getAttribute('data-invoice-id');

      if (action === 'view-booking-details' && bookingId) {
        showBookingDetailsModal(bookingId);
      } else if (action === 'track-booking' && bookingId) {
        updateTrackingView(bookingId);
        switchView('tracking');
      } else if (action === 'view-receipt' && bookingId) {
        showReceiptModal(bookingId);
      } else if (action === 'view-invoice-modal' && invoiceId) {
        showInvoiceModal(invoiceId);
      }
    });

    const bookingsSearch = document.getElementById('bookings-search-input');
    const bookingsStatus = document.getElementById('bookings-status-filter');
    const bookingsService = document.getElementById('bookings-service-filter');
    const bookingsResetBtn = document.getElementById('bookings-reset-filters-btn');

    if (bookingsSearch) bookingsSearch.addEventListener('input', renderBookingsTable);
    if (bookingsStatus) bookingsStatus.addEventListener('change', renderBookingsTable);
    if (bookingsService) bookingsService.addEventListener('change', renderBookingsTable);
    if (bookingsResetBtn) {
      bookingsResetBtn.addEventListener('click', () => {
        if (bookingsSearch) bookingsSearch.value = '';
        if (bookingsStatus) bookingsStatus.value = 'all';
        if (bookingsService) bookingsService.value = 'all';
        renderBookingsTable();
      });
    }

    const historySearch = document.getElementById('history-search-input');
    const historyDisc = document.getElementById('history-discipline-filter');
    const historyResetBtn = document.getElementById('history-reset-btn');

    if (historySearch) historySearch.addEventListener('input', renderHistoryTable);
    if (historyDisc) historyDisc.addEventListener('change', renderHistoryTable);
    if (historyResetBtn) {
      historyResetBtn.addEventListener('click', () => {
        if (historySearch) historySearch.value = '';
        if (historyDisc) historyDisc.value = 'all';
        renderHistoryTable();
      });
    }

    const invoicesStatus = document.getElementById('invoices-status-filter');
    if (invoicesStatus) invoicesStatus.addEventListener('change', renderInvoicesTable);

    const trackingSelect = document.getElementById('tracking-booking-select');
    if (trackingSelect) {
      trackingSelect.addEventListener('change', (e) => {
        updateTrackingView(e.target.value);
      });
    }

    window.addEventListener('resize', debounce(renderAllCharts, 250));
  }

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  function initStickyHeader() {
    const header = document.querySelector('.homera-dashboard-header');
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 8) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  function initDashboard() {
    initTheme();
    initDirection();
    initStickyHeader();
    initEventListeners();

    populateOverviewRecentBookings();
    renderBookingsTable();
    renderHistoryTable();
    renderInvoicesTable();

    updateTrackingView('HMR-8492');

    renderAllCharts();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDashboard, { once: true });
  } else {
    initDashboard();
  }

  window.HOMERA_DASHBOARD = Object.freeze({
    data: DASHBOARD_DATA,
    switchView,
    toggleTheme,
    toggleDirection
  });

})(window, document);
