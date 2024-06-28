// Ejemplo calculo de Fechas
function calcularFechaCumple(dia, mes) {
    const fechaActual = new Date();
    const fechaCumple = new Date(2024, mes, dia);
    const diferencia = fechaCumple - fechaActual;
    const milisegunosPorDia = 60 * 60 * 1000 * 24;
    const dias = Math.round(diferencia / milisegunosPorDia);

    return dias;
}

function mostrarMensajeCumple(nombre, dia, mes) {
    let dias = calcularFechaCumple(dia, mes);
    alert(nombre + " tu cumpleaños será en " + dias + " días!");
}