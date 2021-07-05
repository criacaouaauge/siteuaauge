const header = document.getElementById('header');
const content = document.getElementById('content');
const cookie = document.getElementById('cookie');
const footer = document.getElementById('footer');

const route = window.location.hash.replace('#', '') || 'home';

globalThis.loadContent('components/navbar.html', header);
globalThis.loadContent(`pages/${route}.html`, content);
globalThis.loadContent('components/cookie.html', cookie);
globalThis.loadContent('components/footer.html', footer);

setTimeout(() => {
  const anchors = document.getElementsByClassName('navbar__item');
  [...anchors].forEach((anchor) => (anchor.onclick = () => globalThis.routeChange(anchor)));
}, 50);

globalThis.loadHome = () => {
  setTimeout(() => {
    jQuery(function () {
      $('.banner-frases').slick({
        autoplay: true,
        autoplaySpeed: 5000,
      });
    });
  }, 50);
};

if (route === 'home') {
  globalThis.loadHome();
}
