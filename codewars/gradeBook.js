// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

function getGrade(s1, s2, s3) {
  // Code here
  const score = (s1 + s2 + s3) / 3;
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}

// // otras soluciones:

// const getGrade = (s1, s2, s3) => {
//   var s = (s1 + s2 + s3) / 3;
//   return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F";
// };

// const getGrade = (a, b, c) => "FFFFFFDCBAA".charAt((a + b + c) / 3 / 10);

// test
const test1 = getGrade(95, 90, 93); // 'A'
console.log(test1);
