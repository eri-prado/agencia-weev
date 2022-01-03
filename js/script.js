'use strict'

// TEXT TYPING ANIMATION

const title = document.querySelector('.cta h1')

function typeWriter(element) {
  const textArray = element.innerHTML.split('')
  element.innerHTML = ''
  textArray.forEach((letter, index) => {
    setTimeout(() => element.innerHTML += letter, 75 * index)
  })
}
typeWriter(title)
