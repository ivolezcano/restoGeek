import axios from 'axios'

export function enviarSolicitud(parametros) {
    var url = `https://ivanpython2.pythonanywhere.com/carrito/productos/${parametros}`;

    axios.delete(url)
        .then(response => {
            console.log('Producto eliminado con éxito:', response.data);
            // Puedes realizar otras acciones después de eliminar el producto
        })
        .catch(error => {
            console.error('Error al eliminar el producto:', error);
        });
}