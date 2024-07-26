// setTimeout => ejecuta una función (por única vez) al cabo de X segundos
/* console.log("Inicio de programa!");

setTimeout(() => {
    console.log("Estoy acá!");
}, 2000)

console.log("Fin de programa!"); */


// Ejemplo aplicado
/* function saludar() {
    const nombre = document.getElementById("nombre");
    const nombreMensaje = document.getElementById("nombreMensaje");
    nombreMensaje.innerHTML = `<div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>`; 

    setTimeout(() => {
        nombreMensaje.innerHTML = "Hola, " + nombre.value;
    }, 3000)

    setTimeout(() => {
        nombreMensaje.innerHTML = "";
    }, 5000)
}

document.getElementById("btnForm").addEventListener("click", saludar); */


/* for (const letra of "hola") {
    console.log(letra);
}

for (const letra of "hola") {
    setTimeout(() => {
        console.log(letra);
    }, 2000)
} */


// Callstack (ejecución sincrónica)
/* function multiply(x, y) {
    return x * y;
}

function printSquare(x) {
    //console.log("Valor", x);
    let valor = multiply(x, x);
    console.log(valor);
}

printSquare(5);
console.log("FIN"); */


// setInterval => Ejecuta de forma periódica una función al cabo de X segundos
/* console.log("Inicio de programa!");

setInterval(() => {
    console.log("Estoy acá!");
}, 2000)

console.log("Fin de programa!"); */


// ClearInterval => Detiene la ejecución de un determinado setInterval
/* let contador = 0;
let intervalo = setInterval(() => {
    contador++;
    console.log("Contador", contador);

    if (contador >= 5) {
        clearInterval(intervalo);
        console.log("Intervalo detenido!");
    }
}, 2000); */


// ClearTimeout => Detiene la ejecución de un determino setTiemout
/* let contador = 0;
let intervalo = setTimeout(() => {
    contador++;
    console.log("Contador", contador);
}, 3000);

function detenerContador() {
    clearTimeout(intervalo);
    console.log("Intervalo detenido (mediante botón)");
}

document.getElementById("btnForm").addEventListener("click", detenerContador); */


// Promesas
const eventoFuturo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let cupon = "CUPON10";
            let numeroRandom = Math.round(Math.random());
    
            if (numeroRandom == 1) {
                // Resolver o completar la promesa (estado: fullfilled)
                resolve(cupon);
            } else {
                // Rechazar la promesa (estado: rejected)
                reject("No ganaste nada!");
            }
        }, 3000)
    })
}

//const respuestaPromesa = eventoFuturo();
//console.log(respuestaPromesa);

// Then (capturar el valor de la promesa completada) y Catch (capturar el valor de la promesa rechazada)
/* const nombreMensaje = document.getElementById("nombreMensaje");
eventoFuturo()
.then((valor) => {
    console.log("Cupón", valor);
    nombreMensaje.innerHTML = "Cupón: " + valor;
    nombreMensaje.className = "text-success";
})
.catch((error) => {
    console.log("PERDISTE!", error);
    nombreMensaje.innerHTML = "PERDISTE! " + error;
    nombreMensaje.className = "text-danger";
})
.finally(() => {
    setTimeout(() => {
        nombreMensaje.innerHTML = "GRACIAS POR PARTICIPAR!";
        nombreMensaje.className = "text-dark";
    }, 5000);
}) */


// Ejemplo aplicado
const catalogoProductos = [
    {id:1, nombre:"Gaseosa Coca Cola sabor original 2.25 l.", imagen:"https://carrefourar.vtexassets.com/arquivos/ids/332148-1600-auto?v=638211437412370000&width=1600&height=auto&aspect=true", precio:3100},
    {id:2, nombre:"Gaseosa 7 Up light lima limón 2.25 l.", imagen:"https://carrefourar.vtexassets.com/arquivos/ids/277308-1600-auto?v=638128491408170000&width=1600&height=auto&aspect=true", precio:2070},
    {id:3, nombre:"Schweppes zero pomelo 2,25 lts.", imagen:"https://carrefourar.vtexassets.com/arquivos/ids/378997-1600-auto?v=638313440596100000&width=1600&height=auto&aspect=true", precio:2174}
]

const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(catalogoProductos);
        }, 3000)
    })
}

const cargarSpinner = () => {
    let contenidoHTML = `<div class="my-5 text-center">
    <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    </div>`;
    document.getElementById("resultado").innerHTML = contenidoHTML;
}

const renderProductos = (catalogo) => {
    let contenidoHTML = "";

    catalogo.forEach(producto => {
        contenidoHTML += `<div class="col-md-4">
        <div class="card border-0">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
            <p class="card-text text-primary "><b>$ ${producto.precio}</b><br><span class="card-text text-secondary">${producto.nombre}</span></p>
        </div>
        </div>
        </div>`;
    });

    document.getElementById("resultado").innerHTML = contenidoHTML;
}

cargarSpinner();
obtenerProductos()
.then((respuesta) => {
    renderProductos(respuesta)
})
