// Definir un Array
/* const lista = [1, 2, 3]; // Esto es un Array, se defines con corchetes
const lista1 = ["claudio", "gabriela", "laura"];
const lista2 = ["javier", "veron", 1122334455, "Av. San Martin", ["Fiat Duna", "Fiat Palio", "Chery QQ"], {id:1, nombre:"Tomas", categoria:"perro"}, {id:2, nombre:"Amy", categoria:"gatos"}];
console.log(lista);
console.log(lista1);
console.log(lista2); */

//let bebida = {id:1, nombre:"coca cola", precio:1600}; // Esto es un objeto, se definen con llaves

// Accediendo a valores de un Array
/* console.log("Nombre: " + lista2[0] + " " + lista2[1]);
//console.log(lista2[4]);
console.log("Auto: " + lista2[4][1]);
console.log("Bebida: " + bebida.nombre);
console.log("Mascota: " + lista2[6].nombre + "(" + lista2[6].categoria + ")"); */

// Modificando valores de un Array
/* lista2[6] = "www.google.com.ar";
lista2[5].categoria = "Perros"; // Modificar una propiedad de un objeto que está dentro de un array
lista2[4][0] = "Bicicleta"; // Modificar un elemento de un array que está dentro de otro array
console.log(lista2); */

// Recorrer un Array
/* const numeros = [10, 9, 8, 5, 1, 2, 43, 99.9];

for (let i=0; i<numeros.length; i++) {
    console.log(numeros[i]);
} */

// Propiedad length (devuelve la cantidad de elementos de un array)
//console.log(numeros.length);

// Defino un Array de Nombres
const nombres = ["laura", "alexandra", "marcelo", "aldo", "facundo"];

// Método Push (permite agregar un elemento al final de un array)
/* nombres.push("Juan");
nombres.push({id:1, nombre:"Coca Cola"});
nombres.push(["coca cola", "fernet", "hielo"]);
console.log(nombres); */

// Método Unshift (permite agregar un elemento al comienzo de un array)
/* nombres.unshift("Pedro");
console.log(nombres); */

// Método Pop (permite eliminar y devolver un elemento del final de un array)
/* let nombreEliminado = nombres.pop();
console.log(nombres);
console.log(nombreEliminado); */

// Método Shift (permite eliminar y devolver un elemento del comienzo de un array)
/* let nombreEliminado = nombres.shift();
console.log(nombres);
console.log(nombreEliminado); */

// Método Splice (elimina uno o varios elementos a partir de un posición de un array)
/* nombres.splice(2, 2);
console.log(nombres); */

// Método Join (devuelve un string con todos los elementos unidos por un caracter definidos)
/* let nombreFinal = nombres.join(" / ");
console.log(nombreFinal); */

// Método Concat (devuelve un nuevo array concatenando 2 arrays)
/* const perros = ["cambai", "tomas"];
const gatos = ["amy", "benita"];
const cobayos = ["blanco", "negro"];
const mascotas = perros.concat(gatos).concat(cobayos); //concatenar 3 arrays
//const nuevasMascotas = mascotas.concat(cobayos);
//const mascotas = gatos.concat(perros);
console.log(mascotas);
//console.log(nuevasMascotas); */

// Método Slice (nos devuelve un nuevo array a partir de un posición especificada y total elementos)
/* const nombresFinal = nombres.slice(2, 3);
console.log(nombresFinal); */

// Método indexOf (nos devuelve la posición donde se encuentra el elemento, en caso contrario devuelve -1)
/* let pos = nombres.indexOf("alexandra");
console.log(nombres);
console.log(pos);

let nombreBuscado = prompt("Ingrese el nombre a buscar:"); */
/* let posArray = nombres.indexOf(nombreBuscado);

if (posArray >= 0) {
    alert("El nombre se encuentra en la posición: " + posArray)
} else {
    alert("Error! No existe el nombre ingresado!");
} */

// Método includes (devuelve true/false en caso de encontrar un elemento)
/* if (nombres.includes(nombreBuscado)) {
    alert("El nombre se encuentra en el Array!");
} else {
    alert("Error! No existe el nombre ingresado!");
} */

// Método Reverse (invierte el orden de los elementos, ATENCIÓN: MODIFICA EL ARRAY ORIGINAL)
/* nombres.reverse();
console.log(nombres);
nombres.reverse();
console.log(nombres); */

// Ejemplo Aplicado #1
/* const arrayNombres = []; // Array vacío (o sin elementos)
const maximo = 3;

do {
    let nombreIngresado = prompt("Ingrese un Nombre:");
    arrayNombres.push(nombreIngresado.toUpperCase());
    console.log("Nombre Agregado: " + nombreIngresado);
} while (arrayNombres.length < maximo); */

//const nuevoNombres = ["Mauro", "Lisandro"];
//const nombresFinal = arrayNombres.concat(nuevoNombres);
//alert(nombresFinal.join("\n"));

// Ejemplo aplicado #2
/* function eliminarNombre(valor) {
    let pos = arrayNombres.indexOf(valor);
    console.log("posición: " + pos);

    if (pos > -1) {
        arrayNombres.splice(pos, 1); // Elimino un elemento a partir de la posición encontrada
    }
}

let nombreAEliminar = prompt("Ingrese un Nombre a Eliminar:").toUpperCase();
console.log("Nombre Ingresado para Eliminar: " + nombreAEliminar);
eliminarNombre(nombreAEliminar);
console.log(arrayNombres); */


// Crear un array de objetos
/* let bebida1 = {id:1, nombre:"Coca Cola", precio:1600};
const bebidas = [bebida1, {id:2, nombre:"Pepsi", precio:1500}];
bebidas.push({id:3, nombre:"Seven Up", precio:1500});
console.log(bebidas); */

// Recorrer un array con el método For Of
/* for (const nombre of nombres) {
    console.log(nombre);
} */


// Ejemplo aplicado #3
class Producto {
    constructor(nombre, precio) {
        this.name = nombre.toUpperCase();
        this.price = precio;
    }

    sumaIVA() {
        this.price = this.price * 1.21;
    }
}

// Defino un array vacío de productos
const productos = []; 
// Agregando un producto al array Productos
productos.push(new Producto("Coca Cola", 1600));
productos.push(new Producto("Pepsi", 1500));
productos.push(new Producto("Seven Up", 1500));
// Ver el estado de mi Array Productos
console.log(productos);
// Recorrer el Array Productos y ejecutar el método SumaIva()
for (const producto of productos) {
    producto.sumaIVA();
}
// Ver el estado de mi Array Productos
console.log(productos);


