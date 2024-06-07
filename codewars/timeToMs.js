// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
const past = (h, m, s) => {
  h > 24 ? (h = h % 24) : (h = h);
  m > 59 ? (m = m % 59) : (m = m);
  s > 59 ? (s = s % 59) : (s = s);
  return h * 3600000 + m * 60000 + s * 1000;
};

// test
const test1 = past(0, 1, 1); // 61000
const test2 = past(1, 1, 1); // 3661000
const test3 = past(25, 60, 60); // 3661000
const test4 = past(1, 0, 1); // 3601000
const test5 = past(3, 0, 0); // 10800000
const test6 = past(27, 0, 0); // 10800000
console.log(test1, test2, test3, test4, test5, test6);
