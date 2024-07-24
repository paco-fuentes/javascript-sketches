const CURRENCY_UNITS = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

function checkCashRegister(price, cash, cid) {
  const change = cash - price;
  const totalCid = cid.reduce((acc, e) => acc + e[1] * 100, 0) * 0.01;

  if (change > totalCid) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (change === totalCid) {
    return { status: "CLOSED", change: cid };
  }

  const res = cid.map((e, idx, arr) => {
    // console.log(`current cid ---> ${e[0]} ${e[1]}`)
    // console.log(`currency values ---> ${e[0]} ${CURRENCY_UNITS[e[0]]}`)
    return change > e[1] && e % CURRENCY_UNITS[e[0]] > 0
      ? e[1] - CURRENCY_UNITS[e[0]]
      : e;
  });

  // console.log(CURRENCY_UNITS.PENNY)
  // si el total cid es mayor que el change, devolver de la currency unit mas proxima si es divisible, si no devolver de la siguiente y si no es posible devolver insuffient funds

  return res;
}

console.table(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

// cid * 100 para evitar decimales
//   console.log(cid[0][1] * 100 * 0.01);

// // start --->
// function checkCashRegister(price, cash, cid) {
//   let change;
//   return change;
// }
