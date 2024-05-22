function dnaStrand(dna) {
  let arrIn = dna.split("");
  let arrOut = [];

  arrIn.forEach((e) => {
    switch (e) {
      case "A":
        arrOut.push("T");
        break;
      case "T":
        arrOut.push("A");
        break;
      case "C":
        arrOut.push("G");
        break;
      case "G":
        arrOut.push("C");
        break;

      default:
        break;
    }
  });

  console.log(arrIn, arrOut);

  return arrOut.reduce((a, b) => a + b);
}

console.log(dnaStrand("AAAA"));
console.log(dnaStrand("ATTGC"));


// function DNAStrand(dna) {
//     return dna.replace(/./g, function(c) {
//       return DNAStrand.pairs[c]
//     })
//   }
  
//   DNAStrand.pairs = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C',
//   }



// var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }