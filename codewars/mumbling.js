// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
  let res = [];

  s.split("").forEach((char, index) => {
    let str = char.toUpperCase() + char.toLowerCase().repeat(index);
    res.push(str);
  });

  return res.join("-");
}

// // otras soluciones:
// function accum(s) {
//   return s
//     .split("")
//     .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
//     .join("-");
// }

// function accum(str) {
//   var letters = str.split("");
//   var result = [];
//   for (var i = 0; i < letters.length; i++) {
//     result.push(
//       letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase())
//     );
//   }
//   return result.join("-");
// }

// function accum(str) {
//   var res = [];
//   for (var i = 0; i < str.length; i++) {
//     var row = "";
//     for (var j = 0; j < i + 1; j++) {
//       row += j === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
//     }
//     res.push(row);
//   }
//   return res.join("-");
// }

// test1
const test1 = accum("ZpglnRxqenU"); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(
  test1,
  test1 ===
    "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
);
