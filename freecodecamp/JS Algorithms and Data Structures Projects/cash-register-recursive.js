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

  const avaibleCurrencyUnits = (ch) =>
    Object.values(CURRENCY_UNITS).filter((e, i) => {
      return e <= ch && e <= cid[i][1];
    });

  const currentCurrencyUnit = (ch) =>
    avaibleCurrencyUnits(ch)[avaibleCurrencyUnits(ch).length - 1];

  const findCurrencyValue = (ch) =>
    Object.entries(CURRENCY_UNITS)[
      Object.values(CURRENCY_UNITS).indexOf(
        Object.values(CURRENCY_UNITS).find(
          (e) => e === currentCurrencyUnit(changeAmount)
        )
      )
    ] || "";

  // console.log(findCurrencyValue(changeAmount));

  const processChange = cash <= price || {
    status: "OPEN",
    change: [
      findCurrencyValue(changeAmount) +
        " " +
        Object.values(
          checkCashRegister(
            price + findCurrencyValue(changeAmount)[1],
            cash,
            cid
          )
        )[1],
    ],
  };

  // return processChange;
  return cash <= price && findCurrencyValue(changeAmount) !== undefined
    ? processChange
    : processChange;
}

const res = checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]).change[0].split(" ")
  .map((e) => e.split(","))
  .map((e) => [e[0], Number(e[1])])
  .filter((e) => e[0] !== "undefined")
  .reduce((acc, [key, value]) => {
    acc[key] ? (acc[key] += value) : (acc[key] = value);
    const { change } = acc;
    return acc;
  }, {});

// return Object.entries(result);

console.table(res);

// const altIdx = idx < arr.length - 1 ? idx + 1 : 0;
// const current = e;
// const next = arr[altIdx];
// acc = [e];
// console.log(current, next);

// const current = e[0];
// const next = arr[idx][0]
// return e[1] === next && !acc.includes(current) ? [...acc, [current, e[1] + arr[idx][1]]] : [[current, e[1] + arr[idx][1]]]

// sumar valores
// return findCurrencyValue(changeAmount)[1] + checkCashRegister(price + findCurrencyValue(changeAmount)[1], cash, cid)

// filtar ultimo undefined
// (cash <= price && findCurrencyValue(changeAmount) !== undefined)
