function smallestCommons(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const isPrime = (n, i = n - 1) =>
    n !== 0
      ? i > 1
        ? n % i === 0
          ? false
          : isPrime(n, i - 1)
        : true
      : false;

  // descomponer un numero
  // desde el 2 buscar el numero primo que es divisor de el, que tiene resto 0
  // sacar las bases
  // sacar los exponentes de cada base
  // multiplicarlos todos

  const range = (a) =>
    Array.from({ length: max - min + 1 }, (e, i) => (e = min + i));
  const factorize = (n) => {
    return Array.from({ length: n }, (_, i, __) => i + 1)
      .slice(1)
      .filter(isPrime)
      .filter((e) => n % e === 0)
      .slice(0, 1)
      .map((e) => {
        // console.log(n, e)
        return e + " " + factorize(n / e);
      });
  };

  const factorizeRange = (arrRange) => arrRange.map((e) => factorize(e));

  const setBases = new Set(
    factorizeRange(range(arr))
      .flat(Infinity)
      .map((e) => e.split(" "))
      .flat()
      .filter((e) => e !== "")
      .map((e) => Number(e))
  );
  const bases = [...setBases].reduce((acc, e) => acc * e);

  const expArr = factorizeRange(range(arr))
    .flat()
    .map((e) =>
      e
        .split(" ")
        .map(Number)
        .filter((e) => e !== 0)
    );

  // const highestExp = [...expArr].filter((e, i, a) => e[i%a.length]) // encuentra los numeros que se repiten mas de una vez

  const exp = [...expArr];
  const expMaxGroupLength = Math.max(...[...expArr].map((e, i, a) => e.length));
  // return [...bases].reduce((acc, e)=> acc*e) * exp.reduce((acc, e)=>acc*e)

  // --->

  const filterGivenNums = (givenNums) => {
    const maxFrequencies = givenNums
      .map((subArray) => {
        console.log(subArray);
        return subArray.reduce((acc, num) => {
          console.log(acc);
          acc[num] = (acc[num] || 0) + 1;
          return acc;
        }, {});
      })
      .reduce((acc, frequencies) => {
        Object.keys(frequencies).map((num) => {
          console.log(frequencies, num);
          acc[num] = Math.max(acc[num] || 0, frequencies[num]);
        });
        return acc;
      }, {});

    const reduceFrequencies = (acc, num) => {
      if ((acc.count[num] || 0) < maxFrequencies[num]) {
        return {
          result: [...acc.result, num],
          count: { ...acc.count, [num]: (acc.count[num] || 0) + 1 },
        };
      }
      return acc;
    };

    const flatResult = givenNums
      .flat()
      .reduce(reduceFrequencies, { result: [], count: {} }).result;

    return flatResult;
  };

  //   const givenNums = [[2, 3, 3], [19], [2, 2, 5], [3, 3, 3, 3, 7], [2, 11], [23]];
  const result = filterGivenNums(exp).reduce((acc, e) => acc * e);

  return (bases * result) / bases;
}

console.table(smallestCommons([23, 18]));
//   console.table(smallestCommons([1, 13]));
//   console.table(smallestCommons([1, 5]));
