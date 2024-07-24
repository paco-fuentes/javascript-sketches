// // 1
// function convertCtoF(celsius) {
//   const fahrenheit = (celsius * 9) / 5 + 32;
//   return fahrenheit;
// }

// const test1 = convertCtoF(30); // should return a value of 86
// //   console.log(test1);

// // 2
// const greet = "hello";

// function reverseString(str) {
//   return str
//     .split("")
//     .reverse(...str)
//     .join("");
// }

// console.log(reverseString(greet));
// console.log(greet);

// 3
// function factorialize(num) {
//   if (num < 2) {
//     return (num = 1);
//   }
//   return num * factorialize(num - 1);
// }

// function factorialize(num) {
//   const result = [];
//   for (let i = 0; i < num; i++) {
//     n = i + 1;
//     result.push(n);
//   }
//   return result.reduce((acc, n) => acc * n);
// }

// console.log(factorialize(5));

// // 4
// function findLongestWordLength(str) {
//   return str
//     .split(" ")
//     .reduce(
//       (largestWord, word) =>
//         largestWord <= word.length
//           ? (largestWord = word.length)
//           : (largestWord = largestWord),
//       0
//     );
// }

// // console.log(
// //   findLongestWordLength("The quick brown fox jumped over the lazy dog")
// // );

// // 5
// function largestOfFour(arr) {
//   return arr.map((e) => e.sort((a, b) => a - b)[arr.length - 1]);
// }

// console.table(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ])
// );

// 6
// function confirmEnding(str, target) {
//   const strCopy = [...str];
//   const strLength = strCopy.length;
//   const targetLength = target.length;
//   strCopy.slice(strLength - targetLength, targetLength, ...target.split(""));
//   return strCopy.join("") === str;
// }

// console.log(confirmEnding("Bastian", "ian"));

// 7
// function repeatStringNumTimes(str, num) {
//   if (num <= 0) {
//     return "";
//   }
//   if (num < 2) {
//     return str;
//   }
//   return str + repeatStringNumTimes(str, num - 1);
// }

// console.log(repeatStringNumTimes("abc", -3));

// // 8
// const truncateString = (str, num) =>
//   num >= str.length ? str : str.slice(0, num) + "...";

// console.log(
//   truncateString(
//     "A-tisket a-tasket A green and yellow basket",
//     "A-tisket a-tasket A green and yellow basket".length
//   )
// );

// // 9
// const findElement = (arr, func) => arr.find((e) => func(e));

// findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// console.log(findElement([1, 3, 3, 5], (num) => num % 2 === 0));

// 10
// function booWho(bool) {
//   if (bool === true || bool === false) { return true }
//   return !!bool && !bool;
// }

// console.log(booWho(null));

// // 11
// function titleCase(str) {
//   return str
//     .split(" ")
//     .map((word) => (word = word[0].toUpperCase() + word.slice(1).toLowerCase()))
//     .join(" ");
// }

// console.log(titleCase("I'm a little tea pot"));

// // 12
// function frankenSplice(arr1, arr2, n) {
//   const arrA = [...arr2].splice(0, n);
//   const arrB = [...arr2].slice(n);
//   return [...arrA, ...arr1, ...arrB];
// }

// console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // should return [4, 1, 2, 3, 5].

// // 13
// function bouncer(arr) {
//     return arr.filter(e => Boolean(e));
//   }

//   bouncer([7, "ate", "", false, 9]);

// 14
// function getIndexToIns(arr, num) {
//   // caso array vacio o sin array
//   if (!arr || arr.length <= 0) {
//     return 0;
//   }

//   // caso el index mas cercano
//   const isCloseTo = (a, n) => {
//     const addToArr = [...a, n];
//     const sortArr = addToArr.sort((a, b) => a - b);
//     const searchIndex = sortArr.indexOf(n);
//     return searchIndex;
//   };

//   return isCloseTo(arr, num);
// }

// console.log(getIndexToIns([40, 50, 60], 50)); // 1
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // should return 3
// console.log(getIndexToIns([5, 3, 20, 3], 5)); //  should return 2

// 15
// const words = ["hello", "Heeeello"]

// function mutation(arr) {
//   const word1 = arr[0].toLowerCase().split("");
//   const word2 = arr[1].toLowerCase().split("");

//   const notRepWord1 = new Set(word1)
//   const notRepWord2 = new Set(word2)

//   const inc = [...notRepWord1].filter((char) => [...notRepWord2].includes(char));
//   console.log(arr);
//   return inc.length === [...notRepWord2].length;
// }

// console.log(mutation(words));
// console.log(words);

// // 16
// function chunkArrayInGroups(arr, size) {
//   const restSize = arr.length % size;
//   const restSizeEven = arr.length % size === 0;

//   const count = 0;
//   // let count2 = count + size;

//   const restSlice = [...arr].slice([arr.length - size + 1]);
//   console.log(restSlice);

//   const arrSlice = [...arr].slice(
//     restSizeEven + count + size,
//     size + restSizeEven + count + size
//   );
//   console.log(arrSlice);

//   const newArr = (slice, rest, nCount) => {
//     if (nCount > size) {
//       return [[rest]];
//     }
//     return [[slice], ...[...newArr(slice, rest, nCount + size)]];
//   };
//   return newArr(arrSlice, restSlice, count);
// }

// console.table(chunkArrayInGroups(["a", "b", "c", "d", "f"], 2));

// dividir en partes iguales a size
// apartar el resto
// acmular en arrays iguales a size, y cuando el index supera (al resto de size?) guarda el ultimo slice

// function chunkArrayInGroups(arr, size) {
//   return arr.reduce(
//     (acc, char) =>
//       arr.length % size === acc.length ? ([...acc, [char.slice(0, size)]]) : [...acc],
//     []
//   );
// }

// console.table(chunkArrayInGroups(["a", "b", "c", "d", "f"], 2));

// function chunkArrayInGroups(arr, size) {
//   return arr.reduce((acc, e, idx) =>
//     (arr.length - idx) % size == 0
//       ? ([...acc, [...arr.slice(idx, size)]])
//       : ([...acc, [...arr[idx].slice(0, size)]]), []
//   )
// }

// function chunkArrayInGroups(arr, size) {
//   return arr.reduce((acc, _, idx, arr) =>
//     idx % size == 0
//       ? ([...acc, [...arr.slice(idx, size + idx)]])
//       : ([...acc]), []
//   )
// }

// const chunkArrayInGroups = (arr, size) =>
//   arr.reduce(
//     (acc, _, idx, arr) =>
//       idx % size == 0 ? [...acc, [...arr.slice(idx, size + idx)]] : [...acc],
//     []
//   );

// function chunkArrayInGroups(arr, size) {
//   return arr.filter((acc, _, idx, arr) =>
//     idx % size == 0
//       ? ([...acc, [...arr.slice(idx, size + idx)]])
//       : ([...acc]), []
//   )
// }

// function chunkArrayInGroups(arr, size) {
//   const chunk = (arr, idx, size) => [...arr.slice(idx, size + idx)];
//   return
// }

// function chunkArrayInGroups(arr, size) {
//   const idx = arr.length
//   const res = []
//   const chunk = (arr, idx, size) => [...arr.slice(idx, size + idx)]
//     return idx % size == 0
//       ? ([...res, chunk(arr, idx - 1, size)])
//       : ([...res])
// }

// console.table(
//   chunkArrayInGroups(["a", "b", "c", "d", 5, 6, 7, 8, 9, 10, 11], 5)
// );
