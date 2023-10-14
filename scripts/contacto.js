document.addEventListener("DOMContentLoaded", function () {
  var formulario = document.getElementById("miFormulario");

  formulario.addEventListener("submit", function (event) {
    // Obtiene la respuesta del reCAPTCHA
    var response = grecaptcha.getResponse();

    // Si la respuesta está vacía, evita que el formulario se envíe
    if (response.length === 0) {
      event.preventDefault();
      document.getElementById("validarReCaptcha").innerHTML =
        "Por favor, completa el reCAPTCHA antes de enviar el formulario.";
    } else {
      event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

      var formulario = document.getElementById("miFormulario");

      fetch("https://formkeep.com/f/93382513db8e", {
        method: "POST",
        body: new FormData(formulario),
      })
        .then((response) => {
          if (response.ok) {
            // El formulario se envió correctamente
            console.log("Formulario enviado correctamente");
            // Puedes hacer algo después de que el formulario se envíe, si es necesario
            formulario.reset();
          } else {
            // El formulario no se pudo enviar correctamente
            console.error("Error al enviar el formulario");
          }
        })
        .catch((error) => {
          console.error("Error al enviar el formulario: ", error);
        });
    }
  });
});
