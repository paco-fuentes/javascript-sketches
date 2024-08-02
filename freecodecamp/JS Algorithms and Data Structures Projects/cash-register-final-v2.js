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
    Object.entries(CURRENCY_UNITS) // Convertir a pares [unidad, valor]
      .reverse() // Ordenar de mayor a menor valor
      .filter(([unit, value]) => {
        const cidAmount = c.find(([currUnit]) => currUnit === unit)?.[1] || 0;
        return value <= ch && value <= cidAmount;
      });
  // moneda actual --> ['TEN', 10]
  const currentCurrencyUnit = (ch, c) =>
    avaibleCurrencyUnits(ch, c)[0] || ["", 0];

  // caso el cambio es menor al total
  // resto la 'current change' al 'amount'
  // !!! ---> restar al elemento cid actual el valor de 'current currency' ---> cid[idx][1] - currentCurrency[1]
  if (initChangeAmount < totalCid) {
    const processChange = cid
      .reduce(
        (acc) => {
          const { currentChange, currentCid } = acc[acc.length - 1];
          const [currencyName, currencyValue] = currentCurrencyUnit(
            currentChange,
            currentCid
          );

          if (currencyValue === 0) return acc;

          const cidAmount =
            currentCid.find(([unit]) => unit === currencyName)?.[1] || 0;
          const useAmount = Math.min(
            currencyValue * Math.floor(currentChange / currencyValue),
            cidAmount
          );

          return currentChange >= 0
            ? [
                ...acc,
                {
                  currentChange: Number((currentChange - useAmount).toFixed(2)),
                  change: [currencyName, useAmount],
                  currentCid: currentCid.map(([unit, amount]) =>
                    unit === currencyName
                      ? [unit, Number((amount - useAmount).toFixed(2))]
                      : [unit, amount]
                  ),
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
    console.log(
      initChangeAmount,
      Number(
        Object.values(processChange)
          .reduce((a, b) => a + b, 0)
          .toFixed(2)
      )
    );

    return initChangeAmount ===
      Number(
        Object.values(processChange)
          .reduce((a, b) => a + b, 0)
          .toFixed(2)
      )
      ? { status: "OPEN", change: Object.entries(processChange) }
      : { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  //   if (initChangeAmount < avaibleCurrencyUnits) {
  //     return { status: "INSUFFICIENT_FUNDS", change: [] };
  //   }
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
  ]) // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
);

console.table(
  checkCashRegister(13.6, 20, [
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
