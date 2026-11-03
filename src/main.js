(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }
})();

(() => {
  const contactForm = document.querySelector('.form-contact');
  if (!contactForm) return;

  // Keep the page from reloading and the entered data out of the URL
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    alert('Thank you! We will contact you soon.');
    contactForm.reset();
  });
})();
