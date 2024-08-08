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
const processChange = (change, cid, currencyValues, prevCurrencies = []) => {
  const currentCurrencyAvaible = cid
    .filter(
      (currencyAmount, idx) =>
        change >= currencyValues[idx] && currencyAmount[1] > 0
    )
    .toReversed()[0];

  if (!currentCurrencyAvaible) {
    return { change: [] };
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
        change: totalChange,
      }
    : processChange(
        currentChangeAmount,
        currentCid,
        currencyValues,
        totalChange
      );
};

function checkCashRegister(price, cash, cid) {
  const initChangeAmount = Number((cash - price).toFixed(2));
  const totalCid = Number(
    cid
      .reduce((total, avaibleCurrencies) => total + avaibleCurrencies[1], 0)
      .toFixed(2)
  );
  const currencyValues = Object.values(CURRENCY_UNITS);

  if (initChangeAmount > totalCid) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (initChangeAmount === totalCid) {
    return { status: "CLOSED", change: cid };
  }

  const amountToReturn = processChange(initChangeAmount, cid, currencyValues);

  return amountToReturn.change.length === 0
    ? { status: "INSUFFICIENT_FUNDS", change: amountToReturn.change }
    : { status: "OPEN", change: amountToReturn.change };
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
);
