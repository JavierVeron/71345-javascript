// LocalStorage
// Creamos una localStorage
/* localStorage.setItem("academia", "Coderhouse");
localStorage.setItem("curso", "Curso de Desarrollo Web"); // Crear la localStorage curso
localStorage.setItem("alumnos", 100);
localStorage.setItem("estudian", false); */

// Leer una localStorage
/* let academy = localStorage.getItem("academia"); //Buscar la localStorage academia y obtener su valor
let course = localStorage.getItem("curso");
let mensaje = "Estoy realizando el " + course + " en " + academy;
alert(mensaje); */

// Creamos una sessionStorage
/* sessionStorage.setItem("academia", "CODERHOUSE");
sessionStorage.setItem("curso", "Curso de JavaScript"); // Crear la localStorage curso
sessionStorage.setItem("alumnos", 100);
sessionStorage.setItem("estudian", false); */

// Leer una sessionStorage
/* let academy = sessionStorage.getItem("academia"); //Buscar la localStorage academia y obtener su valor
let course = sessionStorage.getItem("curso");
let mensaje = "Estoy realizando el " + course + " en " + academy;
alert(mensaje); */

// Actualización de una localStorage (en caso de que existe la localStorage, pisa con el nuevo valor)
//localStorage.setItem("curso", "Curso de JavaScript");
//localStorage.setItem("curso2", "Curso de JavaScript + TypeScript");

// Obtener cuantas localStorage tengo en mi Navegador
/* alert("Total de localStorages: " + localStorage.length) */

// Recorriendo las localStorage
/* for (let i=0; i<localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: " + clave + " - Valor: " + localStorage.getItem(clave));
} */

// Posibles Problemas (las localStorage/sessionStorage siempre guardan los datos en formato String)
/* let alumnos = localStorage.getItem("cantAlumnos");
console.log("100");
console.log(100);
console.log(alumnos);
let nuevoAlumnos = 10;
let totalAlumnos = parseInt(alumnos) + nuevoAlumnos;
console.log(totalAlumnos);
console.log(true);
console.log("true");
console.log(localStorage.getItem("estudian"));

let bebida = {id:1, nombre:"Coca Cola", precio:1800};
localStorage.setItem("bebida", bebida);
let bebidas = [
    {id:1, nombre:"Coca Cola", precio:1800},
    {id:2, nombre:"Pepsi", precio:1700}
]
localStorage.setItem("bebidas", bebidas) */

// Eliminando localStorages
/* localStorage.removeItem("bebida");
localStorage.removeItem("bebidas");
localStorage.clear(); // Elimina todas las localStorage */

// Otra forma de crear/modificar localStorages es definiendo el nombre de la propiedad (que sería la clave)
//localStorage.setItem("curso", "Desarrollo Web");
/* localStorage.curso = "JavaScript";
localStorage.proximoCurso = "React JS"; */

// Otra forma de leer localStorages
/* alert(localStorage.curso);  */

// Conversión y Parseo de un JSON
// Definimos un Objeto, convertimos en JSON y parseamos para obtener su valor original
/* let bebida = {id:1, nombre:"Coca Cola", precio:1800};
localStorage.setItem("bebida", JSON.stringify(bebida)); // Convertir el Objeto "bebida" en formato JSON
let valor = JSON.parse(localStorage.getItem("bebida")); // Parsear el JSON guardado en la localStorage y recuperamos el tipo de dato original
console.log(valor);
console.log(valor.nombre + " $" + valor.precio); */

// Definir un Array, convertimos en JSON y parseamos para obtener su valor original
/* let bebidas = [
    {id:1, nombre:"Coca Cola", precio:1800},
    {id:2, nombre:"Pepsi", precio:1700}
]
localStorage.setItem("bebidas", JSON.stringify(bebidas));
console.log(JSON.parse(localStorage.bebidas)); */

// Ejemplo aplicado array y objetos con localStorages
/* let bebidas = [
    {id:1, nombre:"Coca Cola", precio:1800},
    {id:2, nombre:"Pepsi", precio:1700},
    {id:3, nombre:"Seven Up", precio:1600}
]

const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor));
}

for (const bebida of bebidas) {
    guardarLocal("bebida" + bebida.id, bebida);
}

guardarLocal("listaBebidas", bebidas);

class Producto {
    constructor(objeto) {
        this.nombre = objeto.nombre.toUpperCase();
        this.precio = objeto.precio;
    }

    sumarIVA() {
        this.precio = this.precio * 1.21;
    }
}

const recuperarLocal = () => {
    return JSON.parse(localStorage.listaBebidas);
}

const productosOriginales = recuperarLocal();
const productosConIVA = [];

for (const productoOriginal of productosOriginales) {
    //console.log(productoOriginal);
    let bebida = new Producto(productoOriginal); // Crear una nueva instancia de la Clase Producto, donde le pasamos como parámetro el objeto bebida
    //console.log(bebida);
    productosConIVA.push(bebida)
}

//console.log(productosConIVA);

for (const productoConIVA of productosConIVA) {
    productoConIVA.sumarIVA(); // llamamos al método "sumarIVA" del Objeto Producto
}

console.log(productosConIVA); */


// Ejemplo Práctico - Formulario
const guardarDatos = () => {
    guardarUsuario();
    vaciarCampos();
    console.log("El usuario se ha guardado correctamente!");
}

const recuperarDatos = () => {
    let usuario = recuperarUsuario();
    document.getElementById("email").value = usuario.emailUser;
    document.getElementById("contrasenia").value = usuario.passUser;
    console.log("Los datos se recuperaron correctamente!");
}

const borrarDatos = () => {
    vaciarCampos();
    localStorage.removeItem("usuario");
    console.log("Los datos se vaciaron correctamente!");
}

const vaciarCampos = () => {
    document.getElementById("email").value = "";
    document.getElementById("contrasenia").value = "";
}

const guardarUsuario = () => {
    let email = document.getElementById("email").value;
    let contrasenia = document.getElementById("contrasenia").value;
    const usuario = {emailUser:email, passUser:contrasenia};
    localStorage.setItem("usuario", JSON.stringify(usuario));
}

const recuperarUsuario = () => {
    return JSON.parse(localStorage.usuario);
}

document.getElementById("btnGuardar").addEventListener("click", guardarDatos);
document.getElementById("btnRecuperar").addEventListener("click", recuperarDatos);
document.getElementById("btnBorrar").onclick = borrarDatos;




