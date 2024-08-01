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
  const changeAmount = cash - price;
  const totalCid = cid.reduce((acc, e) => acc + e[1] * 100, 0) * 0.01;

  if (changeAmount > totalCid) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (changeAmount === totalCid) {
    return { status: "CLOSED", change: cid };
  }

  // crear funcion --->
  const avaibleCidCurrencyAmount = Object.values(CURRENCY_UNITS).filter(
    (e, i) => {
      console.log(cid[i][1]);
      return e < changeAmount && e <= cid[i][1];
      // return e < changeAmount && e <= cid[i][1] && (cid[i][1] - e >= 0);
    }
  );

  // reduce --->
  const currentCurrency = [
    Object.keys(CURRENCY_UNITS)[avaibleCidCurrencyAmount.length - 1],
    avaibleCidCurrencyAmount[avaibleCidCurrencyAmount.length - 1],
  ];
  console.log(changeAmount);
  console.log(currentCurrency);

  if (
    changeAmount >= currentCurrency[1] &&
    changeAmount - currentCurrency[1] < 0
  ) {
    return { status: "OPEN", change: [...currentCurrency] };
  } else {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}

console.table(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

// console.table(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// );

// cid * 100 para evitar decimales
//   console.log(cid[0][1] * 100 * 0.01);

// // start --->
// function checkCashRegister(price, cash, cid) {
//   let change;
//   return change;
// }

// console.log(CURRENCY_UNITS.PENNY)
// si el total cid es mayor que el change, devolver de la currency unit mas proxima si es divisible, si no devolver de la siguiente y si no es posible devolver insuffient funds

// const res = cid.map((e, idx, arr) => {
//   const currentChange = changeProcessing(change, e[1]);
//   console.log('current change ---> ' + currentChange);
//   console.log(Object.values(CURRENCY_UNITS)[idx]);
//   return currentChange || change > Object.values(CURRENCY_UNITS)[idx]
//     ? [e[0], e[1] - currentChange]
//       ? changeProcessing(change - currentChange, e[1])
//       : currentChange
//     : [e[0], e[1]];
// });

// // v1
// const CURRENCY_UNITS = {
//   PENNY: 0.01,
//   NICKEL: 0.05,
//   DIME: 0.1,
//   QUARTER: 0.25,
//   ONE: 1,
//   FIVE: 5,
//   TEN: 10,
//   TWENTY: 20,
//   "ONE HUNDRED": 100,
// };

// function checkCashRegister(price, cash, cid) {
//   const changeAmount = cash - price;
//   const totalCid = cid.reduce((acc, e) => acc + e[1] * 100, 0) * 0.01;

//   if (changeAmount > totalCid) {
//     return { status: "INSUFFICIENT_FUNDS", change: [] };
//   }

//   if (changeAmount === totalCid) {
//     return { status: "CLOSED", change: cid };
//   }

//   // crear funcion --->
//   const avaibleCidCurrencyAmount = Object.values(CURRENCY_UNITS).filter(
//     (e, i) => {
//       return e < changeAmount && e <= cid[i][1];
//       // return e < changeAmount && e <= cid[i][1] && (cid[i][1] - e >= 0);
//     }
//   );

//   // reduce --->
//   const currentCurrency = [
//     Object.keys(CURRENCY_UNITS)[avaibleCidCurrencyAmount.length - 1],
//     avaibleCidCurrencyAmount[avaibleCidCurrencyAmount.length - 1],
//   ];

//   console.log(currentCurrency);

//   if (changeAmount >= currentCurrency[1]) {
//     return { status: "OPEN", change: [...currentCurrency] };
//   } else {
//     return { status: "INSUFFICIENT_FUNDS", change: [] };
//   }
// }

// // v2
// const CURRENCY_UNITS = {
//   PENNY: 0.01,
//   NICKEL: 0.05,
//   DIME: 0.1,
//   QUARTER: 0.25,
//   ONE: 1,
//   FIVE: 5,
//   TEN: 10,
//   TWENTY: 20,
//   "ONE HUNDRED": 100,
// };

// function checkCashRegister(price, cash, cid) {
//   const changeAmount = cash - price;
//   const totalCid = cid.reduce((acc, e) => acc + e[1] * 100, 0) * 0.01;

//   if (changeAmount > totalCid) {
//     return { status: "INSUFFICIENT_FUNDS", change: [] };
//   }

//   if (changeAmount === totalCid) {
//     return { status: "CLOSED", change: cid };
//   }

//   function avaibleCidCurrencyAmount(chAmount) {
//     return Object.values(CURRENCY_UNITS).filter((e, i) => {
//       return e <= chAmount && e <= cid[i][1];
//     });
//   }

//   const currentCurrency = (amount) => [
//     Object.keys(CURRENCY_UNITS)[amount.length - 1],
//     amount[amount.length - 1],
//   ];

//   const initAmount = avaibleCidCurrencyAmount(changeAmount);
//   const processChange = (init) => {
//     if (
//       changeAmount >= currentCurrency(init)[1] ||
//       currentCurrency(initAmount)[1] <= 0
//     ) {
//       return {
//         status: "OPEN",
//         change: [
//           [currentCurrency(init)[0], currentCurrency(init)[1]],
//           // ...avaibleCidCurrencyAmount(init - currentCurrency(init)[1]),
//         ],
//       };
//     } else {
//       return { status: "INSUFFICIENT_FUNDS", change: [] };
//     }
//   };
//   return processChange(initAmount);
// }
