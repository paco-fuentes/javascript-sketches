function findSmallestInt(arr) {
  //your code here
  // se asigna la primera celda del indice y se va comparando con las siguientes
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// // ES6-1 con Math.min
// function findSmallestInt(arr) {
//   return Math.min(...arr);
// }

// // ES6-2 con reduce
// function findSmallestInt(arr) {
//   return arr.reduce((a, b) => (a < b ? a : b));
// }

const smallestInt = findSmallestInt([78, 56, -232, 412, 228]); // 56
console.log(smallestInt);
