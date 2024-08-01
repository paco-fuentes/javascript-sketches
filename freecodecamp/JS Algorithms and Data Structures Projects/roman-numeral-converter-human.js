function convertToRoman(num) {
  // data --->
  // const ROM_TO_ARABIC_NUMS = {
  //   M: 1000,
  //   CM: 900,
  //   D: 500,
  //   CD: 400,
  //   C: 100,
  //   XC: 90,
  //   L: 50,
  //   XL: 40,
  //   X: 10,
  //   IX: 9,
  //   V: 5,
  //   IV: 4,
  //   I: 1,
  // };

  const ROM_TO_ARABIC_NUMS = {
    MMM: 3000,
    MM: 2000,
    M: 1000,
    CM: 900,
    DCCC: 800,
    DCC: 700,
    DC: 600,
    D: 500,
    CD: 400,
    CCC: 300,
    CC: 200,
    C: 100,
    XC: 90,
    LXXX: 80,
    LXX: 70,
    LX: 60,
    L: 50,
    XL: 40,
    XXX: 30,
    XX: 20,
    X: 10,
    IX: 9,
    VIII: 8,
    VII: 7,
    VI: 6,
    V: 5,
    IV: 4,
    III: 3,
    II: 2,
    I: 1,
  };

  // keys and values
  const ROM_KEYS = Object.keys(ROM_TO_ARABIC_NUMS);
  const ARABIC_VALS = Object.values(ROM_TO_ARABIC_NUMS);

  // definicion de las funciones --->
  // 1 - buscar el numero romano en la tabla
  const findKey = (table, vals, n) => table[vals.indexOf(n)];

  // 2 - descomponer el numero en unidades, decenas y centenas
  //   const numToStr = num.toString();
  const ZERO = "0";
  const numExpForm = (n) =>
    n
      .toString()
      .split("")
      .map((n, i, a) => {
        return Number(n + ZERO.repeat(a.length - i - 1));
      });

  // 3 - buscar el resultado más cercano
  const findNearestKey = (vals, arrExpNums) =>
    arrExpNums.map((n) => vals.find((nearestKey) => nearestKey <= n));

  // ejecución --->
  // 1 - si el numero está en la tabla, devolver la key
  const romanKey = findKey(ROM_KEYS, ARABIC_VALS, num);
  if (romanKey) {
    return romanKey;
  }
  // 2 - si el numero no está en la tabla
  // // descompner el numero
  const desc = numExpForm(num);
  console.log(desc);
  // mas cercano
  const nearest = findNearestKey(ARABIC_VALS, numExpForm(num));
  console.log(nearest);
  const rest = desc.map((e, i) => e - nearest[i]);
  console.log(rest);
  if (!romanKey) {
    // // buscar el más cercano en la tabla
    return nearest
      .filter((n) => n !== 0)
      .map((e) => findKey(ROM_KEYS, ARABIC_VALS, e));
  }

  // // // si el valor no es cero
  // // // // restar el valor y añadir key
  // // // // si el valor es cero ...
  // 3 - devolver las key acumuladas
}

const test1 = convertToRoman(113);
// const test2 = convertToRoman(36);
console.log(`test results: 
   test 1: ${test1}`);
