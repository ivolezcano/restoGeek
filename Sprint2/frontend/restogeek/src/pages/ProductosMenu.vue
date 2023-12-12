<template>
    <div>
        <main class="cuerpo">
            <div v-for="product in products" v-bind:key="product.id" class="card-menu">
                <div class="card-body">
                    <h3 class="card-title-menu">{{ product.nombre }}</h3>
                    <p id="card-text-menu" class="card-text-menu">{{ product.descripcion }}</p>
                    <p class="card-precio-menu">${{ product.precio }}</p>
                </div>

            </div>

            <!-- <h2>Agregar Producto</h2> -->
            <form id="loginForm">
                <label for="id_username">Usuario:</label>
                <input type="text" id="id_username" name="username" required>
                <br>

                <label for="id_password">Contraseña:</label>
                <input type="password" id="id_password" name="password" required>
                <br>

                <button type="button" @click="login" >Iniciar Sesión</button>
            </form>

            <hr>

            <form id="productForm" style="display: none;">
                <label for="nombre">Nombre del Producto:</label>
                <input type="text" id="nombre" name="nombre" required>
                <br>

                <label for="descripcion">Descripción:</label>
                <textarea id="descripcion" name="descripcion" required></textarea>
                <br>

                <label for="precio">Precio:</label>
                <input type="number" id="precio" name="precio" step="0.01" required>
                <br>

                <label for="cantidad">Cantidad Disponible:</label>
                <input type="number" id="cantidad" name="cantidad" required>
                <br>

                <button type="button" @click="enviarProducto">Agregar Producto</button>
            </form>
        </main>

    </div>
</template>

<script>
import axios from 'axios';

let productosMenuInstance;
export default {
    name: "ProductosMenu",
    data: function () {
        return {
            url: 'https://ivanpython2.pythonanywhere.com/carrito/productos/',
            products: []
        };
    },
    created() {
        this.fetchData(this.url);
        productosMenuInstance = this;
    },

    methods: {
        fetchData: function (url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.products = data.productos
                    console.log(data)
                    console.log(data.productos)
                }
                )
                .catch(error => {
                    console.log(error);
                }
                )
        },
        // login: function iniciarSesion() {
        //     const loginForm = document.getElementById('loginForm');
        //     const loginFormData = new FormData(loginForm);

        //     fetch('https://ivanpython2.pythonanywhere.com/admin/login/', {
        //         method: 'POST',
        //         body: loginFormData,
        //     })
        //         .then(response => {
        //             if (response.ok) {
        //                 // Si la respuesta indica éxito en el inicio de sesión, muestra el formulario de productos
        //                 document.getElementById('productForm').style.display = 'block';
        //             } else {
        //                 throw new Error('Error en el inicio de sesión');
        //             }
        //         })
        //         .catch(error => {
        //             console.error('Error en el inicio de sesión:', error);
        //         });
        //     this.iniciarSesion();
        // },
        login: function () {
            const loginData = {
                username: 'ivan',  // Reemplaza con el nombre de usuario correcto
                password: 'ivan',  // Reemplaza con la contraseña correcta
            };

            axios.post('https://ivanpython2.pythonanywhere.com/admin/login/', loginData)
                .then(response => {
                    if (response.status === 200) {
                        // Éxito en el inicio de sesión
                        this.productFormVisible = true;
                    } else {
                        throw new Error('Error en el inicio de sesión. Estado de respuesta: ' + response.status);
                    }
                })
                .catch(error => {
                    console.error('Error en el inicio de sesión:', error);
                });
        },

        iniciarSesion: function () {
            // Esta función ahora está directamente en el objeto methods y es accesible desde el ámbito global
            productosMenuInstance.isLoggedIn = true;
            productosMenuInstance.productFormVisible = true;
        },
        enviarProducto: function enviarProducto() {
            const form = document.getElementById('productForm');
            const formData = new FormData(form);

            fetch('https://ivanpython2.pythonanywhere.com/admin/carrito/productos/add/', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Producto agregado con éxito:', data);
                    // Puedes realizar otras acciones después de agregar el producto
                })
                .catch(error => {
                    console.error('Error al agregar el producto:', error);
                });
        }

    }

}

</script>

<style>
main.cuerpo {
    margin-top: 25px;
}

h1,
h2 {
    text-align: center;
    text-shadow: 2px 2px 4px white;
}

.card-menu {
    background-color: rgba(187, 143, 1, 0.918);
    box-shadow: 0 3px 5px 0;
    margin-bottom: 25px;
    display: flex;
    flex-direction: row;
    width: 80%;
    border-radius: 1em;
}

.card-body {
    display: flex;
    padding: 0 0.5em;
    width: 100%;
}

.card-title-menu {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 1.5em;
    color: black;
    width: 20%;
}

#card-text-menu {
    padding: 2em;
    text-align: center;
}

.card-text-menu {
    display: flex;
    align-items: center;
    font-size: 0.9em;
    color: black;
    padding: 0;
    width: 65%;
    text-shadow: none;
}

.card-precio-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    color: black;
    width: 15%;
}

.contenedor {
    padding: 2em;
}

img {
    width: 100%;
}

/*Responsive*/
/*Mobile*/
@media only sreen and (max-width: 500px) {
    .card {
        display: flex;
        flex-wrap: wrap;
        width: 40%;
        margin: auto;
    }
}

/*Tablet*/
@media only screen and (min-width: 500px) {
    .contenedor {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
        gap: 2rem;
    }
}

/*Escritorio*/
@media only screen and (min-width: 768px) {
    .contenedor {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(29%, 1fr));
        grid-gap: 1em;
    }
}


/*Transicion*/
.card {
    position: relative;
    width: auto;
}

img {
    display: block;
    width: 100%;
    height: auto;
}

.texto {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--selective-yellow);
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: .5s ease-in-out;
}

.card:hover .texto {
    height: 100%;
}

.info {
    white-space: normal;
    color: white;
    font-size: 20px;
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}
</style>