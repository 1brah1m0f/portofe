/* ============================================================
   Şıxı İbrahimov — portfolio behaviour
   No dependencies. Progressive enhancement: all content is in
   the HTML, this file only adds theme, language, motion and
   filtering on top.
   ============================================================ */
(function () {
  'use strict';

  var root  = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- theme ---------------- */
  var themeBtn = document.getElementById('themeBtn');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeBtn) themeBtn.setAttribute('aria-pressed', String(theme === 'dark'));
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#070a12' : '#f7f8fc');
  }

  var savedTheme = store.get('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light');
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      store.set('theme', next);
    });
  }

  /* ---------------- language (az / en) ---------------- */
  var langBtn   = document.getElementById('langBtn');
  var langLabel = document.getElementById('langLabel');
  var i18nNodes = Array.prototype.slice.call(document.querySelectorAll('[data-en]'));

  // Snapshot the Azerbaijani source text once, so switching is lossless.
  i18nNodes.forEach(function (el) {
    if (!el.hasAttribute('data-az')) el.setAttribute('data-az', el.innerHTML.trim());
  });

  var ROLES = {
    az: ['Full-Stack Developer', 'AI və Data Science həvəskarı', 'AWS Student Builder lideri', '6 dəfə hakaton mükafatçısı'],
    en: ['Full-Stack Developer', 'AI & Data Science Enthusiast', 'AWS Student Builder Group Lead', '6× hackathon podium finisher']
  };

  var lang = store.get('lang') === 'en' ? 'en' : 'az';

  function applyLang(next) {
    lang = next;
    root.setAttribute('lang', next);
    i18nNodes.forEach(function (el) {
      var html = el.getAttribute(next === 'en' ? 'data-en' : 'data-az');
      if (html !== null) el.innerHTML = html;
    });
    if (langLabel) langLabel.textContent = next === 'en' ? 'AZ' : 'EN';
    if (langBtn) {
      langBtn.setAttribute('aria-label', next === 'en'
        ? 'Switch to Azerbaijani / Azərbaycan dilinə keç'
        : 'Switch to English / İngilis dilinə keç');
    }
    startTyping();
  }

  if (langBtn) {
    langBtn.addEventListener('click', function () {
      var next = lang === 'en' ? 'az' : 'en';
      applyLang(next);
      store.set('lang', next);
    });
  }

  /* ---------------- typed role ---------------- */
  var typedEl = document.getElementById('typedRole');
  var typeTimer = null;

  function startTyping() {
    if (!typedEl) return;
    if (typeTimer) { clearTimeout(typeTimer); typeTimer = null; }

    var list = ROLES[lang];

    if (reduceMotion) { typedEl.textContent = list[0]; return; }

    var i = 0, pos = 0, deleting = false;

    (function tick() {
      var word = list[i];
      typedEl.textContent = word.slice(0, pos);

      var delay;
      if (!deleting) {
        pos++;
        delay = 62;
        if (pos > word.length) { deleting = true; delay = 1750; }
      } else {
        pos--;
        delay = 28;
        if (pos === 0) { deleting = false; i = (i + 1) % list.length; delay = 340; }
      }
      typeTimer = setTimeout(tick, delay);
    })();
  }

  /* ---------------- mobile menu ---------------- */
  var burger   = document.getElementById('burger');
  var navLinks = document.getElementById('navLinks');

  function closeMenu() {
    if (!burger || !navLinks) return;
    navLinks.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      var open = navLinks.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
      // lock the page behind the panel so the menu can't scroll away underneath
      document.body.classList.toggle('menu-open', open);
    });
    navLinks.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', function (e) {
      if (!navLinks.classList.contains('is-open')) return;
      if (navLinks.contains(e.target) || burger.contains(e.target)) return;
      closeMenu();
    });
  }

  /* ---------------- nav state + scroll progress ---------------- */
  var nav      = document.getElementById('nav');
  var bar      = document.getElementById('scrollBar');
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  var links    = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
  var ticking  = false;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;

    if (nav) nav.classList.toggle('is-stuck', y > 8);

    if (bar) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + '%';
    }

    // active nav link: the last section whose top is above the nav line
    var line = y + 130, current = null;
    sections.forEach(function (sec) {
      if (sec.offsetTop <= line) current = sec.id;
    });
    links.forEach(function (a) {
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + current);
    });

    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  /* ---------------- reveal on scroll ---------------- */
  var revealables = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        // stagger siblings a little so grids cascade instead of popping
        var sibs = Array.prototype.slice.call(el.parentNode.children);
        var idx  = Math.min(sibs.indexOf(el), 6);
        setTimeout(function () { el.classList.add('is-in'); }, idx * 70);
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    revealables.forEach(function (el) { io.observe(el); });
  }

  /* ---------------- counters ---------------- */
  var counters = Array.prototype.slice.call(document.querySelectorAll('.counter'));

  function runCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';

    if (reduceMotion) { el.textContent = target + suffix; return; }

    var start = null, dur = 1150;
    function frame(ts) {
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) window.requestAnimationFrame(frame);
    }
    window.requestAnimationFrame(frame);
  }

  if (!('IntersectionObserver' in window)) {
    counters.forEach(runCounter);
  } else {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        runCounter(entry.target);
        cio.unobserve(entry.target);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ---------------- project filter ---------------- */
  var filterBtns = Array.prototype.slice.call(document.querySelectorAll('.chip-btn'));
  var projects   = Array.prototype.slice.call(document.querySelectorAll('.proj'));

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');

      filterBtns.forEach(function (b) { b.classList.toggle('is-active', b === btn); });

      projects.forEach(function (card) {
        var tags = (card.getAttribute('data-tags') || '').split(/\s+/);
        var show = filter === 'all' || tags.indexOf(filter) !== -1;
        card.classList.toggle('is-hidden', !show);
        if (show) {
          card.classList.remove('is-in');
          // re-run the entry animation for the newly shown cards
          window.requestAnimationFrame(function () { card.classList.add('is-in'); });
        }
      });
    });
  });

  /* ---------------- misc ---------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  if (lang === 'en') applyLang('en'); else applyLang('az');
  onScroll();
})();
