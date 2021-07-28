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
    $('.owl-carousel').owlCarousel({
      items: 1,
      center: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 7000,
    });
    AOS.init({
      duration: 1200,
    })
  }, 200);
};

globalThis.initSlick = (element, options) => {
  setTimeout(() => {
    $('.banner-home').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
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

globalThis.anchorClick = (event, anchor) => {
  event.preventDefault();

  const hash = anchor.href.split('#')[1];

  const item = document.getElementById(hash);
  const { top } = item.getBoundingClientRect();
  window.scrollBy(0, top);
};
