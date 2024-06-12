// ENTRADA DE DATOS
let nombreCliente = prompt("Ingrese su Nombre y Apellido: (ESC para salir)");

while (nombreCliente != "ESC") {
    let textoTipoCliente = "Ingrese su Paquete de Servicios:\n\n";
    textoTipoCliente += "1-HSBC Premier Black\n";
    textoTipoCliente += "2-HSBC Premier\n";
    textoTipoCliente += "3-HSBC Advanced\n";
    textoTipoCliente += "4-HSBC Standard";
    let tipoCliente = parseInt(prompt(textoTipoCliente));
    let monto = parseInt(prompt("Ingrese el Monto: ($10000 - $1000000"));
    let textoPlazo = "Ingrese el Plazo:\n\n";
    textoPlazo += "1- 12 Cuotas\n";
    textoPlazo += "2- 24 Cuotas\n";
    textoPlazo += "3- 36 Cuotas";
    let plazo = parseInt(prompt(textoPlazo));

    // Chequeando como llegan los datos ingresados
    /* console.log("Cliente: " + nombreCliente);
    console.log("Tipo: " + tipoCliente);
    console.log("Monto: $" + monto);
    console.log("Plazo: " + plazo); */

    // PROCESAMIENTO DE DATOS
    let cuotaPura = calcularCuotaPura(monto, plazo);
    let cuotaTNA = calcularCuotaTNA(tipoCliente, cuotaPura);
    let cuotaTEA = calcularCuotaTEA(tipoCliente, cuotaPura);
    let cuotaPagar = cuotaTNA + cuotaTEA;
    informarPrestamo(nombreCliente, monto, plazo, cuotaPagar);
    nombreCliente = prompt("Ingrese otro Nombre y Apellido: (ESC para salir)");
}

function calcularCuotaPura(monto, plazo) {
    return monto / plazo;
}

function calcularCuotaTNA(tipoCliente, cuotaPura) {
    let TNA;

    if (tipoCliente == 1) {
        TNA = 65 / 12;
    } else if (tipoCliente == 2) {
        TNA = 70 / 12;
    } else if (tipoCliente == 3) {
        TNA = 85 / 12;
    } else {
        TNA = 102 / 12;
    }

    return (cuotaPura * TNA) / 100;
}

function calcularCuotaTEA(tipoCliente, cuotaPura) {
    let TEA;

    if (tipoCliente == 1) {
        TEA = 88.37 / 12;
    } else if (tipoCliente == 2) {
        TEA = 97.51 / 12;
    } else if (tipoCliente == 3) {
        TEA = 127.42 / 12;
    } else {
        TEA = 166.31 / 12;
    }

    return (cuotaPura * TEA) / 100;
}

function informarPrestamo(nombre, monto, plazo, cuota) {
    let textoPlazo;

    if (plazo == 1) {
        textoPlazo = 12;
    } else if (plazo == 2) {
        textoPlazo = 24;
    } else {
        textoPlazo = 36;
    }

    alert("Cliente: " + nombre + "\nMonto: $" + monto + "\nPlazo: " + textoPlazo + " meses\nCuota a Pagar: $" + cuota.toFixed(2) + " pesos");
}