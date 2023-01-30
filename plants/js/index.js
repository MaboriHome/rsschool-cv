
let queue = [];
const serviceBtn = document.querySelector('.wrap_btns');


serviceBtn.addEventListener('click', (evt) => {
  if (evt.target.id) {

    if (queue.includes(evt.target.id)) {
      let index = queue.indexOf(evt.target.id);
      queue.splice(index, 1);
    } else {
      queue.push(evt.target.id);
    }

    if (queue.length === 3) {
      queue.shift();
    }
    document.querySelectorAll('.service__list_item')
      .forEach((item) => item.classList.add('service__list_item-blur'));

    document.querySelectorAll('.service__nav_btn')
      .forEach((item) => item.classList.remove('service__nav_btn-focus'));

    queue.forEach((quItem) => document.querySelectorAll(`.service__list_item-${quItem}`)
      .forEach((item) => item.classList.remove('service__list_item-blur')));

    queue.forEach((item) => document.querySelector(`.btn-${item}`)
      .classList.add('service__nav_btn-focus'))
  }
});




(function () {
  const burgerItem = document.querySelector('div.burger');
  const menu = document.querySelector('nav.nav');
  const menuCloseItem = document.querySelector('div.nav-close');
  const menuLinks = document.querySelectorAll('a.nav-link');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('nav-active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('nav-active');
  });
  if (window.innerWidth < 798) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener('click', () => {
        menu.classList.remove('nav-active');
      });
    }
  }
}());

(function () {

  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector('header.header').clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);

  };

  const scrollTo = function () {
    const links = document.querySelectorAll('a.js-scroll');
    links.forEach(each => {
      each.addEventListener('click', function () {
        const currentTarget = this.getAttribute('href');
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
}());


const priceBasics = document.getElementById("myDropdown-basics");
const priceStandard = document.getElementById('myDropdown-standard');
const priceProCare = document.getElementById('myDropdown-procare');
const priceBtnBasics = document.querySelector('.item-1');
const priceBtnStandard = document.querySelector('.item-2');
const priceBtnProcare = document.querySelector('.item-3');

priceBtnBasics.addEventListener('click', (evt) => {
  evt.preventDefault;
  priceStandard.classList.remove('show');
  priceProCare.classList.remove('show');
  priceBasics.classList.toggle('show');
});

priceBtnStandard.addEventListener('click', (evt) => {
  evt.preventDefault;
  priceProCare.classList.remove('show');
  priceBasics.classList.remove('show');
  priceStandard.classList.toggle('show');
});

priceBtnProcare.addEventListener('click', (evt) => {
  evt.preventDefault;
  priceBasics.classList.remove('show');
  priceStandard.classList.remove('show');
  priceProCare.classList.toggle('show');
});

priceBasics.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (evt.target.tagName !== "A") {
    priceBasics.classList.toggle('show');
  }
});

priceStandard.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (evt.target.tagName !== "A") {
    priceStandard.classList.toggle('show');
  }
});

priceProCare.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (evt.target.tagName !== "A") {
    priceProCare.classList.toggle('show');
  }
});


const cityOption = document.getElementById('city');
const cityCanandaigua = document.querySelector('.canandaigua');
const cityNewYorkCity = document.querySelector('.new-york-city');
const cityYonkers = document.querySelector('.yonkers');
const citySherrill = document.querySelector('.sherrill');
const allCity = document.querySelectorAll('.card__city');


cityOption.addEventListener('change', (evt) => {
  evt.preventDefault;

  allCity.forEach((item) => item.classList.add('card__city-hidden'));

  if (evt.target.options.selectedIndex === 1) {
    cityCanandaigua.classList.remove('card__city-hidden');
  }
  if (evt.target.options.selectedIndex === 2) {
    cityNewYorkCity.classList.remove('card__city-hidden');
  }
  if (evt.target.options.selectedIndex === 3) {
    cityYonkers.classList.remove('card__city-hidden');
  }
  if (evt.target.options.selectedIndex === 4) {
    citySherrill.classList.remove('card__city-hidden');
  }
});
