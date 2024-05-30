const n1 = 123456789;
const n2 = -556;

// al hacer el parseInt se elimina el signo ' - ' a la derecha
const revN = n => parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);

// test
console.log(revN(n1)); // 987654321
console.log(revN(n2)); // -655
