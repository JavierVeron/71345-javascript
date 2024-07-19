const productos = [
    {id:1, nombre:"Remera Boxy Zac Crudo", descripcion:"Remera corte boxy lisa escote redondo- Tela algodón.", precio:20990, imagen:"remera01.webp", categoria:"remeras"},
    {id:2, nombre:"Remera Boxy Zac Blanca", descripcion:"Remera corte boxy lisa escote redondo- Tela algodón.", precio:21990, imagen:"remera02.webp", categoria:"remeras"},
    {id:3, nombre:"Remera Boxy Zac Militar", descripcion:"Remera corte boxy lisa escote redondo- Tela algodón.", precio:23990, imagen:"remera03.webp", categoria:"remeras"},
    {id:4, nombre:"Remera Boxy Zac Negra", descripcion:"Remera corte boxy lisa escote redondo- Tela algodón.", precio:21990, imagen:"remera04.webp", categoria:"remeras"}
]

function renderProductos() {
    let contenidoHTML = "";

    for (const producto of productos) {
        contenidoHTML += `<div class="col-md-3">
            <div class="card border-0">
                <img src="images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body text-center">
                    <p class="card-text">${producto.nombre}<br><span class="text-danger">$${producto.precio} ARS</span></p>
                    <p class="card-text"><button class="btn btn-dark rounded-pill" onclick="agregarProducto(${producto.id});">Agregar (+)</button></p>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

function agregarProducto(id) { 
    const producto = productos.find(item => item.id == id);
    const carrito = cargarCarritoLS();
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log("El producto se ha agregado correctamente!");
    totalProductos();
}

function totalProductos() {
    const carrito = cargarCarritoLS();
    document.getElementById("totalCarrito").innerHTML = carrito.length;
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

renderProductos();
totalProductos();