function findOutlier(integers) {
    //your code here
    let odd = [];
    let even = [];
    const plainArr = integers.flat();
  
    plainArr.forEach((e) => {
      if (e % 2 === 0) {
        even.push(e);
      } else {
        odd.push(e);
      }
    });
  
    return even.length==1 ? even[0] : odd[0];
  }

console.log(findOutlier([2, 6, 8, 10, 3], 3));

// // mejor solución
// function findOutlier(int){
//     var even = int.filter(a=>a%2==0);
//     var odd = int.filter(a=>a%2!==0);
//     return even.length==1? even[0] : odd[0];
//   }