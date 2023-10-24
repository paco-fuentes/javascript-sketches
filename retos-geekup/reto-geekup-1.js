// Descripción
// Escriba una función donde se tenga un array de enteros como parámetro de entrada y otro como resultado de salida. 
// Se necesita calcular las siguientes operaciones.

// Clasifica : Números positivos. Números negativos. Números igual a 0.

// Calcula el número de elementos de cada clasificación, dividido por el número del array. 
// Represente el número de cada operación con un redondeo de 4 decimales. Devuelva un array de salida con cada operación en el siguiente orden 
// [Npositivos, Nnegativos, Nzero]

// Ejemplo
// Se atiende al siguiente ejemplo:

// Array: [1, 2 ,-8, -2, 0, 9] Números positivos = 1, 2, 9 Números negativos = -8, -2 Números igual a 0 = 0

// Resultado: [(Npositivios/Array.size), (Nnegativos/Array.size), (Nzero/Array.size)]

// clasifica([1, 2 ,-8, -2, 0, 9]) // [ "0.5000","0.3333","0.1667"]
function clasificaElementos(array) {
  let nPos = [];
  let nNeg = [];
  let nZer = [];
  array.forEach(element => {
    if (element > 0) {
      nPos.push(element);
    } else if (element < 0) {
      nNeg.push(element);
    }else {
      nZer.push(element);
    }
  });
  // ...
  // nPos = nPos.reduce((a,b)=>a+b,0)/array.length;
  // nNeg = nNeg.reduce((a,b)=>a+b,0)/array.length;
  // nZer = nZer.reduce((a,b)=>a+b,0)/array.length;
  nPos = nPos.length/array.length;
  nNeg = nNeg.length/array.length;
  nZer = nZer.length/array.length;
  // console.log(nPos, nNeg, nZer);
  return [nPos.toFixed(4), nNeg.toFixed(4), nZer.toFixed(4)];

}

test = [1, 2, -8, -2, 0, 9]
console.log(clasificaElementos(test));