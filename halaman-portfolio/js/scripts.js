(function () {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;

  const hamburgerButton = document.querySelector('#hamburger-btn');
  hamburgerButton.addEventListener('click', (event) => {
    document.querySelector('ul.nav-items').classList.toggle('active');
  });

  window.addEventListener('resize', (event) => {
    if (window.innerWidth > 768) {
      document.querySelector('ul.nav-items').classList.remove('active');
    }
  });

  document.addEventListener('scroll', (event) => {
    if (window.scrollY > 0) {
      header.querySelector('.navbar-wrapper').classList.add('scrolled');
    } else {
      header.querySelector('.navbar-wrapper').classList.remove('scrolled');
    }
  });
})();
