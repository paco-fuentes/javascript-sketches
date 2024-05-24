function sumTwoSmallestNumbers(numbers) {
  //Code here
  const organized = numbers.sort((a, b) => a - b);
  organized.length = 2;
  console.log(organized);
  return organized.reduce((a, b) => a + b);
}

const sumTwoRes = sumTwoSmallestNumbers([15, 28, 4, 2, 43]); // 6
console.log(sumTwoRes);
