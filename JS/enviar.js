const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_ooqaes4';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Formulario enviado correctamente!');
      resetForm();
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});

function resetForm() {
  document.getElementById('form').reset();
}
