// console.log("----------------------------------------------------------------");
// console.log("------------------щ（ﾟДﾟщ） < “Dear god why‽ --------------------");
// console.log("----------------------------------------------------------------");
// console.log("Descomenta cada reto para imprimir en la consola de tu navegador");
// console.log("----------------------------------------------------------------");
// console.log("---------------------Retos JS Vanilla-2-------------------------");
// console.log("----------------------------------------------------------------");

// Reto-1 ---------------------------------------------------------------------

// 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.Pediremos al usuario que figura queremos calcular su área 
// y según lo introducido pedirá los valores necesarios para calcular el área.Para ello has de crear un método por cada figura para calcular cada área, 
// este devolverá un número real.Muestra el resultado por consola.
// Aquí te mostramos que necesita cada figura: • Circulo: (radio ^ 2) * PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado

// const figura = prompt();

// function calculaArea(figura) {

//     switch (figura) {
//         case "cuadrado":
//             const lado1 = prompt("lado");
//             const lado2 = prompt("lado");
//             const resultCuadrado = lado1 * lado2;
//             return console.log(resultCuadrado);
//             break;
//         case "triangulo":
//             const base = prompt("base");
//             const altura = prompt("altura");
//             const resultTriangulo = (base * altura) / 2;
//             return console.log(resultTriangulo);
//             break;
//         case "circulo":
//             const radio = prompt("radio");
//             const PI = 3.14159;
//             const resultCirculo = (radio * radio) * PI;
//             return console.log(resultCirculo);
//         default:
//             alert(`Introduce cuadrado, triangulo o circulo para calcular su area`);
//             break;
//     }
// }

// Reto-2 ---------------------------------------------------------------------

// 2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados por el usuario (prompt). 
// Crea un método donde pasamos como parámetros entre entre qué números queremos que los genere, podemos pedirlas al usuario antes de generar los números. 
// Este método devolverá un número entero aleatorio. Muestra estos números por consola.

// let numsCantidad = prompt(`Introduce una cantidad del 1 al 10 de numeros aleatorios que se encuentran entre el 1 y el 100`);
// parseInt(numsCantidad);
// if (numsCantidad > 10 || numsCantidad <=0) {
//     alert(`Solo acepto numeros del 1 al 10`);
// } else {
//     for (let i = 0; i < numsCantidad; i++) {
//         const numRandom = Math.floor(Math.random() * 100) + 1; //Del 0.0 al 0.9 de decimales random * 100 (0.0-99.99) pasado a int y le sumo 1 para el offset de 0-9 a 1-100
//         console.log(numRandom);
//     }
// }

// Reto-3 --------------------------------------------------------------------- 

// 3. Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, 
// debe devolver true si es primo sino false. Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. 
// Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.

// function esPrimo(numero) {
//     // Caso especial: 0 y 1 no son primos
//     if (numero <= 1) {
//         return false;
//     }
//     console.log(Math.sqrt(numero));
//     // Iteramos desde 2 hasta la raíz cuadrada del número
//     // Si el número es divisible por algún valor en este rango, no es primo
//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//         if (numero % i === 0) {
//             return false; // No es primo
//         }
//     }
//     // Si no se encontraron divisores con resultado 0 en el rango, es primo
//     return true;
// }
// console.log(esPrimo(25));
// console.log(esPrimo(17));

// -------------------------------------------------------------------------------

// const isPrime = x => {
//     let prime = x !== 0
//     for(let i = (x-1); i > 1; i--) {
//         if(x % i === 0) {
//             prime = false
//             break
//         }
//     }
//     return prime
// }

// const passed = isPrime(17) === true && isPrime(0) === false
// console.log(passed)



// Reto-4 --------------------------------------------------------------------- 

// 4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo realizará mediante un método al que le pasamos el número como parámetro. 
// Para calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo, si introducimos un 5, realizará esta operación 5*4*3*2*1=120.


// factorial con recursividad

// function factorial(num) {
//     if (num <= 1) {
//         return 1;
//     }
//     return num * factorial(num - 1);
// }
// console.log(factorial(5));

// factorial con bucle

// let numero = 8;

// function factorial(num) {
//     let result = 1; //offset de 1
//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(numero));

// Reto-5 ---------------------------------------------------------------------

// 5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo realizará un método al que le pasaremos el número como parámetro, 
// devolverá un String con el número convertido a binario. Para convertir un número decimal a binario, 
// debemos dividir entre 2 el número y el resultado de esa división se divide entre 2 de nuevo hasta que no se pueda dividir más, 
// el resto que obtengamos de cada división formará el número binario, de abajo a arriba.

// let numero = 13; // 1101

// function toBinary(num) {
//     let arrayBin = [];
//     let resto = parseInt(num % 2);
//     // arrayBin.unshift(resto);
//     if (num !== 0 || num !== 1) {
//         console.log("for resto 1----> " + resto);  //do ... while ?
//         for (let i = 0; i < num; i++) {
//             num = num / 2;
//             resto = parseInt(num % 2);
//             console.log("for division----> " + num);
//             console.log("for resto----> " + resto);
//             arrayBin.unshift(resto);
//         }
//         arrayBin.push(resto);
//         return arrayBin.join("");
//     }
// }
// console.log(toBinary(numero));


// let numero = 13; // 1101

// function toBinary(num) {
//     let arrayBin = [];
//     if (num !== 0 || num !== 1) {
//         do {
//             arrayBin.unshift(num%2);
//         } while (num<=0){
//             num = num / 2;
//             arrayBin.unshift(num%2);
//             console.log(num);
//         };
//     };
//     return arrayBin;
// };

// console.log(toBinary(numero));


// function toBinary(num) {
//     let arrayBin = [];
//     let resto = parseInt(num % 2);
//     // arrayBin.unshift(resto);
//     if (num !== 0 || num !== 1) {
//         console.log("for resto 1----> " + resto);  //do ... while ?
//         for (let i = 0; i < num; i++) {
//             num = num / 2;
//             resto = parseInt(num % 2);
//             console.log("for division----> " + num);
//             console.log("for resto----> " + resto);
//             arrayBin.unshift(resto);
//         }
//         arrayBin.push(resto);

//         if (resto === 0 && num !== 1 && num !== 0) {
//             console.log(num);
//             arrayBin.unshift(1); //Parece que funciona
//         }
//     } else {
//         // arrayBin = num;
//     }

//     return arrayBin.join("");
// }
// console.log(toBinary(numero));

// ////////////////////////////////// v1 sin terminar
// // function decToBin(numero) {
// //     let arrayBin = [];
// //     let restoToString;
// //     let resto;
// //     while (Math.floor(numero) >= 1) {
// //         div = numero / 2;
// //         resto = parseInt(numero % 2);
// //         restoToString = resto.toString();
// //         arrayBin.unshift(restoToString);
// //     }
// //     return arrayBin;
// // }
// // console.log(decToBin(num)); // ['0', '1', '1', '0'] es 6 en decimal, y si pongo num = 26 la funcion me devuelve 13

// let numero = 99; // 1101
// function toBinary(num) {
//     let arrayBin = [];
//     let resto = parseInt(num % 2);
//     arrayBin.unshift(resto);
//     console.log("arrbin ----> " + arrayBin);
//     if (num !== 0 || num !== 1) {
//         console.log("resto dentro del if ----> " + resto);  //do ... while ?
//         for (let i = 1; i <= num; i++) {
//             num = num / 2;
//             resto = parseInt(num % 2);
//             console.log("dentro del for division----> " + num);
//             console.log("dentro del for resto----> " + resto);
//             arrayBin.unshift(resto);
//         }

//         if(arrayBin.length>=3 && resto === 0){
//             arrayBin.unshift(1);
//         }
//         // else if (num === 0 && resto === 0){
//         //     arrayBin.shift();
//         // }else{
//             //quitar primer elemento del array
//             //arrayBin.shift();
//         // }

//         return arrayBin.join("");
//     }
// }
//     console.log(toBinary(numero));


// let testNumber = 33;
// const toBinary = (num) => {
//     if (num === 0) {
//         return 0;
//     } else {
//         const binArr = [];
//         let div = num;
//         for (i = 0; div > 1; i++){
//             div = parseInt(num / 2);
//             let rest = (num % 2);
//             binArr.unshift(rest);
//             num = div;
//         }
//         binArr.unshift(1);
//         return binArr.join("");
//     }
// }
// console.log(toBinary(testNumber));


// // Paso 1: Definir una variable llamada testNumber y asignarle el valor 33.
// let testNumber = 33;

// // Paso 2: Definir una función llamada toBinary que toma un parámetro llamado num.
// const toBinary = (num) => {
//     // Paso 3: Verificar si el número es igual a 0. Si es así, devolver 0.
//     if (num === 0) {
//         return 0;
//     } else {
//         // Paso 4: Si el número no es 0, inicializar un array llamado binArr.
//         const binArr = [];

//         // Paso 5: Inicializar una variable llamada div y asignarle el valor de num.
//         let div = num;

//         // Paso 6: Iniciar un bucle while que se ejecutará mientras div sea mayor que 1.
//         for (i = 0; div > 1; i++) {
//             // Paso 7: Calcular la división entera de num entre 2 y asignar el resultado a div.
//             div = parseInt(num / 2);
//             console.log(num);
//             console.log(div);
//             // Paso 8: Calcular el resto de la división de num entre 2 y asignarlo a la variable rest.
//             let rest = (num % 2);
//             console.log(rest);

//             // Paso 9: Agregar el resto al principio del array binArr.
//             binArr.unshift(rest);

//             // Paso 10: Actualizar el valor de num con el valor de div para la próxima iteración.
//             num = div;
//         }

//         // Paso 11: Agregar un 1 al principio del array binArr.
//         binArr.unshift(1);

//         // Paso 12: Devolver la representación binaria como una cadena al unir los elementos de binArr.
//         return binArr.join("");
//     }
// }

// // Paso 13: Llamar a la función toBinary con el valor de testNumber e imprimir el resultado en la consola.
// console.log(toBinary(testNumber));

////////////////////////////////

// // Paso 1: Definir una función para convertir un número decimal a binario.
// const toBinary = (num) => {
//     // Paso 2: Manejar el caso especial cuando el número es igual a 0.
//     if (num === 0) {
//         return '0';
//     }

//     // Paso 3: Inicializar un array para almacenar los bits binarios.
//     const binaryArray = [];

//     // Paso 4: Iterar hasta que el número sea mayor que 0.
//     while (num > 0) {
//         // Paso 5: Obtener el resto de la división por 2 y agregarlo al array.
//         binaryArray.unshift(num % 2);

//         // Paso 6: Actualizar el número dividiéndolo por 2.
//         num = Math.floor(num / 2);
//     }

//     // Paso 7: Devolver la representación binaria como una cadena.
//     return binaryArray.join('');
// };

// // Paso 8: Definir el número de prueba.
// const testNumber = 33;

// // Paso 9: Llamar a la función toBinary con el número de prueba e imprimir el resultado.
// console.log(toBinary(testNumber));



// Reto-6 ---------------------------------------------------------------------

// 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo (hay que controlarlo) pedido por prompt. 
// Crea un método que realice esta acción, pasando el número por parámetro devolverá el número de cifras.

// let numero = -1234567890.666;

// function cuentaCifras(num) {
//     numEnteroPosi = Math.abs(parseInt(num));
//     //console.log(numEnteroPosi);
//     numsToString = numEnteroPosi.toString();
//     //console.log(typeof numToString);
//     return numsToString.length;
// };

// console.log(cuentaCifras(numero));


// Reto-7 ---------------------------------------------------------------------


// 7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a otra moneda, estas pueden ser a dólares, yenes o libras. 
// El método tendrá como parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no devolverá ningún valor, mostrará un mensaje indicando el cambio.

// El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €
 