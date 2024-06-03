function countSheeps(sheep) {
  let count = 0;
  sheep.forEach((e) => (e === true ? count++ : (count = count)));
  return count;
}

// let countSheeps = (x) => x.filter((s) => s).length;

// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }

const test1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
console.log(countSheeps(test1));
