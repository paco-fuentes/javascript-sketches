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

  const currencyArr = Object.entries(CURRENCY_UNITS);
  //   const currencyValuesArr = Object.values(CURRENCY_UNITS);

  const avaibleCurrencyUnits = (ch) =>
    Object.values(CURRENCY_UNITS).filter((e, i) => {
      return e <= ch && e <= cid[i][1];
    });

  const currentCurrencyUnit = (ch) =>
    avaibleCurrencyUnits(ch)[avaibleCurrencyUnits(ch).length - 1];

//   const processCurrentChange = (chan, currency) => (chan -= currency);

  const takeCurrentUnit = (ch) =>
    cid.map((e, idx, arr) => {
      //   console.log(e, currencyArr[idx][1], currentCurrencyUnit(ch));
      return currencyArr[idx][1] === currentCurrencyUnit(ch)
        ? [e[0], e[1] - currentCurrencyUnit(ch)]
        : [e[0], e[1]];
    });

  return takeCurrentUnit(changeAmount);
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
