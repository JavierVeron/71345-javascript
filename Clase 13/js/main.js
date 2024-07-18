// Copia por Valor => En todas los tipos de datos primitivos (string, number, boolean)
/* let nombre = "Florencia";
let nombre2 = nombre; // Es copiar el valor de la varialbe nombre en nombre2
console.log(nombre);
console.log(nombre2);
nombre2 = "Manuel"; // Pisar la variable nombre2
console.log(nombre);
console.log(nombre2); */

// Copia por Referencia => objetos y arrays
/* let bebida = {id:1, nombre:"Coca Cola", precio:1800};
let bebida2 = bebida; // Copia por referencia del objeto bebida en bebida2, osea ambas variables apuntan al mismo objeto
bebida2.precio = 2000;
bebida.nombre = "Pepsi";
console.log(bebida);
console.log(bebida2);
let bebida3 = {id:bebida.id, nombre:bebida.nombre, precio:bebida.precio}; // Crear un nuevo objeto
bebida3.precio = 2500;
console.log(bebida3); */

/* let bebidas = ["Coca Cola", "Pepsi", "Seven Up"];
let bebidas2 = bebidas; // Copia por referencia el array bebidas en bebidas2, osea ambas variables apuntan al mismo array
bebidas2[2] = "Cunnington Cola";
console.log(bebidas);
console.log(bebidas2);
let bebidas3 = [];
bebidas3.push(bebidas[0])
bebidas3.push(bebidas[1])
bebidas3.push(bebidas[2])
bebidas3[2] = "Fanta";
console.log(bebidas3);
let bebidas4 = bebidas.map(item => item); // Me crea un nuevo array
bebidas4[1] = "Pepsi Max";
console.log(bebidas4); */

// Spread
/* let nombres = ["Manu", "Facu", "Laura", "Maria"];
console.log(nombres);
console.log("Manu", "Facu", "Laura", "Maria");
console.log(...nombres); */

/* const numeros = [50, 100, -20, 0, 10];
console.log(numeros);
console.log(Math.max(numeros));
console.log(Math.max(...numeros));
console.log(Math.min(...numeros)); */

// Spread con Arrays
/* const nombres1 = ["Facundo", "Florencia"];
const nombres2 = ["Manuel", "Juan"];
//const nombres = nombres1.concat(nombres2); // Concatena 2 arrays en un nuevo array
//console.log(nombres);
const nombres3 = ["Pedro", ...nombres1, "Enzo", ...nombres2, "Laura"]; // Crear un nuevo array, desparramando elementos de nombres 1 y 2
console.log(nombres3); */

// Spread Objetos
/* let bebida = {id:1, nombre:"Coca Cola", precio:1800};
let bebida2 = {...bebida}; // Crear un nuevo objeto en la variable bebida2 (con las mismas propiedades de bebida);
bebida.nombre = "Coca Cola Zero";
bebida2.precio = 2500;
console.log(bebida);
console.log(bebida2);
let bebida3 = {...bebida, precio:5000, categoria:"gaseosas"};
console.log(bebida3); */

// Rest parameters
function sumar(...numeros) {
    return numeros.reduce((total, item) => total += item, 0)
}

console.log(sumar(10, 20)); //30
console.log(sumar(20, 10, 5)); //35