<template>
    <div>
        <main class="main">
            <div class="form">
                <h1>Envianos tu opinión</h1>
                <form id="miFormulario" accept-charset="UTF-8" enctype="multipart/form-data" method="POST">
                    <label for="nombre"></label>
                    <input type="text" id="nombre" name="nombre" placeholder="Nombre/s" required /><br />

                    <label for="apellidos"></label>
                    <input type="text" id="apellidos" name="apellidos" placeholder="Apellido/s" required /><br />

                    <label for="email"></label>
                    <input type="email" id="email" name="email" placeholder="Email" required /><br />

                    <label for="telefono"></label>
                    <input type="tel" id="telefono" name="telefono" placeholder="Teléfono" required /><br />

                    <label for="consulta">Consulta (máx. 150 caracteres):</label>
                    <textarea id="consulta" name="consulta" rows="4" maxlength="150" required></textarea><br />

                    <button id="btnSendF" class="btnSendForm" role="button" type="submit">
                        Enviar Consulta
                    </button>
                </form>
            </div>

            <div class="contacto">
                <h1>Redes y Contacto</h1>
                <div class="contain">
                    <div class="links">
                        <a href="https://www.facebook.com/" style="--color: #426782" target="_blank">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/" style="--color: #e1306c" target="_blank">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://tiktok.com/" style="--color: #ff0050" target="_blank">
                            <i class="fa-brands fa-tiktok"></i>
                        </a>
                        <a href="mailto:restoGeek@outlook.com?subject=Asunto de la consulta&body=Escribenos tu consulta"
                            style="--color: #0072b1" target="_blank">
                            <i class="fas fa-envelope"></i>
                        </a>
                    </div>
                    <img class="resto" src="../assets/img/contacto-image.jpeg" alt="resto" />
                </div>
            </div>
        </main>
        
    </div>
</template>

<script>
export default {
    name: "ContactUs",
    mounted() {
        document.addEventListener("DOMContentLoaded", function () {
            var formulario = document.getElementById("miFormulario");
            var botonEnviar = document.getElementById("btnSendF");

            formulario.addEventListener("submit", function (event) {
                event.preventDefault();

                fetch("https://formkeep.com/f/93382513db8e", {
                        method: "POST",
                        body: new FormData(formulario),
                    })
                        .then((response) => {
                            if (response.ok) {
                                botonEnviar.textContent = "¡Formulario Enviado!";
                                console.log("Formulario enviado correctamente");
                                formulario.reset();
                            }
                        })
                        .catch((error) => {
                            console.error("Error al enviar el formulario: ", error);
                        });

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
    },
};
</script>

<style>
/* @import url('https://fonts.googleapis.com');
@import url('https://fonts.gstatic.com');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap'); */
@import url("https://use.fontawesome.com/releases/v6.4.2/css/all.css");

.main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    height: fit-content;
    font-family: "Montserrat", sans-serif;
}

h1 {
    padding: 14px;
    background: #6a040f;
    color: #fff;
    margin: 15px 0px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px 25px 25px 25px;
}

/*formulario*/

form {
    margin-bottom: 15px;
}

form,
label,
input,
textarea {
    margin-left: 5px;
    display: block;
    color: #fff;
}

label {
    font-size: small;
}

input {
    padding: 5px;
    border-radius: 25px;
    background: #9d0208;
    width: 85%;
}

input::placeholder {
    color: #ffffff93;
}

textarea {
    padding: 5px;
    display: block;
    resize: none;
    border-radius: 15px;
    background: #9d0208;
    width: 85%;
}

.g-recaptcha {
    margin: 0px 5px;
    padding: 0;
    width: fit-content;
    transform: scale(1);
    transform-origin: 0 0;
}

#validarReCaptcha {
    margin: 5px;
    padding: 0;
    color: red;
}

.btnSendForm {
    margin: 15px;
    padding: 5px;
    border-radius: 13px;
    background: #6a040f;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    align-items: center;
    border: 2px solid #111;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    font-family: Inter, sans-serif;
    font-size: 16px;
    height: 48px;
    justify-content: center;
    line-height: 24px;
    max-width: 100%;
    padding: 0 25px;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.btnSendForm:after {
    background-color: #111;
    border-radius: 8px;
    content: "";
    display: block;
    height: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(0, 0);
    transition: transform 0.2s ease-out;
    z-index: -1;
}

.btnSendForm:hover:after {
    transform: translate(8px, 8px);
}

.btnSendForm:active {
    background-color: #991102;
    outline: 0;
}

.btnSendForm:hover {
    outline: 0;
}

@media (min-width: 768px) {
    .btnSendForm {
        padding: 0 40px;
    }
}

/*Redes y contacto*/

div.contacto>h1 {
    margin-left: 8%;
}

.contain {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: row-reverse;
}

.links {
    display: flex;
    flex-direction: column;
}

div.links a {
    margin: 5px 8px;
    box-sizing: border-box;
    border-radius: 50%;
    background: #fff;
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: 0.5s;
    background: rgba(0, 0, 0, 0);
    color: var(--color);
    font-size: 2em;
}

div.links a:hover {
    background: var(--color);
    color: #050801;
    box-shadow: 0 0 5px var(--color), 0 0 25px var(--color), 0 0 50px var(--color),
        0 0 200px var(--color);
}

/* imagen */
.resto {
    display: flex;
    width: 400px;
    height: 300px;
    border-radius: 20%;
}

/*Media queries*/

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .form {
        width: 80%;
        margin-bottom: 2em;
    }

    .g-recaptcha {
        transform: scale(0.7);
    }

    .btnSendForm {
        margin-top: 0;
    }

    .contacto {
        width: 80%;
        margin-bottom: 2em;
    }

    div.contacto>h1 {
        margin: 0;
    }

    .contain {
        flex-direction: column;
    }

    .links {
        flex-direction: row;
    }

    .resto {
        height: 280px;
        width: 290px;
    }
}

/* Small devices (landscape phones, 576px - 768px) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .form {
        width: 70%;
        margin-bottom: 2em;
    }

    .contacto {
        margin-bottom: 2em;
    }
}

/* Medium devices (tablets, 768px - 992px) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .form {
        width: 40%;
        margin-bottom: 2em;
    }

    .contacto {
        width: 40%;
        margin-bottom: 2em;
    }

    .g-recaptcha {
        transform: scale(0.8);
    }

    .contain {
        flex-direction: column;
    }

    .links {
        flex-direction: row;
    }

    .resto {
        height: 280px;
        width: 100%;
    }
}

/* Large devices (desktops, more than 992px) */
@media (min-width: 992px) {
    .form {
        width: 40%;
        margin-bottom: 2em;
    }

    .contacto {
        width: 50%;
        margin-bottom: 2em;
    }

    .resto {
        height: 400px;
        width: 80%;
        max-width: 550px;
    }
}

/* Tall devices (desktops, more than 1050px)*/
@media (min-height: 1050px) {
    .main {
        height: 100%;
    }
}
</style>
