function renderProductos() {
    let contenidoHTML = "";

    for (const producto of productos) {
        contenidoHTML += `<div class="col-md-3">
            <div class="card border-0">
                <a href="producto.html" onclick="guardarProductoLS(${producto.id});">
                    <img src="images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                </a>
                <div class="card-body text-center">
                    <p class="card-text">${producto.nombre}<br><span class="text-danger">$${producto.precio} ARS</span></p>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderProductos();
renderBotonCarrito();