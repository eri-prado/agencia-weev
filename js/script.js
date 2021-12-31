'use strict'

// TEXT TYPING ANIMATION

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

//


document.addEventListener('DOMContentLoaded', function (event) {
  var dataText = ["Criação de Websites.", "Loja Virtual.", "Design Gráfico."];

  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.querySelector(".text-typing").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 150);
    }

    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 1000);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
