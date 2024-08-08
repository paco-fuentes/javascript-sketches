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

  const avaibleCidCurrencyAmount = (ch) =>
    Object.values(CURRENCY_UNITS).filter((e, i) => {
      // console.log(ch, e, cid[i][1]);
      return e <= ch && e <= cid[i][1];
    });

  const initAmount = avaibleCidCurrencyAmount(changeAmount);
  console.log(initAmount, totalCid, changeAmount);
  if (initAmount * changeAmount - changeAmount < 0 && totalCid > changeAmount) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (changeAmount < totalCid) {
    return { status: "OPEN", change: ["...finalChange"] };
  }
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 200],
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

console.log(
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
