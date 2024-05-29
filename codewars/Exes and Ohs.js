// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.

function XO(str) {
  let x = [];
  let o = [];

  str
    .toLowerCase()
    .split("")
    .forEach((e) => {
      if (e === "x") {
        x.push(e);
      } else if (e === "o") {
        o.push(e);
      }
    });

  return x.length === o.length;
}

// test
const test1 = XO("xxOo"); //true
const test2 = XO("xxxm"); //false
const test3 = XO("Oo"); //false
const test4 = XO("ooom"); //false
console.log(test1, test2, test3, test4);

// // otras soluciones...
// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
//   }

//   const XO = str => {
//     str = str.toLowerCase().split('');
//     return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
//   }

//   function XO(str) {
//     return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }

// function XO(str) {
//     var sum = 0;
//     for(var i=0; i<str.length; i++){
//       if(str[i].toLowerCase() == 'x') sum++;
//       if(str[i].toLowerCase() == 'o') sum--;
//     }
//     return sum == 0;
//   }

//   function XO(str) {
//     return str.replace(/o/ig, '').length == str.replace(/x/ig, '').length
//   }
