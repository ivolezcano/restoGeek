<template>
    <div>
        <main class="cuerpo">
            <form id="productForm">
                <label for="nombre">Nombre del Producto:</label>
                <input type="text" v-model="nombre" id="nombre" name="nombre" required>
                <br>

                <label for="descripcion">Descripción:</label>
                <textarea id="descripcion" v-model="descripcion" name="descripcion" required></textarea>
                <br>

                <label for="precio">Precio:</label>
                <input type="number" v-model="precio" id="precio" name="precio" step="0.01" required>
                <br>

                <label for="cantidad">Cantidad Disponible:</label>
                <input type="number" v-model="cantidad_disponible" id="cantidad" name="cantidad_disponible" required>
                <br>

                <button type="submit" @click="guardar()">Agregar Producto</button>
            </form>
        </main>

    </div>
</template>

<script>
export default {
    data() {
        return {
            nombre: '', descripcion: '', precio: '', cantidad_disponible: '', url: 'https://ivanpython2.pythonanywhere.com/carrito/productos/'
        }
    },
    methods: {
        guardar() {
            event.preventDefault();
            if (this.nombre.trim() === '') {
                alert('El nombre del producto no puede estar vacio');
            }
            else if (this.descripcion === '') {
                alert('La descripción del producto no puede estar vacia');
            }
            else if (this.precio == 0) {
                alert('El precio del producto no puede ser cero');
            }
            else if (this.cantidad_disponible === 0) {
                alert('La cantidad disponible del producto no puede ser cero');
            }
            else {

                fetch(this.url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nombre: this.nombre,
                        descripcion: this.descripcion,
                        precio: this.precio,
                        cantidad_disponible: this.cantidad_disponible
                    })
                })
                    .then(response => response.json())
                    
            }
            window.setTimeout(function () {
                window.location.href = '../Menu'
            },1000);

        },

    }
}
</script>
