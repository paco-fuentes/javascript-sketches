function noSpace(x) {
  const joined = x.replace(/\s+/g, "");
  return joined;
}

// test
const test1 = noSpace(
  "8 8 Bi fk8h B 8 BB8          \n      B B B  B888 c hl8 BhB     fd"
); // '88Bifk8hB8BB8BBBB888chl8BhBfd'
console.log(test1);

// // otras soluciones
// function noSpace(x){return x.split(' ').join('')}