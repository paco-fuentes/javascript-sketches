// const palindrome = (str) => {
//   const rev = str.split("").reverse().join("");
//   return str === rev;
// };

const palindrome = (str) =>
  str.split("").every((e, i) => {
    console.log(e, i);
    return ele == str[str.length - i - 1];
  });

// // two pointer technique
// const palindrome = (str) => {
//   let min = 0;
//   let max = str.length - 1;

//   do {
//     if (str[min] == str[max]) {
//       min++;
//       max--;
//     } else {
//       return false;
//     }
//   } while (min < max);

//   return true;
// };

// const palindrome = (str) => {
//   let rev = "";
//   for (const char of str) {
//     rev = char + rev;
//     // console.log(rev);
//   }
//   return str === rev ? true : false;
// };

// test
const test1 = palindrome("arenera");
const test2 = palindrome("reconocer");
const test3 = palindrome("javascript");
const test4 = palindrome("typescript");
console.log(test1, test2, test3, test4);
