// Declaramos una función
/* function saludar() {
    console.log("Hola Coders, bienvenidos al Curso de JavaScript!");
}

// Llamar o invocar a una función
saludar(); */

/* let nombre = prompt("Ingrese su Nombre:");
console.log("Hola, " + nombre);
console.log("Bienvenidos a CoderHouse!"); */

// Declaramos un función con parámetros
/* function nombreCompleto(a1, a2, a3) {
    alert("Nombre: " + a1 + " " + a2 + " \n" + "DNI: " + a3);
} */

function solicitarNombre() {
    let nI = prompt("Ingrese su Nombre:");
    let aI = prompt("Ingrese su Apellido:");
    let dI = prompt("Ingrese su DNI:");
    //alert("Hola, " + nI + " " + aI);
    //alert("DNI: " + dI);
    nombreCompleto(nI, aI, dI);
}

/* let nombreIngresado = prompt("Ingrese su Nombre:");
let apellidoIngresado = prompt("Ingrese su Apellido:");
let dniIngresado = prompt("Ingrese su DNI:");



// Llamar a la función
nombreCompleto(nombreIngresado, apellidoIngresado, dniIngresado, 444555666);
nombreCompleto("Humberto", "Gonzales Quispe"); */

//solicitarNombre();


// Definir una función que devuelva una valor (return)
function solicitarNombreCompleto(nombre, apellido) {
    /* let nombreCompleto = apellido + ", " + nombre;
    
    return nombreCompleto; */

    return apellido.toUpperCase() + ", " + nombre.toUpperCase();
}


//alert(solicitarNombreCompleto("Florencia", "Salgado"));
//console.log(solicitarNombreCompleto("Florencia", "Salgado"));

/* let nombreSistema = solicitarNombreCompleto("Florencia", "Salgado");
alert(nombreSistema);
console.log(nombreSistema);
console.log("Nombre ingresado: " + nombreSistema); */

// Calculo IMC
/* function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    let salida;

    if (imc < 18.5) {
        salida = "Peso inferior al normal";
    } else if (imc >= 18.5 && imc <= 24.9) {
        salida = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        salida = "Peso superior al normal";
    } else {
        salida = "Obesidad";
    }

    return salida;
} */

function obtenerIMC(peso, altura) {
    return peso / (altura * altura);
}

function estadoDeSalud(imc) {
    let salida;

    if (imc < 18.5) {
        salida = "Peso inferior al normal";
    } else if (imc >= 18.5 && imc <= 24.9) {
        salida = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        salida = "Peso superior al normal";
    } else {
        salida = "Obesidad";
    }

    return salida;
}

/* let miIMC = calcularIMC(52, 1.76);
console.log(miIMC); */
/* let peso = parseFloat(prompt("Ingrese su Peso:"));
let altura = parseFloat(prompt("Ingrese su Altura:"));
let miImc = obtenerIMC(peso, altura);
let miEstadoDeSalud = estadoDeSalud(miImc);
alert("IMC: " + miImc.toFixed(2) + "%" + "\n" + "Estado de Salud: " + miEstadoDeSalud); */


// Variables globales y locales
// Variable Global
/* let resultado = 0; // Variable global

function sumar(num1, num2) {
    resultado = num1 + num2;
}

sumar(20, 30);
console.log(resultado);
sumar(10, 5);
console.log("Resultado: " + resultado); */

// Variable Local
/* let resultado = 200; // variable global

function sumar(num1, num2) {
    let resultado = num1 + num2; // resultado acá es una variable local
    console.log(resultado + " -> variable local");
    console.log("estoy aca");
    return resultado;
}

sumar(20, 30);
console.log(resultado + " -> variable global");
console.log(resultado); */


// Funciones Anónimas y Funciones Flechas
// Funciones Anónimas
/* const suma = function (valor1, valor2) {
    console.log("Estoy en la función suma!");

    return valor1 + valor2;
}

let resultado = suma(20, 22);
console.log("Resultado: " + resultado); */

// Funciones Flecha (no se usa la palabra funcion se usa =>)
const suma = (valor1, valor2) => {
    console.log("Inicio de la Función");
    let resultado = valor1 + valor2;
    console.log("Fin de la Función");

    return resultado;
}

let calculo = suma(30, 50);
console.log(calculo);

let nombreCompleto = (nombre, apellido) => {
    return apellido + ", " + nombre;
}

let salida = nombreCompleto("Manu", "Rodriguez");
console.log(salida);