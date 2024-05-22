function squareDigits(num) {
  const res = [];
  const splitNums = num.toString().split("").forEach((e) => {
    e *= e;
    res.push(e);
  });

  return +res.join("");
}

console.log(typeof squareDigits(3212)); //should equal 9414
console.log(squareDigits(3212)); //should equal 9414


// function squareDigits(num){
//     return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
//   }