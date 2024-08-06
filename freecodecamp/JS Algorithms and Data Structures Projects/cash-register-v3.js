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
  const initChangeAmount = Number((cash - price).toFixed(2));
  const totalCid = Number(cid.reduce((acc, e) => acc + e[1], 0).toFixed(2));
  const currencyValues = Object.values(CURRENCY_UNITS);

  if (initChangeAmount > totalCid) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (initChangeAmount === totalCid) {
    return { status: "CLOSED", change: cid };
  }

  const processChange = (change, cid, initCurrency = []) => {
    const currentCurrency = cid
      .filter((_, i) => change >= currencyValues[i])
      .reverse()[0];
    const currentCid = cid.map((e, i) =>
      e[0] === currentCurrency[0] ? [e[0], e[1] - currencyValues[i]] : e
    );
    const currentCurrencyChange = Object.entries(CURRENCY_UNITS).find(
      (e) => e[0] === currentCurrency[0]
    );

    const currentChangeAmount = Number(
      (change - currentCurrencyChange[1]).toFixed(2)
    );

    const changeAcc =
      initCurrency[0] === currentCurrencyChange[0]
        ? [
            [
              initCurrency[0],
              Number((initCurrency[1] + currentCurrencyChange[1]).toFixed(2)),
            ],
          ]
        : [currentCurrencyChange];

    console.log(
      changeAcc,
      currentChangeAmount,
      currentCurrencyChange,
      currentCurrency,
      currentCid
    );

    return currentChangeAmount === 0
      ? { status: "OPEN", change: changeAcc }
      : processChange(currentChangeAmount, currentCid, [...changeAcc]);
  };

  if (initChangeAmount > 0) {
    return processChange(initChangeAmount, cid);
  }
}

console.table(
  checkCashRegister(3.26, 100, [
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
); // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// console.table(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 1],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// ); // should return {status: "INSUFFICIENT_FUNDS", change: []}.

// console.table(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// ); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
// console.table(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// ); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
