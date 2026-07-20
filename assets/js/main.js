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
    '.section-heading', '.update-card',
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

  // ---- HLS hero video ----
  var heroVideo = document.querySelector('.hero-video[data-hls]');
  if (heroVideo) {
    var src = heroVideo.getAttribute('data-hls');
    var tryPlay = function () {
      var p = heroVideo.play();
      if (p && p.catch) { p.catch(function () {}); }
    };
    if (heroVideo.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS (Safari / iOS)
      heroVideo.src = src;
      heroVideo.addEventListener('loadedmetadata', tryPlay);
    } else if (window.Hls && window.Hls.isSupported()) {
      var hls = new window.Hls({ enableWorker: false });
      hls.loadSource(src);
      hls.attachMedia(heroVideo);
      hls.on(window.Hls.Events.MANIFEST_PARSED, tryPlay);
    }
  }

  // ---- Countdown to 09:00 28/07/2026 Vietnam time (UTC+7) ----
  var cdTarget = new Date('2026-07-28T09:00:00+07:00').getTime();
  var cdEls = {
    days: document.getElementById('cdDays'),
    hours: document.getElementById('cdHours'),
    mins: document.getElementById('cdMins'),
    secs: document.getElementById('cdSecs')
  };
  var cdBar = document.getElementById('countdownBar');
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function tickCountdown() {
    if (!cdEls.days) return;
    var diff = cdTarget - Date.now();
    if (diff <= 0) {
      if (cdBar) cdBar.classList.add('is-live');
      cdEls.days.textContent = '00';
      cdEls.hours.textContent = '00';
      cdEls.mins.textContent = '00';
      cdEls.secs.textContent = '00';
      var lbl = cdBar && cdBar.querySelector('.countdown-label');
      if (lbl && !cdBar.dataset.live) {
        cdBar.dataset.live = '1';
        lbl.innerHTML = '<span aria-hidden="true" class="pulse-dot"></span>TNE AI 2026 đang diễn ra · 28–29/07/2026';
      }
      return;
    }
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);
    cdEls.days.textContent = pad(d);
    cdEls.hours.textContent = pad(h);
    cdEls.mins.textContent = pad(m);
    cdEls.secs.textContent = pad(s);
  }
  tickCountdown();
  setInterval(tickCountdown, 1000);

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
