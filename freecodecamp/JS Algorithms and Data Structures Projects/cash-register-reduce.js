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

  console.log(findCurrencyValue(changeAmount));
}

const res = checkCashRegister(16.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
// .change[0].split(" ")
// .map((e) => e.split(","))
// .map((e) => [e[0], Number(e[1])])
// .filter((e) => e[0] !== "undefined")
// .reduce((acc, e, idx, arr) => {
//   const count = idx < arr.length - 1 ? idx + 1 : 0;
//   const current = e[0];
//   const next = arr[count][0];
//   console.log(idx, count);
//   // acc = arr[count][0];
//   return current === next
//     ? [...acc, [current, e[1] + arr[count][1]]]
//     : ["caca"];
// }, []);

console.table(res);
