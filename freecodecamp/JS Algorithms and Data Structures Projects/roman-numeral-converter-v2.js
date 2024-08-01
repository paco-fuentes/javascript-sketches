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

  // 


  // keys and values
  const ROM_KEYS = Object.keys(ROM_TO_ARABIC_NUMS);
  const ARABIC_VALS = Object.values(ROM_TO_ARABIC_NUMS);

  const findNearestKey = (vals, n) => vals.find((ele) => ele <= n);
  const findKey = (vals, n) => (vals.includes(n) ? n : findNearestKey(vals, n));

  const currentVal = findKey(ARABIC_VALS, num);
  
  const arrVals = [currentVal, num];
  const maxVal = Math.max(...arrVals);
  const minVal = Math.min(...arrVals);
  const compareVals = currentVal === num ? num : maxVal - minVal;

  const selectKey =
    ROM_KEYS[ARABIC_VALS.indexOf(num)] ??
    ROM_KEYS[ARABIC_VALS.indexOf(compareVals)];

  return findNearestKey();
}

const test1 = convertToRoman(20);
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
