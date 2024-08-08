const palindrome = str => str.match(/[a-zA-Z0-9]/gi).join('').toLowerCase() === [...str].reverse().join('').match(/[a-zA-Z0-9]/gi).join('').toLowerCase();

palindrome("_eye");