// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
const isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;

// // Otras soluciones:
// var isTriangle = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2;

// function isTriangle(a, b, c) {
//   [a, b, c] = [a, b, c].sort((x, y) => x - y);

//   return a + b > c;
// }

// function isTriangle(a, b, c) {
//   var sides = [a, b, c].sort();
//   return sides[0] + sides[1] > sides[2];
// }

`Para que tres longitudes puedan formar un triángulo válido, deben cumplirse las siguientes condiciones (conocidas como la desigualdad del triángulo):
La suma de dos lados cualesquiera debe ser mayor que el tercer lado.
Todas las longitudes deben ser números positivos (mayores que cero).
Estas condiciones se pueden expresar matemáticamente como:

    a + b > c
    a + b > c
    a + c > b
    a + c > b
    b + c > a
    b + c > a

    a > 0
    b > 0
    c > 0
`;

console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(4, 2, 3)); // true
console.log(isTriangle(2, 2, 2)); // true
console.log(isTriangle(1, 2, 3)); // false
console.log(isTriangle(-5, 1, 3)); // false
console.log(isTriangle(0, 2, 3)); // false
console.log(isTriangle(1, 2, 9)); // false
