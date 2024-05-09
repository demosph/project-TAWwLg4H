const header = document.querySelector('.js-header');
const main = document.querySelector('main');
const headerScrollClass = 'is-scrolling';

const scrollHandler = () => {
  if (window.scrollY > header.offsetTop) {
    header.classList.add(headerScrollClass);
    main.style.transform = `translateY(${header.offsetHeight}px)`;
  } else {
    header.classList.remove(headerScrollClass);
    main.style.transform = 'translateY(0)';
  }
};

document.addEventListener('DOMContentLoaded', () =>  {
  document.addEventListener('scroll', scrollHandler);
});