// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     if (i == j){
//         continue;
//     }
//     console.log(i, j);
//   }
// }

// console.log([1, 2, 3].reduce((x, y) => x+y, 10));

// function tiers(n) {
//     let gap = '';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             gap += ' ';
//         }
//         for (let k = 0; k <= i; k++) {
//             gap += '*';
//         }
//         if (i !== n) {
//             gap += '\n';
//         }
//     }
//     return (gap);
// }

// console.log(tiers(5));

// // con var undefined
// function foo(){
//     console.log(x);
//     var x = 5;
// }

// foo()

// // con let reference error...
// function foo(){
//     console.log(x);
//     let x = 5;
// }

// foo()

// // TypeError fn is not a function
// fn();
// var fn = function(){
//     console.log('Hello');
// }

// undefined..
// function bar(){
//     return
//     {
//         message: 'hello world'
//     };
// };

// console.log(bar());

// function maxProductoAdyacente(numeros) {
//   let maxProducto = -Infinity;
//   let maxPar;

//   for (let i = 0; i < numeros.length - 1; i++) {
//     const producto = numeros[i] * numeros[i + 1];
//     if (producto > maxProducto) {
//       maxProducto = producto;
//       maxPar = [numeros[i], numeros[i + 1]];
//     }
//   }

//   return { maxPar, maxProducto };
// }

// const numeros = [3, 6, -2, -5, 7, 3];
// const resultado = maxProductoAdyacente(numeros);
// console.log(
//   `El par de elementos adyacentes que tiene el producto más grande es ${resultado.maxPar}, y el producto es ${resultado.maxProducto}.`
// );


// // en la primera iteración key es brand: mobile.brand
// let mobile = {
//     brand: 'Samsung',
//     model: 'Galaxy Note 9'
//   };
  
//   for (let key in mobile) {
//     console.log(`${key}: ${mobile[key]}`);
//   }