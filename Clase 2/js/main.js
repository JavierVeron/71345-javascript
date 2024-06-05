// Ejemplos
//let producto1 = (prompt("Ingrese el importe del Producto #1:")); // ParseFloat convierte valores ingresados a numericos con decimales
//let producto2 = prompt("Ingrese el importe del Producto #2:"); // El prompt guarda el valor ingresado con el tipo de dato string
/* console.log(producto1);
console.log(producto2);
console.log(true);
console.log("hola"); */

// Ejemplo aplicado #1 => La idea es solicitar 2 ingresos de importes, y si el total supera los $10.000 pesos, realizar un 10% de descuento

/* let producto1 = parseFloat(prompt("Ingrese el importe del Producto #1:"));
let producto2 = parseFloat(prompt("Ingrese el importe del Producto #2:"));
let total = producto1 + producto2;

if (total > 10000) {
    total = total * 0.9;
    //total = total + ((total * 10) / 100);
}

alert("El total a Pagar es: $" + total); */

/* Ejemplo aplicado #2 => La idea es solicitar 2 ingresos de importes, y si el total supera:
los $100.000 pesos, realizar un 10% de descuento
los $200.000 pesos, realizar un 15% de descuento
Si el usuario, tiene el cupon de descuento "CUPON10" se le asigna un 10% adicional */

// Datos ingresados por el Usuario
/* let producto1 = parseFloat(prompt("Ingrese el importe del Producto #1:"));
let producto2 = parseFloat(prompt("Ingrese el importe del Producto #2:")); */

// Datos del Sistema
const montoMaximo1 = 100000;
const montoMaximo2 = 150000;
const descuentoMaximo1 = 10;
const descuentoMaximo2 = 15;
const cuponValido = "CUPON10";
let descuentAplicado = 0;

// Analizar los datos ingresados
// Calcular los 2 montos ingresados
/* let total = producto1 + producto2;

if (total > montoMaximo1 && total <=montoMaximo2) {
    console.log("Total: $" + total);
    descuentAplicado = (total * descuentoMaximo1) / 100;
    console.log("Descuento (" + descuentoMaximo1 + "%) $" + descuentAplicado);
    total = total - descuentAplicado;
    console.log("Total c/Descuento aplicado: $" + total);
} else if (total > montoMaximo2) {
    console.log("Total: $" + total);
    descuentAplicado = (total * descuentoMaximo2) / 100;
    console.log("Descuento (" + descuentoMaximo2 + "%) $" + descuentAplicado);
    total = total - descuentAplicado;
    console.log("Total c/Descuento aplicado: $" + total);
}

alert("El total a Pagar es: $" + total); */


// Operadores lógicos
/* let valor1 = "10"; // number
let valor2 = "10"; // string

// Operador ==
if (valor1 == valor2) {
    alert("(==) Valor1 y Valor 2 son iguales!")
}

// Operador ===
if (valor1 === valor2) {
    alert("(===) Valor1 y Valor 2 son iguales!")
} */

let zapatilla = 120000;

/* if (zapatilla > 100000) {
    alert("Las zapas son caras");
} else {
    alert("Estan en precio!");
}


if (zapatilla <= 100000) {
    alert("Estan en precio!");
} else {
    alert("Las zapas son caras");
} */
 
// Operador Not !
/* if (!(zapatilla > 100000)) {
    alert("Las zapas son caras");
} else {
    alert("Estan en precio!");
} */

let tePortasteMal = true;

// Doble negacion es igual al valor original
/* if (!(!tePortasteMal)) {
    alert("SERAS CASTIGADA!");
} */

// Operador && (AND) Y
// V y V => V
// V y F => F
// F y V => F
// F y F => F

/* let dinero = 1000;
let mayorEdad = true;

if (dinero >= 2000 && mayorEdad) {
    alert("Vas a poder comprar CERVEZA!")
} else {
    alert("NO AMIGO, NO VAS A PODER COMPRAR CERVEZA!");
}
 */
// Operador || (OR) O
// V o V => V
// V o F => V
// F o V => V
// F y F => F

let dinero = 2000;
let mayorEdad = false;

/* if (dinero >= 2000 || mayorEdad) {
    alert("Vas a poder comprar CERVEZA!")
} else {
    alert("NO AMIGO, NO VAS A PODER COMPRAR CERVEZA!");
} */

/* if (dinero >= 2000) {
    if (mayorEdad) {
        alert("Vas a poder comprar CERVEZA!")
    } else {
        let pagar = dinero * 1.10;
        alert("El total a pagar es: " + pagar);
    }
} else {
    alert("NO AMIGO, NO VAS A PODER COMPRAR CERVEZA!");
} */