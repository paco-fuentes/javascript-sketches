// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards
// 81

function cc(card) {
  // Only change code below this line
  //  const cards =  card.sort()

  // let count = 0;
  // const mapCards = card.map((c) => {
  //   // typeof c === "string" ? (count -= 1) : (count = count);
  //   c.charCodeAt() > 9 ? (count -= 1) : (count = count);
  //   c > 9 ? (count -= 1) : (count = count);
  //   c < 7 ? (count += 1) : (count = count);
  // });

  return card.reduce((acc, c) => {
    if (!Number.isInteger(c)) return acc - 1;
    if (c > 9) return acc - 1;
    if (c < 7) return acc + 1;

    return acc;
  }, 0);
}

const arrCards = [10, "J", "Q", "K", "A"]; // should return the string -5 Hold
console.log(cc(arrCards));

// //  [12:40] Celia Toribio, Solaris Developments
//   let count = 0;

//   const CARD_VALUE = {
//       1: value => value + 1,
//       2: value => value + 1,
//       3: value => value + 1,
//       4: value => value + 1,
//       5: value => value + 1,
//       6: value => value + 1,
//       7: value => value,
//       8: value => value,
//       9: value => value,
//       10: value => value - 1,
//       "J": value => value - 1,
//       "K": value => value - 1,
//       "Q": value => value - 1,
//       "A": value => value - 1
//   }

//   function cc(card) {
//     // Only change code below this line
//     count = CARD_VALUE[card](count)
//     return `${count} ${count > 0 ? 'Bet' : 'Hold'}`

//     // Only change code above this line
//   }

// cc(2);
// cc(3);
// cc(7);
// cc("K");
// cc("A");
