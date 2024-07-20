function renderProducto() {
    const producto = cargarProductoLS();
    let htmlImagenProducto = `<img src="images/${producto.imagen}" class="img-fluid" alt=${producto.nombre} />`;
    let htmlDetalleProducto = `<h1>${producto.nombre}</h1>
    <p class="text-danger fs-3">$${producto.precio} ARS</p>
    <p><b>ATENCIÓN:</b> Chequear la tabla de talle porque las medidas pueden variar inclusive en un mismo producto.</p>
    <p>${producto.descripcion}</p>
    <p class="card-text"><button class="btn btn-dark rounded-pill" onclick="agregarProducto(${producto.id});">Agregar (+)</button></p>`;
    document.getElementById("imagenProducto").innerHTML = htmlImagenProducto;
    document.getElementById("detalleProducto").innerHTML = htmlDetalleProducto;
}

renderProducto();
renderBotonCarrito();