function convertToRoman(num) {
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
  
    const ROM_KEYS = Object.keys(ROM_TO_ARABIC_NUMS);
    const ARABIC_VALS = Object.values(ROM_TO_ARABIC_NUMS);
  
    const findKey = (table, vals, n) => table[vals.indexOf(n)];
  
    // const numExpForm = (n) =>
    //   n.toString().split("").map((n, i, a) => {
    //     return Number(n + "0".repeat(a.length - i - 1));
    //   });
  
    // const findNearestKey = (vals, arrExpNums) =>
    //   arrExpNums.map((n) => vals.find((nearestKey) => nearestKey <= n));
  
    // const nearest = findNearestKey(ARABIC_VALS, numExpForm(num));
  
    // return nearest
    //     .filter((n) => n !== 0)
    //     .map((e) => findKey(ROM_KEYS, ARABIC_VALS, e))
    //     .join('')
    return num
      .toString()
      .split('')
      .toReversed()
      .map((val,idx) => ({val, unit: idx}))
      .map(({val, unit}) => val * Math.pow(10, unit))
      .map(val => findKey(ROM_KEYS, ARABIC_VALS, val))
      .toReversed()
      .join('')
  }
  
  const test1 = convertToRoman(113);
  // const test2 = convertToRoman(36);
  console.log(`test results: 
     test 1: ${JSON.stringify(test1)}`);