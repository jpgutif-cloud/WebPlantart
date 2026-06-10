/**
 * Plant Art — proyectos.js
 * Scope: proyectos.html, proyectos-mut.html, proyectos-arauco.html
 * Responsibilities:
 *   1. Industry filter (pills → project cards)
 *   2. Scroll reveal (IntersectionObserver)
 *   3. Flagship image hover (pure CSS, no JS needed)
 *   4. Back-to-top button
 *   5. Count-up animation for data cells
 */

'use strict';

/* ─────────────────────────────────────────────
   1. INDUSTRY FILTER
   Pills control visibility of project cards and flagship cases.
───────────────────────────────────────────── */
function initFilter() {
  const pills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.op-card, .flagship-project');
  const operationalCards = document.querySelectorAll('.op-card');
  const emptyState = document.querySelector('[data-filter-empty]');
  const emptyTitle = emptyState ? emptyState.querySelector('[data-filter-empty-title]') : null;
  const emptyCopy = emptyState ? emptyState.querySelector('[data-filter-empty-copy]') : null;
  if (!pills.length) return;

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => {
        p.classList.remove('is-active');
        p.setAttribute('aria-pressed', 'false');
      });
      pill.classList.add('is-active');
      pill.setAttribute('aria-pressed', 'true');

      const filter = pill.dataset.filter;
      let visiblePublished = 0;

      cards.forEach(card => {
        const cardIndustry = card.dataset.industry || '';
        const shouldShow = filter === 'all' || cardIndustry === filter;

        if (shouldShow) {
          card.classList.remove('is-hidden');
          if ((card.dataset.state || 'published') === 'published') visiblePublished++;
        } else {
          card.classList.add('is-hidden');
        }
      });

      if (emptyState) {
        let operationalPublished = 0;
        let operationalRestricted = 0;

        operationalCards.forEach(card => {
          if (card.classList.contains('is-hidden')) return;
          if ((card.dataset.state || 'published') === 'published') {
            operationalPublished++;
          } else {
            operationalRestricted++;
          }
        });

        const shouldShowEmpty = filter !== 'all' && operationalPublished === 0;
        emptyState.hidden = !shouldShowEmpty;

        if (shouldShowEmpty && emptyTitle && emptyCopy) {
          if (operationalRestricted > 0) {
            emptyTitle.textContent = 'No hay casos publicados en esta categoría.';
            emptyCopy.textContent = 'Existen referencias bajo autorización comercial. Podemos revisarlas en una conversación ejecutiva según el tipo de activo y alcance.';
          } else if (visiblePublished > 0) {
            emptyTitle.textContent = 'No hay proyectos operativos publicados en esta categoría.';
            emptyCopy.textContent = 'Arriba queda disponible el caso estratégico relacionado. Podemos compartir referencias operativas bajo solicitud.';
          } else {
            emptyTitle.textContent = 'No hay casos publicados en esta categoría todavía.';
            emptyCopy.textContent = 'Podemos compartir referencias similares en una conversación ejecutiva según el tipo de activo y alcance del proyecto.';
          }
        }
      }
    });
  });
}

/* ─────────────────────────────────────────────
   2. SCROLL REVEAL — IntersectionObserver
   Classes: .pa-reveal, .pa-reveal-scale
   Stagger via data-delay attribute (ms)
───────────────────────────────────────────── */
function initReveal() {
  const revealEls = document.querySelectorAll('.pa-reveal, .pa-reveal-scale');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = parseInt(el.dataset.delay || 0, 10);

      setTimeout(() => {
        el.classList.add('is-visible');
      }, delay);

      observer.unobserve(el);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────────
   3. COUNT-UP ANIMATION
   Targets: .data-cell-value[data-count]
   Triggers on first viewport intersection
───────────────────────────────────────────── */
function initCountUp() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      countUp(el);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

function countUp(el) {
  const targetValue = parseFloat(el.dataset.count);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const startTime = performance.now();

  // Try to preserve original text structure if prefix/suffix are missing but exist in innerText
  let originalPrefix = prefix;
  let originalSuffix = suffix;
  const currentText = el.innerText;
  if (!prefix && currentText.startsWith('+')) originalPrefix = '+';
  if (!suffix && currentText.endsWith('%')) originalSuffix = '%';
  if (!suffix && currentText.includes(' años')) originalSuffix = ' años';

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Cubic ease out
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * targetValue);
    
    el.innerText = originalPrefix + current + originalSuffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.innerText = originalPrefix + targetValue + originalSuffix;
    }
  }

  requestAnimationFrame(update);
}

/* ─────────────────────────────────────────────
   4. BACK TO TOP
───────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─────────────────────────────────────────────
   5. CAROUSEL SCROLL — con estado prev/next
───────────────────────────────────────────── */
function initCarousel() {
  const wrappers = document.querySelectorAll('.carousel-wrapper');

  wrappers.forEach(wrapper => {
    const track    = wrapper.querySelector('.carousel-track');
    const prevBtn  = wrapper.querySelector('.carousel-prev');
    const nextBtn  = wrapper.querySelector('.carousel-next');
    if (!track || !prevBtn || !nextBtn) return;

    // Calcula el tamaño de scroll de un item (incl. gap de 24px)
    function getItemWidth() {
      const item = track.querySelector('.carousel-item');
      return item ? item.offsetWidth + 24 : 320;
    }

    // Actualiza estado disabled de botones
    function updateBtns() {
      const atStart = track.scrollLeft <= 4;
      const atEnd   = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
      prevBtn.disabled = atStart;
      nextBtn.disabled = atEnd;
    }

    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -getItemWidth(), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: getItemWidth(), behavior: 'smooth' });
    });

    track.addEventListener('scroll', updateBtns, { passive: true });

    // Estado inicial
    updateBtns();
  });
}

/* ─────────────────────────────────────────────
   6. HEADER SCROLL BEHAVIOUR
   Mirrors main.js logic for standalone pages
───────────────────────────────────────────── */
function initHeader() {
  const header = document.querySelector('.pa-header');
  if (!header) return;

  let lastY = 0;
  const SCROLL_THRESHOLD = 20;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > SCROLL_THRESHOLD) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastY = y;
  }, { passive: true });
}

/* ─────────────────────────────────────────────
   6. MOBILE MENU — reuse same pattern as main.js
───────────────────────────────────────────── */
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.querySelector('.close-drawer-btn');
  if (!btn || !drawer) return;

  const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
  drawer.setAttribute('aria-hidden', 'true');
  drawer.setAttribute('inert', '');

  const openDrawer = () => {
    drawer.classList.add('is-open');
    if (overlay) overlay.classList.add('is-visible', 'is-active');
    drawer.setAttribute('aria-hidden', 'false');
    drawer.removeAttribute('inert');
    document.body.style.overflow = 'hidden';
    btn.setAttribute('aria-expanded', 'true');
    const firstFocusable = closeBtn || drawer.querySelector(focusableSelector);
    if (firstFocusable) firstFocusable.focus();
  };

  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-visible', 'is-active');
    drawer.setAttribute('aria-hidden', 'true');
    drawer.setAttribute('inert', '');
    document.body.style.overflow = '';
    btn.setAttribute('aria-expanded', 'false');
    btn.focus();
  };

  btn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', e => {
    if (!drawer.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeDrawer();
    if (e.key !== 'Tab') return;

    const focusable = Array.from(drawer.querySelectorAll(focusableSelector));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ─────────────────────────────────────────────
   INIT
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initFilter();
  initReveal();
  initCountUp();
  initBackToTop();
  initCarousel();
  initHeader();
  initMobileMenu();
});
