/* =============================================
   NIRAIVI — main.js
   ============================================= */

/* ── CONTACT DETAILS ──────────────────────────
   Every WhatsApp, Instagram and email link on the site is filled in
   from here, so these are the only lines to change.
   whatsapp:  country code + number, digits only (e.g. 919876543210)
   instagram: handle without the @
   ─────────────────────────────────────────── */
const NIRAIVI_CONTACT = {
  whatsapp: '919677574259',
  instagram: 'niraivi_the_label',
  email: 'susithra.141@gmail.com',
};

document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {

  // ── CONTACT LINKS ─────────────────────────────
  // <a data-contact="whatsapp" data-message="...">, data-contact="instagram" or "email".
  // Links whose detail is not set yet fall back to the contact section.
  const { whatsapp, instagram, email } = NIRAIVI_CONTACT;
  document.querySelectorAll('[data-contact]').forEach(link => {
    const type = link.dataset.contact;
    let href = '';
    if (type === 'whatsapp' && whatsapp) {
      const message = link.dataset.message || 'Hello Niraivi, I would like to know more about your Kanchipuram silk sarees.';
      href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
    } else if (type === 'instagram' && instagram) {
      href = `https://www.instagram.com/${instagram}/`;
    } else if (type === 'email' && email) {
      href = `mailto:${email}`;
    }
    if (href) {
      link.href = href;
      if (type !== 'email') { link.target = '_blank'; link.rel = 'noopener'; }
    } else {
      link.href = document.getElementById('contact') ? '#contact' : 'index.html#contact';
    }
  });

  // ── MOBILE MENU ───────────────────────────────
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-mobile');
  const close = document.querySelector('.nav-mobile-close');
  const setMenu = open => {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) close.focus(); else toggle.focus();
  };
  toggle?.addEventListener('click', () => setMenu(true));
  close?.addEventListener('click', () => setMenu(false));
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu?.classList.contains('open')) setMenu(false);
  });

  // ── SCROLL REVEAL ─────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // ── COLLECTION FILTERS ────────────────────────
  // Filter by occasion; products.html#bridal opens with that filter applied.
  const filterBtns = document.querySelectorAll('.filter-btn');
  const products = document.querySelectorAll('.product');
  if (filterBtns.length) {
    const applyFilter = filter => {
      if (![...filterBtns].some(b => b.dataset.filter === filter)) filter = 'all';
      filterBtns.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === filter)));
      products.forEach(p => {
        p.hidden = filter !== 'all' && !p.dataset.occasion.split(' ').includes(filter);
      });
    };
    filterBtns.forEach(btn => btn.addEventListener('click', () => {
      applyFilter(btn.dataset.filter);
      history.replaceState(null, '', btn.dataset.filter === 'all' ? location.pathname : `#${btn.dataset.filter}`);
    }));
    applyFilter(location.hash.slice(1) || 'all');
  }

});
