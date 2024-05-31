// two pointer technique
const palindrome = (str) => {
  let min = 0;
  let max = str.length - 1;

  do {
    if (str[min] == str[max]) {
      min++;
      max--;
    } else {
      return false;
    }
  } while (min < max);

  return true;
};

// test
const test1 = palindrome("arenera");
const test2 = palindrome("reconocer");
const test3 = palindrome("javascript");
const test4 = palindrome("typescript");
console.log(test1, test2, test3, test4);
