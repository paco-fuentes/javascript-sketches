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

  if (initChangeAmount > totalCid) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (initChangeAmount === totalCid) {
    return { status: "CLOSED", change: cid };
  }

  const avaibleCurrencyUnits = (ch, c) =>
    Object.entries(CURRENCY_UNITS)
      .reverse()
      .filter(([unit, value]) => {
        const cidAmount = c.find(([currUnit]) => currUnit === unit)[1] || 0;
        return value <= ch && value <= cidAmount;
      });

  const currentCurrencyUnit = (ch, c) =>
    avaibleCurrencyUnits(ch, c)[0] || ["", 0];

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
          currentCid.find(([val]) => val === currencyName)[1] || 0;

        const currentCurrencyVal = Math.min(
          currencyValue * Math.floor(currentChange / currencyValue),
          cidAmount
        );

        const aa = currentCid.map(([unit, amount]) => {
          return unit === currencyName
            ? [unit, Number((amount - currentCurrencyVal).toFixed(2))]
            : [unit, amount];
        })

        const bb = Number(
          (currentChange - currentCurrencyVal).toFixed(2)
        )

        return [
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
          }
        ];
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
    ? { status: "OPEN", change: Object.entries(processChange) }
    : { status: "INSUFFICIENT_FUNDS", change: [] };
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
    ["TWENTY", 100],
    ["ONE HUNDRED", 850],
  ])
);