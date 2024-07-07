// arrays
const arr1 = [1, 2, 3, 4, 5]; // arr original
// console.log(arr1);
const [num1, num2, num3, ...numRest] = arr1; // destructuración
// console.log(num1, num2, num3, ...numRest);
arr1[2] = "666"; // reasignacion del elemento n por string
// console.log(typeof arr1[2]);
// console.log(arr1);
// console.log(num1, num2, num3, ...numRest);
// console.log(typeof num2);

// -----------------------------------------------------------

// objetos
const user = {
  name: "Simón",
  age: "5",
};

// console.table(user);

// const name = user.name;
// const age = user.age;

const { name, age } = user;
// console.log(name, age);

// -----------------------------------------------------------

const ANIMALES = {
  name: "Tigre",
  patas: "4",
};

//   const personName = USERS.name;
//   const personpatas = USERS.patas;

const { name: animalName, patas: animalPatas } = ANIMALES;
// console.log(animalName, animalPatas);

// -----------------------------------------------------------

const idVar = "id_3";
const JUEGOS = {
  id_1: { title: "Doom", year: "1993" },
  id_2: { title: "Hexen", year: "1995" },
  id_3: { title: "Heretic", year: "1994" },
  id_4: { title: "Quake", year: "1996" },
  id_5: { title: "Dark Forces", year: "1994" },
};

const {  title, year } = JUEGOS[idVar];
console.log(JUEGOS[idVar]);
console.log(title, year);


// // -----------------------------------------------------------

// const user = {
//     johnDoe: { 
//       age: 34,
//       email: 'johnDoe@freeCodeCamp.com'
//     }
//   };
//   Here's how to extract the values of object properties and assign them to variables with the same name:
  
//   const { johnDoe: { age, email }} = user;
//   And here's how you can assign an object properties' values to variables with different names:
  
//   const { johnDoe: { age: userAge, email: userEmail }} = user;


// // -----------------------------------------------------------

// const LOCAL_FORECAST = {
//     yesterday: { low: 61, high: 75 },
//     today: { low: 64, high: 77 },
//     tomorrow: { low: 68, high: 80 }
//   };
  
//   // Only change code below this line
  
//   // And here's how you can assign an object properties' values to variables with different names:  
  
//   // const lowToday = LOCAL_FORECAST.today.low;
//   // const highToday = LOCAL_FORECAST.today.high;
  
//   const { today: {low: lowToday, high: highToday}} = LOCAL_FORECAST
  
//   // Only change code above this line