// Métodos de Strings
/* let texto = "   Curso de DW   ";
console.log(texto);
console.log(texto.length);
let texto2 = texto.replace("Curso", "Introducción"); // Reemplaza un texto por otro y devuelve un nuevo string
console.log(texto2);
texto2 = texto.trim(); // Quita los espacios del comienzo y final del string
texto2 = texto.trimStart(); // Quita los espacios del comienzo del string
texto2 = texto.trimEnd(); // Quita los espacios del final del string
console.log(texto2);
let nombre = prompt("Ingrese su Nombre:").trim().toUpperCase();
let apellido = prompt("Ingrese su Apellido:").trim().toUpperCase();
let mensaje = "Hola, " + nombre + " " + apellido;
alert(mensaje); */

// Objeto Math
//console.log(Math.PI);

// Min y Max
/* console.log("Máx: " + Math.max(10, 50, 5, 0 , -10));
console.log("Mín: " + Math.min(10, 50, 5, 0 , -10));
console.log("Máx (Infinito): " + Math.max(10, 50, Infinity, 5, -Infinity, 0 , -10));
console.log("Mín (Infinito): " + Math.min(10, 50, Infinity, 5, -Infinity, 0 , -10)); */

// Ceil, floor, round
/* const valor = 9.4;
console.log("Ceil: " + Math.ceil(valor)); // Techo
console.log("Floor: " + Math.floor(valor)); // Piso
console.log("Round: " + Math.round(valor)); // Redondeo */

// Square Root
/* console.log("Raíz cuadrada de 9: " + Math.sqrt(9)); // 3
console.log("Raíz cuadrada de 25: " + Math.sqrt(25)); // 5
console.log("Raíz cuadrada de 81: " + Math.sqrt(81)); // 9
console.log("Raíz cúbica de 625: " + Math.cbrt(125)); // 5 */

// Random
/* console.log(Math.random()); // Genero números random entre 0 y 1
let valorRandom = Math.random() * 10;
console.log(valorRandom); // Genero números random entre 0 y 10
console.log(Math.round(valorRandom)); // Genero números random entre 0 y 10 */

// Creamos un array de Participantes
/* const participantesGH = ["Nico", "Darío", "Ema", "Bauti"];
let posicicionGanador = Math.round(Math.random() * participantesGH.length);

if (posicicionGanador >= participantesGH.length) {
    console.log(posicicionGanador);
    posicicionGanador--;
}

console.log(posicicionGanador); //2
alert("Ganador de GH: " + participantesGH[posicicionGanador]); */

// Generador de Números Random
/* const generadorRandom = (maximo) => {
    return Math.round(Math.random() * maximo);
}

console.log(generadorRandom(1000)); */

// Objeto Date
/* const fecha = new Date(); // Obtener la fecha actual
let fecha2 = new Date(2020, 4, 21, 18, 35, 14, 20); // Declarar una fecha específica
console.log(fecha);
console.log(fecha2);
console.log(fecha2.getMinutes());
console.log(fecha2.getSeconds());
console.log(fecha2.getMilliseconds()); */

const fecha = new Date("December 15 2022 08:45");
console.log(fecha);

// Obteniendo los valores por separado
/* let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let anio = fecha.getFullYear();
console.log("Día: " + dia);
console.log("Mes: " + mes);
console.log("Año: " + anio); */

// Distintas formas de representación de una fecha
/* console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString().replaceAll("/", "-"));
console.log(fecha.toTimeString());
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let anio = fecha.getFullYear();
alert(dia + "-" + mes + "-" + anio) */





// Solicito los datos al usuario
/* let nombre = prompt("Ingrese su Nombre");
let dia = parseInt(prompt("Ingrese su Día de Cumpleaños"));
let mes = parseInt(prompt("Ingrese su Mes de Cumpleaños")) - 1;
mostrarMensajeCumple(nombre, dia, mes); */


// Calculo de tiempo
/* const inicio = new Date();

for (let i=0; i<100000; i++) {
    console.log("Procesando...");
}

const final = new Date();
const diferencia = Math.round((final - inicio) / 1000);
alert("Tu proceso tardó: " + diferencia + " segundos!"); */