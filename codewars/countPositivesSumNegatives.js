// Return an array, where the first element is the count of positives
// numbers and the second element is sum of negative numbers.
// 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  res = [];
  if (input != null && input.length > 0) {
    const lengthPosN = input.filter((e) => e > 0);
    const sumOfNegN = input.reduce((acc, e) => (e < 0 ? acc + e : acc), 0);
    res.push(lengthPosN.length, sumOfNegN);
    return res;
  } else {
    return (input = []);
  }
}

// test
let testData1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
const test1 = countPositivesSumNegatives(testData1); // [10, -65]
let testData2 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
const test2 = countPositivesSumNegatives(testData2); // [8, -50]
testData2 = [];
const test3 = countPositivesSumNegatives(testData2); // empty array
testData2 = null;
const test4 = countPositivesSumNegatives(testData2); // empty array
console.log(test1, test2, test3, test4);

// // otras soluciones

// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }

// function countPositivesSumNegatives(input) {
//     if (!Array.isArray(input) || !input.length) return [];
//     return input.reduce((arr, n) => {
//       if (n > 0) arr[0]++;
//       if (n < 0) arr[1] += n;
//       return arr;
//     }, [0, 0]);
//   }

// function countPositivesSumNegatives(input) {
//   if (input == null || input.length == 0) return [];

//   var positive = 0;
//   var negative = 0;

//   for (var i = 0, l = input.length; i < l; ++i) {
//     if (input[i] > 0) ++positive;
//     else negative += input[i];
//   }

//   return [positive, negative];
// }
