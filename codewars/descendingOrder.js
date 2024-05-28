function descendingOrder(n) {
  //...
  return +n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  //   const ord = nToStr.sort((a, b) => a - b);
  //   console.log(typeof nToStr);
  //   console.log(nToStr);
}

const test1 = descendingOrder(68341);
const test2 = descendingOrder(0);
console.log(test1);
console.log(test2);


// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
//   }

// function descendingOrder(n){
//     return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
//   }

// function descendingOrder(n){
//     return parseInt(n.toString().split('').sort().reverse().join(''), 10);
//   }