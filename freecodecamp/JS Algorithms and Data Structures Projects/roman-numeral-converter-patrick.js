//2- Roman Numeral Converter
const ROMANDICTIONARY = [
  { value: 1000, letter: "M" },
  { value: 900, letter: "CM" },
  { value: 500, letter: "D" },
  { value: 400, letter: "CD" },
  { value: 100, letter: "C" },
  { value: 90, letter: "XC" },
  { value: 50, letter: "L" },
  { value: 40, letter: "XL" },
  { value: 10, letter: "X" },
  { value: 9, letter: "IX" },
  { value: 5, letter: "V" },
  { value: 4, letter: "IV" },
  { value: 1, letter: "I" },
];
const convertToRoman = (num) => {
  const transformToRomanLetters = (num, ROMANDICTIONARY) => {
    if (num === 0) return "";
    const { value, letter } = ROMANDICTIONARY.find(({ value }) => num >= value);
    return letter + transformToRomanLetters(num - value, ROMANDICTIONARY);
  };
  return transformToRomanLetters(num, ROMANDICTIONARY);
};

console.log(convertToRoman(10001));
