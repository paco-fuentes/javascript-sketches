// const cid = [
//   ["ONE", 1],
//   ["ONE", 1],
//   ["ONE", 1],
//   ["QUARTER", 0.25],
//   ["QUARTER", 0.25],
// ];

// const sumCid = cid.reduce((acc, e) => {
//   return acc[e[0]] ? ++acc[e[0]] : (acc[e[0]] = 1), acc;
// }, {});
// const sumCidArr = Object.entries(sumCid);
// console.table(sumCidArr);


const cid = [
  ["ONE", 1],
  ["ONE", 1],
  ["ONE", 1],
  ["ONE", 1],
  ["ONE", 1],
  ["ONE", 1],
  ["ONE", 1],
  ["ONE", 1],
  ["ONE", 1],
  ["ONE", 1],
  ["ONE", 1],
  ["ONE", 1],
  ["QUARTER", 0.25],
  ["QUARTER", 0.25],
  ["QUARTER", 0.25],
  ["QUARTER", 0.25],
  ["QUARTER", 0.25],
  ["DIME", 0.10],
  ["DIME", 0.10],
  ["DIME", 0.10],
];

const sumValuesByKey = (array) => {
  const result = array.reduce((acc, [key, value]) => {
    if (acc[key]) {
      acc[key] += value;
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});

  return Object.entries(result);
};

// Llamamos a la función y mostramos el resultado
console.table(sumValuesByKey(cid)); // [["ONE", 3], ["QUARTER", 0.5]]