'use strict'

const form = document.querySelector('form')

function formSent(response) {
  if (response.ok) {
    form.innerHTML = "<p>Mensagem enviada, em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>"
  } else {
    form.innerHTML = "<p>Erro no envio, você pode enviar diretamente para o nosso e-mail em: contato@agenciaweev.com.</p>"
  }
  
}

function submitForm(event) {
  event.preventDefault()
  const button = document.querySelector('form button')
  button.disabled = true
  button.innerText = 'Enviando...'

  const data = new FormData(form)

  fetch('./enviar.php', {
    method: 'POST',
    body: data,
  }).then(formSent)
}

form.addEventListener('submit', submitForm)