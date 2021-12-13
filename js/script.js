'use strict'

// Menu mobile
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Text typing animation
const title = document.querySelector('.call-to-action > h1')
// criar uma array que percorra pegue a posição que comece da palavra completa e adiciona um estilo na palavra.
function typeWriter(element) {
  const textArray = element.innerHTML.split('')
  element.innerHTML = ''
  textArray.forEach((letter, index) => {
    setTimeout(() => element.innerHTML += letter, 75 * index)
  })
}

typeWriter(title)