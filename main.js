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
  var drawer      = document.getElementById('mobile-drawer') || document.querySelector('.mobile-drawer');
  var overlay     = document.querySelector('.mobile-drawer-overlay');
  var closeBtn    = document.querySelector('.close-drawer-btn');
  var drawerLinks = drawer ? drawer.querySelectorAll('.nav-link') : [];

  function openDrawer() {
    if (!drawer || !overlay || !menuBtn || !closeBtn) return;
    drawer.classList.add('is-open');
    overlay.classList.add('is-active');
    document.body.classList.add('drawer-open');
    menuBtn.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
  }

  function closeDrawer() {
    if (!drawer || !overlay || !menuBtn) return;
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-active');
    document.body.classList.remove('drawer-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('is-open')) {
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

  // ── 7. SERVICE SELECTOR ──
  var serviceSelector = document.querySelector('[data-service-selector]');

  if (serviceSelector) {
    var featuredCard = serviceSelector.querySelector('.pa-service-card.protagonist');
    var kicker = serviceSelector.querySelector('[data-service-kicker]');
    var title = serviceSelector.querySelector('[data-service-title]');
    var description = serviceSelector.querySelector('[data-service-description]');
    var pointsList = serviceSelector.querySelector('[data-service-points]');
    var image = serviceSelector.querySelector('[data-service-image]');
    var buttons = serviceSelector.querySelectorAll('[data-service-button]');

    var services = [
      {
        kicker: '01. Jardines Verticales',
        title: 'Sistemas vivos integrados a la arquitectura.',
        description: 'Diseñamos e instalamos muros verdes con tecnología hidropónica avanzada, integrando estructura, riego, selección botánica y mantención para proyectos de alto estándar.',
        image: 'assets/images/starbucksmuro.webp',
        alt: 'Jardín vertical exterior con vegetación integrada y operación Plant Art',
        points: [
          'Sistema Telmadermi y soluciones hidropónicas.',
          'Aporte a estrategias de certificación LEED.',
          'Mantención especializada para operación continua.'
        ]
      },
      {
        kicker: '02. Interiorismo Vegetal',
        title: 'Diseño botánico para espacios internos.',
        description: 'Creamos atmósferas interiores con vegetación seleccionada para luz, flujo de personas, mantenimiento y experiencia de marca en halls, oficinas, clínicas y espacios comerciales.',
        image: 'assets/images/interiorplantas.webp',
        alt: 'Interiorismo vegetal con macetero de plantas en oficina corporativa',
        points: [
          'Selección de especies según luz y uso del espacio.',
          'Maceteros, jardineras y composiciones a medida.',
          'Mantención discreta para espacios en operación.'
        ]
      },
      {
        kicker: '03. Paisajismo Comercial',
        title: 'Diseño y mantención a gran escala.',
        description: 'Planificamos, ejecutamos y mantenemos paisajismo para centros comerciales, desarrollos inmobiliarios y activos de alta afluencia, cuidando imagen, seguridad y continuidad operacional.',
        image: 'assets/images/PAK/parque-arauco-kennedy-paisajismo-corporativo-01.webp',
        alt: 'Paisajismo comercial de gran escala operado por Plant Art',
        points: [
          'Diseño coherente con arquitectura y recorrido del visitante.',
          'Operación programada para temporadas y eventos.',
          'Supervisión técnica y respuesta ante contingencias.'
        ]
      },
      {
        kicker: '04. Riego Automatizado',
        title: 'Precisión y eficiencia hídrica.',
        description: 'Implementamos sistemas de riego sectorizados y automatizados para asegurar salud vegetal, control de consumo y operación confiable en interiores, exteriores y muros verdes.',
        image: 'assets/images/riegoautomatizado.webp',
        alt: 'Sistema de riego automatizado con red de tuberías y especies vegetales',
        points: [
          'Programación por sector, exposición y tipo de especie.',
          'Optimización de consumo hídrico y reposiciones.',
          'Revisión técnica preventiva del sistema.'
        ]
      },
      {
        kicker: '05. Techos Vegetales',
        title: 'Cubiertas biológicas urbanas.',
        description: 'Desarrollamos cubiertas vegetales que aportan aislación, manejo térmico, biodiversidad urbana y valor arquitectónico en proyectos inmobiliarios y corporativos.',
        image: 'assets/images/muros-y-techos-verdes/muros-techos-verdes-paisajismo-corporativo-02.webp',
        alt: 'Techo vegetal y cubierta biológica urbana Plant Art',
        points: [
          'Soluciones para cubiertas extensivas e intensivas.',
          'Sustratos, drenaje y especies según carga y exposición.',
          'Mantención para estabilidad vegetal de largo plazo.'
        ]
      },
      {
        kicker: '06. Arriendo de Muros Verdes',
        title: 'Muros verdes temporales para eventos y marcas.',
        description: 'Arrendamos muros verdes modulares para eventos corporativos, ferias, lanzamientos, activaciones de marca y espacios comerciales temporales que necesitan presencia vegetal inmediata, elegante y sin obra permanente.',
        image: 'assets/images/muros-y-techos-verdes/arriendo-muro-verde-evento.webp',
        alt: 'Muro verde modular instalado en evento corporativo Plant Art',
        points: [
          'Instalación y retiro coordinados según horario del evento.',
          'Formato modular adaptable a backdrops, accesos y zonas de experiencia.',
          'Solución visual premium sin intervenir la infraestructura del recinto.'
        ]
      }
    ];

    function renderService(index, shouldScroll) {
      var service = services[index];
      if (!service) return;

      featuredCard.classList.add('is-updating');

      window.setTimeout(function () {
        kicker.textContent = service.kicker;
        title.textContent = service.title;
        description.textContent = service.description;
        image.src = service.image;
        image.alt = service.alt;

        pointsList.innerHTML = '';
        service.points.forEach(function (point) {
          var item = document.createElement('li');
          item.textContent = point;
          pointsList.appendChild(item);
        });

        buttons.forEach(function (button) {
          var isActive = button.getAttribute('data-service-index') === String(index);
          button.classList.toggle('is-active', isActive);
          button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });

        featuredCard.classList.remove('is-updating');

        if (shouldScroll && window.matchMedia('(max-width: 767px)').matches) {
          var top = featuredCard.getBoundingClientRect().top + window.pageYOffset - getHeaderHeight() - 16;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      }, 140);
    }

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        renderService(Number(button.getAttribute('data-service-index')), true);
      });
    });
  }

})();
