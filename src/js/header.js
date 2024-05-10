const header = document.querySelector('.js-header');
const main = document.querySelector('main');
const headerScrollClass = 'is-scrolling';

const toggleHeaderScrollingClass = (isPageScrolled) => {
  if (isPageScrolled) {
    header.classList.add(headerScrollClass);
  } else {
    header.classList.remove(headerScrollClass);
  }
}

const toggleMainScrollingStyles = (isPageScrolled) => {
  if (isPageScrolled) {
    main.style.marginTop = `${header.offsetHeight}px`;
  } else {
    main.style.marginTop = 0;
  }
}

const scrollHandler = () => {
  const isPageScrolled = window.scrollY > header.offsetTop;
  toggleHeaderScrollingClass(isPageScrolled);
  toggleMainScrollingStyles(isPageScrolled);
};

document.addEventListener('DOMContentLoaded', () =>  {
  scrollHandler();

  document.addEventListener('scroll', scrollHandler);
});