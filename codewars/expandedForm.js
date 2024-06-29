// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
// Writing a number to show the value of each digit.
// It is shown as a sum of each digit multiplied by its matching place value (ones, tens, hundreds, etc.)
// For example: 4.265 = 4 × 1.000 + 2 × 100 + 6 × 10 + 5 × 1

const expandedForm = (num) => {
  let numStr = num.toString();
  
  // Creamos un array para almacenar los componentes de la forma expandida
  let expandedParts = [];
  
  // Iteramos sobre cada dígito
  for (let i = 0; i < numStr.length; i++) {
    // Obtenemos el valor del dígito
    let digit = numStr[i];
    
    // Calculamos la potencia de 10 correspondiente
    let powerOfTen = Math.pow(10, numStr.length - i - 1);
    
    // Si el dígito no es cero, lo añadimos a los componentes de la forma expandida
    if (digit !== '0') {
      expandedParts.push(digit * powerOfTen);
    }
  }
  
  // Unimos los componentes con ' + ' y lo retornamos como un string
  return expandedParts.join(' + ');
};

// test
const test1 = expandedForm(12); // '10 + 2'
const test2 = expandedForm(42); // '40 + 2'
const test3 = expandedForm(70304); // '70000 + 300 + 4'
console.log(`${test1}, ${test2}, ${test3}`);
