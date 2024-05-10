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