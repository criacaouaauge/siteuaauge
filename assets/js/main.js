const header = document.getElementById('header');
const content = document.getElementById('content');
const cookie = document.getElementById('cookie');
const footer = document.getElementById('footer');

const route = window.location.hash.replace('#', '') || 'home';

globalThis.loadContent('components/navbar.html', header);
globalThis.loadContent(route === 'artigo' ? `pages/blog/${route}.html` : `pages/${route}.html`, content);
globalThis.loadContent('components/cookie.html', cookie);
globalThis.loadContent('components/footer.html', footer);

globalThis.loadHome = () => {
  setTimeout(() => {
    $('.banner-frases').slick({
      autoplay: true,
      autoplaySpeed: 5000,
    });
  }, 200);
};

globalThis.initSlick = (element, options) => {
  setTimeout(() => {
    $(element).slick(options);
  }, 300);
};

globalThis.pageSwitch(route);

window.addEventListener(
  'popstate',
  function () {
    const route = location.hash.replace('#', '');
    globalThis.loadContent(route === 'artigo' ? `pages/blog/${route}.html` : `pages/${route}.html`, content);
    globalThis.pageSwitch(route);
  },
  false
);
