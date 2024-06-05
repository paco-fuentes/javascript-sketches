var isSquare = function (n) {
  if (n < 0) {
    return false;
  }

  if (n === 0 || n === 1) {
    return true;
  }

  for (let i = 1; i <= n / 2; i++) {
    if (i * i === n) {
      return true;
    }
  }

  return false;
};

// // otras soluciones
// function isSquare(n) {
//   return Math.sqrt(n) % 1 === 0;
// }

// const isSquare = (n) => Number.isInteger(Math.sqrt(n));

// var isSquare = function (n) {
//   return Number.isInteger(Math.sqrt(n));
// };

// const isSquare = (n) => Math.sqrt(n) % 1 === 0;

// test
const test1 = isSquare(25); // true
const test2 = isSquare(0); // true
const test3 = isSquare(-1); // false
console.log(test1, test2, test3);
