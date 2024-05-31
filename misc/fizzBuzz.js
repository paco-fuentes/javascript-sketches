console.log(
  `----------------------------------------------------------
-------------------------Fizz - Buzz-----------------------------------
-----------------------------------------------------------------------`
);

function fizzBuzz(n1) {
  console.log(typeof n1);
  if (typeof n1 !== "number") {
    console.log("NO ES UN NUMERO");
  } else {
    for (let i = 1; i <= n1; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIzzBUzz ------------ ¯_(ツ)_/¯ ------------- " + i);
      } else if (i % 3 == 0) {
        console.log("fiZZ ----------- ª{•̃̾_•̃̾}ª ------------ " + i);
      } else if (i % 5 == 0) {
        console.log("buZZ ------------ ʕ•ᴥ•ʔ ------------- " + i);
      } else {
        console.log(i);
      }
    }
  }
}

fizzBuzz(Number(prompt()));
