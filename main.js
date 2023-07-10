// Variables
// se fijan las tasas de cambio
let valorDolar = 489;
let valorEuro = 536;
let valorYuan = 67;

// array donde se van a guardar las conversiones temporalmente, aca se crea

let historialConversiones = [];

// Agregar conversión al historial
function agregarConversion(monto, divisaOrigen, divisaDestino, resultado) {
  const conversion = {
    cantidad: monto,
    divisaOrigen: divisaOrigen,
    divisaDestino: divisaDestino,
    resultado: resultado
  };
  historialConversiones.push(conversion);
}

// Mostrar historial de conversiones
function mostrarHistorial() {
  let historialTexto = "Historial de conversiones:\n";
  historialConversiones.forEach((conversion, index) => {
    historialTexto += (index + 1) + ". " + conversion.cantidad + " " + conversion.divisaOrigen + " = " + conversion.resultado + " " + conversion.divisaDestino + "\n";
  });
  alert(historialTexto);
}

// Mensaje de despedida
function mensajeDespedida() {
  alert('Hasta pronto! Gracias por utilizar el conversor de divisas.');
}

// Función para convertir divisas
function convertirDivisas() {
  let repetirConversion = true;

  while (repetirConversion) {
    let seleccionDivisa = parseInt(prompt('Bienvenido a la calculadora de divisas. Seleccione qué divisa desea para convertir:\n1. Dólar\n2. Euro\n3. Yuan\n4. Consultar la paridad de alguna divisa en específico\n5. Ver historial\n6. Buscar conversiones'));
    //uso switch en vez de if-else porque es mucho más simple y no se usan tantas líneas
    switch (seleccionDivisa) {
      case 1: // Dólar
      case 2: // Euro
      case 3: // Yuan
        let cantidadCalcular = parseFloat(prompt('Seleccione la cantidad de pesos argentinos (ARS) que desea convertir a la divisa elegida.'));
        let montoConversion;

        switch (seleccionDivisa) {
          case 1: // Dólar
            montoConversion = cantidadCalcular / valorDolar;
            agregarConversion(cantidadCalcular, "ARS", "USD", montoConversion);
            alert("Enhorabuena, su solicitud se ha procesado correctamente. La cantidad de " + cantidadCalcular + " ARS son " + montoConversion + " USD.");
            break;
          case 2: // Euro
            montoConversion = cantidadCalcular / valorEuro;
            agregarConversion(cantidadCalcular, "ARS", "EUR", montoConversion);
            alert("Enhorabuena, su solicitud se ha procesado correctamente. La cantidad de " + cantidadCalcular + " ARS son " + montoConversion + " EUR.");
            break;
          case 3: // Yuan
            montoConversion = cantidadCalcular / valorYuan;
            agregarConversion(cantidadCalcular, "ARS", "CNY", montoConversion);
            alert("Enhorabuena, su solicitud se ha procesado correctamente. La cantidad de " + cantidadCalcular + " ARS son " + montoConversion + " CNY.");
            break;
        }
        break;
      case 4: // Consultar la paridad de una divisa
        let seleccionOpcionParidad = parseInt(prompt('Seleccione la divisa de la cual desea averiguar la paridad.\n1. Dólar\n2. Euro\n3. Yuan'));

        switch (seleccionOpcionParidad) {
          case 1: // Dólar
            alert("Actualmente 1 dólar es igual a ARS$" + valorDolar);
            break;
          case 2: // Euro
            alert("Actualmente 1 euro es igual a ARS$" + valorEuro);
            break;
          case 3: // Yuan
            alert("Actualmente 1 yuan es igual a ARS$" + valorYuan);
            break;
          default:
            alert('Selección inválida.');
            break;
        }
        break;
      case 5: // Ver historial
        mostrarHistorial();
        break;
      case 6: // Buscar conversiones
        const divisaDestinoBusqueda = prompt('Ingrese la divisa a la cual desea buscar conversiones:\n1. USD\n2. EUR\n3. CNY');

        let conversionesFiltradas = historialConversiones.filter(conversion => {
          return conversion.divisaDestino === getDivisaDestino(divisaDestinoBusqueda);
        });

        if (conversionesFiltradas.length === 0) {
          alert('No se encontraron conversiones que coincidan con los criterios de búsqueda.');
        } else {
          let resultadoTexto = 'Conversiones encontradas:\n';
          conversionesFiltradas.forEach((conversion, index) => {
            resultadoTexto += `${index + 1}. ${conversion.cantidad} ${conversion.divisaOrigen} = ${conversion.resultado} ${conversion.divisaDestino}\n`;
          });
          alert(resultadoTexto);
        }
        break;
      default:
        alert('Selección inválida. Vuelva a intentarlo.');
        break;
    }
    //uso confirm porque venia usando if-else y es mas simple
    repetirConversion = confirm('¿Desea realizar otra operación?');
  }

  mensajeDespedida();
}

// Obtener divisa de destino
function getDivisaDestino(opcion) {
  switch (opcion) {
    case "1":
      return "USD";
    case "2":
      return "EUR";
    case "3":
      return "CNY";
    default:
      return "";
  }
}

// Ejecutar la función para convertir divisas
convertirDivisas();
