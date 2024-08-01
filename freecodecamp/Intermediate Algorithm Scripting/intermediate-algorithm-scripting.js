// // 1 hint max / min
// Sumar múltiplos consecutivos de un número

// function sumAll(arr) {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);

//   function sum(min, max) {
//     if (min < max) {
//       return min + sum(min + 1, max);
//     } else {
//       return min;
//     }
//   }
//   return sum(min, max);
// }

// console.log(sumAll([5, 10]));

// // 2
// function diffArray(arr1, arr2) {
//   const rep1 = arr1.filter((e) => arr2.indexOf(e) === -1);
//   const rep2 = arr2.filter((e) => arr1.indexOf(e) === -1);
//   return [...rep1, ...rep2];
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// // 3
// function destroyer(arr, ...dest) {
//   return arr.filter((e) => ![...dest].includes(e));
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// // 4
// function whatIsInAName(collection, source) {
//   //   const srcKeys = Object.keys(source);
//   //   const srcVals = Object.values(source);
//   return collection.filter((obj) => {
//     // console.log(Object.keys(obj), Object.values(obj));
//     return Object.keys(source).every((e) => {
//       return obj[e] === source[e];
//     });
//   });
// }

// console.table(
//   whatIsInAName(
//     [
//       { first: "Romeo", last: "Montague" },
//       { first: "Mercutio", last: null },
//       { first: "Tybalt", last: "Capulet" },
//     ],
//     { last: "Capulet" }
//   )
// );

// // 5
// function spinalCase(str) {
//   return str
//     .replace(/([a-z])([A-Z])/g, "$1 $2")
//     .toLowerCase()
//     .split(/[-_ ]/)
//     .join("-");
// }

// console.log(spinalCase("thisIsSpinalTap"));
// spinalCase("This Is Spinal Tap");

// // 6
// function translatePigLatin(str) {
//   const firstVowel = str.indexOf(str.match(/[aeiou]/));
//   if (!str.match(/[aeiou]/)) {
//     return str + "ay";
//   }
//   return !str[0].match(/[aeiou]/)
//     ? [...str].slice(firstVowel).join("") + str.slice(0, firstVowel) + "ay"
//     : [...str].slice(firstVowel).join("") + "way";
// }

// console.log(translatePigLatin("rhythm"));
// console.log(translatePigLatin("california"));
// console.log(translatePigLatin("awakkalowgga"));

// // 7
// function myReplace(str, before, after) {
//   return str
//     .split(" ")
//     .map((e) =>
//       e === before
//         ? before === before.toLowerCase()
//           ? (e = after.slice(0, 1) + after.slice(1))
//           : (e = after.slice(0, 1).toUpperCase() + after.slice(1))
//         : e
//     )
//     .map((e) =>
//       e === after
//         ? after !== after.toLowerCase()
//           ? (e = after.slice(0, 1).toLowerCase() + after.slice(1))
//           : e
//         : e
//     )
//     .join(" ");
// }

// console.log(myReplace("I think we should look up there", "up", "Down"));

// // 8
// function pairElement(str) {
//   const DNA = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C",
//   };

//   return str.split("").map((e) => [e, DNA[e]]);
// }

// console.table(pairElement("GCG"));

// // 9
// function fearNotLetter(str) {
//   const abc = "abcdefghijklmnopqrstuvwxyz";
//   if (abc === str) {
//     return undefined;
//   }
//   const idxSlice = abc.indexOf([...str][0]);
//   const lengthSlice = str.length;
//   // console.log(idxSlice, lengthSlice)

//   const initSlice = [...abc].slice(0, idxSlice);
//   const restSlice = [...abc].slice(idxSlice + lengthSlice + 1);
//   // console.log(initSlice, restSlice)

//   const newAbc = [...initSlice, ...str, ...restSlice].join("");

//   return [...abc].filter((char) => !newAbc.includes(char)).join("");
// }

// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined
// console.log(fearNotLetter("stvwx")); // u

// function fearNotLetter(str) {
//   const abc = "abcdefghijklmnopqrstuvwxyz";
//   if (abc === str) {
//     return undefined;
//   }
//   const idxInitSlice = abc.indexOf(str[0]);
//   const idxEndingSlice = abc.indexOf(str[str.length - 1]);

//   const abcSlice = abc.slice(idxInitSlice, idxEndingSlice);

//   return [...abcSlice].filter((char) => ![...str].includes(char)).join("");
// }

// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined
// console.log(fearNotLetter("stvwx")); // u

// // 10
// function uniteUnique(...arr) {
//   console.log(...arr)
//   const arrCopy = new Set([...arr].reduce((acc, e) =>
//       [...acc, ...e],
//     []))
//     return [...arrCopy]
// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// // 11
// function convertHTML(str) {
//   const entities = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;",
//   };

//   return str
//     .split("")
//     .map((entity) => entities[entity] || entity)
//     .join("");
// }

// convertHTML("Dolce & Gabbana");

// 12
// // Generate a sequence of numbers
// // Since the array is initialized with `undefined` on each position,
// // the value of `v` below will be `undefined`
// Array.from({ length: 5 }, (v, i) => i);
// // [0, 1, 2, 3, 4]

// const fib = n => (n <= 2) ? n : fib(n - 1) + fib(n - 2);

// function sumFibs(num) {
//   const fibSeqGen = (n) =>
//     Array.from({ length: n }).reduce(
//       (acc, _, i) => [...acc, i > 1 ? acc[i - 1] + acc[i - 2] : 1],
//       []
//     );
//   const seq = fibSeqGen(num);
//   return [0, ...seq]
//     .filter((e) => e <= num && e % 2 !== 0)
//     .reduce((acc, n) => acc + n, 0);
// }

// function sumFibs(num) {
//   const fibSeqGen = (n) =>
//     [...Array(n + 1).keys()].reduce(
//       (acc, _, i) => [...acc, i > 1 ? acc[i - 1] + acc[i - 2] : 1],
//       []
//     );
//   const seq = fibSeqGen(num)
//     .filter((e) => e <= num && e % 2 !== 0)
//     .reduce((acc, n) => acc + n, 0);

//     return seq
// }

// // patrick --- >
// function sumFibs(num, a = 0, b = 1) {
//   return a > num ? 0 : sumFibs(num, b, a + b) + (a % 2 !== 0 ? a : 0);
// }

// console.log(sumFibs(10));
// console.log(sumFibs(75024)); // 60696
// console.log(sumFibs(75025)); // should return 135721

// // 13
// function sumPrimes(num) {
//   const isPrime = (n, i = n - 1) =>
//     n !== 0
//       ? i > 1
//         ? n % i === 0
//           ? false
//           : isPrime(n, i - 1)
//         : true
//       : false;

//   const range = (start, stop, step) =>
//     Array.from(
//       { length: (stop - start) / step + 1 },
//       (_, i) => start + i * step
//     );

//   return range(2, num, 1)
//     .filter((e) => isPrime(e))
//     .reduce((acc, e) => acc + e);
// }

// console.log(sumPrimes(10)); // 17
// console.log(sumPrimes(977)); // 73156

// // 14
// function smallestCommons(arr) {
//   const minimus = Math.min(...arr);
//   const maximus = Math.max(...arr);
//   const check = (min, max) => ((min * min) % max) * max === 0;
//   const inc = (min, max) =>
//     check(min, max) ? min * max : inc(min + 1, max + 1);
//   return inc(minimus, maximus);
//   // return arr.reduce((acc, e, i, a) => {
//   //   return acc = e + e === a[i - 1] + a[i - 1] ? e : e + e === a[i - 1] + a[i - 1];
//   // }, 0)
//   // return arr.filter((e, i, a) => e + e === a[i - 1] + a[i - 1]);
// }

// console.log(smallestCommons([1, 5]));

// function smallestCommons(arr) {
//   const minimus = Math.min(...arr);
//   const maximus = Math.max(...arr);

//   const check = (min, max) => ((min * min) % max) * max === 0;

//   const inc = (min, max) =>
//     check(min, max) ? min * max : inc(min + 1, max + 1);

//   return inc(minimus, maximus);

//   // return inc(minimus, maximus) % minimus === 0 && inc(minimus, maximus) % maximus === 0 ? inc(minimus, maximus) : inc()
// }

// console.log(smallestCommons([1, 13]));

// function smallestCommons(arr) {
//   const minimus = Math.min(...arr);
//   const maximus = Math.max(...arr);

//   const check = (min, max) => ((min * min) % max) * max === 0;

//   const inc = (min, max) =>
//     check(min, max) ? min * max : inc(min + 1, max + 1);

//   return inc(minimus, maximus) % minimus &&
//     inc(minimus, maximus) % maximus === 0
//     ? true
//     : false;
// }

// console.log(smallestCommons([12, 8]));

// function smallestCommons(arr) {
//     const min = Math.min(...arr)
//     const max = Math.max(...arr)
//     // MCM(a, b) = (a * b) / MCD(a, b)
//     const MCD = (a, b) => {
//       if (b === 0) return a;
//       return MCD(b, a % b);
//     };
//     const MCM = (a, b) => a * b / MCD(a, b)

//     return MCM(min, max)

//   }

// function smallestCommons(arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   const range = (start, stop, step) =>
//     Array.from(
//       { length: (stop - start) / step + 1 },
//       (_, i) => start + i * step
//     );

//   const MCD = (a, b) => {
//     if (b == 0) return a;
//     return MCD(b, a % b);
//   };

//   const MCM = (nums) => {
//     return (
//       nums.reduce((acc, e) => acc * e, 1) /
//       nums.reduce((acc, e) => MCD(acc, e), 0)
//     );
//   };

//   const rangeNums = range(min, max, 1);
//   console.log(rangeNums);
//   return MCM(rangeNums);
// }

// console.log(smallestCommons([1, 5]));

function smallestCommons(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );

  const MCD = (a, b) => {
    if (!b) return a;
    return MCD(b, a % b);
  };

  const MCM = (nums) => {
    return (
      nums.reduce((acc, e) => acc * e, 1) /
      nums.reduce((acc, e) => MCD(acc, e), 0)
    );
  };

  const rangeNums = range(min, max, 1);
  console.log(rangeNums);
  return MCM(rangeNums);
}

console.log(smallestCommons([1, 5]));

// // 15
// function dropElements(arr, func) {
//   const findN = arr.find(func);
//   const idxOfN = arr.indexOf(findN);
//   const arrSlice = arr.slice(idxOfN);

//   return findN ? arrSlice : [];
// }

// console.log(
//   dropElements([1, 2, 3, 4], function (n) {
//     return n > 5;
//   })
// );
// console.log(
//   dropElements([1, 2, 3, 9, 2], function (n) {
//     return n > 2;
//   })
// );

// console.log(
//   dropElements([1, 2, 3], function (n) {
//     return n < 3;
//   })
// );

// // 16
// function steamrollArray(arr) {
//     return arr.reduce((acc, e, i, a) => {
//       return Array.isArray(e)
//         ? [...acc, ...e.reduce((acc, e, i, a) => {
//       return Array.isArray(e)
//         ? [...acc, ...e.reduce((acc, e, i, a) => {
//       return Array.isArray(e)
//         ? [...acc, ...e]
//         : [...acc, e]
//     }, [])]
//         : [...acc, e]
//     }, [])]
//         : [...acc, e]
//     }, [])
//   }

// // [15:53] Celia Toribio, Solaris Developments
// function steamrollArray(arr) {
//   return arr.reduce((acc, e) => {
//     return Array.isArray(e) ? [...acc, ...steamrollArray(e)] : [...acc, e];
//   }, []);
// }

// console.log(
//   steamrollArray([
//     1,
//     {},
//     [3, [[[[[[[[[[[[[[[[[[[[[[[[[4]]]]]]]]]]]]]]]]]]]]]]]]]],
//   ])
// );

// // 17
// function binaryAgent(str) {
//   return str
//     .split(" ")
//     .map((e) => parseInt(e, 2))
//     .map((e) => String.fromCharCode(e))
//     .join("");
// }

// console.log(
//   binaryAgent(
//     "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
//   )
// );

// // 18
// function truthCheck(collection, pre) {
//   return collection
//     .reduce(
//       (acc, e, i, arr) =>
//         collection[i][pre] ? [...acc, true] : [...acc, false],
//       []
//     )
//     .every((e) => e === true);
//   // return collection[0][pre];
// }

// console.log(
//   truthCheck(
//     [
//       { name: "Quincy", role: "Founder", isBot: false },
//       { name: "Naomi", role: "", isBot: false },
//       { name: "Camperbot", role: "Bot", isBot: true },
//     ],
//     "isBot"
//   )
// );

// // 19
// function addTogether(...n) {
//   const n1 = n[0];
//   const n2 = n[1];
//   if (n.length > 1 && (n1 === undefined || n2 === undefined)) {
//     return undefined;
//   }
//   if (typeof n2 === "string") {
//     return undefined;
//   }
//   // if (n2 === 'undefined') { return undefined }
//   if (typeof n1 !== "number") {
//     return undefined;
//   }
//   console.log(!Number.isNaN(n1 + n2) && Number.isNaN(n2));
//   if (!Number.isNaN(n1 + n2)) {
//     return n1 + n2;
//   }
//   return (n2) => (typeof n2 !== "number" ? undefined : n1 + n2);
// }

// console.log(addTogether(2, undefined));

// // 20
// const Person = function (first, last) {
//   let firstName = first;
//   let lastName = last;

//   this.getFirstName = function () {
//     return firstName;
//   };
//   this.getLastName = function () {
//     return lastName;
//   };
//   this.getFullName = function () {
//     return `${this.getFirstName()} ${this.getLastName()}`;
//   };

//   this.setFirstName = function (first) {
//     return (firstName = first);
//   };
//   this.setLastName = function (last) {
//     return (lastName = last);
//   };
//   this.setFullName = function (first, last) {
//     this.setFirstName(first);
//     this.setLastName(last);
//     return this.getFullName();
//   };
// };

// const persona1 = new Person("Bob", "Ross");
// persona1.first = "Simón";
// persona1.last = "Losada";
// console.log(Object.keys(persona1).length);
// console.log(persona1);
// console.log(persona1.getFirstName());
// console.log(persona1.setFirstName("Pol"));
// console.log(persona1.getFirstName());

// // 21
// function orbitalPeriod(arr) {
//   const GM = 398600.4418;
//   const earthRadius = 6367.4447;
//   // const avgAlt = 35873.5553
//   const alpha = Math.PI * 2;

//   // const T = Math.round(a * Math.sqrt(a ** 3 / GM))
//   // const earth = earthRadius + avgAlt;
//   // const orbitalPeriod = Math.round(alpha * Math.sqrt(Math.pow(earth, 3) / GM));

//   return arr.map((e, idx, a) => {
//     const earth = earthRadius + e.avgAlt;
//     const orbitalPeriod = Math.round(
//       alpha * Math.sqrt(Math.pow(earth, 3) / GM)
//     );
//     return { name: e.name, orbitalPeriod: orbitalPeriod };
//   });
// }

// console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
// console.log(
//   orbitalPeriod([
//     { name: "iss", avgAlt: 413.6 },
//     { name: "hubble", avgAlt: 556.7 },
//     { name: "moon", avgAlt: 378632.553 },
//   ])
// );
