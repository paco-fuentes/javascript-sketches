const givenNums = [[2, 3, 3], [19], [2, 2, 5], [3, 7], [2, 11], [23]];

const setArrNums = new Set(givenNums.flat());
const arrNums = [...setArrNums];

const findRepNums = (arr, checkNums) =>
  arr.map((ele, ite) => ele.reduce((acc, e, i, a) => e === checkNums[i] ?[...acc, e] : [...acc], []));

console.log(arrNums);
console.table(findRepNums(givenNums, arrNums));
