// 1
function checkScope() {
  let i = "function scope";
  if (!true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

// 2
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  return s;
  // Only change code above this line
}
editInPlace();

// 3
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// 4
const magic = () => new Date();

// 5
const myConcat = (arr1, arr2) => [...arr1, ...arr2];

// 6
const increment = (number, value = 1) => number + value;

// 7
// const sum = (...params) => {
//     const args = [...params];
//     let total = 0;
//     for (let i = 0; i < args.length; i++) {
//       total += args[i];
//     }
//     return total;
//   }

const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

// console.log(sum(2, 4));

// 8
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // Change this line

// console.log(arr2);

// 9
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line

// 10
const HIGH_TEMPERATURES_2 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow;

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES_2;

// Only change code above this line

// 11
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// Only change code below this line

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

const {
  today: { low: lowToday, high: highToday2 },
} = LOCAL_FORECAST;

// Only change code above this line

// 12

let a = 8,
  b = 6;

// Only change code below this line
[a, b] = [b, a];

// 13
function removeFirstTwo(list) {
  const [a, b, ...restList] = list;
  return [...restList];
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
// console.log(removeFirstTwo(source));

// 14
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line

// 15
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  arr.forEach((failure) => {
    failureItems.push(`<li class="text-warning">${failure}</li>`);
  });
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

// 16
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name,
    age,
    gender,
  };
  // Only change code above this line
};

// 17
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
// Only change code above this line
bicycle.setGear(3);
// console.log(bicycle.gear);

// 18
// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable("carrot");
// console.log(carrot.name); // Should display 'carrot'

// 18
// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }

  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }

  set temperature(celsius) {
    return (this._fahrenheit = (celsius * 9.0) / 5 + 32);
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
// console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
// console.log(temp);

// 19
{
  /* <html>

<body>
  <!-- Only change code below this line -->
  <script type="module" src="index.js"></script>
  <!-- Only change code above this line -->
</body>

</html> */
}

// 20
// const uppercaseString = (string) => {
//   return string.toUpperCase();
// }

// const lowercaseString = (string) => {
//   return string.toLowerCase()
// }

// export { uppercaseString, lowercaseString }

// 21
// import { uppercaseString, lowercaseString } from './string_functions.js'
// // Only change code above this line

// uppercaseString("hello");
// lowercaseString("WORLD!");

// 22
// import * as stringFunctions from './string_functions.js'
// // Only change code above this line

// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");

// 23
// export default function subtract(x, y) {
//   return x - y;
// }

// 24
// import subtract from "./math_functions.js"
// // Only change code above this line

// subtract(7, 4);

// 25
// const makeServerRequest = new Promise((resolve, reject) => {});

// 26
// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer represents a response from a server
//   let responseFromServer;

//   if (responseFromServer) {
//     resolve("We got the data");
//   } else {
//     reject("Data not received");
//   }
// });

// 27
// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer is set to true to represent a successful response from a server
//   let responseFromServer = true;

//   if (responseFromServer) {
//     resolve("We got the data");
//   } else {
//     reject("Data not received");
//   }
// });
// makeServerRequest.then((result) => {
//   console.log(result);
// });


// 28
// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer is set to false to represent an unsuccessful response from a server
//   let responseFromServer = false;
    
//   if(responseFromServer) {
//     resolve("We got the data");
//   } else {  
//     reject("Data not received");
//   }
// });

// // muestra el resolve
// makeServerRequest.then(result => {
//   console.log(result);
// });

// // muestra reject
// makeServerRequest.catch(error => {
//   console.log(error);
// });