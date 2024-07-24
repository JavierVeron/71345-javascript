// Sweet Alert
/* function validarFormulario() {
    let campoEmail = document.getElementById("email").value;
    let campoClave = document.getElementById("clave").value;

    if (campoEmail == "") {
        Swal.fire({
            position: "top-center",
            title: "Error",
            text: "Complete el campo Email!",
            icon: "error",
            confirmButtonText: '🥹 Aceptar',
            timer:2000,
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://i.pngimg.me/thumb/f/350/m2i8m2H7b1K9A0d3.jpg")
                right top
                no-repeat
            `
        });
        return false;
    }

    if (campoClave == "") {
        Swal.fire({
            imageUrl: "https://www.iconpacks.net/icons/1/free-error-icon-905-thumb.png",
            imageHeight: 240,
            imageAlt: "Error",
            text: "Complete el campo Clave!",
        });
        return false;
    }

    Swal.fire({
        title: "Pregunta:",
        text: "Desea guardar los datos en una Local Storage?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, por favor!",
        cancelButtonText: "No, no quiero!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Guardado!",
            text: "Tus datos fueron almacenados en la Local Storage!",
            icon: "success"
          });
          guardarDatos();
        }
      });
} */

// Toastify
/* function validarFormulario() {
    let campoEmail = document.getElementById("email").value;
    let campoClave = document.getElementById("clave").value;

    if (campoEmail == "") {
        Toastify({
            text: "Complete el Campo Email!",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            style: {
                color:"black",
                background: "linear-gradient(to right, white, red)",
            },
        }).showToast();
        return false;
    }

    if (campoClave == "") {
        Toastify({
            text: "Complete el Campo Clave!",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            style: {
                color:"black",
                background: "linear-gradient(to right, white, red)",
            },
        }).showToast();
        return false;
    }

    Toastify({
        text: "¿Desea guardar los Datos en una Local Storage?",
        duration: 3000,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        style: {
            color:"black",
            background: "linear-gradient(to right, white, red)",
        },
        onClick: function(){
            guardarDatos();
            Toastify({
                text: "Tus Datos fueron almacenados en la Local Storage!",
                duration: 3000,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                style: {
                    color:"black",
                    background: "linear-gradient(to right, white, red)",
                },
            }).showToast();
        } // Callback after click
    }).showToast();
} */

function guardarDatos() {
    let campoEmail = document.getElementById("email").value;
    let campoClave = document.getElementById("clave").value;
    localStorage.setItem("datosUsuario", JSON.stringify({email:campoEmail, clave:campoClave}));
}

function obtenerFecha() {
    let campoFecha = document.getElementById("fecha");

    // Iniciar el objeto DateTime
    const DateTime = luxon.DateTime;

    // Crear una fecha a partir de parámetros
    /* const dt = DateTime.local(2024, 12, 24, 12, 10);
    console.log(dt); */

    // Crear una fecha a partir de un objeto
    /* const dt = DateTime.fromObject(
        { day:23, month:7, hour:20, minutes:10 },
        { zone: 'America/Buenos_Aires', numberingSystem: 'beng'}
    );
    console.log(dt); */

    // Crear una fecha en formato ISO
    /* const dt1 = DateTime.fromISO("2024-05-15");
    const dt2 = DateTime.fromISO("2024-05-15T08:30:00");
    console.log(dt1);
    console.log(dt2); */

    // Obtengo la fecha actual
    //const now = DateTime.now()
    //console.log(now.toString())
    /* console.log(now);
    console.log("Día:", now.day);
    console.log("Mes:", now.month);
    console.log("Año:", now.year);
    console.log("Zona:", now.zoneName ) // America/Buenos_Aires
    console.log("Días del Mes:", now.daysInMonth ) // 31 */

    // Formatos de Fecha
    /* campoFecha.value = now.toLocaleString(DateTime.DATE_SHORT);
    campoFecha.value = now.toLocaleString(DateTime.DATE_HUGE);
    campoFecha.value = now.setLocale('en').toLocaleString(DateTime.DATE_HUGE); */

    // Transformación
   /*  console.log("Fecha Actual", now.toLocaleString(DateTime.DATETIME_SHORT));
    const nuevaFecha = now.plus({hour:2, minutes:15}); // Agrego a mi fecha actual
    console.log("Fecha Modificada #1", nuevaFecha.toLocaleString(DateTime.DATETIME_SHORT));
    const nuevaFecha2 = now.minus({year:1, month: 2, day:1, hour:1, minutes:5}); // Quito a mi fecha actual
    console.log("Fecha Modificada #2", nuevaFecha2.toLocaleString(DateTime.DATETIME_SHORT));
    const nuevaFecha3 = now.set({year:2025, month: 3, day:3}); // Establezco una nueva fecha
    console.log("Fecha Modificada #3", nuevaFecha3.toLocaleString(DateTime.DATETIME_SHORT)); */

    // Duration
    /* const Duration = luxon.Duration

    const dt = DateTime.now();
    const dur = Duration.fromObject({ hours: 2, minutes: 15 });

    console.log( dur.hours ) // 3
    console.log( dur.minutes ) // 15
    console.log( dur.seconds ) // 0

    console.log("Fecha Actual", dt.toLocaleString(DateTime.DATETIME_SHORT) )

    const suma = dt.plus(dur); // agregar una duracion a mi fecha actual
    console.log("Duración agregada", suma.toLocaleString(DateTime.DATETIME_SHORT))

    const resta = dt.minus(dur) // quitando una duración a mi fecha actual
    console.log("Duración restada", resta.toLocaleString(DateTime.DATETIME_SHORT)) */

    // Interval
    const Interval = luxon.Interval

    const now = DateTime.now()
    const later = DateTime.fromISO(campoFecha.value)
    const i = Interval.fromDateTimes(now, later)
    const dias = Math.ceil(i.length('days'));

    //console.log("Días", Math.ceil(i.length('days')))
    //console.log( i.length('hours') ) 
    //console.log( i.length('minutes') )

    Swal.fire({
        title: dias + " días!",
        text: "Faltan para tu Cumpleaños!!!",
        icon: "success"
      });
}

document.getElementById("btnForm").addEventListener("click", obtenerFecha);