// Un comentario
/* Otro comentario
Otro más con más de una línea */

// Declarando Variables
/* let nombre; // Declarar la variable nombre;
nombre = "Manuel"; // Asignar el valor "Manuel" a la variable Nombre

let nombre2 = "Florencia Salgado"; // Declarar y asginar */ 

//nombre3 = "Katherine"; // Mala práctica se debería declarar con "let" la variable

/* alert(nombre);
alert(nombre2);
alert(nombre3);

let nombre4 = nombre3;
alert(nombre4); */

/* const apellido = "Rodriguez"; // Declarar la constante apellido (no se puede volver a pisar el valor)
alert(nombre);
alert(apellido);
nombre = "Facundo";
//apellido = "Segovia"; // Acá va a fallar
alert(nombre);
alert(apellido); */

// Operaciones básicas (numéricas)
/* let numeroA = 10;
let numeroB = 20;
const numeroC = 30; */

// Suma
/* let resultado = numeroA + numeroB;
alert(resultado); */

// Resta
/* let resultado = numeroB - numeroA;
alert(resultado); */

// Multiplicación
/* let resultado = numeroA * numeroC;
alert(resultado); */

// División
/* let resultado = numeroB / numeroA;
alert(resultado); */

// Resto (con operador %, si es par el resto es 0)
/* //let resultado = numeroB % numeroA; // Par
let resultado = numeroB % numeroC; // Impar
alert(resultado);  */

// Operación matemática
/* let resultado = ((numeroA + numeroB) * 2) / numeroC;
alert(resultado); // 2 */


// Operación básicas (texto)
/* let textoA = "Coder";
let textoB = "House";
const blanco =  " ";
let comision = 71345;
let curso = "JavaScript"; */

/* let texto1 = textoA + textoB;
alert(texto1); */
/* let texto2 = textoA + blanco + textoB;
alert(texto2); */
/* let texto2 = textoA + " " + textoB;
alert(texto2); */
/* let texto = comision + " - " + curso;
alert(texto); */
/* let texto3 = "Coder " + textoB;
alert(texto3); */

// Prompts, Alert y Console
/* let nombreIngresado = prompt("Ingrese su Nombre y Apellido:");
let mensaje = "Hola, " + nombreIngresado + "!!!";
alert(mensaje);
console.log(mensaje); */


// Ejemplo de Entrada y Salida con Prompts!
let nombreProducto = prompt("Ingrese el Nombre del Producto:");  // Los prompts guardan los valores en formato string
let precioProducto = prompt("Ingrese el Valor en Pesos del Producto:");
let salida = nombreProducto + " $" + precioProducto;
alert(salida);


