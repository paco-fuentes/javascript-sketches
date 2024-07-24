// // 1
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString); // Change this line

// // 2
// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/; // Change this line
// let result = waldoRegex.test(waldoIsHiding);

// // 3
// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; // Change this line
// let result = petRegex.test(petString);

// // 4
// let myString = "freeCodeCamp";
// let fccRegex = /freeCodeCamp/i; // Change this line
// let result = fccRegex.test(myString);

// // 5
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line

// // 6
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/gi; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line

// // 7
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/; // Change this line
// let result = unRegex.test(exampleStr);

// // 8
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line
// console.log(result)

// 9
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line
// console.log(result);

// // 10
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line

// // 11
// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou0-9]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line

// // 12
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g; // Change this line
// let result = difficultSpelling.match(myRegex);

// // 13
// // Only change code below this line
// let chewieRegex = /Aa*/; // Change this line
// // Only change code above this line

// let result = chewieQuote.match(chewieRegex);
// console.log(result);

// // 14
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<[h0-9]*?>/gi; // Change this line
// let result = text.match(myRegex);

// // 15
// let reCriminals = /C+/g; // Change this line

// // 16
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/; // Change this line
// let result = calRegex.test(rickyAndCal);

// // 17
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/; // Change this line
// let result = lastRegex.test(caboose);

// // 18
// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/gi; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;

// // 19
// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/gi; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;

// // 20
// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/gi; // Change this line
// let result = movieName.match(numRegex).length;

// // 21
// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/gi; // Change this line
// let result = movieName.match(noNumRegex).length;

// // 22
// let username = "JackOfAllTrades";
// let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
// let result = userCheck.test(username);

// // 23
// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /[\s\r\t\f\n\v]/g; // Change this line
// let result = sample.match(countWhiteSpace);

// // 24
// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /[\S\r\t\f\n\v]/g; // Change this line
// let result = sample.match(countNonWhiteSpace);

