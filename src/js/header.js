const header = document.querySelector('.js-header');
const main = document.querySelector('main');
const headerScrollClass = 'is-scrolling';

const scrollHandler = () => {
  if (window.scrollY > header.offsetTop) {
    header.classList.add(headerScrollClass);
    main.style.marginTop = `${header.offsetHeight}px`;
  } else {
    header.classList.remove(headerScrollClass);
    main.style.marginTop = 0;
  }
};

document.addEventListener('DOMContentLoaded', () =>  {
  document.addEventListener('scroll', scrollHandler);
});