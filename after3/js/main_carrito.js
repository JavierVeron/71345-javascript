function renderCarrito() {
    const carrito = cargarCarritoLS();
    let contenidoHTML = `<table class="table">
    <tbody>`;

    for (const producto of carrito) {
        contenidoHTML += `<tr>
        <td><img src="images/${producto.imagen}" alt="${producto.nombre}" width="48"></td>
        <td class="align-middle">${producto.nombre}</td>
        <td class="text-center align-middle"><span class="text-danger">$${producto.precio} ARS</span></td>
        <td class="text-end align-middle"><button class="btn btn-danger">Eliminar [-]</button></td>
        </tr>`;
    }

    contenidoHTML += `</tbody>
    </table>`;
    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderCarrito();