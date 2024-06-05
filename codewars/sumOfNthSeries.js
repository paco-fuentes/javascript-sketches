// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

const SeriesSum = (n) => {
  // Happy Coding ^_^
  if (n === 0) {
    return n.toFixed(2);
  }

  let serie = 1;
  let seq = 1;

  for (let i = 1; i < n; i++) {
    seq += 3;
    serie += 1 / seq;
  }

  return serie.toFixed(2).toString();
};

// // otras soluciones:
// function SeriesSum(n) {
//   for (var s = 0, i = 0; i < n; i++) {
//     s += 1 / (1 + i * 3);
//   }

//   return s.toFixed(2);
// }

// function SeriesSum(n, s = 0) {
//   return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2);
// }

// function SeriesSum(n) {
//   return Array(n)
//     .fill(0)
//     .map((e, i) => 3 * i + 1)
//     .reduce((s, e) => s + 1 / e, 0)
//     .toFixed(2);
// }

// function SeriesSum(n) {
//   var s = 0;
//   while (n) {
//     s += 1 / (1 + 3 * --n);
//   }
//   return s.toFixed(2);
// }

// SeriesSum = (n) =>
//   Array.from(Array(n), (e, i) => 1 / (i * 3 + 1))
//     .reduce((s, e) => s + e, 0)
//     .toFixed(2);

// test
const test1 = SeriesSum(0);
const test2 = SeriesSum(5);
const test3 = SeriesSum(237);
console.log(test1, test2, test3);
