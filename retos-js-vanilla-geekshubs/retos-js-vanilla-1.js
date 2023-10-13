console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");
console.log("щ（ﾟДﾟщ） < “Dear god why‽ "); // Funciona consola
console.log("Descomenta cada reto para imprimir en la consola de tu navegador");
console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");


/* Reto 1 ------------------------------------------------------------- */


/*

let num1 = "";
let num2 = "7";

if (num1 > num2) {
    console.log(`Las variables num1 es mayor que num2 porque ${num1} es mayor que ${num2}`);
} else if (num1 === num2) {
    console.log(`Las variables num1 y num2 son ${num1}, y además, son estrictamente iguales ya que son de tipo ${typeof num2}`);
} else if (num1 == num2) {
    console.log(`Las variables num1 y num2 son ${num1}, y además, no son estrictamente iguales ya que uno de los dos es de tipo ${typeof num2} y el otro de tipo ${typeof num1}`);
} else {
    console.log(`num1 es menor que num2 porque ${num2} es mayor que ${num1}`);
}

 */

/* Reto 2 y 3------------------------------------------------------------- */

/*

let miNombre = "Paco";
let tuNombre = String(prompt());
const queTipo = typeof tuNombre;
console.log(queTipo);

if (tuNombre === "null") {
    console.log(`Hola ${tuNombre}, null no es un nombre, no es nada en javascript, yo soy ${miNombre}, ¿Cómo de vacío estás?


                                      ʕ•̫͡•ʔ`);

} else if (tuNombre !== "null" || typeof string) {
    console.log(`Hola... ${tuNombre} yo soy ${miNombre}, no has introducido ningun dato en el campo


                                    {´◕ ◡ ◕｀}`);
} else {
    console.log(`Hola ${tuNombre}, yo soy ${miNombre}, ¿Cómo estás?


                                    ¯\_(ツ)_/¯`);
}
*/

/* Reto 4 ------------------------------------------------------------- */

// const numPi = Math.PI;
// let radio;
// //console.log(numPi);
// radio = Number(prompt());
// console.log(typeof radio);
// let radioAlCuadrado = radio*radio;
// console.log("ಥ_ಥ <So... Beautiful! " +" --------> "+ radioAlCuadrado*numPi);

/* Reto 5 ------------------------------------------------------------- */

// let num ;
// let teclado; 
// teclado = prompt();
// num = parseFloat(teclado);

// if (num % 2 == 0 && teclado == 0) {
//     console.log("¿El cero es par? ------- ლ(ಠ益ಠლ)")
// } else if (num % 2 == 0) {
//     console.log("Es par");
// } else if (num % 2 != 0){
//     console.log("Es impar");
// }

/* Reto 6 ------------------------------------------------------------- */

// const iva = 0.21;
// teclado = prompt();
// num = parseFloat(teclado);
// console.log(`el producto que cuesta ${num} tiene un 21% de IVA con un importe extra de ${num*iva}, su producto cuesta finalmente ${num*iva+num}`);

/* Reto 7 ------------------------------------------------------------- */

// let num = 100;
// while (num >0 && num<=100) {
//     console.log(num);
//     num--;
// }

/* Reto 8 ------------------------------------------------------------- */

// let num = 100;
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

/* Reto 9 ------------------------------------------------------------- */

// let num = 100;
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0 || i % 3 == 0) {
//         console.log(i);
//     }
// }

/* Reto 10 ------------------------------------------------------------- */

// let numVentas = 3;

// for (let i = 0; i < numVentas; i++) {
//     prompt(i);
// }

/* Reto 11 ------------------------------------------------------------- */

// let dia = prompt();
// let dia = "lunes";
// switch (dia) {
//     case "lunes":
//     case "martes":
//     case "miercoles":
//     case "jueves":
//     case "viernes":
//         console.log(`Hoy es ${dia}, y es laborable : ( ...`);
//         break;
//     default:
//         console.log(`Hoy es ${dia}, y es es fin de semana : ) `);
//         break;
// }

/* Reto 12 ------------------------------------------------------------- */

// const pass = "12345";
// const intentos=3;

// for (let i = 0; i < intentos; i++) {
//     introPass = prompt();
//     if(introPass===pass){
//         intentos=0;
//         console.log(`La contraseña es correcta`);
//     }else{
//         console.log(`La contraseña no es correcta, vuelva a intentarlo. Le quedan ${2-i} intentos`);
//     }
// }

/* Reto 13 ------------------------------------------------------------- */

// let num1 = 10;
// let num2 = 2;
// let operator = "gf";

// const calculadoraInversa = (n1, n2, op = "+") => { //Cuando la función esta dentro de una const puede llevar un valor predefinido, como en este ejemplo que lleva el operador "+"
//     const operators = ["+", "-", "*", "/"];
//     //console.log(operators.includes(op)); // devuelve un booleano
//     let result;
//     if (operators.includes(op)) {
//         if (op === "+") {
//             return result = `${n1}${op}${n2} = ${n1 + n2}`;
//         } else if (op === "-") {
//             return result = `${n1}${op}${n2} = ${n1 - n2}`;
//         } else if (op === "/") {
//             return result = `${n1}${op}${n2} = ${n1 / n2}`;
//         } else if (op === "*") {
//             return result = `${n1}${op}${n2} = ${n1 * n2}`;
//         }
//     } else {
//         return `Operacion no valida, introduce uno de los siguientes caractares "+", "-", "*", "/" `
//     }

// }
// console.log(calculadoraInversa(num1, num2, operator));