//For
//alert("Inicio");

// Imprime el valor 0..9
/* for(let i=0; i<10; i++) {
    alert(i);
}
 */
// Imprime el valor 0..9
/* for(let i=1; i<=10; i++) {
    console.log(i);
} */

//alert("Fin");


/* let i = 0; // Declarar la variable i y asignar el valor 0
// 3 Formas de incrementar una variable numérica
// Opción #1 
i = i + 1; //1
console.log("Opción #1: " + i);
// Opción #2
i += 1; //2
console.log("Opción #2: " + i);
// Opción #3
i++; //3
console.log("Opción #3: " + i); */


// Ejemplo aplicado
/* let numeroIngresado = parseInt(prompt("Ingrese un valor:"));
let salida = "Tabla del " + numeroIngresado + "\n\n"; */

// Ejemplo original
/* for (let i=1; i<=10; i++) {
    let resultado = numeroIngresado * i;
    alert(numeroIngresado + "X" + i + " = " + (resultado));
} */

// Ejemplo con toda la tabla
/* for (let i=1; i<=10; i++) {
    let resultado = numeroIngresado * i;
    salida += numeroIngresado + "X" + i + " = " + resultado + "\n";
}

alert(salida); */

// Salidas con variables string
/* let nombre = prompt("Ingrese su Nombre:");
let mensaje = "Hola, " + nombre + "\n\n";
mensaje += "Cómo estás?";
alert(mensaje);
console.log(mensaje); */


// Sentencia Break y Continue 
/* let numeroIngresado = parseInt(prompt("Ingrese un valor:"));
let salida = "Tabla del " + numeroIngresado + "\n\n";

// Ejemplo con toda la tabla
for (let i=1; i<=10; i++) {
    //if (i == 5) {
        //break; //Detiene la ejecución del For
    //}

    // if (i == 5) {
       // continue; //Salta a la siguiente iteración del For
    //}

    let resultado = numeroIngresado * i;
    salida += numeroIngresado + "X" + i + " = " + resultado + "\n";
}

alert(salida); */


// While (ciclo condicional, siempre y cuando se cumpla la condición se ejecutará permanentemente)
/* let ingresar = prompt("Ingrese un texto: (ESC para salir)"); //ESC esc eSC

while (ingresar.toUpperCase() != "ESC") { 
    // Mejora en la validación
    //if (ingresar.toUpperCase() == "ESC") {
        //console.log("Estoy por aca");
        //break;
    //}

    alert("Ingresaste el texto: " + ingresar);
    ingresar = prompt("Ingrese otro texto: (ESC para salir)");

} */


// Do..While (Similar al While pero al menos ejecuta la primera vez)
/* let numero = 0;

do {
    numero = parseInt(prompt("Ingrese un Número:"));
    alert("Ingresaste el Número: " + numero);
} while (numero != 10); */


// Switch (comparo valores de una variable)
let entrada = prompt("Ingrese su Nombre:");

/* while (entrada.toUpperCase() != "ESC") {
    switch (entrada) {
        case "CAMILA":
            alert("Hola Cami!");
            break; // Cortar la comparación entre los demás cases
        
        case "SEBASTIAN":
            alert("Hola Sebas!");
            break;
        
        default:
            alert("Quién diablos eres?");
            break;
    }

    entrada = prompt("Ingresá otro nombre:").toUpperCase();
} */

/* while (entrada.toUpperCase() != "ESC") {
    if (entrada == "CAMILA") {
        alert("Hola Cami!");
        break; // Cortar la ejecución del While
    } else if (entrada == "SEBASTIAN") {
        alert("Hola Sebas!");
    } else {
        alert("Quién diablos eres?");
    }

    entrada = prompt("Ingresá otro nombre:").toUpperCase();
} */


