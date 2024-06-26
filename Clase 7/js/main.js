// Ejemplo #1
/* let total = 0;

for (let i=1; i<=10; i++) {
    total += i;
}

console.log(total); // Da como resultado 55 */

// Ejemplo de Abstracción
// 1- Entrada de Datos // 2- Proceso de Datos // 3- Salida de Datos
/* function sumarRango(valorMin, valorMax) {
    let total = 0;

    for (let i=valorMin; i<=valorMax; i++) {
        total += i;
    }

    return total;
}

console.log(sumarRango(1, 10)); // 55 */


// Funciones de Orden Superior
// Ejemplo #1
/* function mayorQue(valorX) {
    return valor => valor > valorX // Devuelvo una función
}

let mayorQue10 = mayorQue(10); // (valor) => valor > 10 => mayorQue10 es una función flecha
console.log(mayorQue10(10)); // (10) => 10 > 10 => No es mayor, es IGUAL => Resultado es FALSE
console.log(mayorQue10(12)); // (12) => 12 > 10 => es mayor => Resultado es TRUE */

/* function textoMayor(texto1, texto2) {
    return texto1.length > texto2.length
}

let texto = textoMayor("hola", "chauchis");
console.log(texto); */


// Ejemplo #2
/* function asignarOperacion(tipoOperacion) {
    if (tipoOperacion == "suma") {
        return (a, b) => a + b;
    } else if (tipoOperacion == "resta") {
        return (a, b) => a - b;
    } else if (tipoOperacion == "multiplicacion") {
        return (a, b) => a * b;
    } else if (tipoOperacion == "division") {
        return (a, b) => a / b;
    } else {
        return 0;
    }
}

const operacionSuma = asignarOperacion("suma"); // (a, b) => a + b
console.log("Suma: " + operacionSuma(10, 5)); // (10, 5) => 10 + 5 => 15

const operacionResta = asignarOperacion("resta"); // (a, b) => a - b
console.log("Resta: " + operacionResta(10, 5)); // (10, 5) => 10 - 5 => 5

const operacionMulti = asignarOperacion("multiplicacion"); // (a, b) => a * b
console.log("Multiplicación: " + operacionMulti(10, 5)); // (10, 5) => 10 * 5 => 50

const operacionDivi = asignarOperacion("division"); // (a, b) => a / b
console.log("División: " + operacionDivi(10, 5)); // (10, 5) => 10 / 5 => 2 */


/* function realizarCalculo() {
    let valor1 = parseFloat(prompt("Ingrese valor #1:"));
    let valor2 = parseFloat(prompt("Ingrese valor #2:"));
    const operacionSuma = asignarOperacion("suma"); // (a, b) => a + b
    let resultado = operacionSuma(valor1, valor2);
    alert("Resultado: " + resultado);
}

realizarCalculo(); */


// Función de Orden Superior que recibe una función como parámetro
function porCadaUno(unArray, unaFuncion) { // espero un array y una función como parámetros
    for (const elemento of unArray) {
        unaFuncion(elemento)
    }
}

const numeros = [1, 2, 3, 4];
//porCadaUno(numeros, console.log);

const nombres = ["mauro", "florencia", "marcelo", "ryosho"];
//porCadaUno(nombres, alert);

// Ejemplo #3
/* let total = 0;

function acumular(valor) {
    total += valor
}

porCadaUno(numeros, acumular); */

/* for (const elemento of numeros) {
    acumular(elemento);
    // acumular(1) 0 + 1 => 1
    // acumular(2) 1 + 2 => 3
    // acumular(3) 3 + 3 => 6
    // acumular(4) 6 + 4 => 10
} */

//console.log("Total: " + total);

// Ejemplo #4
/* const numerosDoble = []; // array vacío
const unaFuncion = (valor) => {
    numerosDoble.push(valor * 2);
} // Defini una función flecha

porCadaUno(numeros, unaFuncion);

console.log(numerosDoble); */


// Métodos de Búsqueda y Transformación
// forEach => Recorre cada uno de los elementos del array con un función que definamos
/* numeros.forEach(valor => {
    console.log(valor);
})
nombres.forEach(valor => {
    alert(valor);
}) */

const cursos = [
    {id:1, nombre:"Desarrollo Web", precio:50000},
    {id:2, nombre:"JavaScript", precio:55000},
    {id:3, nombre:"React JS", precio:60000}
]

// find => Busca el primer elemento que coincida con la condición, caso contrario devuelve undefined
/* let curso1 = cursos.find(item => item.nombre == "React JS");
let curso2 = cursos.find(item => item.nombre == "JS");
let curso3 = cursos.find(item => item.precio <= 54000);
console.log(curso1.nombre + " $" + curso1.precio);
console.log(curso2); // undefined
console.log(curso3); // undefined */

// filter => devuelve un array que coincida con la condición, caso contrario devuelve un array vacío
/* const cursosQuePuedoPagar = cursos.filter(item => item.precio <= 56000);
console.log(cursosQuePuedoPagar); */

// some => devuelve true o false en caso de que encuentre un elemento
/* let producto = cursos.some(item => item.nombre == "React JS");
console.log(producto); */

// map => crea un nuevo array con la posibilidad de transformar sus valores
/* const cursosIVA = cursos.map(item => ({idCurso:item.id, nombreCurso:item.nombre.toUpperCase(), precioCurso:item.precio * 1.21}));
const cursosIVA2 = cursos.map(item => item.precio * 1.21);
const cursos3 = cursos.map(item => ({nombre:item.nombre, precio:item.precio}));
console.log(cursosIVA);
console.log(cursosIVA2);
console.log(cursos3); */

// reduce => devuelve un unico valor sumando todos los elementos de un array
/* let totalAPagar = cursos.reduce((acumulador, item) => acumulador += item.precio, 0);
console.log("Total a Pagar: $" + totalAPagar); */

// sort => ordena un array de acuerdo a una condición que definamos
const numeros2 = [20, 10, 1, -2];
const nombres2 = ["mauro", "florencia", "laura", "abril"];
numeros2.sort((a, b) => a - b); // Ordena de forma ascendente
console.log(numeros2);
numeros2.sort((a, b) => b - a); // Ordena de forma descendente
console.log(numeros2);
nombres2.sort((a, b) => a > b); // Ordena de forma ascendente los nombres
console.log(nombres2);
cursos.sort((a, b) => { // Ordenar en forma descendente por nombre de curso el array "cursos"
    if (a.nombre > b.nombre) {
        return -1
    }

    if (a.nombre < b.nombre) {
        return 1
    }

    return 0;
})
console.log(cursos);
