<template>
    <div>
        <main class="cuerpo">
            <form id="productForm">
                <label class="form-label" for="nombre">Nombre del Producto:</label>
                <input class="form-input" type="text" v-model="nombre" id="nombre" name="nombre" required>
                <br>

                <label class="form-label" for="descripcion">Descripción:</label>
                <textarea class="form-input" id="descripcion" v-model="descripcion" name="descripcion" required></textarea>
                <br>

                <label class="form-label" for="precio">Precio:</label>
                <input class="form-input" type="number" v-model="precio" id="precio" name="precio" step="0.01" required>
                <br>

                <label class="form-label" for="cantidad">Cantidad Disponible:</label>
                <input class="form-input" type="number" v-model="cantidad_disponible" id="cantidad" name="cantidad_disponible" required>
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
            if (this.nombre == '') {
                alert('El nombre del producto no puede estar vacio');
            }
            else if (this.descripcion == '') {
                alert('La descripción del producto no puede estar vacia');
            }
            else if (this.precio == 0) {
                alert('El precio del producto no puede ser cero');
            }
            else if (this.cantidad_disponible == 0) {
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
                .then(response => {
                        if (!response.ok) {
                            alert('Error al agregar el producto');
                            throw new Error('Error al modificar el producto');
                        } else {
                            alert('Producto agregado con éxito');
                            window.setTimeout(function () {
                                window.location.href = '../Menu';
                            }, 1000);
                        }
                    })
            }
        },

    }
}
</script>
<style scoped>
.form-label {
    font-weight: bold;
    color: #333; 
    margin-bottom: 5px;
    display: block;
    backdrop-filter: blur(5px); 
    background-color: rgba(255, 255, 255, 0.8); 
    padding: 8px;
    border-radius: 5px;
}
.form-input {
    width: 100%; 
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc; 
    border-radius: 5px;
    box-sizing: border-box;
}
</style>

