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
  // caso el cambio es mayor al disponible
  if (initChangeAmount > totalCid) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  // caso el cambio es igual al total
  if (initChangeAmount === totalCid) {
    return { status: "CLOSED", change: cid };
  }

  // determinar el primer tipo de moneda a devolver:
  // 1 - cantidad máxima disponible para el cambio ---> [0.1...20]
  // próximo tipo de currency que podría coger --->
  const avaibleCurrencyUnits = (ch, c) =>
    Object.entries(CURRENCY_UNITS)
      .toReversed()
      .filter(([unit, value]) => {
        const cidAmount = c.find(([currUnit]) => currUnit === unit)[1] || 0;
        return value <= ch && value <= cidAmount;
      });

  // 2 - último valor de la cantidad disponible con su currency ---> ['TWENTY', 20]
  // próximo valor disponible en el cid --->
  const currentCurrencyUnit = (ch, c) =>
    avaibleCurrencyUnits(ch, c)[0] || ["", 0];

  // 3 - caso el cambio es menor al total
  // resto la 'current change' al 'amount'
  // restar a cada elemento del cid correspondiente el valor de 'current currency'
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

          // cantidad de la moneda actual
          const cidAmount =
            currentCid.find(([val]) => val === currencyName)[1] || 0;

          const currentCurrencyVal = Math.min(
            currencyValue * Math.floor(currentChange / currencyValue),
            cidAmount
          );

          return currentChange >= 0
            ? [
                ...acc,
                {
                  currentChange: Number(
                    (currentChange - currentCurrencyVal).toFixed(2)
                  ),
                  change: [currencyName, currentCurrencyVal],
                  currentCid: currentCid.map(([unit, amount]) => {
                    return unit === currencyName
                      ? [unit, Number((amount - currentCurrencyVal).toFixed(2))]
                      : [unit, amount];
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

    return initChangeAmount ===
      Number(
        Object.values(processChange)
          .reduce((a, b) => a + b, 0)
          .toFixed(2)
      )
      ? // caso tengo cambio disponible
        { status: "OPEN", change: Object.entries(processChange) }
      : // caso tengo cantidad pero no tengo moneda de cambio
        { status: "INSUFFICIENT_FUNDS", change: [] };
  }
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
  ])
);

console.table(
  checkCashRegister(183.28, 1183.47, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 6000],
    ["ONE HUNDRED", 850],
  ])
);
