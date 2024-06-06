// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
function isPangram(string) {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  const filterRepeated = string
    .toLowerCase()
    .split("")
    .filter((e) => /[a-zA-Z]/.test(e))
    .sort();
  const filtered = new Set(filterRepeated);
  const filterStr = [...filtered].join("");
  return filterStr === abc;
}

// // otras soluciones:
// function isPangram(string) {
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
//     return string.indexOf(x) !== -1;
//   });
// }

// function isPangram(string) {
//   return "abcdefghijklmnopqrstuvwxyz"
//     .split("")
//     .every((x) => string.toLowerCase().includes(x));
// }

// function isPangram(string) {
//   return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
// }

// function isPangram(string) {
//   const alphabetList = [..."abcdefghijklmnopqrstuvwxyz"];

//   return alphabetList.every((letter) => string.toLowerCase().includes(letter));
// }

// function isPangram(string) {
//   return (
//     new Set(
//       string
//         .toLocaleLowerCase()
//         .replace(/[^a-z]/gi, "")
//         .split("")
//     ).size === 26
//   );
// }

// test
const test1 = isPangram("The quick brown fox jumps over the lazy dog."); // true
const test2 = isPangram("This is not a pangram."); // false
console.log(test1, test2);
