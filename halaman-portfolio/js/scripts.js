(function () {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;

  const hamburgerButton = document.querySelector('#hamburger-btn');
  hamburgerButton.addEventListener('click', (event) => {
    document.querySelector('ul.nav-items').classList.toggle('active');
  });
})();
