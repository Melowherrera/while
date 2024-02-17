//Ejercicio 1
let numero_ = prompt("Introduce un número:");
numero_ = parseInt(numero_);

for (let i = 1; i <= numero_; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
//Ejercicio 2
// Solicitar al usuario dos números entre 1 y 50
var primerNumero = prompt("Introduce el primer número (entre 1 y 50):");
var segundoNumero = prompt("Introduce el segundo número (entre 1 y 50):");

// Convertir las entradas del usuario a números enteros
var num1 = parseInt(primerNumero);
var num2 = parseInt(segundoNumero);

// Verificar si las entradas son números válidos
if (!isNaN(num1) && !isNaN(num2) && num1 >= 1 && num1 <= 50 && num2 >= 1 && num2 <= 50) {
    console.log("Números del 1 al 50 con mensaje '¡Lotería!':");

    // Iterar del 1 al 50
    for (var i = 1; i <= 50; i++) {
        // Verificar si el número actual es igual a alguno de los números introducidos por el usuario
        if (i === num1 || i === num2) {
            console.log(i + " ¡Lotería!");
        } else {
            console.log(i);
        }
    }
} else {
    console.log("Por favor, introduce dos números válidos entre 1 y 50.");
}
//Ejercicio 3
let numeros = [];
let numero;

do {
  numero = prompt("Introduce un número (0 para terminar):");
  numero = parseInt(numero);
  if (numero !== 0) {
    numeros.push(numero);
  }
} while (numero !== 0);

console.log("Números capturados:", numeros);

//Ejercicio 4
// Inicializamos un array para almacenar las palabras ingresadas
var palabrasIngresadas = [];

// Función para capturar las palabras del usuario
function capturarPalabras() {
    while (true) {
        // Solicitamos al usuario que ingrese una palabra
        var palabra = prompt("Ingresa una palabra (o presiona Enter para salir):");

        // Verificamos si el usuario presionó Enter (sin ingresar ninguna palabra)
        if (palabra === "") {
            break;  // Salimos del bucle si no se ingresó ninguna palabra
        }

        // Agregamos la palabra al array
        palabrasIngresadas.push(palabra);
    }
}

// Llamamos a la función para capturar palabras
capturarPalabras();

// Mostramos en pantalla la concatenación de todas las palabras capturadas
var resultadoFinal = palabrasIngresadas.join(' ');
console.log("Palabras ingresadas: " + resultadoFinal);

//Ejercicio 5
// Función para mostrar un mensaje personalizado para cada día de la semana
function mostrarMensajePersonalizado(dia) {
  switch (dia.toLowerCase()) {
      case 'lunes':
          alert("¡Ánimo, ya casi en viernes!");
          break;
      case 'martes':
          alert("¡Hoy es martes!");
          break;
      case 'miércoles':
          alert("¡Mitad de semana!");
          break;
      case 'jueves':
          alert("¡Ya casi lo logras!");
          break;
      case 'viernes':
          alert("¡Por fin es viernes!");
          break;
      case 'sábado':
          alert("¡Disfruta del fin de semana!");
          break;
      case 'domingo':
          alert("Ve a descansar");
          return true; // Termina la captura de información si es domingo
      default:
          alert("Día no válido. Ingresa un día de la semana.");
          break;
  }
  return false; // Continúa la captura de información para otros días
}

// Bucle para solicitar al usuario un día de la semana hasta que sea domingo
while (true) {
  var diaIngresado = prompt("Ingresa un día de la semana:");

  // Verificamos el día ingresado y mostramos el mensaje correspondiente
  var terminarCaptura = mostrarMensajePersonalizado(diaIngresado);

  // Terminamos el bucle si es domingo
  if (terminarCaptura) {
      break;
  }
}


