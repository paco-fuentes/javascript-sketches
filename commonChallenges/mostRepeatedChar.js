const maxChar = (str) => {
  const charMap = {};
  for (const char of str) {
    charMap[char] ? (charMap[char] += 1) : (charMap[char] = 1);
  }
  return charMap;
};

const test1 = maxChar("aaaaaaaaab");
const test2 = maxChar("aaaaabbbbb");
const test3 = maxChar("aaaaabbbbb 11 33 444444");
console.log(test1, test2, test3);
