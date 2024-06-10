// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
const longest = (s1, s2) => {
  // your code
  const arr1 = s1.split("");
  const arr2 = s2.split("");
  const arrSumSort = new Set([...arr1, ...arr2]);
  return [...arrSumSort].sort().join("");
};

// // otras soluciones:
// const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

// function longest(s1, s2) {
//   return Array.from(new Set(s1 + s2))
//     .sort()
//     .join("");
// }

// function longest(s1, s2) {
//   // your code
//   s3 = s1 + s2;
//   s4 = s3.split("");
//   s4 = s4.sort().filter(function (element, index, array) {
//     return element !== array[index - 1];
//   });
//   return s4.join("");
// }

// test
const test1 = longest("aretheyhere", "yestheyarehere"); // "aehrsty"
console.log(test1);
