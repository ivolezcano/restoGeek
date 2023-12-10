document.addEventListener("DOMContentLoaded", function () {
  var formulario = document.getElementById("miFormulario");
  var validarReCaptcha = document.getElementById("validarReCaptcha");
  var botonEnviar = document.getElementById("btnSendF");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    var response = grecaptcha.getResponse();

    if (response.length === 0) {
      validarReCaptcha.innerHTML =
        "Por favor, completa el reCAPTCHA antes de enviar el formulario.";
    } else {
      fetch("https://formkeep.com/f/93382513db8e", {
        method: "POST",
        body: new FormData(formulario),
      })
        .then((response) => {
          if (response.ok) {
            botonEnviar.textContent = "¡Formulario Enviado!";
            console.log("Formulario enviado correctamente");
            formulario.reset();
            grecaptcha.reset();
          }
        })
        .catch((error) => {
          console.error("Error al enviar el formulario: ", error);
        });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var nombreInput = document.getElementById("nombre");
  var apellidosInput = document.getElementById("apellidos");
  var emailInput = document.getElementById("email");
  var telefonoInput = document.getElementById("telefono");

  nombreInput.addEventListener("input", function () {
    var nombreLabel = document.querySelector("label[for='nombre']");
    nombreLabel.textContent = "Nombre/s:";
  });

  apellidosInput.addEventListener("input", function () {
    var apellidosLabel = document.querySelector("label[for='apellidos']");
    apellidosLabel.textContent = "Apellido/s:";
  });

  emailInput.addEventListener("input", function () {
    var emailLabel = document.querySelector("label[for='email']");
    emailLabel.textContent = "Email:";
  });

  telefonoInput.addEventListener("input", function () {
    var telefonoLabel = document.querySelector("label[for='telefono']");
    telefonoLabel.textContent = "Teléfono:";
  });
});
