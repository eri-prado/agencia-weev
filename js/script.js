// 'use strict'

// // Menu mobile
// const btnMobile = document.querySelector('#btn-mobile');

// function toggleMenu(event) {
//   if (event.type === 'touchstart') event.preventDefault();
//   const nav = document.querySelector('.menu-nav');
//   nav.classList.toggle('active');
//   const active = nav.classList.contains('active');
//   event.currentTarget.setAttribute('aria-expanded', active);
//   if (active) {
//     event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
//   } else {
//     event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
//   }
// }

// btnMobile.addEventListener('click', toggleMenu);
// btnMobile.addEventListener('touchstart', toggleMenu);

// // Text typing animation
// const title = document.querySelector('.call-to-action > h1')

// function typeWriter(element) {
//   const textArray = element.innerHTML.split('')
//   // console.log(textArray)
//   element.innerHTML = ''
//   textArray.forEach((letter, index) => {
//     setTimeout(() => element.innerHTML += letter, 75 * index)
//   })
// }

// typeWriter(title)