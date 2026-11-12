/* ==========================================================================
   Zeinab Chocolate — Frontend Module (ES2022, Vanilla JS)
   Config block at top for contact/product/flavors data. All selectors null-safe.
   ========================================================================== */

/* ===== Configuration (مصدر واحد لبيانات التواصل والمحتوى) ===== */
// تُكتب بيانات التواصل أيضاً في index.html Fixed ليعمل الموقع بدون JavaScript
const CONFIG = {
  phone: '+963 936 803 831', // للعرض
  phoneLink: 'tel:+963936803831', // للرابط
  address: 'اللاذقية - القنجرة، سوريا',

  // واتساب (اختياري)
  whatsapp: 'https://wa.me/963936803831',
  whatsappMessage: 'مرحباً، أود الطلب من Zeinab Chocolate',
  whatsappEnabled: true, // TODO: تأكد أن الرقم مفعّل على واتساب، وإن لم يكن فاحذف زر واتساب

  facebook: 'https://www.facebook.com/profile.php?id=61587095555953',

  // المنتجات — نصوص البطاقات أدناه تحتوي ادعاءات لم تُؤكد من صاحب المشروع (راجع تقرير التعديلات)
  products: [
    {
      id: 'signature',
      title: 'توقيع زينب',
      code: 'THE SIGNATURE',
      desc: 'القطعة التي بدأت منها الحكاية. نكهة متوازنة، ليست حلوة بشكل مفرط، وتُصنع على مهل.',
      badge: 'التوقيع الأصلي',
      image: 'photo_3_2026-11-10_22-22-50.jpg',
      alt: 'توقيع زينب - شوكولا فاخرة أصلية',
    },
    // TODO: ادعاء يحتاج تأكيداً من صاحب المشروع: "70% كاكاو" و"ملح البحر" (الوصف، الشارة، والنص البديل)
    {
      id: 'dark',
      title: 'الداكنة الأصيلة',
      code: 'THE DARK',
      desc: '70% كاكاو مختار، تحميص بطيء، ولمسة خفيفة من ملح البحر.',
      badge: '70% كاكاو',
      image: 'photo_4_2026-11-10_22-22-50.jpg',
      alt: 'الشوكولا الداكنة الأصيلة 70% كاكاو',
    },
    // TODO: ادعاء يحتاج تأكيداً من صاحب المشروع: "بندق محمص" (الوصف والشارة)
    {
      id: 'milk',
      title: 'دفء الحليب',
      code: 'THE MILK',
      desc: 'شوكولا بالحليب الناعم، وبندق محمص يقرمش بلطف في كل قطعة.',
      badge: 'حليب وبندق',
      image: 'photo_5_2026-11-10_22-22-50.jpg',
      alt: 'شوكولا بالحليب والبندق المحمص',
    },
    // TODO: ادعاء يحتاج تأكيداً من صاحب المشروع: "24 قطعة" (الوصف والشارة)
    {
      id: 'giftbox',
      title: 'صندوق الذكريات',
      code: 'THE GIFT BOX',
      desc: 'أربع وعشرون قطعة من التشكيلة الأصلية، لمناسبة تستحق الاحتفال.',
      badge: '24 قطعة',
      image: 'photo_6_2026-11-10_22-22-50.jpg',
      alt: 'صندوق الذكريات - تشكيلة شوكولا متنوعة',
    },
  ],

  // قائمة النكهات والأصناف — لتعديلها أضف/حذف entrées في المصفوفات أدناه (لا أسعار، لا أوزان)
  // لإضافة نكهة جديدة: أضف كائناً { text: 'اسم النكهة', emoji: '🍬' } إلى مصفوفة items الخاصة بالمجموعة المقابلة في flavors
  flavors: [
    {
      id: 'chocolate',
      group: 'أنواع الشوكولا',
      emoji: '🍫',
      items: [
        { text: 'سادة مرة' },
        { text: 'دارك' },
        { text: 'شقرا' },
        { text: 'بيضا' },
      ],
    },
    {
      id: 'fillings',
      group: 'أنواع الحشوات',
      emoji: '🍯',
      items: [
        { text: 'فريز', emoji: '🍓' },
        { text: 'مانجو', emoji: '🥭' },
        { text: 'قهوة', emoji: '☕' },
        { text: 'توت' },
        { text: 'أوريو أبيض' },
        { text: 'أوريو دارك' },
        { text: 'فانيليا' },
        { text: 'شوكو بيري' },
        { text: 'بلو آنجل' },
        { text: 'غالاكسي' },
        { text: 'راحة بالفستق' },
        { text: 'فواكه مجففة' },
        { text: 'مكسرات' },
        { text: 'بستاشيو' },
        { text: 'كرانش دارك' },
        { text: 'جوز هند', secondary: 'باونتي', emoji: '🥥' },
        { text: 'كراميل جوز هند' },
        { text: 'بوينو' },
        { text: 'لوتس' },
        { text: 'توبلي' },
        { text: 'روليتا' },
        { text: 'علكة' },
        { text: 'كريمة بندق', emoji: '🌰' },
        { text: 'سكر محروق' },
        { text: 'تمر' },
      ],
    },
    {
      id: 'extra',
      group: 'حلويات إضافية',
      emoji: '🍨',
      items: [
        { text: 'تراميسو بكريمة الشوكولا وكريمة الحليب' },
        { text: 'تشيز كيك' },
        { text: 'كاسة أوريو بالحليب' },
      ],
    },
  ],
};

/* ===== Helpers ===== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const create = (tag, props = {}, children = []) => {
  const el = document.createElement(tag);
  Object.entries(props).forEach(([key, val]) => {
    if (key === 'text') el.textContent = val;
    else if (key === 'html') el.innerHTML = val; // controlled internal use only
    else if (key.startsWith('on')) el.addEventListener(key.slice(2).toLowerCase(), val);
    else el.setAttribute(key, val);
  });
  children.forEach((c) => (c instanceof Node ? el.appendChild(c) : el.appendChild(create(c.tag, c.props, c.children))));
  return el;
};

const isTouch = window.matchMedia('(pointer: coarse)').matches;
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ===== Safe Element Guard ===== */
const safe = (el, cb) => (el ? cb(el) : () => {});

/* ===== Preloader ===== */
function initPreloader() {
  const preloader = $('#preloader');
  if (!preloader) return;

  const progress = $('#preloaderProgress');
  let progressVal = 0;
  const interval = setInterval(() => {
    progressVal += Math.random() * 15;
    if (progressVal >= 90) {
      progressVal = 100;
      clearInterval(interval);
    }
    if (progress) progress.style.transform = `scaleX(${progressVal / 100})`;
  }, 60);

  window.addEventListener(
    'load',
    () => {
      setTimeout(() => {
        if (progress) progress.style.transform = 'scaleX(1)';
        setTimeout(() => {
          preloader.style.opacity = '0';
          preloader.style.pointerEvents = 'none';
          setTimeout(() => {
            preloader.hidden = true;
            document.body.classList.remove('no-js');
          }, 400);
        }, 300);
      }, 700);
    },
    { once: true },
  );
}

/* ===== Scroll Progress ===== */
function initScrollProgress() {
  const bar = $('#scrollProgress');
  if (!bar) return;

  const onScroll = () => {
    const winHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = winHeight ? (window.scrollY / winHeight) * 100 : 0;
    bar.style.transform = `scaleX(${Math.min(Math.max(scrolled, 0), 100) / 100})`;
  };

  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true },
  );
  onScroll();
}

/* ===== Header Scroll ===== */
function initHeaderScroll() {
  const header = $('#site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 24);
  };

  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true },
  );
}

/* ===== Mobile Menu with Focus Trap ===== */
function initMobileMenu() {
  const toggle = $('#menuToggle');
  const nav = $('#mainNav');
  const header = $('#site-header');
  const links = $$('.nav-list a');

  if (!toggle || !nav) return;

  const focusable = [...nav.querySelectorAll('a[href], button')];
  const firstFocus = focusable[0];
  const lastFocus = focusable[focusable.length - 1];

  let isOpen = false;

  let lockedScrollY = 0;

  function open() {
    isOpen = true;
    header.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    lockedScrollY = window.scrollY;
    document.body.style.top = `-${lockedScrollY}px`;
    document.body.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
    if (firstFocus) firstFocus.focus();
  }

  function close() {
    isOpen = false;
    header.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    document.body.style.top = '';
    document.body.style.overflow = '';
    window.scrollTo(0, lockedScrollY);
    toggle.focus();
  }

  toggle.addEventListener('click', () => (isOpen ? close() : open()));

  links.forEach((link) => link.addEventListener('click', close));

  document.addEventListener('keydown', (e) => {
    if (!isOpen || e.key !== 'Escape') return;
    close();
  });

  // Focus trap
  nav.addEventListener('keydown', (e) => {
    if (!isOpen || e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === firstFocus) {
        e.preventDefault();
        lastFocus.focus();
      }
    } else if (document.activeElement === lastFocus) {
      e.preventDefault();
      firstFocus.focus();
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!isOpen) return;
    if (!header.contains(e.target)) close();
  });
}

/* ===== Scroll Reveal (IntersectionObserver) ===== */
function initScrollReveal() {
  if (prefersReduced) {
    $$('.reveal').forEach((el) => (el.style.opacity = '1'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'none';
        entry.target.style.transitionDelay = `${i * 0.08}s`;
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '-10% 0px -20% 0px', threshold: 0.1 },
  );

  $$('.reveal').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
}

/* ===== Parallax (transform only) ===== */
function initParallax() {
  if (prefersReduced || isTouch) return;

  const targets = $$('.hero-disc, .hero-product-float, .hero-light');
  if (!targets.length) return;

  const onScroll = () => {
    const scrolled = window.scrollY;
    targets.forEach((el) => {
      const speed = parseFloat(el.dataset.speed || '0.05');
      const y = scrolled * speed;
      el.style.transform = `translate3d(0, ${y}px, 0)`;
    });
  };

  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true },
  );
}

/* ===== Tilt Effect on Product Cards (hover devices only) ===== */
function initTilt() {
  if (isTouch || prefersReduced) return;

  const cards = $$('.product-card');
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ===== Custom Cursor (pointer devices only) ===== */
function initCustomCursor() {
  if (isTouch || prefersReduced) return;

  const cursor = create('div', { class: 'custom-cursor' });
  document.body.appendChild(cursor);

  const hovered = (el) => cursor.classList.add('hovered');
  const unhovered = (el) => cursor.classList.remove('hovered');

  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  const hoverables = $$('a, button, .product-card');
  hoverables.forEach((el) => {
    el.addEventListener('mouseenter', () => hovered(el));
    el.addEventListener('mouseleave', () => unhovered(el));
  });
}

/* ===== Product Cards Render ===== */
function renderProducts() {
  const grid = $('#productGrid');
  if (!grid) return;

  grid.innerHTML = CONFIG.products.map((p) => {
    return `
      <article class="product-card${p.id === 'signature' ? ' product-card-featured' : ''}" data-reveal>
        <div class="product-image">
          <img src="${p.image}" alt="${p.alt}" loading="lazy" decoding="async" width="300" height="375" />
          <span class="product-badge">${p.badge}</span>
        </div>
        <div class="product-details">
          <div>
            <p>${p.code}</p>
            <h3>${p.title}</h3>
            <small>${p.desc}</small>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ===== Flavors Render (source of truth: CONFIG.flavors; HTML ثابت existiert للقسم دون JavaScript) ===== */
function renderFlavors() {
  const grid = $('#flavorGrid');
  if (!grid) return;

  // يُ_render من قائمةconfig كمصدر واحد؛ النص الثابت في index.html يعمل عند تعطيل JavaScript
  grid.innerHTML = CONFIG.flavors.map((group) => {
    const isFillings = group.id === 'fillings';
    let itemsHtml = '';
    if (isFillings) {
      itemsHtml = '<p class="flavor-intro">اختر نكهتك المفضلة لتصنع قطعتك الخاصة.</p><ul class="filling-list" aria-label="أنواع الحشوات المتاحة">' + group.items.map((item) => '<li>' + item.text + (item.emoji ? ' <span aria-hidden="true">' + item.emoji + '</span>' : '') + (item.secondary ? ' <small>(' + item.secondary + ')</small>' : '') + '</li>').join('') + '</ul><p class="filling-note"><span aria-hidden="true">✦</span> جميع الحشوات متوفرة للطلب</p>';
    } else {
      itemsHtml = '<ul class="flavor-list">' + group.items.map((item) => {
        let html = item.text;
        if (item.emoji) html += ' <span aria-hidden="true" class="item-emoji">' + item.emoji + '</span>';
        if (item.secondary) html += ' <span class="item-secondary">' + item.secondary + '</span>';
        return '<li>' + html + '</li>';
      }).join('') + '</ul>';
    }

    return `
      <article class="flavor-group${isFillings ? ' flavor-group-wide' : ''} reveal" id="flavor-${group.id}" aria-labelledby="flavor-${group.id}-heading">
        <div class="flavor-card-top">
          <span class="flavor-icon" aria-hidden="true">${group.emoji || ''}</span>
          <div><span class="flavor-card-label">${isFillings ? 'الأكثر تنوعاً' : group.id === 'extra' ? 'للحظات الحلوة' : 'اختَر الأساس'}</span><h3 id="flavor-${group.id}-heading">${group.group}</h3></div>
        </div>
        ${itemsHtml}
      </article>
    `;
  }).join('');
}

/* ===== Gallery lightbox (progressive enhancement; static HTML works without JS) ===== */
function initGallery() {
  const lightbox = $('#lightbox');
  const lightboxImg = $('#lightboxImg');
  const lightboxCaption = $('#lightboxCaption');
  const lightboxClose = $('#lightboxClose');
  const lightboxPrev = $('#lightboxPrev');
  const lightboxNext = $('#lightboxNext');
  const galleryItems = $$('.gallery-item a');
  if (!lightbox || !galleryItems.length) return;

  let currentIndex = 0;
  let touchStartX = 0;
  let touchStartY = 0;

  function openLightbox(index) {
    currentIndex = index;
    const link = galleryItems[currentIndex];
    const img = link.querySelector('img');
    if (!img) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = img.alt;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  function showOffset(offset) {
    currentIndex = (currentIndex + offset + galleryItems.length) % galleryItems.length;
    openLightbox(currentIndex);
  }

  galleryItems.forEach((link, i) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(i);
    });
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', () => showOffset(-1));
  lightboxNext?.addEventListener('click', () => showOffset(1));
  lightbox.addEventListener('touchstart', (e) => {
    const touch = e.changedTouches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }, { passive: true });
  lightbox.addEventListener('touchend', (e) => {
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      showOffset(deltaX > 0 ? -1 : 1);
    } else if (deltaY > 80 && Math.abs(deltaY) > Math.abs(deltaX)) {
      closeLightbox();
    }
  }, { passive: true });

  document.addEventListener('keydown', (e) => {
    if (lightbox && !lightbox.hidden) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showOffset(-1);
      if (e.key === 'ArrowRight') showOffset(1);
    }
  });
}

/* ===== Contact: hide WhatsApp button if not enabled ===== */
function initContactActions() {
  if (!CONFIG.whatsappEnabled) {
    const wa = $('.btn-whatsapp');
    if (wa) wa.remove();
  }
}

/* ===== Floating contact button (mobile only) ===== */
function initFloatContact() {
  const a = create('a', {
    href: CONFIG.whatsappEnabled
      ? CONFIG.whatsapp + '?text=' + encodeURIComponent(CONFIG.whatsappMessage)
      : CONFIG.phoneLink,
    class: 'float-contact',
    'aria-label': CONFIG.whatsappEnabled ? 'راسلنا على واتساب' : 'اتصل بنا',
  }, [
    { tag: 'span', props: { 'aria-hidden': 'true', text: CONFIG.whatsappEnabled ? '💬' : '📞' } },
    { tag: 'span', props: { text: CONFIG.whatsappEnabled ? 'واتساب' : 'اتصل بنا' } },
  ]);
  document.body.appendChild(a);
}

/* ===== Active section tracking for navigation ===== */
function initActiveSection() {
  const links = $$('.nav-list a[href^="#"]');
  const sections = [];
  links.forEach((a) => {
    const el = document.querySelector(a.getAttribute('href'));
    if (el) sections.push(el);
  });
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        links.forEach((a) => {
          const active = a.getAttribute('href') === '#' + id;
          a.classList.toggle('active', active);
          a.setAttribute('aria-current', active ? 'page' : undefined);
        });
      });
    },
    { rootMargin: '-12% 0px -60% 0px', threshold: 0.1 },
  );

  sections.forEach((s) => observer.observe(s));
}

/* ===== Smooth Scroll Offset ===== */
function initSmoothScroll() {
  document.documentElement.style.scrollMarginTop = '88px';
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerHeight = $('#site-header')?.offsetHeight || 88;
        const offset = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });
}

/* ===== Year Footer ===== */
function initYear() {
  const el = $('#year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ===== Init All ===== */
function init() {
  document.documentElement.classList.remove('no-js');
  document.body.classList.add('js-enabled');

  initPreloader();
  initScrollProgress();
  initHeaderScroll();
  initMobileMenu();
  initScrollReveal();
  initParallax();
  initTilt();
  initCustomCursor();
  renderProducts();
  renderFlavors();
  initGallery();
  initContactActions();
  initFloatContact();
  initActiveSection();
  initSmoothScroll();
  initYear();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
