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

const allCurrenciesLowerThan = (change) =>
  Object.entries(CURRENCY_UNITS).filter(([currency, value]) => value <= change);

const higherCurrencyLowerThan = (change) => (excludedCurrency) => {
  const higherCurrency = allCurrenciesLowerThan(change)
    .filter(([currencyName, _]) => currencyName !== excludedCurrency)
    .slice(-1)[0];

  const higherCurrencyAmount =
    Math.floor(change / higherCurrency[1]) * higherCurrency[1];

  return [higherCurrency[0], higherCurrencyAmount];
};

function checkCashRegister(price, cash, cid) {
  const changeAmount = Number((cash - price).toFixed(2));
  const totalCid = Number(
    (cid.reduce((acc, e) => acc + e[1] * 100, 0) * 0.01).toFixed(2)
  );

  if (changeAmount > totalCid) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (changeAmount === totalCid) {
    return { status: "CLOSED", change: cid };
  }

  const processChange = cid
    .reduce(
      (acc, _, __, array) => {
        const { currentChange, change } = acc[acc.length - 1];
        if (currentChange <= 0) return acc;

        const currentCurrency = higherCurrencyLowerThan(currentChange)(
          change[0]
        );

        const currentCurrencyVal = Math.min(
          array.find((val) => val[0] === currentCurrency[0])[1],
          currentCurrency[1]
        );

        return [
          ...acc,
          {
            currentChange: Number(
              (currentChange - currentCurrencyVal).toFixed(2)
            ),
            change: [currentCurrency[0], currentCurrencyVal],
          },
        ];
      },
      [{ currentChange: changeAmount, change: [] }]
    )
    .slice(1)
    .map((currencies) => currencies.change);

  return changeAmount ===
    Number(processChange.reduce((acc, value) => acc + value[1], 0).toFixed(2))
    ? {
        status: "OPEN",
        change: processChange,
      }
    : { status: "INSUFFICIENT_FUNDS", change: [] };
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

//
//   const bb = chCid.reduce((acc, e, i, a) => {
//     const {currentChange, change} = acc
//     const currentCurrency = findCurrencyValue(currentChange);
//     // console.log(currentChange, currentCurrency, currentChange - currentCurrency[1]);
//     return currentChange >= 0 && currentCurrency[1] !== undefined
//       ? {
//             currentChange: currentChange - currentCurrency[1],
//             change: [...change, currentCurrency]
//         }
//       : acc;
//   }, {currentChange: chAmt, change: []})

// console.log(aa);
// return aa;
