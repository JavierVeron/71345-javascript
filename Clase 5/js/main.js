// Definimos un objeto
/* const persona = {nombre:"Manuel", apellido:"Rodriguez", dni:1122334455, direccion: "Av. San Martín 1500", ciudad:"Padua", provincia:"Buenos Aires", casado:false};
console.log(persona); */

// Accediendo a los valores
/* console.log(persona.apellido + ", " + persona.nombre);

function estaCasado(valor) {
    if (valor == true) {
        console.log("Está casado!");
    } else {
        console.log("Está soltero!");
    }
}

estaCasado(persona.casado); */

/* const bebida = {id:1, nombre:"Coca Cola", precio:1600};
console.log(bebida.nombre + " $" + bebida.precio); */

// Accediendo a los valores - Opción #2
/* const bebida = {id:1, nombre:"Coca Cola", precio:1800};
console.log(bebida.nombre + " $" + bebida.precio);
console.log(bebida["nombre"] + " $" + bebida["precio"]); */

// Modificando valores de un Objeto
/* const bebida = {id:1, nombre:"Coca Cola", precio:1800};
console.log(bebida);
//bebida = "Cocucha"; //No funciona, porque no se puede redefinir una constante
bebida.precio = 2000; // Opción #1
bebida["nombre"] = "Coca Cola 2L"; //Opción #2
console.log(bebida); */

// Constructores
function usuarioIG(dato1, dato2, dato3) {
    this.nombre = dato1;
    this.usuario = dato2;
    this.seguidores = dato3;

    /* if (dato1 == undefined || dato1 == "") {
        this.nombre = "[SIN NOMBRE]";
    } else {
        this.nombre = dato1;
    }

    if (dato2 == undefined || dato2 == "") {
        this.usuario = "[SIN USUARIO]";
    } else {
        this.usuario = dato2;
    }

    if (dato3 == undefined) {
        this.seguidores = 0;
    } else {
        this.seguidores = dato3;
    } */
}

/* const usuario1 = new usuarioIG("Lionel Messi", "leomessi", "503M");
const usuario2 = new usuarioIG("Cristiano Ronaldo", "");
console.log(usuario1);
console.log(usuario2); */


// Crear un Constructor a partir de un Objeto
/* const bebida = {id:1, nombre:"Coca Cola", precio:1600};

function crearBebida(objeto) {
    this.idProducto = objeto.id;
    this.nombreProducto = objeto.nombre.toUpperCase();
    this.precioSinIVA = objeto.precio;
    this.precioConIVA = this.precioSinIVA * 1.21;
    this.descripcion = "";
}

const bebida1 = new crearBebida(bebida);
const bebida2 = new crearBebida({id:2, nombre:"Pepsi", precio:1500});
console.log(bebida1);
console.log(bebida2);
bebida1.descripcion = "Bebida Cola con Azúcar";
console.log(bebida1);
bebida1.descripcion = "Bebida Cola con Azúcarrrrrrrrrrrrrrrrrrr";
console.log(bebida1); */

// Métodos de los Objetos
/* let texto = prompt("Ingrese su Nombre:"); // _Mauro_ (7)
console.log(texto);
console.log(texto.length); // Acceder a la propiedad length
texto = formatearTexto(texto); //7
console.log(texto);

function formatearTexto(texto) {//7
    return texto.trim().toUpperCase(); //5 MAURO
} */


// Creando Métodos a un Constructor
/* function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.saludar = () => {
        console.log("Hola, soy " + this.nombre);
    }
}

const persona1 = new Persona("Diego López", 25, "Av. Libertador 1200");
console.log(persona1);
persona1.saludar(); */


// Operador IN y For..IN
/* const persona1 = {nombre:"Diego López", edad:25, direccion:"Av. Libertador 1200"};
console.log("edad" in persona1); // in sirve para validar si existe una propiedad en un objeto (true/false)
console.log("dni" in persona1);

for (let propiedad in persona1) {
    console.log(propiedad + " => " + persona1[propiedad]);
} */


// Clases
// Crear un Clase Persona
class Persona {
    // Defino las Propiedades de la Clase (que serían las variables)
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }

    // Defino los Métodos de la Clase (que serían las funciones)
    saludar = () => {
        return ("Hola, soy " + this.nombre);
    }

    pasarAMayuscula = () => {
        this.nombre = this.nombre.toUpperCase();
    }
}

const persona1 = new Persona("Gabriel Roulliet", 25, "Paunero 1200");
console.log(persona1);
let saludo = persona1.saludar();
alert(saludo)
persona1.pasarAMayuscula();
console.log(persona1);

