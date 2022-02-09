'use strict';

// DESABILITY JS

document.documentElement.classList.add('js');

// TEXT TYPING ANIMATION

const typed = new Typed('.type', {
  strings: ['website', 'ecommerce', 'design'],
  typeSpeed: 120,
  backSpeed: 70,
  loop: true,
});

// ANIMATE

const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach((element) => {
    if ((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

animeScroll();

if (target.length) {
  window.addEventListener('scroll', debounce(() => {
    animeScroll();
  }, 100));
}
