function reverseWords(str) {
  const words = (str) => str.split("").reverse().join("");
  const p = (words) => words.split(" ").reverse().join(" ");
  return p(words(str));
}

// // otras soluciones:
// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map(function (word) {
//       return word.split("").reverse().join("");
//     })
//     .join(" ");
// }

// function reverseWords(str) {
//   // Go for it
//   //split words into seperate arrays
//   return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }

// test
const test1 = reverseWords("The quick brown fox jumps over the lazy dog."); // 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(test1);
