function oddOrEven(array) {
  const sum = array.reduce((acc, e) => acc + e, 0);
  return sum % 2 === 0 ? "even" : "odd";
}

const test1 = oddOrEven([2, 3, 4])
const test2 = oddOrEven([1, 3, 4])
console.log(test1, test2);

// // otras soluciones:
// function oddOrEven(arr) {
//   return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
// }

// function oddOrEven(array) {
//   var result = 0;
//   for (var i = 0; i < array.length; i++) {
//     result += array[i];
//   }
//   if (result % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }

// const oddOrEven = (a) =>
//   a.reduce((s, n) => s + n, 0) % 2 == 0 ? "even" : "odd";
