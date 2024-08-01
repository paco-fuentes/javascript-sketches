const cid = [
  ["ONE", 1],
  ["ONE", 1],
  ["ONE", 1],
  ["QUARTER", 0.25],
  ["QUARTER", 0.25],
];

const sumCid = cid.reduce((acc, e) => {
  return acc[e[0]] ? ++acc[e[0]] : (acc[e[0]] = 1), acc;
}, {});
const sumCidArr = Object.entries(sumCid);
console.table(sumCidArr);
