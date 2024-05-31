// destructuring when return array
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

// const [suma, subtract, multiply, divide] = calculate(4, 7);
const [...todasLasOperaciones] = calculate(4, 7);
const [, , , ...todasLasOperacionesRest] = calculate(4, 7);
const [suma, , multiplicar, ...ops] = calculate(4, 7);
console.log(...ops, suma, multiplicar); // suma, multiplica y divide
console.log(...todasLasOperaciones); // suma, multiplica y divide
console.log(...todasLasOperacionesRest); // suma, multiplica y divide

// rest
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;

// destructuring object
const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
  registration: {
    city: "Houston",
    state: "Texas",
    country: "USA",
  },
};

myVehicle(vehicleOne);

function myVehicle({ model, registration: { state } }) {
  const message = "My " + model + " is registered in " + state + ".";
}
