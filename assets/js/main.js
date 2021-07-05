const header = document.getElementById('header');
const content = document.getElementById('content');
const cookie = document.getElementById('cookie');
const footer = document.getElementById('footer');

const route = window.location.hash.replace('#', '') || 'home';

globalThis.loadContent('components/navbar.html', header);
globalThis.loadContent(route === 'artigo' ? `pages/blog/${route}.html` : `pages/${route}.html`, content);
globalThis.loadContent('components/cookie.html', cookie);
globalThis.loadContent('components/footer.html', footer);

setTimeout(() => {
  const anchors = document.getElementsByClassName('navbar__item');
  [...anchors].forEach((anchor) => {
    anchor.onclick = () => globalThis.routeChange(anchor);

    if (anchor.hash === `#${route}`) {
      anchor.classList.add('active');
    }
  });
}, 50);

globalThis.loadHome = () => {
  setTimeout(() => {
    $('.banner-frases').slick({
      autoplay: true,
      autoplaySpeed: 5000,
    });
  }, 200);
};

globalThis.pageSwitch(route);

window.addEventListener('popstate', function () {
  const route = location.hash.replace('#', '');
  globalThis.loadContent(route === 'artigo' ? `pages/blog/${route}.html` : `pages/${route}.html`, content);
  globalThis.pageSwitch(route);
});
