`1 - Higher order functions
A higher order function is a function that takes a function as an argument, or returns a function.

This is a key concept of lambda calculus and functional programming.

Exercise
You just need to provide a function who receives and run a function passed as argument.`;

//// respuesta 1

// const name = () => 'Periquillo'

// const sayHello = () => `Hello ${name()}`;

// console.log(sayHello(name)) //Must print "Hello Periquillo!"

//// respuesta 1 correcta

// const name = () => 'Periquillo'

// const sayHello = (yourNameFn) => `Hello ${yourNameFn()}`;

// console.log(sayHello(name)) //Must print "Hello Periquillo!"

`2 - Function composition
Function composition is an operation that takes two functions f and g and produces a function h such that h(x) = g(f(x)).

Key concepts:

To compose two functions they must be compatibles; return param of the first one must match with the type of the argument of the second one.
Order is inverted g(f(x)) -> g ∘ f: First of all x is applied to f and result is applied to g (from inner to outer).
Exercise
You have to create a variadic function (who can receive a not defined number of arguments) to receive functions and compose them:`;

//// respuesta 2A
// const compose =
//   (...args) =>
//   (...args2) =>
//     args.reverse().reduce((fn1, fn2, i) => fn2(1 === i ? fn1(...args2) : fn1));

// const say = (name) => name;
// const greeting = (name) => "Hi " + name;
// const greet = compose(console.log, greeting, say);

// greet("Anacleto"); // Just like console.log(greeting(say('Anacleto'))) //returns 'Hi Anacleto'


//// respuesta 2B
// const compose = 
// (...args) => {
//   return (...args2) => {
//     return args.reverse().reduce((fn1, fn2, i) => {
//       return fn2(1 === i ? fn1(...args2) : fn1);
//     });
//   };
// };

// const say = (name) => name;
// const greeting = (name) => "Hi " + name;
// const greet = compose(console.log, greeting, say);

// greet("Anacleto"); // Just like console.log(greeting(say('Anacleto'))) //returns 'Hi Anacleto'


`3 - Currying
Currying is the process of transforming a function that takes multiple arguments in a tuple as its argument, 
into a function that takes just a single argument and returns another function which accepts further arguments, 
one by one, that the original function would receive in the rest of that tuple.

Key concepts:

Partial application
Exercise
You have to implement the function curry; it can receive functions with arity > 1 (arity = number of arguments) 
and convert it in a curried function:

const curry = x => x //TODO

const curried = curry((a, b, c) => a + b + c)
console.log(curried(1)(2)) //Returns a function who spects one value to return a result
console.log(curried(1)(2)(3)) //Returns 6
console.log(curried(1,2)(3)) //Returns 6
console.log(curried(1,2,6)) //Returns 6`

// // Solution to debug
// const curry = fn => {
//     const arity = fn.length
//     const currify = (...args) => {
//         return args.length === arity
//             ? fn(...args)
//             : (...newArgs) => {
//                 return currify(...[...args, ...newArgs])
//             }
//     }
//     return currify
// }

// const curried = curry((a, b, c) => a + b + c)
// console.log(curried(1)(2)) //Returns a function who spects one value to return a result
// console.log(curried(1)(2)(3)) //Returns 6
// console.log(curried(1,2)(3)) //Returns 6
// console.log(curried(1,2,6)) //Returns 6

// // solution ok 
// const curry = fn => {
//     const arity = fn.length
//     const currify = (...args) => args.length === arity ? fn(...args) : (...newArgs) => currify(...[...args, ...newArgs])
//     return currify
// }

// const curried = curry((a, b, c) => a + b + c)
// console.log(curried(1)(2)) //Returns a function who spects one value to return a result
// console.log(curried(1)(2)(3)) //Returns 6
// console.log(curried(1,2)(3)) //Returns 6
// console.log(curried(1,2,9)) //Returns 12