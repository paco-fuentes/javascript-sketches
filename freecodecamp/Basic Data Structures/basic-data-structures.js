// 1
const yourArray = ["hola", 33, true, 44, "mundo"]; // Change this line

// 2
const myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "hola";
// Only change code above this line
// console.log(myArray);

// 3
function mixedNumbers(arr) {
  // Only change code below this line
  // arr.unshift('I', 2, 'three')
  // arr.push(7, 'VIII', 9);
  // Only change code above this line
  return ["I", 2, "three", ...arr, 7, "VIII", 9];
}

// console.log(mixedNumbers(["IV", 5, "six"]));

// 4
function popShift(arr) {
  let popped = [...arr].pop(); // Change this line
  let shifted = [...arr].shift(); // Change this line
  return [shifted, popped];
}

// console.log(popShift(["challenge", "is", "not", "complete"]));

// 5
// devolver los que sumen 10 [2,,,,,5,2,1]
const arr = [2, 4, 5, 1, 7, 5, 2, 1];

// esto devuelve los elementos eliminados...
const arrCopySplice = [...arr].splice(1, 4); // [4, 5, 1, 7]

// esto devuleve los elementos no eliminados
const arrCopyForSplice = [...arr];
arrCopyForSplice.splice(1, 4); // [2, 5, 2, 1]
// const { b:2 , ...rest}= arr
// const { a: 7, 5, 2, 1 , ...rest}= arr
// console.log(arr, arrCopySplice, arrCopyForSplice);

// const [, ...rest1] = arr
const [var1, , , , , ...rest2] = arr;
const var2 = arr[1];
const newArr = [var1, ...rest2];

// console.log(newArr);

// 6
// function htmlColorNames(arr) {
//   // Only change code below this line
//   arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
//   // Only change code above this line
//   return arr;
// }

const htmlColorNames = (arr) => {
  const [, , ...arrRest] = arr;
  return ["DarkSalmon", "BlanchedAlmond", ...arrRest];
};

// console.log(
//   htmlColorNames([
//     "DarkGoldenRod",
//     "WhiteSmoke",
//     "LavenderBlush",
//     "PaleTurquoise",
//     "FireBrick",
//   ])
// );

// 7
// function forecast(arr) {
//   // Only change code below this line
//   const select = arr.slice(2, 4)
//   return select;
// }

// // Only change code above this line
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// // 8
// function forecast(arr) {
//   // Only change code below this line
//   const select = arr.slice(2, 4)
//   return select;
// }

// // Only change code above this line
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// 9
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

// console.log(copyMachine([true, false, true], 2));

// 10
function spreadOut() {
  let fragment = ["to", "code"];
  const sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
  return sentence;
}

// console.log(spreadOut());

// 11
function quickCheck(arr, elem) {
  // Only change code below this line
  return arr.indexOf(elem) !== -1;
  // Only change code above this line
}

// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// 12
// function filteredArray(arr, elem) {
//   return arr.filter((e) => e.includes(elem));
// }

// function filteredArray(arr, elem) {
//   // Only change code below this line
//   let res = [];
//   arr.forEach((e) => {
//     if (!e.includes(elem)) { return res.push(e) }
//   })
//   return res;
// }

// console.table(filteredArray([[3, 2, 3], [1, 6, 5], [3, 13, 26], [19, 3, 9]], 3));

// console.table(
//   filteredArray(
//     [
//       [3, 2, 3],
//       [1, 6, 4],
//       [3, 13, 26],
//       [19, 3, 9],
//     ],
//     3
//   )
// );

// // 13
// let myNestedArray = [
//   // Only change code below this line
//   ["unshift", ["deep", false], [["deeper", 1, 2, 3]], "complex", "nested"],
//   ["loop", "shift", [[6, 7, 1000]], "method"],
//   ["concat", [[["deepest", false, true]]], "spread", "array"],
//   ["mutate", [[1327.98]], "splice", "slice", "push"],
//   ["iterate", [[1.3849, 7]], "8.4876", "arbitrary", "depth"],
//   // Only change code above this line
// ];

// 14
// const foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
// };

// // Only change code below this line
// foods.bananas = 13;
// foods["grapes"] = 35;
// foods.strawberries = 27;
// // Only change code above this line

// console.log(foods);

// // 15
// let userActivity = {
//   id: 23894201352,
//   date: "January 1, 2017",
//   data: {
//     totalUsers: 51,
//     online: 42,
//   },
// };

// // Only change code below this line
// userActivity.data.online = 45;
// // Only change code above this line

// // console.log(userActivity);

// 16
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };

// function checkInventory(scannedItem) {
//   // Only change code below this line
//   return foods[scannedItem]
//   // Only change code above this line
// }

// console.log(checkInventory("apples"));

// 17
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27,
// };

// const foodVar = "grapes";
// const {
//   apples,
//   bananas = ["bananas"],
//   grapes = foods[foodVar],
//   ...restFood
// } = foods;
// console.log(foods);
// console.log(restFood);

// 18
// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function isEveryoneHere(userObj) {
//   // Only change code below this line
//   return ('Alan' in users && users.hasOwnProperty('Jeff') && 'Sarah' in users && users.hasOwnProperty('Ryan'));
//   // Only change code above this line
// }

// console.log(isEveryoneHere(users));

// 19
// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function isEveryoneHere(userObj) {
//   // Only change code below this line
//   return ('Alan' in users && users.hasOwnProperty('Jeff') && 'Sarah' in users && users.hasOwnProperty('Ryan'));
//   // Only change code above this line
// }

// console.log(isEveryoneHere(users));

// 20
// const users = {
//   Alan: {
//     online: false,
//   },
//   Jeff: {
//     online: true,
//   },
//   Sarah: {
//     online: false,
//   },
// };

// function countOnline(allUsers) {
//   // Only change code below this line
//   let count = 0;
//   for (const user in allUsers) {
//     allUsers[user].online && count++
//   }
//   return count
//   // Only change code above this line
// }

// console.log(countOnline(users));

// // 21
// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function getArrayOfUsers(obj) {
//   // Only change code below this line
//   return Object.keys(obj)
//   // Only change code above this line
// }

// console.log(getArrayOfUsers(users));

// // 22
// let user = {
//   name: 'Kenneth',
//   age: 28,
//   data: {
//     username: 'kennethCodesAllDay',
//     joinDate: 'March 26, 2016',
//     organization: 'freeCodeCamp',
//     friends: [
//       'Sam',
//       'Kira',
//       'Tomo'
//     ],
//     location: {
//       city: 'San Francisco',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
// };

// function addFriend(userObj, friend) {
//   // Only change code below this line
//   return userObj.data.friends = [...userObj.data.friends, friend]
//   // Only change code above this line
// }

// console.log(addFriend(user, 'Pete'));

