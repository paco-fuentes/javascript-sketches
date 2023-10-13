const msMind = ['amarillo', 'amarillo', 'verde', 'azul'];
const currentPlayerRow = ['rojo', 'azul', 'rojo', 'azul'];

const checkRow = (master, decoder) => {
    let colorCheck = 0;
    let posColorCheck = 0;
    for (let i = 0; i < decoder.length; i++) {
        const element = decoder[i];
        const masterIncludes = master.includes(element);
        if (masterIncludes){
            colorCheck++;
        }
        for (let j = 0; j < master.length; j++) {
            if (master[i] === decoder[j] && i === j) {
                colorCheck -= 1;
                posColorCheck += 1;
            }
        }
    }
    console.log(`
    Color checks: ---------> ${colorCheck} 
    Posiciones iguales: ---> ${posColorCheck}
    `);
    if(posColorCheck === master.length && posColorCheck === decoder.length){
        return console.log("YOU WIN!");
    }
}

checkRow(msMind, currentPlayerRow);



////////////////////////////////////////////////////////////////

// const msMind = ['amarillo', 'amarillo', 'verde', 'azul'];
// const currentPlayerRow = ['azul', 'amarillo', 'verde', 'azul'];

// // console.log("msMind ------- > " + msMind);
// // console.log("playerRow ---- > " + currentPlayerRow);

// const checkRow = (master, decoder) => {
//     let colorCheck = 0;
//     let posColorCheck = 0;
//     for (let i = 0; i < decoder.length; i++) {
//         const element = decoder[i];
//         console.log("decoder row ---> " + decoder[i]);
//         console.log("master row ---> " + master);
//         const masterIncludes = master.includes(element);
//         console.log(masterIncludes);
//         if (masterIncludes){
//             colorCheck++;
//             console.log(colorCheck);
//         }
//         for (let j = 0; j < master.length; j++) {
//             if (master[i] === decoder[j] && i === j) {
//                 colorCheck -= 1;
//                 posColorCheck += 1;
//             }
//         }
//     }
    
//     console.log(`
//     Color checks: ---------> ${colorCheck} 
//     Posiciones iguales: ---> ${posColorCheck}
//     Todas iguales: ---> ${posColorCheck === master.length && posColorCheck === decoder.length}
//     `);
//     console.log("msMind ------- > " + master);
//     console.log("playerRow ---- > " + decoder);
//     if (posColorCheck === master.length && posColorCheck === decoder.length) {
//         return console.log("WIN");
//     }
// }

// checkRow(msMind, currentPlayerRow);