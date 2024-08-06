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
  
    const processChange = (change, cid, changeAcc = []) => {
      if (change === 0) {
        return { status: "OPEN", change: changeAcc };
      }
  
      const currentCurrency = cid
        .filter(([unit, amount], i) => change >= currencyValues[i] && amount > 0)
        .reverse()[0];
  
      if (!currentCurrency) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
  
      const [unit, amount] = currentCurrency;
      const unitValue = CURRENCY_UNITS[unit];
      const numUnits = Math.floor(change / unitValue);
      const maxUnitAmount = Number((numUnits * unitValue).toFixed(2)) > amount ? amount : Number((numUnits * unitValue).toFixed(2));
      const newChange = Number((change - maxUnitAmount).toFixed(2));
      const newCid = cid.map(([unitName, unitAmount]) =>
        unitName === unit ? [unitName, unitAmount - maxUnitAmount] : [unitName, unitAmount]
      );
  
      const newChangeAcc = changeAcc.some(([unitName]) => unitName === unit)
        ? changeAcc.map(([unitName, unitAmount]) =>
            unitName === unit ? [unitName, Number((unitAmount + maxUnitAmount).toFixed(2))] : [unitName, unitAmount]
          )
        : [...changeAcc, [unit, Number(maxUnitAmount.toFixed(2))]];
  
      return processChange(newChange, newCid, newChangeAcc);
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
  );
  