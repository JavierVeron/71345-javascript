// Incorporando funciones
function saludar() {
    let nombre = document.getElementById("nombre");
    alert("Hola, " + nombre.value)
}

function despedir() {
    let nombre = document.getElementById("nombre");
    alert("Chau, " + nombre.value + "!")
}

// Opción #1 => addEventListener
/* let boton = document.getElementById("boton");
boton.addEventListener("click", saludar); */
//boton.addEventListener("dblclick", despedir);
/* boton.addEventListener("click", () => {
    alert("Hola a todos!");
}); */
/* document.getElementById("boton2").addEventListener("dblclick", saludar); */

// Opción #2 => propiedad onclick
let boton = document.getElementById("boton");
//boton.onclick = saludar;
/* boton.onclick = () => {
    alert("Hola a Todos!");
} */

// Opción #3 => definir el atributo onclick pero en el html

// Eventos del Mouse
/* boton.addEventListener("mouseup", () => {
    console.log("Hiciste Click (UP)");
})

boton.addEventListener("mousedown", () => {
    console.log("Hiciste Click (DOWN)");
})

boton.addEventListener("mouseup", () => {
    console.log("Hiciste Click (UP)");
})

boton.addEventListener("mouseover", () => {
    console.log("Detectamos ingreso del mouse");
    boton.className = "btn btn-danger";
})

boton.addEventListener("mouseout", () => {
    console.log("Detectamos salida del mouse");
    boton.className = "btn btn-primary";
}) */


// Eventos del Teclado
let campoNombre = document.getElementById("nombre");

campoNombre.addEventListener("keydown", () => {
    console.log("Detectamos que se ha presionado una tecla");
})

campoNombre.onkeyup = () => {
    console.log("Detectamos que se ha soltado una tecla");
};

// Evento Oninput
/* campoNombre.oninput = () => { // casa
    let maximo = 140;
    let longTexto = campoNombre.value.length; //4
    let diff = maximo - longTexto;
    document.getElementById("resultado").innerHTML = "Caracteres disponibles: " + diff;
}; */

// Evento Onchange
/* let compania = document.getElementById("compania");
compania.onchange = () => {
    document.getElementById("resultado").innerHTML = "Seleccionaste: <b>" + compania.value + "</b>";
} */


// Eventos con Formularios
// Opción #1 => Botón del tipo "button"
/* validarFormulario = () => {
    let usuario = document.getElementById("user").value;
    let contrasenia = document.getElementById("password").value;

    if ((usuario == "") || (usuario.length == 0)) {
        alert("Ingrese un valor para el Campo Nombre!");
        return false; // Detener la ejecución de mi script
    }

    if (contrasenia == "") {
        alert("Ingrese un valor para el Campo Contraseña!");
        return false;
    } else if (contrasenia.length < 6) {
        alert("Ingrese una contraseña mayor o igual a 6 caracteres!");
        return false;
    }

    document.getElementById("form1").submit(); // Disparar el Formulario
} */

// Opción #2 => Botón del tipo submit
/* validarFormulario = (e) => {
    e.preventDefault(); // Detener la ejecución del envío del Formulario

    let usuario = document.getElementById("user").value;
    let contrasenia = document.getElementById("password").value;

    if ((usuario == "") || (usuario.length == 0)) {
        alert("Ingrese un valor para el Campo Nombre!");
        return false; // Detener la ejecución de mi script
    }

    if (contrasenia == "") {
        alert("Ingrese un valor para el Campo Contraseña!");
        return false;
    } else if (contrasenia.length < 6) {
        alert("Ingrese una contraseña mayor o igual a 6 caracteres!");
        return false;
    }

    document.getElementById("form1").submit(); // Disparar el Formulario
}

let btnForm = document.getElementById("btnForm");
let form1 = document.getElementById("form1");
btnForm.addEventListener("click", validarFormulario); // Asociar la función al botón
//form1.addEventListener("submit", validarFormulario); // Asociar la función al formulario */


// Otra forma de validar campos de un form
let formulario = document.getElementById("formulario");
console.log(formulario.children);

function validarFormulario(evento) {
    evento.preventDefault();

    if (formulario.children[0].value == "") {
        alert("Ingrese un valor para el Campo Nombre!");
        return false; // Detener la ejecución de mi script
    }

    if (formulario.children[1].value == "") {
        alert("Ingrese un valor para el Campo DNI!");
        return false; // Detener la ejecución de mi script
    }

    formulario.submit(); // Enviar el formulario
}

formulario.onsubmit = validarFormulario;


    
