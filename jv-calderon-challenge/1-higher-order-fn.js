// https://github.com/jvcalderon/js-challenge/tree/master/src/1-higher-order-fn
// Higher order functions
// A higher order function is a function that takes a function as an argument, or returns a function.

// This is a key concept of lambda calculus and functional programming.

// Exercise
// You just need to provide a function who receives and run a function passed as argument.

// mi solución
const name = () => 'Periquillo'
const sayHello = (nameFn) => `Hello ${nameFn()}!`//TODO
console.log(sayHello(name)) //Must print "Hello Periquillo!"

// // solución dada:
// const name = () => 'Periquillo'
// const sayHello = nameFn => `Hello ${nameFn()}!`
// console.log(sayHello(name)) //Must print "Hello Periquillo!"