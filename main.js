let valorDolar = 487;
let valorEuro = 495;
let valorYuan = 68;
let repetirConversionSi = 1;
let repetirConversionNo = 2;

let seleccionDivisa;
let cantidadCalcular;
let montoConversion;
let repetirConversion;

seleccionDivisa = prompt('Bienvenido a la calculadora de divisas. Seleccione qué divisa desea para convertir:\n1. Dólar\n2. Euro\n3. Yuan');

cantidadCalcular = parseFloat(prompt('Seleccione la cantidad de pesos argentinos (ARS) que desea convertir a la divisa elegida.'));

if (seleccionDivisa == 1) {
    montoConversion = cantidadCalcular / valorDolar;
    alert("Enhorabuena, su solicitud se ha procesado correctamente. La cantidad de " + cantidadCalcular + " ARS son " + montoConversion + " USD.");
} else if (seleccionDivisa == 2) {
    montoConversion = cantidadCalcular / valorEuro;
    alert("Enhorabuena, su solicitud se ha procesado correctamente. La cantidad de " + cantidadCalcular + " ARS son " + montoConversion + " EUR.");
} else if (seleccionDivisa == 3) {
    montoConversion = cantidadCalcular / valorYuan;
    alert("Enhorabuena, su solicitud se ha procesado correctamente. La cantidad de " + cantidadCalcular + " ARS son " + montoConversion + " CNY.");
} else {
    alert('Selección inválida de divisa. Vuelva a intentarlo.');
}

repetirConversion = parseInt(prompt('¿Desea convertir nuevamente?\n1. Sí\n2. No'));

while (repetirConversion === repetirConversionSi) {
    seleccionDivisa = prompt('Bienvenido a la calculadora de divisas. Seleccione qué divisa desea para convertir:\n1. Dólar\n2. Euro\n3. Yuan');
    cantidadCalcular = parseFloat(prompt('Seleccione la cantidad de pesos argentinos (ARS) que desea convertir a la divisa elegida.'));

    if (seleccionDivisa == 1) {
        montoConversion = cantidadCalcular / valorDolar;
        alert("Enhorabuena, su solicitud se ha procesado correctamente. La cantidad de " + cantidadCalcular + " ARS son " + montoConversion + " USD.");
    } else if (seleccionDivisa == 2) {
        montoConversion = cantidadCalcular / valorEuro;
        alert("Enhorabuena, su solicitud se ha procesado correctamente. La cantidad de " + cantidadCalcular + " ARS son " + montoConversion + " EUR.");
    } else if (seleccionDivisa == 3) {
        montoConversion = cantidadCalcular / valorYuan;
        alert("Enhorabuena, su solicitud se ha procesado correctamente. La cantidad de " + cantidadCalcular + " ARS son " + montoConversion + " CNY.");
    } else {
        alert('Selección inválida de divisa. Vuelva a intentarlo.');
    }

    repetirConversion = parseInt(prompt('¿Desea convertir nuevamente?\n1. Sí\n2. No'));
}

alert('Hasta pronto!');
