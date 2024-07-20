function renderCarrito() {
    const carrito = cargarCarritoLS();
    let contenidoHTML;

    if (totalProductos() > 0) {
        contenidoHTML = `<table class="table">
        <tbody>
        <tr>
        <td class="text-end" colspan="4"><button class="btn btn-danger btn-sm" onclick="vaciarCarrito();">Vaciar Carrito <i class="bi bi-trash"></i></button></td>
        </tr>`;

        for (const producto of carrito) {
            contenidoHTML += `<tr>
            <td><img src="images/${producto.imagen}" alt="${producto.nombre}" width="48"></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="text-center align-middle"><span class="text-danger">$${producto.precio} ARS</span></td>
            <td class="text-end align-middle"><button class="btn btn-danger btn-sm" onclick="eliminarProducto(${producto.id});">Eliminar <i class="bi bi-trash"></i></button></td>
            </tr>`;
        }

        contenidoHTML += `</tbody>
        </table>`;
    } else {
        contenidoHTML = `<div class="alert alert-dark my-5 text-center" role="alert">
        <h2>❌</h2>
        <h3>No se encontraron Productos en el Carrito!</h3>
        </div>`;
    }

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderCarrito();
renderBotonCarrito();