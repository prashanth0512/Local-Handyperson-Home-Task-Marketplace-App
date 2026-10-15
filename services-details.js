
(function (window, document) {
  'use strict';

  const SERVICES_DATA = {
    'furniture-assembly': {
      id: 'furniture-assembly',
      title: 'Furniture Assembly',
      eyebrow: 'Precision Assembly & Setup',
      heroHeadline: 'Beautifully Assembled. Ready to Enjoy.',
      heroDesc: 'From wardrobes and modular shelving to bed frames and office workstations, HOMERA connects you with skilled professionals who assemble every piece with care and precision.',
      heroBenefit: 'Flawless alignment according to manufacturer specifications with zero hassle.',
      heroImage: 'assets/images/furniture-detail.jpg',
      secondaryImage: 'assets/images/furniture-assembly.jpg',
      heroCtaLabel: 'Book Furniture Assembly',
      descTitle: 'Meticulous Setup for Every Living Space',
      prose: [
        'Flat-pack furniture and multi-piece modular units require patience, the right tools, and an understanding of structural hardware. Our professionals inspect all fasteners, follow manufacturer guidelines to the letter, and ensure each joint and panel is square, level, and solid.',
        'Whether you are moving into a new residence, refurbishing a master bedroom, or outfitting a modern home office, we eliminate the frustration of confusing diagrams and missing bolts.'
      ],
      useCases: [
        'Multi-door hinged & sliding wardrobes',
        'Bed frames & storage headboards',
        'Modular shelving & display units',
        'Executive desks & ergonomic seating'
      ],
      benefits: [
        'Accurate assembly following exact manufacturer instructions and load limits.',
        'Organized component handling with protective floor coverings in all rooms.',
        'Squaring, leveling, and fine calibration of all drawers, runners, and doors.',
        'Respectful service with complete packaging consolidation and tidy cleanup.'
      ],
      includedTasks: [
        {
          title: 'Wardrobes & Closets',
          desc: 'Multi-door hinged and sliding wardrobes, modular internal drawers, hanging rods, and shelving towers.'
        },
        {
          title: 'Beds & Frames',
          desc: 'Platform beds, upholstered headboards, bunk beds, storage divans, and adjustable slatted bases.'
        },
        {
          title: 'Desks & Workstations',
          desc: 'Ergonomic motorized standing desks, executive workstations, credenzas, and cable organizers.'
        },
        {
          title: 'Tables & Dining',
          desc: 'Dining tables, extendable leaves, accent coffee tables, console stands, and bench seating.'
        },
        {
          title: 'Bookcases & Storage',
          desc: 'Free-standing bookcases, modular cube units, media display consoles, and sideboard credenzas.'
        },
        {
          title: 'Outdoor & Patio Sets',
          desc: 'Weatherproof dining sets, lounge chairs, garden benches, and outdoor umbrella stands.'
        }
      ],
      scopeNote: 'Final task acceptance and duration depend on piece dimensions, component completeness, and site accessibility. Unopened packaging and original manufacturer assembly guides are recommended for best results.',
      testimonialsHeading: 'Client Experiences — Furniture Assembly',
      testimonials: [
        {
          quote: 'The technician assembled our three-door mirrored wardrobe and king storage bed in a single afternoon. Everything is perfectly square and all packaging was neatly bundled.',
          name: 'Eleanor Vance',
          context: 'Residential Client — Master Suite Refresh',
          rating: 5
        },
        {
          quote: 'Booking was effortless. The specialist arrived with proper hex drivers, leveled my heavy walnut desk, and made sure all drawer tracks ran silently.',
          name: 'David Miller',
          context: 'Homeowner — Home Office Suite',
          rating: 5
        }
      ],
      ctaTitle: 'Ready to Make Room for Better Living?',
      ctaDesc: 'Choose a convenient appointment and let a skilled professional help bring your setup together.',
      ctaBtnLabel: 'Book Furniture Assembly'
    },

    'minor-repairs': {
      id: 'minor-repairs',
      title: 'Minor Home Repairs',
      eyebrow: 'Reliable Home Maintenance',
      heroHeadline: 'Everyday Fixes. Lasting Peace of Mind.',
      heroDesc: 'From loose hinges and sticking doors to minor drywall dings and routine wear, HOMERA connects you with skilled specialists who restore your home’s comfort and function.',
      heroBenefit: 'Prevent minor defects from developing into costly replacements with prompt, skilled care.',
      heroImage: 'assets/images/repairs-detail.jpg',
      secondaryImage: 'assets/images/minor-repairs.jpg',
      heroCtaLabel: 'Book Minor Repairs',
      descTitle: 'Thoughtful Restorations for Everyday Living',
      prose: [
        'Small household issues often linger because finding a trustworthy craftsman for small jobs can be difficult. HOMERA provides seasoned repair professionals who take pride in resolving those persistent little annoyances across your residence.',
        'We handle door latch alignment, squeaking hardware, drawer runners, and surface imperfections with meticulous craftsmanship and clean, quiet workmanship.'
      ],
      useCases: [
        'Sticking interior doors & squeaks',
        'Loose door handles & cabinet hinges',
        'Minor drywall patch-ups & touch-ups',
        'Weatherstripping & draft sealing'
      ],
      benefits: [
        'Multi-point diagnostic inspection of troublesome hardware and fixtures.',
        'Substrate-appropriate fasteners and high-grade finishing compounds.',
        'Preventive maintenance that extends the life of your interior joinery.',
        'Discreet, considerate technicians who respect your daily household routine.'
      ],
      includedTasks: [
        {
          title: 'Doors & Latches',
          desc: 'Sticking doors planed, latch plates realigned, handles tightened, and squeaks permanently silenced.'
        },
        {
          title: 'Cabinet & Drawer Hardware',
          desc: 'Recalibrating soft-close hinges, realigning cabinet faces, and replacing worn drawer glides.'
        },
        {
          title: 'Minor Drywall & Plaster',
          desc: 'Patching minor wall dings, nail pops, small holes, and applying smooth sanding ready for paint.'
        },
        {
          title: 'Trim & Moulding',
          desc: 'Re-securing loose baseboards, shoe moulding, chair rails, and replacing broken threshold strips.'
        },
        {
          title: 'Weatherstripping & Drafts',
          desc: 'Replacing worn exterior door seals, window sweep gaskets, and sealing minor air gaps.'
        },
        {
          title: 'General Fastener Upkeep',
          desc: 'Tightening banisters, handrails, loose curtain brackets, and structural hardware.'
        }
      ],
      scopeNote: 'Minor repairs focus on non-structural, cosmetic, and hardware adjustments. Major foundation shifts, roof leaks, or structural beam repairs require specialized licensed structural contractors.',
      testimonialsHeading: 'Client Experiences — Minor Repairs',
      testimonials: [
        {
          quote: 'Fixed three stubborn doors that would not close and re-aligned our kitchen pantry hinges in two hours. Polite, punctual, and completely clean.',
          name: 'Marcus Thorne',
          context: 'Apartment Owner — Routine Upkeep',
          rating: 5
        },
        {
          quote: 'Having one dependable craftsperson address five nagging household issues in an afternoon brought immediate relief to our home.',
          name: 'Sarah Lin',
          context: 'Townhouse Owner — Interior Tune-Up',
          rating: 5
        }
      ],
      ctaTitle: 'Put an End to Nagging Home Repairs.',
      ctaDesc: 'Tell us what needs attention and we will connect you with a vetted maintenance professional to restore your space.',
      ctaBtnLabel: 'Book Minor Repairs'
    },

    'wall-mounting': {
      id: 'wall-mounting',
      title: 'Wall Mounting',
      eyebrow: 'Precision Wall Installations',
      heroHeadline: 'Perfectly Level. Securely Anchored.',
      heroDesc: 'Securely mount televisions, oversized mirrors, framed art galleries, and heavy shelving with precision leveling and heavy-duty anchors matched specifically to your wall substrate.',
      heroBenefit: 'Laser-accurate leveling with substrate-specific weight-rated anchors for absolute peace of mind.',
      heroImage: 'assets/images/mounting-detail.jpg',
      secondaryImage: 'assets/images/wall-mounting.jpg',
      heroCtaLabel: 'Book Wall Mounting',
      descTitle: 'Flawless Alignment for Displays and Decor',
      prose: [
        'Mounting valuable displays and heavy glass requires precision, structural awareness, and the right anchoring technology. Our technicians use electronic stud finders, live-wire detectors, and laser levels to ensure every item is securely fastened into timber studs, masonry, or hollow drywall.',
        'We also assist with discreet cable management so your walls look immaculate from every angle.'
      ],
      useCases: [
        'OLED & QLED television mounting',
        'Heavy ornamental & vanity mirrors',
        'Symmetrical framed gallery walls',
        'Floating ledges & display shelving'
      ],
      benefits: [
        'Electronic stud detection and concealed wire verification before any drilling.',
        'Substrate-engineered anchors tailored for plaster, drywall, brick, or block.',
        'Dual-axis laser leveling for millimeter-accurate positioning and symmetry.',
        'Clean cord routing options and tidy collection of all masonry dust.'
      ],
      includedTasks: [
        {
          title: 'Television Mounting',
          desc: 'Fixed, tilting, and full-motion articulating brackets securely installed for screens up to 85 inches.'
        },
        {
          title: 'Oversized & Vanity Mirrors',
          desc: 'Heavy ornamental glass, full-length dressing mirrors, and bathroom vanity mirrors anchored firmly.'
        },
        {
          title: 'Art & Photography Galleries',
          desc: 'Multi-frame family photo walls, museum-grade art prints, and tapestries spaced with precision.'
        },
        {
          title: 'Floating Shelves',
          desc: 'Timber and metal floating ledges, display mantels, and decorative alcove shelving securely fastened.'
        },
        {
          title: 'Soundbars & Audio Mounts',
          desc: 'Sub-screen soundbar brackets, surround speaker wall mounts, and concealed wiring channels.'
        },
        {
          title: 'Wall Hooks & Organizers',
          desc: 'Heavy-duty mudroom coat racks, entryway key cabinets, and decorative hanging displays.'
        }
      ],
      scopeNote: 'Wall substrate type (drywall, plaster, brick, concrete) and bracket specifications must be confirmed prior to mounting. Customer must provide compatible mounting brackets or request them in advance.',
      testimonialsHeading: 'Client Experiences — Wall Mounting',
      testimonials: [
        {
          quote: 'Mounted our 65-inch television and heavy hardwood floating mantel into solid brick. Perfectly level, flush with the wall, and not a trace of dust left behind.',
          name: 'Julian King',
          context: 'Living Room Refresh — Brick Substrate',
          rating: 5
        },
        {
          quote: 'The nine-frame gallery wall was executed with absolute geometric precision. Millimeter-perfect spacing and zero guesswork.',
          name: 'Clara Radford',
          context: 'Interior Design Client — Hallway Gallery',
          rating: 5
        }
      ],
      ctaTitle: 'Elevate Your Walls with Total Confidence.',
      ctaDesc: 'Reserve an appointment with a precision wall-mounting specialist and enjoy secure, picture-perfect displays.',
      ctaBtnLabel: 'Book Wall Mounting'
    },

    'small-installations': {
      id: 'small-installations',
      title: 'Small Installations',
      eyebrow: 'Thoughtful Fittings & Fixtures',
      heroHeadline: 'Seamless Fittings. Elevated Living.',
      heroDesc: 'From custom curtain rods and window blinds to bathroom accessories and child-proofing gates, HOMERA handles the delicate installations that turn a house into a cohesive home.',
      heroBenefit: 'Flawless fit and finish without accidental wall damage or uneven sightlines.',
      heroImage: 'assets/images/installations-detail.jpg',
      secondaryImage: 'assets/images/small-installations.jpg',
      heroCtaLabel: 'Book Small Installations',
      descTitle: 'Dedicated Care for Finishing Touches',
      prose: [
        'Installing window treatments and functional home fittings requires steady hands, sharp measurements, and specialized drill bits that protect delicate tiles and plasterwork.',
        'Our specialists ensure drapery rods are balanced, blinds glide smoothly, and bathroom accessories remain firmly anchored under daily use.'
      ],
      useCases: [
        'Double drapery rods & custom tracks',
        'Motorized & manual window blinds',
        'Tile-mounted bathroom accessories',
        'Child & pet safety barriers'
      ],
      benefits: [
        'Precise laser measurements ensuring balanced sightlines across every window.',
        'Tile-safe diamond-tipped drilling for pristine bathroom and kitchen surfaces.',
        'Heavy-load rated fittings to prevent pull-outs on daily-use fixtures.',
        'Complete functional inspection and smooth operation testing upon installation.'
      ],
      includedTasks: [
        {
          title: 'Curtain Rods & Drapery Tracks',
          desc: 'Ceiling and wall-mounted curtain poles, double rods, bay window tracks, and finials.'
        },
        {
          title: 'Window Blinds & Shades',
          desc: 'Roller blinds, Venetian timber blinds, Roman shades, and cellular honeycomb shades fitted accurately.'
        },
        {
          title: 'Bathroom Fixture Suites',
          desc: 'Towel rails, robe hooks, toilet roll holders, glass shower shelves, and magnifying vanity mirrors.'
        },
        {
          title: 'Safety Gates & Latches',
          desc: 'Sturdy pressure and hardware-mounted child gates, pet barriers, and child-safe cabinet locks.'
        },
        {
          title: 'Storage & Closet Accessories',
          desc: 'Pull-out tie racks, shoe carousels, mudroom cubbies, and wardrobe hanging accessories.'
        },
        {
          title: 'Detectors & Monitors',
          desc: 'Battery smoke alarms, carbon monoxide detectors, and wireless temperature sensor mounting.'
        }
      ],
      scopeNote: 'Fittings supplied by the client must include manufacturer hardware and installation brackets. Window frame squareness and masonry depth are evaluated upon arrival.',
      testimonialsHeading: 'Client Experiences — Small Installations',
      testimonials: [
        {
          quote: 'Installed blackout blinds in three bedrooms and hung custom double curtain rods. Every bracket is rock-solid and aligned to perfection.',
          name: 'Arthur Price',
          context: 'Apartment Resident — Window Treatment Setup',
          rating: 5
        },
        {
          quote: 'Drilled into expensive marble bathroom tiles without a single crack. The towel bars and robe hooks look like they were built into the home.',
          name: 'Nadine Bennett',
          context: 'Master Bath Upgrade — Tile Installation',
          rating: 5
        }
      ],
      ctaTitle: 'Transform Your Space with Polished Details.',
      ctaDesc: 'Book a professional installer to fit your window treatments, fixtures, and home accents with care.',
      ctaBtnLabel: 'Book Small Installations'
    },

    'plumbing-fixes': {
      id: 'plumbing-fixes',
      title: 'Plumbing Fixes',
      eyebrow: 'Reliable Flow & Drainage',
      heroHeadline: 'Swift Solutions. Zero Water Waste.',
      heroDesc: 'Address dripping faucets, slow drains, running toilets, and minor fixture upgrades before small leaks cause significant water damage or inflated utility bills.',
      heroBenefit: 'Targeted diagnostics and quality component replacements that stop leaks and restore clean water flow.',
      heroImage: 'assets/images/plumbing-detail.jpg',
      secondaryImage: 'assets/images/plumbing-fixes.jpg',
      heroCtaLabel: 'Book Plumbing Fixes',
      descTitle: 'Targeted Care for Everyday Water Fixtures',
      prose: [
        'A minor plumbing issue like a persistent drip or a sluggish drain can quickly disrupt household comfort and lead to moisture damage.',
        'HOMERA connects you with experienced plumbing technicians who arrive equipped with diagnostic tools, replacement cartridges, O-rings, and pipe seals to resolve minor issues cleanly on the first visit.'
      ],
      useCases: [
        'Dripping kitchen & bathroom faucets',
        'Running toilet fill valves & flappers',
        'Slow drains & P-trap seal renewals',
        'Showerhead & bidet wand attachments'
      ],
      benefits: [
        'Immediate diagnostic inspection to isolate worn washers, corroded cartridges, and pressure irregularities.',
        'Direct replacement of faulty seals, valves, and flexible braided supply lines.',
        'Clearing of hair, soap scum, and standing sediment from accessible residential traps.',
        'Rigorous post-repair pressure testing to ensure 100% leak-free integrity.'
      ],
      includedTasks: [
        {
          title: 'Kitchen & Bath Faucets',
          desc: 'Fixing dripping spouts, replacing mixer cartridges, renewing ceramic discs, and cleaning aerators.'
        },
        {
          title: 'Toilet Tank Mechanisms',
          desc: 'Resolving running tanks, replacing faulty fill valves, flapper seals, handles, and water inlet lines.'
        },
        {
          title: 'Drain Clearing & Traps',
          desc: 'Unclogging slow bathroom sinks, shower drains, and resealing sink P-traps cleanly.'
        },
        {
          title: 'Showerheads & Handhelds',
          desc: 'Installing rainfall showerheads, handheld wand kits, and anti-limescale fixtures.'
        },
        {
          title: 'Appliance Water Lines',
          desc: 'Inspecting and replacing flexible stainless steel lines for washing machines and dishwashers.'
        },
        {
          title: 'Sink Waste & Strainers',
          desc: 'Replacing worn basket strainers, disposal splash guards, and drain flange seals.'
        }
      ],
      scopeNote: 'Scope covers accessible residential fixtures and minor maintenance. In-wall pipe replacements, main sewer line clearing, or whole-house repiping require licensed municipal master plumbers.',
      testimonialsHeading: 'Client Experiences — Plumbing Fixes',
      testimonials: [
        {
          quote: 'Diagnosed our kitchen faucet drip in minutes and replaced the ceramic cartridge on the spot. No mess, polite demeanor, and fair pricing.',
          name: 'Gordon Shaw',
          context: 'Townhouse Owner — Kitchen Faucet Repair',
          rating: 5
        },
        {
          quote: 'Cleansed our bathroom sink trap and replaced the toilet valve. Everything operates quietly and smoothly now.',
          name: 'Maya Chen',
          context: 'Residential Client — Bathroom Maintenance',
          rating: 5
        }
      ],
      ctaTitle: 'Put an End to Persistent Leaks.',
      ctaDesc: 'Request a fast, dependable plumbing maintenance visit and keep your home’s water fixtures running smoothly.',
      ctaBtnLabel: 'Book Plumbing Fixes'
    },

    'electrical-fixes': {
      id: 'electrical-fixes',
      title: 'Electrical Fixes',
      eyebrow: 'Certified Fixture Work',
      heroHeadline: 'Safe Connections. Flawless Illumination.',
      heroDesc: 'Ensure your home’s lighting and switches are installed securely by qualified professionals, from pendant lights and dimmers to smart switch upgrades and ceiling fixtures.',
      heroBenefit: 'Safe, code-compliant fixture installations with meticulous attention to circuit safety and clean aesthetics.',
      heroImage: 'assets/images/electrical-detail.jpg',
      secondaryImage: 'assets/images/electrical-fixtures.jpg',
      heroCtaLabel: 'Book Electrical Fixes',
      descTitle: 'Certified Care for Interior Lighting & Power',
      prose: [
        'Electrical work demands absolute respect for safety codes, load ratings, and secure terminations. HOMERA connects homeowners with qualified electrical specialists who handle fixture upgrades, pendant light replacements, and dimmer switch installations safely.',
        'We verify voltage, circuit integrity, and polarity before and after every installation.'
      ],
      useCases: [
        'Pendant & chandelier installations',
        'Rotary & smart dimmer upgrades',
        'Decorative outlet & switch faceplates',
        'Pre-wired ceiling fan mounting'
      ],
      benefits: [
        'Comprehensive circuit verification, polarity testing, and voltage safety checks.',
        'Secure ceiling junction box anchoring for heavy chandeliers and pendant lights.',
        'Seamless integration of rotary, push, and smart digital dimmer switches.',
        'Neat wire dressing inside junction boxes to prevent pinch points and heat buildup.'
      ],
      includedTasks: [
        {
          title: 'Light Fixture Replacement',
          desc: 'Safely mounting chandeliers, dining pendants, flush-mount ceiling lights, and vanity wall sconces.'
        },
        {
          title: 'Switch & Dimmer Upgrades',
          desc: 'Upgrading standard toggles to modern rotary dimmers, smart switches, and motion sensor switches.'
        },
        {
          title: 'Socket Faceplates',
          desc: 'Replacing worn or discolored wall plates with brushed brass, matte black, or USB-integrated receptacles.'
        },
        {
          title: 'Ceiling Fans',
          desc: 'Assembling and hanging ceiling fans on pre-wired, fan-rated structural ceiling boxes.'
        },
        {
          title: 'Smart Doorbells & Chimes',
          desc: 'Wiring smart video doorbells, digital chimes, and low-voltage transformer connections.'
        },
        {
          title: 'Under-Cabinet Lighting',
          desc: 'Installing low-profile LED strip accent lights and task lighting under kitchen cabinets.'
        }
      ],
      scopeNote: 'All electrical work is performed by qualified professionals adhering strictly to regional electrical safety codes. Major service panel upgrades, whole-house rewiring, or novel circuit runs require dedicated licensed electrical contractor permitting.',
      testimonialsHeading: 'Client Experiences — Electrical Fixes',
      testimonials: [
        {
          quote: 'Replaced three dining room pendants and fitted smart dimmer switches throughout the ground floor. Clean, certified, and utterly professional.',
          name: 'Helena Ward',
          context: 'Homeowner — Dining Room Illumination',
          rating: 5
        },
        {
          quote: 'Arrived promptly, tested the breaker panel thoroughly, and hung our heavy glass chandelier with complete security.',
          name: 'Dominic Hayes',
          context: 'Residential Client — Chandelier Installation',
          rating: 5
        }
      ],
      ctaTitle: 'Illuminate Your Home with Confidence.',
      ctaDesc: 'Connect with a qualified electrical specialist to replace fixtures, switches, and lighting elements safely.',
      ctaBtnLabel: 'Book Electrical Fixes'
    }
  };

  function resolveServiceId(param) {
    if (!param) return null;
    const clean = param.trim().toLowerCase();

    if (SERVICES_DATA[clean]) return clean;

    const aliases = {
      'furniture': 'furniture-assembly',
      'assembly': 'furniture-assembly',
      'repairs': 'minor-repairs',
      'minor': 'minor-repairs',
      'mounting': 'wall-mounting',
      'wall': 'wall-mounting',
      'installations': 'small-installations',
      'small-installation': 'small-installations',
      'installation': 'small-installations',
      'plumbing': 'plumbing-fixes',
      'plumber': 'plumbing-fixes',
      'electrical': 'electrical-fixes',
      'electrician': 'electrical-fixes'
    };

    return aliases[clean] || null;
  }

  function createCheckIcon() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'homera-detail-benefit-item__icon');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M20 6L9 17l-5-5');
    svg.appendChild(path);

    return svg;
  }

  function createStarIcon() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'm12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z');
    svg.appendChild(path);

    return svg;
  }

  function renderFallbackState(container) {
    document.title = 'Service Not Found — HOMERA';

    container.innerHTML = '';

    const section = document.createElement('section');
    section.className = 'homera-detail-fallback';
    section.setAttribute('aria-labelledby', 'detail-fallback-heading');

    const inner = document.createElement('div');
    inner.className = 'container homera-detail-fallback__inner';

    const eyebrow = document.createElement('span');
    eyebrow.className = 'homera-detail-eyebrow';
    eyebrow.textContent = 'Service Directory';

    const title = document.createElement('h1');
    title.id = 'detail-fallback-heading';
    title.className = 'homera-detail-fallback__title';
    title.textContent = 'Service Not Found';

    const text = document.createElement('p');
    text.className = 'homera-detail-fallback__text';
    text.textContent = 'The requested service identifier could not be recognized. Please select one of HOMERA’s six signature disciplines below or return to the main services directory.';

    const grid = document.createElement('div');
    grid.className = 'homera-detail-fallback__grid';

    Object.keys(SERVICES_DATA).forEach((key) => {
      const s = SERVICES_DATA[key];
      const card = document.createElement('a');
      card.className = 'homera-detail-fallback-card';
      card.href = `services details.html?service=${s.id}`;

      const cardTitle = document.createElement('span');
      cardTitle.className = 'homera-detail-fallback-card__title';
      cardTitle.textContent = s.title;

      const cardSub = document.createElement('span');
      cardSub.className = 'homera-detail-fallback-card__sub';
      cardSub.textContent = s.eyebrow;

      card.appendChild(cardTitle);
      card.appendChild(cardSub);
      grid.appendChild(card);
    });

    const returnBtn = document.createElement('a');
    returnBtn.className = 'homera-detail-btn homera-detail-btn--primary';
    returnBtn.href = 'services.html';

    const btnSpan = document.createElement('span');
    btnSpan.textContent = 'Return to All Services';
    returnBtn.appendChild(btnSpan);

    inner.appendChild(eyebrow);
    inner.appendChild(title);
    inner.appendChild(text);
    inner.appendChild(grid);
    inner.appendChild(returnBtn);
    section.appendChild(inner);

    container.appendChild(section);
  }

  function populateService(data) {

    document.title = `${data.title} — HOMERA Premium Home Care`;

    const eyebrowText = document.getElementById('detail-eyebrow-text');
    if (eyebrowText) eyebrowText.textContent = data.eyebrow;

    const heroTitle = document.getElementById('detail-hero-title');
    if (heroTitle) {
      if (data.heroHeadline && data.heroHeadline.includes('. ')) {
        const parts = data.heroHeadline.split('. ');
        heroTitle.innerHTML = `${parts[0]}. <span>${parts.slice(1).join('. ')}</span>`;
      } else {
        heroTitle.textContent = data.heroHeadline;
      }
    }

    const heroDesc = document.getElementById('detail-hero-desc');
    if (heroDesc) heroDesc.textContent = data.heroDesc;

    const heroBenefit = document.getElementById('detail-hero-benefit');
    if (heroBenefit) heroBenefit.textContent = data.heroBenefit;

    const heroImg = document.getElementById('detail-hero-img');
    if (heroImg) {
      heroImg.src = data.heroImage;
      heroImg.alt = `${data.title} craftsmanship demonstrated in high-end residence`;
    }

    const heroCtaBtn = document.getElementById('detail-hero-cta-btn');
    const heroCtaLabel = document.getElementById('detail-hero-cta-label');
    if (heroCtaBtn) heroCtaBtn.href = `contact.html?service=${data.id}`;
    if (heroCtaLabel) heroCtaLabel.textContent = data.heroCtaLabel;

    const descTitle = document.getElementById('detail-desc-title');
    if (descTitle) descTitle.textContent = data.descTitle;

    const proseWrap = document.getElementById('detail-desc-prose');
    if (proseWrap) {
      proseWrap.innerHTML = '';
      data.prose.forEach((paragraph) => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        proseWrap.appendChild(p);
      });
    }

    const tagsList = document.getElementById('detail-tags-list');
    if (tagsList) {
      tagsList.innerHTML = '';
      data.useCases.forEach((useCase) => {
        const li = document.createElement('li');
        li.textContent = useCase;
        tagsList.appendChild(li);
      });
    }

    const secondaryImg = document.getElementById('detail-secondary-img');
    if (secondaryImg) {
      secondaryImg.src = data.secondaryImage;
      secondaryImg.alt = `${data.title} work equipment and high-precision execution`;
    }

    const benefitsList = document.getElementById('detail-benefits-list');
    if (benefitsList) {
      benefitsList.innerHTML = '';
      data.benefits.forEach((benefit) => {
        const li = document.createElement('li');
        li.className = 'homera-detail-benefit-item';
        li.appendChild(createCheckIcon());

        const textSpan = document.createElement('span');
        textSpan.textContent = benefit;
        li.appendChild(textSpan);

        benefitsList.appendChild(li);
      });
    }

    const includedGrid = document.getElementById('detail-included-grid');
    if (includedGrid) {
      includedGrid.innerHTML = '';
      data.includedTasks.forEach((task) => {
        const article = document.createElement('article');
        article.className = 'homera-detail-task-card';

        const head = document.createElement('div');
        head.className = 'homera-detail-task-card__head';

        const checkCircle = document.createElement('div');
        checkCircle.className = 'homera-detail-task-card__check';
        checkCircle.setAttribute('aria-hidden', 'true');

        const checkSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        checkSvg.setAttribute('viewBox', '0 0 24 24');
        const checkPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        checkPath.setAttribute('d', 'M20 6L9 17l-5-5');
        checkSvg.appendChild(checkPath);
        checkCircle.appendChild(checkSvg);

        const heading = document.createElement('h3');
        heading.className = 'homera-detail-task-card__title';
        heading.textContent = task.title;

        head.appendChild(checkCircle);
        head.appendChild(heading);

        const desc = document.createElement('p');
        desc.className = 'homera-detail-task-card__desc';
        desc.textContent = task.desc;

        article.appendChild(head);
        article.appendChild(desc);

        includedGrid.appendChild(article);
      });
    }

    const scopeNoteText = document.getElementById('detail-scope-note-text');
    if (scopeNoteText) scopeNoteText.textContent = data.scopeNote;

    const testTitle = document.getElementById('detail-testimonials-title');
    if (testTitle) testTitle.textContent = data.testimonialsHeading;

    const testGrid = document.getElementById('detail-testimonials-grid');
    if (testGrid) {
      testGrid.innerHTML = '';
      data.testimonials.forEach((item) => {
        const card = document.createElement('article');
        card.className = 'homera-detail-testimonial-card';

        const starsWrap = document.createElement('div');
        starsWrap.className = 'homera-detail-testimonial-card__stars';
        starsWrap.setAttribute('aria-label', `${item.rating} out of 5 stars`);
        for (let i = 0; i < item.rating; i++) {
          starsWrap.appendChild(createStarIcon());
        }

        const quote = document.createElement('blockquote');
        quote.className = 'homera-detail-testimonial-card__quote';
        quote.textContent = `“${item.quote}”`;

        const author = document.createElement('div');
        author.className = 'homera-detail-testimonial-card__author';

        const avatar = document.createElement('div');
        avatar.className = 'homera-detail-testimonial-card__avatar-fallback';
        avatar.setAttribute('aria-hidden', 'true');
        avatar.textContent = item.name.split(' ').map((n) => n[0]).join('').slice(0, 2);

        const meta = document.createElement('div');
        meta.className = 'homera-detail-testimonial-card__meta';

        const name = document.createElement('cite');
        name.className = 'homera-detail-testimonial-card__name';
        name.textContent = item.name;

        const ctx = document.createElement('span');
        ctx.className = 'homera-detail-testimonial-card__context';
        ctx.textContent = item.context;

        meta.appendChild(name);
        meta.appendChild(ctx);
        author.appendChild(avatar);
        author.appendChild(meta);

        card.appendChild(starsWrap);
        card.appendChild(quote);
        card.appendChild(author);

        testGrid.appendChild(card);
      });
    }

    const ctaTitle = document.getElementById('detail-cta-title');
    if (ctaTitle) ctaTitle.textContent = data.ctaTitle;

    const ctaDesc = document.getElementById('detail-cta-desc');
    if (ctaDesc) ctaDesc.textContent = data.ctaDesc;

    const ctaPrimaryBtn = document.getElementById('detail-cta-primary-btn');
    const ctaBtnLabel = document.getElementById('detail-cta-btn-label');
    if (ctaPrimaryBtn) ctaPrimaryBtn.href = `contact.html?service=${data.id}`;
    if (ctaBtnLabel) ctaBtnLabel.textContent = data.ctaBtnLabel;
  }

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
          behavior: 'smooth'
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

  function init() {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    const serviceKey = resolveServiceId(serviceParam);
    const container = document.getElementById('homera-detail-container');

    if (!serviceKey || !SERVICES_DATA[serviceKey]) {
      if (container) renderFallbackState(container);
      return;
    }

    populateService(SERVICES_DATA[serviceKey]);
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window, document);
