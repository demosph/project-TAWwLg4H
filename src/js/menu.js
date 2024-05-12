(() => {
  let e = document.querySelector('.js-menu-container'),
    t = document.querySelector('.js-menu-backdrop'),
    s = document.querySelector('.js-open-menu'),
    n = document.querySelector('.js-close-menu'),
    a = [...document.getElementsByClassName('mobile-menu-link')],
    i = () => {
      let n = 'true' === s.getAttribute('aria-expanded');
      s.setAttribute('aria-expanded', !n),
        e.classList.toggle('is-open'),
        t.classList.toggle('is-open'),
        (document.body.style.overflow = n ? 'auto' : 'hidden');
    };
  s.addEventListener('click', i),
    n.addEventListener('click', i),
    a.forEach(e => {
      e.addEventListener('click', i);
    }),
    window.matchMedia('(min-width: 768px)').addEventListener('change', t => {
      t.matches &&
        (e.classList.remove('is-open'), s.setAttribute('aria-expanded', !1));
    });
})();
