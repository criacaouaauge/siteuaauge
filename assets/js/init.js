const html = document.getElementsByTagName('html')[0];
html.classList.add('js');

scripts = {
  timeline: {
    src: '/assets/js/libs/timeline.js',
    loaded: false,
  },
  util: {
    src: '/assets/js/libs/util.js',
    loaded: false,
  },
  swipeContent: {
    src: '/assets/js/libs/swipe-content.js',
    loaded: false,
  },
  emailjs: {
    src: 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js',
    loaded: false,
  },
};

function addScript(script) {
  const s = document.createElement('script');
  s.setAttribute('src', script.src);
  s.setAttribute('defer', true);
  document.body.appendChild(s);
  script.loaded = true;
}

globalThis.loadContent = async function loadContent(page, element) {
  const response = await fetch(page);
  const content = await response.text();

  element.innerHTML = content;
};

globalThis.pageSwitch = (path) => {
  switch (path) {
    case 'home':
      globalThis.loadHome();
      break;

    case 'contato':
      addScript(scripts.emailjs);
      setTimeout(() => {
        emailjs.init('user_D22MEyG5L6u4TaPclLogo');

        const btn = document.getElementById('emailjs-btn');

        const contactForm = document.getElementById('emailjs-form');

        contactForm.addEventListener('submit', function (event) {
          event.preventDefault();

          btn.value = 'Enviando mensagem';

          const serviceID = 'default_service';
          const templateID = 'template_evngqlp';

          emailjs.sendForm(serviceID, templateID, this).then(
            () => {
              btn.value = 'Enviar';
              alert('Mensagem enviada');
            },
            (err) => {
              btn.value = 'Enviar';
              console.log(err);
            }
          );
        });
      }, 50);
      break;

    case 'espaco':
      setTimeout(() => {
        $('.fotos-eventos-parceiros').slick({
          slidesToShow: 5,
          slidesToScroll: 5,
          autoplay: true,
          autoplaySpeed: 2000,
        });

        addScript(scripts.util);
        addScript(scripts.swipeContent);
        addScript(scripts.timeline);
      }, 100);
      break;
  }
};

globalThis.routeChange = (anchor) => {
  const activeItem = document.getElementsByClassName('navbar__item active')[0];

  if (activeItem) {
    activeItem.classList.remove('active');
  }

  const path = anchor.hash.replace('#', '');
  const content = document.getElementById('content');

  anchor.classList.add('active');
  globalThis.loadContent(`pages/${path}.html`, content);
  globalThis.pageSwitch(path);
};
