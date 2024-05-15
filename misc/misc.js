// // null es un object
// const varNull = null;

// console.log(typeof varNull);

// if (varNull === null) {
//   console.log("varNull es estrictamente igual a null");
// }

// if (varNull == null) {
//   console.log(
//     "varNull no es estrictamente igual a null pero sigue siendo true, revisar..."
//   );
// }

// // evaluar expresiones
// if (!2 + !3) {
//   console.log(`┐('～'；)┌ ` +" no entiendo nada");
// }

// for (let i = 10; i >= 0; i--) {
//   if (i === 0) {
//     console.log("¡Despegue 🚀!");
//   } else {
//     console.log("Faltan " + i + " segundos");
//   }
// }

// // 
// const login = ''
// let message;

// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }

// console.log(message);

// // for in navega objetos. También ordena las claves de menor a mayor y elimina reptidos
// let codes = {
//   "49": "Germany",
//   "41": "Switzerland",
//   "41": "Switzerland",
//   "44": "Great Britain",
//   // ..,
//   "1": "USA"
// };

// for (let code in codes) {
//   console.log((code)); // 1, 41, 44, 49
// }

// // eliminar repetidos de un array con un new Set()
// const msMind = ['amarillo', 'amarillo', 'verde', 'azul'];
// const arrSeting = new Set(msMind);
// let newSetedArr = [...arrSeting];
// console.log(newSetedArr);

// // refactorizar el resultado de una condicion en una variable mejora la legibilidad
// const adult = 17
// const tieneCarnet = true
// const puedeConducir = adult >= 18 && tieneCarnet

// if (puedeConducir) {
//   console.log('Puedes conducir')
// } else {
//   console.log('No puedes conducir')
// }

// // recuerda que el bucle for se puede usar cualquier cosa dentro de
// // la inicializacion, condicion y actualizacion
// for (let i = 0, j = 5; i < 5; i++, j--) {
//   console.log(i, j-1);
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     const resultado = i * j
//     console.log(i + ' x ' + j + ' = ' + resultado)
//   }
// }

// for (let i = 1, j = 1; i <= 10, j <= 10; i++, j++) {
 
//   const resultado = i * j
//   console.log(i + ' x ' + j + ' = ' + resultado)

// }

// // while y do...while evalúan una condición, ¿es cierto o falso?
// let respuesta;
// do {
//  // respuesta = confirm("¿Te gusta JavaScript?");
//  console.log(respuesta);
// } while (respuesta) // true or false

// // switch evalúa una expresión, ¿es ésta o no lo es?
// const dia = new Date().getDay()

// // segun el dia de la semana, mostramos un mensaje diferente
// switch (dia) {
//   case 0:
//     console.log("¡Hoy es domingo! 😴")
//     break
//   case 1:
//     console.log("¡Nooo, es lunes! 😢")
//     break
//   case 2:
//     console.log("¡Hoy es martes! 🥵")
//     break
//   case 3:
//     console.log("¡Hoy es miércoles! 🤓")
//     break
//   default:
//     console.log("Se acerca el finde! 🚀")
//     break
// }

// // Existe un patrón que se usa a veces con switch que es switch(true). 
// // Esto es, en lugar de evaluar una expresión, 
// // evalúa una condición ignorando por completo el valor de la expresión.
// let edad = 25;

// switch(true) {
//   case (edad >= 18 && edad < 25):
//     console.log("Eres mayor de edad y eres joven");
//     break;
//   case (edad >= 25 && edad < 40):
//     console.log("Eres mayor de edad y estás en plena madurez");
//     break;
//   case (edad >= 40):
//     console.log("Eres mayor de edad y estás en la mejor edad");
//     break;
//   default:
//     console.log("Eres menor de edad");
// }

// // llamar a una funcion
// function sumar() {
//   return 1 + 1
// }
// const suma = sumar;
// console.log(suma);
// console.log(sumar);
// console.log(sumar());
// if(edad >= 25 && edad < 40){
//   console.log(sumar);
// }

// // número aleatorio
// function getRandomNumber() {
//   // recuperamos un número aleatorio entre 0 y 1
//   const random = Math.random() // por ejemplo: 0.6803487380457318

//   // lo multiplicamos por 10 para que esté entre 0 y 10
//   const multiplied = random * 10 // -> 6.803487380457318

//   // redondeamos hacia abajo para que esté entre 0 y 9
//   const rounded = Math.floor(multiplied) // -> 6

//   // le sumamos uno para que esté entre 1 y 10
//   const result = rounded + 1 // -> 7

//   // devolvemos el resultado
//   return result
// }

// console.log(getRandomNumber());

// // parámetros, lo que espera la función: nombre en formato string
// // argumentos, lo que se le pasa: 'Simón'
// function cocinarMicroondas(plato, tiempo, potencia) {
//   if (plato === '🐥' && tiempo === 1 && potencia === 5) {
//     return '🍗'
//   }

//   if (plato === '🥚' && tiempo === 2 && potencia === 3) {
//     return '🍳'
//   }

//   return '❌ Plato no soportado'
// }

// // esto es una function expression
// const sum1 = function (a, b) {
//   return a + b
// }

// // esto es una declaración de función
// function sum2(a, b) {
//   return a + b
// }

// const miFuncionFlecha = () => {
//   // código a ejecutar
// }

// const saludar = nombre => {
//   console.log("Hola " + nombre)
// }

// // Declaración de función regular
// function sumar(a, b) {
//   return a + b
// }

// // Función flecha
// const sumarFlecha1 = (a, b) => {
//   return a + b
// }

// // Función flecha con return implícito
// const sumarFlecha2 = (a, b) => a + b

// const num1 = 5;
// const num2 = 7;
// const sumarFlecha3 = () => num1 + num2;
// console.log(sumarFlecha3());

// // recursividad
// function cuentaAtras(numero) {
//   // Condición base: Si el número que recibe es
//   // menor de 0 entonces salimos de la función
//   if (numero < 0) { return }

//   // Si el número era mayor o igual a 0, lo mostramos
//   console.log(numero)

//   // Y llamamos a la función con el número anterior
//   cuentaAtras(numero - 1)
// }

// // recursividad factorial
// function factorial(n) {
//   // Condición base: Si el número es 0 o 1, devolvemos 1
//   // y no llamamos a la función de nuevo
//   if (n === 0 || n === 1) {
//     console.log('n vale ---> ' + n);
//     return 1
//   } else {
//     // Si el número es mayor que 1, llamamos a la función
//     console.log('n vale ---> ' + n);
//     return n * factorial(n - 1)
//   }
// }

// console.log('func ---> ' + factorial(5)) // Resultado: 120
// // console.log(factorial(3)) // Resultado: 6

// for...of
// for...in
// forEach


// // extrae todos los careacteres de un texto y cuenta cuantas veces se repiten
// function contarLetras(texto) {
//   // Crear un objeto para almacenar las frecuencias de las letras
//   let frecuencias = {};

//   // Iterar sobre cada carácter del texto
//   for (let i = 0; i < texto.length; i++) {
//       let caracter = texto[i].toLowerCase(); // Convertir a minúscula para contar sin distinción entre mayúsculas y minúsculas

//       // Verificar si el carácter es una letra del alfabeto
//       if (/[a-z]/.test(caracter)) {
//           // Si ya existe en el objeto de frecuencias, incrementar el contador
//           if (frecuencias[caracter]) {
//               frecuencias[caracter]++;
//           } else {
//               // Si no existe, inicializar el contador en 1
//               frecuencias[caracter] = 1;
//           }
//       }
//   }

//   // Crear un arreglo para almacenar los resultados
//   let resultados = [];

//   // Iterar sobre las claves del objeto de frecuencias
//   for (let letra in frecuencias) {
//       // Agregar la letra y su frecuencia al arreglo de resultados
//       resultados.push(`${letra}: ${frecuencias[letra]}`);
//   }

//   // Devolver los resultados separados por líneas
//   return resultados.join('\n');
// }

// // Ejemplo de uso
// let parrafo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// console.log(contarLetras(parrafo));



const name = () => 'Periquillo'

const sayHello = (yourNameFn) => 'Hello ' + yourNameFn();

console.log(sayHello(name)) //Must print "Hello Periquillo!"