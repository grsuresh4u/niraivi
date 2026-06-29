/* =============================================
   NIRAIVI — main.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ── NAV SCROLL STATE ──────────────────────────
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── MOBILE MENU ───────────────────────────────
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');
  const mobileClose = document.querySelector('.nav-mobile-close');

  hamburger?.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileClose?.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  // ── SCROLL REVEAL ─────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));

  // ── DRAGGABLE SCROLL TRACK ────────────────────
  const track = document.querySelector('.drape-scroll-track');
  if (track) {
    let isDown = false, startX, scrollLeft;

    track.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    track.addEventListener('mouseleave', () => { isDown = false; });
    track.addEventListener('mouseup', () => { isDown = false; });
    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.4;
      track.scrollLeft = scrollLeft - walk;
    });
  }

  // ── NEWSLETTER FORM ───────────────────────────
  const form = document.querySelector('.newsletter-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    const btn = form.querySelector('button');
    if (input.value.includes('@')) {
      btn.textContent = 'Subscribed ✓';
      btn.style.background = '#5A9A7A';
      input.value = '';
      setTimeout(() => {
        btn.textContent = 'Subscribe';
        btn.style.background = '';
      }, 3000);
    }
  });

  // ── SMOOTH ANCHOR SCROLL ──────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
