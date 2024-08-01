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
        Object.values(CURRENCY_UNITS).find((e) => e === currentCurrencyUnit(ch))
      )
    ] || "";

  //   console.log(changeAmount, totalCid);
  if (changeAmount < totalCid) {
    const change = (chCid, chAmt) => {
      const aa = chCid.reduce((acc, e, i, a) => {
        const {currentChange} = acc[acc.length - 1]
        const currentCurrency = findCurrencyValue(currentChange);
        // console.log(currentChange, currentCurrency, currentChange - currentCurrency[1]);
        return currentChange >= 0 && currentCurrency[1] !== undefined
          ? [
                ...acc, 
                {
                    currentChange: currentChange - currentCurrency[1],
                    change: currentCurrency
                }
            ]
          : acc;
      }, [{currentChange: chAmt, change: []}])
      .slice(1)
      ;

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
      

      console.log(aa)
      return aa;
    }

    return change(cid, changeAmount);
  }
}

console.table(
  checkCashRegister(16.5, 20, [
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
