function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const average = classPoints.reduce((a, b) => a + b) / classPoints.length;
  return yourPoints > average ? true : false;
}

const test1 = betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75); // true
const test2 = betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9); // false

console.log(test1);
console.log(test2);
