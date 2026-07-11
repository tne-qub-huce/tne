/* TNE — motion + liquid glass interactions */
(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var bar = document.getElementById('progressBar');
  var video = document.querySelector('.hero-video');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    if (bar) bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    if (video && !reduced && h.scrollTop < window.innerHeight * 1.2) {
      video.style.transform = 'scale(1.03) translate3d(0,' + Math.min(h.scrollTop * 0.08, 54) + 'px,0)';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var selector = [
    '.section-heading', '.update-card', '.register-copy', '.register-panel',
    '.partner-strip > div', '.feature-card', '.team-group-title', '.team-card',
    '.team-gratitude', '.event-top', '.support-banner', '.event-main', '.event-side',
    '.schedule-grid article', '.module-card', '.topics-detail', '.modules-cta',
    '.timeline li', '.outcomes article', '.faq details', '.footer-grid > div'
  ].join(',');
  var targets = document.querySelectorAll(selector);
  targets.forEach(function (el, i) {
    el.classList.add('reveal');
    el.style.transitionDelay = Math.min((i % 4) * 55, 165) + 'ms';
  });

  if ('IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.09, rootMargin: '0px 0px -4% 0px' });
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add('visible'); });
  }
})();
