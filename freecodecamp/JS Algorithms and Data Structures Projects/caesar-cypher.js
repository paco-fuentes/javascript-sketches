function rot13(str) {
  const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const specialChars = str.match(/[!.?]/gi)
  // console.log(specialChars)
  return !specialChars
    ? str.split(' ').map(e => e.split('').map(e => ABC[ABC.indexOf(e) + 13]).join('')).join(' ')
    : str.split(' ').map(e => e.split('').map(e => ABC[ABC.indexOf(e) + 13]).join('')).join(' ').slice(0, str.length - 1) + specialChars;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));