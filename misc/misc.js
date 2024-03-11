// null es un object
const varNull = null;

console.log(typeof varNull);

if (varNull === null) {
  console.log("varNull es estrictamente igual a null");
}

if (varNull == null) {
  console.log(
    "varNull no es estrictamente igual a null pero sigue siendo true, revisar..."
  );
}

// evaluar expresiones
if (!2 + !3) {
  console.log("no entiendo nada");
}

for (let i = 10; i >= 0; i--) {
  if (i === 0) {
    console.log("¡Despegue 🚀!");
  } else {
    console.log("Faltan " + i + " segundos");
  }
}

//
const login = ''
let message;

if (login == "Employee") {
  message = "Hello";
} else if (login == "Director") {
  message = "Greetings";
} else if (login == "") {
  message = "No login";
} else {
  message = "";
}

console.log(message);

// for in navega objetos. También ordena las claves de menor a mayor y elimina reptidos
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  console.log((code)); // 1, 41, 44, 49
}

// eliminar repetidos de un array con un new Set()
const msMind = ['amarillo', 'amarillo', 'verde', 'azul'];
const arrSeting = new Set(msMind);
let newSetedArr = [...arrSeting];
console.log(newSetedArr);