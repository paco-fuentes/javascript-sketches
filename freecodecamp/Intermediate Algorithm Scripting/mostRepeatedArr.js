// const givenNums = [[2, 3, 3], [19], [2, 2, 5], [3, 7], [2, 11], [23]];

// const setArrNums = new Set(givenNums.flat());
// const arrNums = [...setArrNums];

// const findRepNums = (arr, checkNums) =>
//   arr.map((ele, ite) => ele.reduce((acc, e, i, a) => e === checkNums[i] ?[...acc, e] : [...acc], []));

// console.log(arrNums);
// console.table(findRepNums(givenNums, arrNums));

const filterGivenNums = (givenNums) => {
  // Obtener las frecuencias máximas de cada número usando map y reduce
  const maxFrequencies = givenNums
      .map(subArray =>
          subArray.reduce((acc, num) => {
              acc[num] = (acc[num] || 0) + 1;
              return acc;
          }, {})
      )
      .reduce((acc, frequencies) => {
          Object.keys(frequencies).forEach(num => {
              acc[num] = Math.max(acc[num] || 0, frequencies[num]);
          });
          return acc;
      }, {});

  // Función auxiliar para manejar las frecuencias
  const reduceFrequencies = (acc, num) => {
      if ((acc.count[num] || 0) < maxFrequencies[num]) {
          return {
              result: [...acc.result, num],
              count: { ...acc.count, [num]: (acc.count[num] || 0) + 1 }
          };
      }
      return acc;
  };

  // Reducir los sub-arreglos manteniendo las frecuencias máximas
  const flatResult = givenNums
      .flat()
      .reduce(reduceFrequencies, { result: [], count: {} })
      .result;

  return flatResult;
};

const givenNums = [[2, 3, 3], [19], [2, 2, 5], [3, 3, 3, 3, 7], [2, 11], [23]];
const result = filterGivenNums(givenNums);

console.log(result); // [19, 2, 2, 5, 3, 3, 3, 3, 7, 11, 23]


console.log(result.flat()); // [[3, 3], [19], [2, 2, 5], [7], [11], [23]]

// // V2
// const filterGivenNums = (givenNums) => {
//   // Obtener las frecuencias máximas de cada número
//   const maxFrequencies = givenNums
//       .map(subArray => 
//           subArray.reduce((acc, num) => ({
//               ...acc,
//               [num]: (acc[num] || 0) + 1
//           }), {})
//       )
//       .reduce((acc, frequencies) => 
//           Object.keys(frequencies).reduce((acc, num) => ({
//               ...acc,
//               [num]: Math.max(acc[num] || 0, frequencies[num])
//           }), acc)
//       , {});

//   // Reducir los sub-arreglos manteniendo las frecuencias máximas
//   const flatResult = givenNums
//       .flat()
//       .reduce((acc, num) => {
//           const count = acc.count[num] || 0;
//           return count < maxFrequencies[num] ? {
//               result: [...acc.result, num],
//               count: { ...acc.count, [num]: count + 1 }
//           } : acc;
//       }, { result: [], count: {} })
//       .result;

//   return flatResult;
// };

// const givenNums = [[2, 3, 3], [19], [2, 2, 5], [3, 3, 3, 3, 7], [2, 11], [23]];
// const result = filterGivenNums(givenNums);

// console.log(result); // [19, 2, 2, 5, 3, 3, 3, 3, 7, 11, 23]


// // v3
// const filterGivenNums = (givenNums) => {
//   // Calcular las frecuencias máximas de cada número
//   const maxFrequencies = givenNums
//       .flat()
//       .reduce((acc, num, _, arr) => {
//           const count = arr.filter(x => x === num).length;
//           return { ...acc, [num]: Math.max(acc[num] || 0, count) };
//       }, {});

//   // Filtrar los números manteniendo las frecuencias máximas
//   return givenNums
//       .flat()
//       .reduce((acc, num) => {
//           const count = acc.count[num] || 0;
//           return count < maxFrequencies[num] 
//               ? {
//                   result: [...acc.result, num],
//                   count: { ...acc.count, [num]: count + 1 }
//               }
//               : acc;
//       }, { result: [], count: {} })
//       .result;
// };

// const givenNums = [[2, 3, 3], [19], [2, 2, 5], [3, 3, 3, 3, 7], [2, 11], [23]];
// const result = filterGivenNums(givenNums);

// console.log(result); // [19, 2, 2, 5, 3, 3, 3, 3, 7, 11, 23]
