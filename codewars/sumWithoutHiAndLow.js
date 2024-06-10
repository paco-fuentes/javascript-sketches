// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
const sumArray = (array) => {
  if (array === null || array === undefined || array.length <= 1) return 0;
  const cut = array.sort((a, b) => a - b);
  cut.shift();
  cut.pop();
  return cut.reduce((a, b) => a + b, 0);
};

// // otras soluciones:
// function sumArray(array) {
//   if (array == null) {
//     return 0;
//   } else if (array.length < 2) {
//     return 0;
//   } else {
//     array = array.sort(function (a, b) {
//       return a - b;
//     });
//     var total = 0;
//     for (var i = 1; i < array.length - 1; i++) {
//       total += array[i];
//     }
//     return total;
//   }
// }

// const sumArray = (a) =>
//   a
//     ? a
//         .sort((x, y) => x - y)
//         .slice(1, -1)
//         .reduce((s, e) => s + e, 0)
//     : 0;

// function sumArray(array) {
//   return Array.isArray(array) && array.length > 1
//     ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
//     : 0;
// }

// function sumArray(array) {
//   if (array == null || array.length <= 2) {
//     return 0;
//   }

//   var max = Math.max.apply(Math, array);
//   var min = Math.min.apply(Math, array);
//   var sum = 0;

//   for (i = 0; i < array.length; i++) {
//     sum += array[i];
//   }

//   return sum - max - min;
// }

// test...
const test1 = sumArray(null); // 0
const test2 = sumArray([]); // 0
const test3 = sumArray([3]); // 0
const test4 = sumArray([3, 5]); // 0
const test5 = sumArray([6, 2, 1, 8, 10]); // 16
const test6 = sumArray([0, 1, 6, 10, 10]); // 17
const test7 = sumArray([-6, -20, -1, -10, -12]); // -28
const test8 = sumArray([-6, 20, -1, 10, -12]); // 3
const test9 = sumArray(); // 0

console.log(
  " " + test1 + "\n",
  test2 + "\n",
  test3 + "\n",
  test4 + "\n",
  test5 + "\n",
  test6 + "\n",
  test7 + "\n",
  test8 + "\n",
  test9 + "\n"
);
