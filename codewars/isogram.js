function isIsogram(str) {
  // caso es string vacio
  //   if (str === "") {
  //     return true;
  //   }
  // eliminamos repetidos y convertimos a minúsculas
  let repeated = new Set(str.toLowerCase());
  // convertimos el objeto del new Set a string, dos opciones:
  let isEqual = Array.from(repeated).join("");
  // let isEqual = [...repeated].join("");
  // devolvemos un booleano
  return isEqual === str.toLowerCase();
}

// // otras soluciones:
// function isIsogram(str) {
//   return new Set(str.toUpperCase()).size == str.length;
// }

// function isIsogram(str) {
//   return !/(\w).*\1/i.test(str);
// }

// function isIsogram(str) {
//   var i, j;
//   str = str.toLowerCase();
//   for (i = 0; i < str.length; ++i)
//     for (j = i + 1; j < str.length; ++j) if (str[i] === str[j]) return false;
//   return true;
// }

// function isIsogram(str) {
//   return !str.match(/([a-z]).*\1/i);
// }

// function isIsogram(str) {
//   return !str || str.length === new Set(str.toLowerCase()).size;
// }

// test
const test1 = isIsogram("isogram"); // true
const test2 = isIsogram("iosisoigramo"); //false
const test3 = isIsogram("moOse"); //false
const test4 = isIsogram("Dermatoglyphics"); // true
const test5 = isIsogram(""); // true
console.log(test1, test2, test3, test4, test5);
