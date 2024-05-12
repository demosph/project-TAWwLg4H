(() => {
  let e = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  function l() {
    e.modal.classList.toggle('is-hidden');
  }
  e.openModalBtn.addEventListener('click', l),
    e.closeModalBtn.addEventListener('click', l);
})();
