const header = document.querySelector('.js-header'),
  main = document.querySelector('main'),
  headerScrollClass = 'is-scrolling',
  toggleHeaderScrollingClass = e => {
    e
      ? header.classList.add(headerScrollClass)
      : header.classList.remove(headerScrollClass);
  },
  toggleMainScrollingStyles = e => {
    e
      ? (main.style.marginTop = `${header.offsetHeight}px`)
      : (main.style.marginTop = 0);
  },
  scrollHandler = () => {
    let e = window.scrollY > header.offsetTop;
    toggleHeaderScrollingClass(e), toggleMainScrollingStyles(e);
  };
document.addEventListener('DOMContentLoaded', () => {
  scrollHandler(), document.addEventListener('scroll', scrollHandler);
});
