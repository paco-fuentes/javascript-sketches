// const currentPlayerRow = ['VERDE', 'ROJO', 'AZUL', 'AZUL'];
const msMind = ['amarillo', 'amarillo', 'verde', 'azul'];
const currentPlayerRow = ['azul', 'rojo', 'azul', 'amarillo'];


console.log("msMind ------- > " + msMind);
console.log("playerRow ---- > " + currentPlayerRow);

const checkRow = (master, decoder) => {
    let colorCheck = 4;
    // let posColorElement = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (decoder[i] === master[j]) {
                colorCheck -= 1;
                console.log(decoder, master, colorCheck);
            }
        }

    }
}

checkRow(msMind, currentPlayerRow);


// type HasDuplicatedFunction = (arr: string[]) => boolean;
// ​
// const hasDuplicated: HasDuplicatedFunction = (arr) => {
//   const tempArray: string[] = [];
//   for (let value of arr) {
//     if (tempArray.includes(value)) return true;
//     tempArray.push(value);
//   }
//   return false;
// };
// ​
// console.log(hasDuplicated(["gato", "perro", "pez"]));




// const array: string[] = ["perro", "gato", "gato", "pez", "ardilla"];
// function comprobation(array: string[]): boolean {
//     for (let i: number = 0; i < array.length; i++) {
//         let element: string = array[i];
//         for (let j: number = 0; j < array.length; j++) {
//             let element2: string = array[j];
//             if ((element === element2) && (i !== j)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// console.log(comprobation(array))




// const checkRow = (master, decoder) => {
//     let colorCheck = master.length;
//     // let posColorElement = [];
//     for (let i = 0; i < master.length; i++) {
//         console.log(`
//         iteracion ${i} a row msMind: ${master[i]}`);
//             if (master[i] === decoder[i+1]) {
//                 colorCheck -= 1;
//             }
//             console.log(`
//             color - - - - - > ${master[i] === decoder[i]} 
//             ${colorCheck}
//             `);
        

//     }
// }




// const a = [1,2,3,4,1,5,6]

//       console.log(a.length);

//       // Devuelve un objeto eliminando los elementos duplicados del array
//       const newSet = new Set(a)

//       // Accedo al numero de elementos el objeto
//       console.log(newSet.size);

//       if(a.length === newSet.size) {
//         console.log('Son iguales');
//       } else {
//         console.log('No son iguales');
//       }