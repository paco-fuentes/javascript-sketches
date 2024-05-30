const str = "abcdefghijklmnñopqrstuvwxyz";
console.log(" --- " + str + " --- ");

const revStr = (str) => {
  let reversed = "";

  for (const char of str) {
    console.log(char, reversed);
    // equivale ha hacer un shift por el orden char más reversed
    reversed = char + reversed;
  }

  return reversed;
};

// // // ES6 chaining way
// const revStr = (str) => str.split("").reverse().join("");

// test
const test1 = revStr(str);
console.log(" --- " + test1 + " --- "); // zyxwvutsrqpoñnmlkjihgfedcba
