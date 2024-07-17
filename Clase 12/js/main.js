// Sugar Syntax
/* let valor = 10;
//valor = valor + 10;
//console.log(valor);
valor += 20;
console.log(valor);
valor++; // Incrementar en 1
valor--; // Decrementar en 1
valor--;
console.log(valor); */

// Operador Ternario
//let edad = 18;

/* if (edad > 18) {
    alert("Podes tomar Cerveza!")
} else if (edad == 18) {
    alert("Ok, pero mostrar el DNI!");
} else {
    alert("No, no podes tomar alcohol. Voy a llamar a la policía!");
} */

//edad >= 18 ? alert("Podes tomar Cerveza!") : alert("No, no podes tomar alcohol. Voy a llamar a la policía!");
//(edad > 18) ? alert("Podes tomar Cerveza!") : (edad == 18) ? alert("Ok, pero mostrar el DNI!") : alert("No, no podes tomar alcohol. Voy a llamar a la policía!");

// Operador Ternario simplificado (con return explícito)
//alert(edad >= 18 ? "Podes tomar Cerveza!" : "No, no podes tomar alcohol. Voy a llamar a la policía!");

/* const usuario = {
    nombre:"Mauro Romano",
    edad:26
} */

/* let permiso;

if (usuario.edad >= 18) {
    permiso = true
} else {
    permiso = false
}

if (permiso) {
    alert("Puede tomar alcohol!")
} else {
    alert("No, no puede tomar alcohol!")
} */

// Ejemplo resumido con operadores ternarios
/* let permiso = usuario.edad >= 18 ? true : false;
alert(permiso ? "Puede tomar alcohol!" : "No, no puede tomar alcohol!"); */

// Operador Lógico AND &&
const lista = [];

/* if (lista.length === 0) {
    console.log("La lista está vacía!");
} */

// Operador AND
/* lista.length === 0 && console.log("La lista está vacía!"); */

// Operador AND (&&) con return implícito
/* let nuevoRegistro = "Hector";
//nuevoRegistro = usuario.edad >= 18; // Devuelve un true o false
nuevoRegistro = usuario.edad >= 18 && new Date(); // Si devuelve true ejecuta lo que sigue después del &&
console.log(nuevoRegistro); */


// Operador OR (||)
/* console.log( 0 || "Falsy")  // Falsy
console.log( 40 || "Falsy")  // 40
console.log( -20 || "Falsy")  // -20
console.log( null || "Falsy")  // Falsy
console.log( undefined || "Falsy")  // Falsy
console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
console.log( "" || "Falsy")  // Falsy
console.log( " " || "Falsy")  // (espacio en blanco)
console.log( NaN || "Falsy")  // Falsy
console.log( true || "Falsy")  // true
console.log( "true" || "Falsy")  // "true" en string
console.log( false || "Falsy")  // Falsy */

/* const usuario2 = null

console.log(usuario || "El usuario no existe!");
console.log(usuario2 || "El usuario no existe!"); */

// Ejemplo de OR
let carrito;
/* let carritoEnLS = JSON.parse(localStorage.getItem("carrito"));

if (carritoEnLS) {
    carrito = carritoEnLS
} else {
    carrito = []
} */

// Simplificación con el operador Or
/* carrito = JSON.parse(localStorage.getItem("carrito")) || [];

console.log(carrito); */


// Operador Nullish
/* console.log( 0 ?? "Nullish")  // 0
console.log( 40 ?? "Nullish")  // 40
console.log( -20 ?? "Nullish")  // -20
console.log( null ?? "Nullish")  // Nullish
console.log( undefined ?? "Nullish")  // Nullish
console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
console.log( "" ?? "Nullish")  // (empty string)
console.log( " " ?? "Nullish")  // (espacio en blanco)
console.log( NaN ?? "Nullish")  // NaN
console.log( true ?? "Nullish")  // true
console.log( "true" ?? "Nullish")  // "true" en string
console.log( false ?? "Nullish")  // false */


// Acceso condicional a un objeto
/* const usuario = ""

console.log( usuario.nombre || "El usuario no existe" )
// Error: "No se pueden leer propiedades de NULL"

console.log( usuario?.nombre || "El usuario no existe")
// "El usuario no existe" */


/* const usuario = {
    nombre:"Facundo Segovia",
    edad:24,
    cursos: {
        js:"aprobado"
    }
}

console.log(usuario.cursos.js || "No existe el Curso!");
console.log(usuario.cursos.aprobado || "No existe el Curso!");
console.log(usuario?.cursos?.js || "No existe el Curso!"); */

// Desestructuración
const usuario = {
    nombre:"Facundo Segovia",
    edad:24,
    telefono: {
        casa:800222333,
        celular:1122334455
    }
}

/* let nombre = usuario.nombre; //acceder a la propiedad nombre y asignar el valor a la variable nombre
console.log(nombre); */

/* let {nombre, edad, telefono:{celular}} = usuario;
console.log(nombre);
console.log(edad);
console.log(celular); */

// Alias en Desestructuración
/* const user = {
    name:"Facundo Segovia",
    age:24,
    telephone:1122334455
}

const {name:nombre, age:edad, telephone:telefono} = user; // propiedad:alias
console.log(nombre, edad, telefono); */

// Desestructuración con parámetros
const curso = {
    id:10,
    nombre:"JavaScript",
    precio:95000
}

/* function desestructurar(objeto) {
    let nombre = objeto.nombre;
    let precio = objeto.precio;
    console.log(nombre, precio);
} */

// Función que desestructura un objeto
/* function desestructurar({nombre, precio}) {
    console.log(nombre, precio);
}

desestructurar(curso) */

// Desestructuras Arrays
const nombres = ["Mauro", "Juan", "María", "Pedro"];
/* const [pepe1, pepe2, pepe3, pepe4, pepe5] = nombres;
console.log(pepe1);
console.log(pepe2);
console.log(pepe3);
console.log(pepe4);
console.log(pepe5); // undefined porque no existe un elemento en la posición 5 */

// Para acceder a los últimos valores de mi array
/* const [,,pepe1, pepe2,,pepe3] = nombres;
console.log(pepe1);
console.log(pepe2);
console.log(pepe3); // undefined porque no existe elementos después de la variable pepe2 */


