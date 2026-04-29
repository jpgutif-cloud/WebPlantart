/* ============================================================
   PLANT ART — main.js
   Version: 3.0 Production (Brand Book Compliant)
   Functions: Header scroll, Mobile drawer, Scroll animations,
              Smooth scroll, Form handler, Project card touch
   ============================================================ */

(function () {
  'use strict';

  // ── 1. HEADER SCROLL EFFECT ──
  var header = document.querySelector('.pa-header');
  var SCROLL_THRESHOLD = 80;

  function handleHeaderScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add('pa-header--solid');
    } else {
      header.classList.remove('pa-header--solid');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // ── 2. MOBILE MENU DRAWER ──
  var menuBtn     = document.querySelector('.mobile-menu-btn');
  var drawer      = document.getElementById('mobile-drawer');
  var overlay     = document.querySelector('.mobile-drawer-overlay');
  var closeBtn    = document.querySelector('.close-drawer-btn');
  var drawerLinks = drawer.querySelectorAll('.nav-link');

  function openDrawer() {
    drawer.classList.add('is-open');
    overlay.classList.add('is-active');
    document.body.classList.add('drawer-open');
    menuBtn.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-active');
    document.body.classList.remove('drawer-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  menuBtn.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  // ── 3. SCROLL ANIMATIONS REMOVED (Conflicted with GSAP) ──

  // ── 4. SMOOTH SCROLL WITH DYNAMIC HEADER OFFSET ──
  function getHeaderHeight() {
    return header ? header.offsetHeight : 72;
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();

      var headerOffset = getHeaderHeight();
      var top = targetEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });

      // Update URL without triggering scroll
      history.pushState(null, '', targetId);
    });
  });

  // ── 5. FORM HANDLER ──
  var form        = document.getElementById('contactForm');
  var formSuccess = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validate required fields
      var nombre   = form.querySelector('#nombre');
      var empresa  = form.querySelector('#empresa');
      var correo   = form.querySelector('#correo');
      var proyecto = form.querySelector('#proyecto');
      var isValid  = true;

      [nombre, empresa, correo, proyecto].forEach(function (field) {
        if (!field.value.trim()) {
          field.style.borderColor = 'rgba(181,150,91,0.6)';
          isValid = false;
        } else {
          field.style.borderColor = '';
        }
      });

      // Email format check
      if (correo.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value)) {
        correo.style.borderColor = 'rgba(181,150,91,0.6)';
        isValid = false;
      }

      if (!isValid) return;

      // Show loading state
      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      // Simulate submission (replace with Formspree/real endpoint)
      setTimeout(function () {
        form.style.display = 'none';
        formSuccess.classList.add('is-visible');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1200);
    });

    // Clear validation on input
    form.querySelectorAll('.pa-input, .pa-textarea').forEach(function (input) {
      input.addEventListener('input', function () {
        this.style.borderColor = '';
      });
    });
  }

  // ── 6. PROJECT CARD TOUCH SUPPORT ──
  if ('ontouchstart' in window) {
    document.querySelectorAll('.pa-project-card').forEach(function (card) {
      card.addEventListener('click', function (e) {
        var cardOverlay = this.querySelector('.project-card-overlay');
        var isActive = cardOverlay.style.opacity === '1';

        // Reset all cards
        document.querySelectorAll('.pa-project-card .project-card-overlay').forEach(function (o) {
          o.style.opacity = '';
        });

        if (!isActive) {
          e.preventDefault();
          cardOverlay.style.opacity = '1';
        }
      });
    });
  }

})();
