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

  const processChange = (change, cid, prevCurrencies = []) => {
    const currentCurrencyAvaible = cid
      .filter(
        (currencyAmount, idx) =>
          change >= currencyValues[idx] && currencyAmount[1] > 0
      )
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
      prevCurrencies[prevCurrencies.length - 1][0] ===
        currentCurrencyToChange[0]
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
