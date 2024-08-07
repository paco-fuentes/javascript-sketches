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

  const processChange = (change, cid, prevCurrencies = []) => {
    const currentCurrencyAvaible = cid
      .filter((e, i) => change >= currencyValues[i] && e[1] > 0)
      .toReversed()[0];

    if (!currentCurrencyAvaible) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    const currentCid = cid.map(([currencyName, currencyVal], idx) =>
      currencyName === currentCurrencyAvaible[0]
        ? [currencyName, currencyVal - currencyValues[idx]]
        : [currencyName, currencyVal]
    );

    const currentCurrencyToChange = Object.entries(CURRENCY_UNITS).find(
      (currency) => currency[0] === currentCurrencyAvaible[0]
    );

    const currentChangeAmount = Number(
      (change - currentCurrencyToChange[1]).toFixed(2)
    );

    const totalChange =
      prevCurrencies[prevCurrencies.length - 1] &&
      prevCurrencies[prevCurrencies.length - 1][0] === currentCurrencyToChange[0]
        ? [
            ...prevCurrencies.slice(0, -1),
            [
              prevCurrencies[prevCurrencies.length - 1][0],
              Number(
                (
                  prevCurrencies[prevCurrencies.length - 1][1] +
                  currentCurrencyToChange[1]
                ).toFixed(2)
              ),
            ],
          ]
        : [...prevCurrencies, currentCurrencyToChange];

    return currentChangeAmount === 0
      ? {
          status: "OPEN",
          change: totalChange,
        }
      : processChange(currentChangeAmount, currentCid, totalChange);
  };
  
   return processChange(initChangeAmount, cid);
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
); // should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

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
); // should return {status: "INSUFFICIENT_FUNDS", change: []}.

console.table(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
); // should return {status: "INSUFFICIENT_FUNDS", change: []}.

console.table(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
