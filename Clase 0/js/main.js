// Esto es un comentario
//alert("Hola Mundo!"); //Salida con el mensaje Hola Mundo!

// Variables
/* let mensaje = "Estamos en el Curso de JavaScript!"; //Definir una variable mensaje, con un texto [DATO]
alert(mensaje); // Mostrar un alerta con el contenido de la variable "mensaje" [SALIDA]
console.log("holis, que hacías?"); // [SALIDA]
console.log(mensaje);

function validarEdad() {
    let edad = document.getElementById("edad").value;
    console.log("Tu edad es: " + edad);
    alert("Tu edad es: " + edad)
} */

// Modifico el contenido de mi encabezado con JS
let encabezado = document.getElementById("curso");
encabezado.innerHTML = "Curso de JavaScript...";
encabezado.className = "text-white bg-black";