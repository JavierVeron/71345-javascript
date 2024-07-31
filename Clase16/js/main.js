// Acceder a la Pokemon API
/* fetch("https://pokeapi.co/api/v2/gender")
.then(response => response.json())
.then(data => {
    console.log(data);
}) */

// Acceder a la API JSON Placerholder
/* fetch("https://jsonplaceholder.typicode.com/posts/")
.then(response => response.json())
.then(data => {
    console.log(data);
}) */

// Acceder a la FakeStore API y realizar un Render de Productos en nuestro HTML
/* fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {
    //console.log(data);
    let contenidoHTML = "";

    data.forEach(element => {
        contenidoHTML += `<div class="col-md-3">
        <div class="card border-0 mb-3">
        <img src="${element.image}" class="card-img-top" alt="${element.title}">
        <div class="card-body">
            <h6 class="card-title">${element.title}</h6>
            <p class="card-text">$${element.price}<br><span class="text-secondary">${element.category}</span></p>
        </div>
        </div>
        </div>`;
    });

    document.getElementById("contenido").innerHTML = contenidoHTML;
}) */


// Cargar un nuevo Producto a la API Fakestore
/* function cargarProducto() {
    let titulo = document.getElementById("titulo").value;
    let imagen = document.getElementById("imagen").value;
    let precio = document.getElementById("precio").value;
    let descripcion = document.getElementById("descripcion").value;
    let categoria = document.getElementById("categoria").value;

    fetch('https://fakestoreapi.com/products',{
        method:"POST",
        body:JSON.stringify(
            {
                title:titulo,
                price:precio,
                description:descripcion,
                image:imagen,
                category:categoria
            }
        )
    })
    .then(res=>res.json())
    .then(json=>console.log(json))
}

document.getElementById("btnFormulario").addEventListener("click", cargarProducto); */

// Acceder a un JSON local y realizar un Render de Productos en nuestro HTML
/* fetch("json/productos.json")
.then(response => response.json())
.then(data => {
    //console.log(data);
    let contenidoHTML = "";

    data.forEach(element => {
        contenidoHTML += `<div class="col-md-3">
        <div class="card border-0 mb-3">
        <img src="../after3/images/${element.imagen}" class="card-img-top" alt="${element.nombre}">
        <div class="card-body">
            <h6 class="card-title">${element.nombre}</h6>
            <p class="card-text">$${element.precio}<br><span class="text-secondary">${element.categoria}</span></p>
        </div>
        </div>
        </div>`;
    });

    document.getElementById("contenido").innerHTML = contenidoHTML;
}) */


// Funciones Asíncronas
// Función Tradicional Asíncrona
/* async function renderProductos() {
    const response = await fetch("json/productos.json");
    const data = await response.json();
    let contenidoHTML = "";

    data.forEach(element => {
        contenidoHTML += `<div class="col-md-3">
        <div class="card border-0 mb-3">
        <img src="../after3/images/${element.imagen}" class="card-img-top" alt="${element.nombre}">
        <div class="card-body">
            <h6 class="card-title">${element.nombre}</h6>
            <p class="card-text">$${element.precio}<br><span class="text-secondary">${element.categoria}</span></p>
        </div>
        </div>
        </div>`;
    });

    document.getElementById("contenido").innerHTML = contenidoHTML;
} */

// Función Flecha Asíncrona
const renderProductos = async () => {
    const response = await fetch("json/productos.json");
    const data = await response.json();
    let contenidoHTML = "";

    data.forEach(element => {
        contenidoHTML += `<div class="col-md-3">
        <div class="card border-0 mb-3">
        <img src="../after3/images/${element.imagen}" class="card-img-top" alt="${element.nombre}">
        <div class="card-body">
            <h6 class="card-title">${element.nombre}</h6>
            <p class="card-text">$${element.precio}<br><span class="text-secondary">${element.categoria}</span></p>
        </div>
        </div>
        </div>`;
    });

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderProductos();