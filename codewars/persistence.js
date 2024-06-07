// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
const persistence = (num) => {
  let arrN = num.toString().split("");
  let count = 0;
  let largo = arrN.length;
  let mult = [];
  if (largo <= 1) {
    return count;
  }

  while (largo > 1) {
    mult = arrN.reduce((acc, e) => acc * parseInt(e), 1);
    arrN = mult.toString().split("");
    largo = arrN.length;
    count++;
  }

  return count;
};

// // otras soluciones:
// function persistence(num) {
//   var times = 0;

//   num = num.toString();

//   while (num.length > 1) {
//     times++;
//     num = num
//       .split("")
//       .map(Number)
//       .reduce((a, b) => a * b)
//       .toString();
//   }

//   return times;
// }

// function persistence(num) {
//   for (var i = 0; num > 9; i++) {
//     num = num
//       .toString()
//       .split("")
//       .reduce((t, c) => c * t);
//   }
//   return i;
// }

// const persistence = (num) => {
//   return `${num}`.length > 1
//     ? 1 + persistence(`${num}`.split("").reduce((a, b) => a * +b))
//     : 0;
// };

// test
const test1 = persistence(39); // 3
const test2 = persistence(4); // 0
const test3 = persistence(25); // 2
const test4 = persistence(999); // 4
console.log(test1, test2, test3, test4);
