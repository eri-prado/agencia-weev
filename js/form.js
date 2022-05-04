'use strict';

const form = document.querySelector('form');

console.log(name.target);

function formSent(response) {
  if (response.ok) {
    form.innerHTML =
      "<p style='color: #f2f2f2;'>Mensagem enviada com sucesso, em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>";
  } else {
    form.innerHTML =
      "<p style='color: #f2f2f2;'>Erro no envio, você pode enviar diretamente para o nosso e-mail em: contato@agenciaweev.com.</p>";
  }
}

function submitForm(event) {
  event.preventDefault();
  const button = document.querySelector('form button');
  button.disabled = true;
  button.innerText = 'Enviando...';

  const data = new FormData(form);

  fetch('./enviar.php', {
    method: 'POST',
    body: data,
  }).then(formSent);
}

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  saveValues(name, value);
}

form.addEventListener('change', handleChange);

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach(propertie => {
    form.elements[propertie].value = localStorage[propertie];
  });
}

setValues();

form.addEventListener('submit', submitForm);
