(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const mobileMenuBackdrop = document.querySelector('.js-menu-backdrop');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileMenuLinks = [...document.getElementsByClassName('mobile-menu-link')];

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    mobileMenuBackdrop.classList.toggle('is-open');

    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', toggleMenu);
  })

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
})();
