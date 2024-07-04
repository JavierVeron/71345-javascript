// Acceder al Body de una página
/* console.log(document.body); */

// Accediendo al primer elemento hijo del body de la página
/* let titulo = document.body.children[1];
console.log(titulo);
titulo.id = "cursoCoder"; */

// Hacer referencia al elemento párrafo desde los nodos
/* let contenedor = document.body.children[4];
console.log(contenedor.children);
let parrafo = contenedor.children[0];
console.log(document.body.children[4].children[0].children[0]); */

// Consola
/* console.dir(document.head)
console.dir(document.body) */

// Accediendo a elementos html por ID
/* let contenedor = document.getElementById("contenedor");
let parrafo = document.getElementById("parrafo");
console.log(contenedor);
console.log(parrafo);
console.log(parrafo.innerHTML);
console.log(parrafo.innerText);
parrafo.innerHTML = "Hola <b>Mundo!</b>";
parrafo.style.color = "blue";
parrafo.className = "display-1";

contenedor.className = "bg-info-subtle";
contenedor.style.padding = "30px"; */

// Accediendo a elementos por su nombre de clase
/* let paisesClase = document.getElementsByClassName("paises");
paisesClase[1].innerHTML = "Perú";
console.log(paisesClase);

for (const pais of paisesClase) {
    console.log(pais.innerHTML);
} */

// Accediendo a elementos por su nombre de etiqueta
/* let paisesEtiqueta = document.getElementsByTagName("li");
paisesEtiqueta[2].innerHTML = "Uruguay";
console.log(paisesEtiqueta);

for (const pais of paisesEtiqueta) {
    pais.style.fontStyle = "italic";
    //pais.innerHTML = "<i>" + pais.innerText + "</i>";
    console.log(pais.innerHTML);
}

document.getElementById("academia").className = "text-warning bg-black"; */


// Crear un nuevo nodo y adjuntarlo al Body
/* let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerHTML = "Curso de JavaScript";
nuevoParrafo.className = "display-4 text-danger bg-light";
let nuevoParrafo2 = document.createElement("p");
nuevoParrafo2.innerHTML = "Curso de React JS";
nuevoParrafo2.className = "display-3 text-danger bg-light";
document.body.append(nuevoParrafo); // Agrega el elemento al Final del Body
document.body.prepend(nuevoParrafo2); // Agrega el elemento al Comienzo del Body */

// Como agrego un nuevo país al final de mi lista de paises
/* let paises = document.getElementById("paises");
let nuevoPais = document.createElement("li");
nuevoPais.innerHTML = prompt("Ingrese el País:");
paises.appendChild(nuevoPais); */
//paises.remove(); // Quita el nodo paises de mi pagina web

// Accediendo y modificando campos de texto de un form
/* let nombre = document.getElementById("nombre");
console.log(nombre.value);
nombre.value = "Javier Verón";
document.getElementById("email").value = "javier.veron@gmail.com"; */

// Creamos nodos a partir de un Array
/* const listaInfusiones = ["Té", "Café", "Mate", "Capuccino", "Chocolate Caliente"];
let infusiones = document.getElementById("infusiones");

for (const item of listaInfusiones) {
    let li = document.createElement("li");
    li.innerHTML = item;
    infusiones.appendChild(li);
} */


// Plantillas literales
/* let producto = {id:1, nombre:"Coca Cola", precio:1800, imagen:"https://jumboargentina.vtexassets.com/arquivos/ids/783070/Gaseosa-Coca-cola-Sabor-Original-2-25-L-1-247191.jpg?v=638206690815300000"};
let mensaje1 = "#1 - ID: " + producto.id + " - Nombre: " + producto.nombre + " - Precio: $" + producto.precio;
console.log(mensaje1);
let mensaje2 = `#2 - ID: ${producto.id} - Nombre: ${producto.nombre} - Precio: $${(producto.precio * 1.1).toFixed(2)}`;
console.log(mensaje2);


const productos = [
    {id:1, nombre:"Coca Cola", precio:1800, imagen:"https://jumboargentina.vtexassets.com/arquivos/ids/783070/Gaseosa-Coca-cola-Sabor-Original-2-25-L-1-247191.jpg?v=638206690815300000"},
    {id:2, nombre:"Pepsi", precio:1700, imagen:"https://static.cotodigital3.com.ar/sitios/fotos/full/00003200/00003247.jpg?3.0.172"}
]

for (const prod of productos) {
    let contenido = `<img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
    <div class="card-body text-center">
        <p class="card-text"><b>${prod.nombre}</b></p>
        <p class="card-text">$${prod.precio}</p>
    </div>`;
    let elemento = document.createElement("div");
    elemento.className = "card my-5 border-0";
    elemento.style.width = "18rem";
    elemento.innerHTML = contenido;
    document.getElementById("resultado").appendChild(elemento);
} */


// QuerySelector
let paises = document.querySelector("li.paisesVecinos"); // Devuelve el primer elemento
let paises2 = document.querySelectorAll("li.paisesVecinos"); // Devuelve un NodeList de Elementos HTML
console.log(paises);






