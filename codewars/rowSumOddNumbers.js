function rowSumOddNumbers(n) {
  // TODO
  //   return n * n * n;
  return Math.pow(n, 3);
}

const test1 = rowSumOddNumbers(1); //1
const test2 = rowSumOddNumbers(42); //74088
console.log(test1);
console.log(test2);

// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
// Given the triangle of consecutive odd numbers:
//
//               1
//            3     5
//         7     9    11
//     13    15    17    19
//  21    23    25    27    29
//  ...         ...         ...
// ...          ...          ...



// // Explained
// function rowSumOddNumbers(n)
// {
//   /* The rows' start numbers are Hogben's centered polygonal numbers:
//      1, 3, 7, 13, 21, 31, 43 = b[n] = n^2 - n + 1.
//      <https://oeis.org/A002061>
     
//      The sum of one row is given by:
//      s[n] = n^2 + n(b[n] - 1).
//      <https://www.quora.com/What-is-the-sum-of-n-consecutive-odd-integers/answer/Xavier-Dectot>
     
//      Inline b[n]:
//      s[n] = n^2 + n(n^2 - n + 1 - 1)
//           = n^2 + n(n^2 - n)
//           = n^2 + n^3 - n^2
//           = n^3
//      ... oh. */
//   return n * n * n;
// }


// // alt solution
// let rowSumOddNumbers = n => n ** 3;