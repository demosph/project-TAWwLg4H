let button = document.getElementById('scroll-to-top');
function scrollStep() {
  let o = document.documentElement.scrollTop || document.body.scrollTop,
    t = o - o;
  window.scrollTo(0, t),
    t > 0 ? window.requestAnimationFrame(scrollStep) : console.log('up');
}
button.addEventListener('click', function (o) {
  o.preventDefault();
  (document.documentElement.scrollTop || document.body.scrollTop) > 0 &&
    window.requestAnimationFrame(scrollStep);
});
