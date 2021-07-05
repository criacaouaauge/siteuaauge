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
  [...anchors].forEach(
    (anchor) =>
      (anchor.onclick = () =>
        globalThis.routeChange(anchor.hash.replace('#', '')))
  );
}, 50);

globalThis.loadHome = () => {
  setTimeout(() => {
    const bannerFrases = document.getElementById('banner-frases');
    const carrousel = document.getElementById('carrousel');
    const bannerInferior = document.getElementById('banner-inferior');
    const solucoes = document.getElementById('solucoes');
    const plano = document.getElementById('plano');
    const portfolio = document.getElementById('portfolio');

    const elements = [
      {
        path: 'components/banner_frases.html',
        el: bannerFrases,
      },
      {
        path: 'components/banner_inferior.html',
        el: bannerInferior,
      },
      {
        path: 'components/carrousel.html',
        el: carrousel,
      },
      {
        path: 'components/solucoes.html',
        el: solucoes,
      },
      {
        path: 'components/plano.html',
        el: plano,
      },
      {
        path: 'components/portfolio.html',
        el: portfolio,
      },
    ];

    elements.forEach((e) => globalThis.loadContent(e.path, e.el));

    setTimeout(() => {
      $(document).ready(function () {
        $('.banner-frases').slick({
          autoplay: true,
          autoplaySpeed: 5000,
        });
      });
    }, 50);
  }, 50);
};

if (route === 'home') {
  globalThis.loadHome();
}
