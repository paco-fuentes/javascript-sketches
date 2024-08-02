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
  const initChangeAmount = Number(changeAmount.toFixed(2));
  const totalCid = Number(cid.reduce((acc, e) => acc + e[1], 0).toFixed(2));
  // el cambio es mayor al disponible
  if (initChangeAmount > totalCid) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // caso el cambio es igual al total
  if (initChangeAmount === totalCid) {
    return { status: "CLOSED", change: cid };
  }

  // determinar el primer tipo de moneda a devolver:
  // 1 - cantidad maxima disponible para el cambio ---> [0.1...20]
  const avaibleCurrencyUnits = (ch, c) =>
    Object.values(CURRENCY_UNITS).filter((e, i) => {
      return e <= ch && e <= c[i][1] && c[i][1] - e >= 0;
      // return e <= ch && e <= c[i][1] && c[i][1] - e >= 0;
    });

  // 2 - ultimo valor de la cantidad disponible ---> 20
  const currentCurrencyValue = (ch, c) =>
    avaibleCurrencyUnits(ch, c)[avaibleCurrencyUnits(ch, c).length - 1];

  // 3 - ultimo valor de la cantidad disponible con su currency ---> ['TWENTY', 20]
  const currentCurrencyUnit = (ch, c) =>
    Object.entries(CURRENCY_UNITS)[
      Object.values(CURRENCY_UNITS).indexOf(
        Object.values(CURRENCY_UNITS).find(
          (e) => e === currentCurrencyValue(ch, c)
        )
      )
    ] || "";

  // caso el cambio es menor al total
  // resto la 'current change' al 'amount'
  // !!! ---> restar al elemento cid actual el valor de 'current currency' ---> cid[idx][1] - currentCurrency[1]
  if (initChangeAmount < totalCid) {
    const processChange = cid
      .reduce(
        (acc) => {
          const { currentChange, currentCid } = acc[acc.length - 1];
          const currentCurrency = currentCurrencyUnit(
            currentChange,
            currentCid
          );
          return currentChange >= 0 && currentCurrency[1] !== undefined
            ? [
                ...acc,
                {
                  currentChange: Number(
                    (currentChange - currentCurrency[1]).toFixed(2)
                  ),
                  change: currentCurrency,
                  currentCid: currentCid.map((e) => {
                    return e[0] === currentCurrency[0] && e[1] > 0
                      ? [e[0], Number((e[1] - currentCurrency[1]).toFixed(2))]
                      : e;
                  }),
                },
              ]
            : acc;
        },
        [{ currentChange: initChangeAmount, change: [], currentCid: cid }]
      )
      .slice(1)
      .map((e) => e.change)
      .reduce((acc, [key, value]) => {
        acc[key] ? (acc[key] += value) : (acc[key] = value);
        return acc;
      }, {});
    return { status: "OPEN", change: Object.entries(processChange) };
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
  ]) // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
);

// console.table(
//   checkCashRegister(13.6, 20, [
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
