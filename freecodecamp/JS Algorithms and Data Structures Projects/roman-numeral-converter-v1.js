function convertToRoman(num) {
  const ROM_TO_ARABIC_NUMS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  // keys and values
  const ROM_KEYS = Object.keys(ROM_TO_ARABIC_NUMS);
  const ARABIC_VALS = Object.values(ROM_TO_ARABIC_NUMS);

  // n to expanded form
  const numToStr = num.toString();
  const zero = "0";
  const strExpForm = numToStr.split("").map((n, i, a) => {
    return n + zero.repeat(a.length - i - 1);
  });

  const numExpForm = strExpForm.map((str) => {
    return Number(str);
  });
  const numFiltZeros = numExpForm.filter((e) => e !== 0);
  const convertVals = (arr) =>
    arr
      .map((n) => ARABIC_VALS.indexOf(n))
      .map((e) => ROM_KEYS[e])
      .join("");

  // numeros que estan en la tabla y retorno si estan todos
  if (
    numFiltZeros.filter((e) => ARABIC_VALS.includes(e)).length ===
    numFiltZeros.length
  ) {
    return convertVals(numFiltZeros);
  }

  // no estan en la tabla
  const notKeyNums = numFiltZeros.filter((e) => !ARABIC_VALS.includes(e));

  const findNearestKey = (arr) =>
    arr.map((e, i, a) => {
      //   console.log(e);
      //   const nearest = ARABIC_VALS.find((ele) => ele < e);
      //   console.log(nearest);
      //   nearest - e
      return ROM_KEYS[
        ARABIC_VALS.indexOf(Math.floor(e / (e.toString().length + 1)))
      ].repeat(Number(e.toString()[0]));
    });

  return convertVals(numFiltZeros) + findNearestKey(notKeyNums).join("");
  // findNearestKey(notKeyNums).join("") + convertVals(numFiltZeros)
}

const test1 = convertToRoman(9);
// const test2 = convertToRoman(36);
console.log(`test results: 
   test 1: ${test1}`);

// calculo de unidades
// const unidades = '1234'['1234'.length - 1]
// console.log(n)

// encontrar iguales si no...
// si es menor a 4 es igual num repat 'I'
// si es mayor que 4 y no es igual a ningun numero de la lista buscar desde el 4

// if every values(numExpForm) estan en values(ARABIC_VALS) hacer esto directamente -->
//   console.log(numExpForm.filter((e) => ARABIC_VALS.includes(e)));
