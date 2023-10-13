// console.log("hola mundo!");

// Ms. Mind - Palette ---- > #2e41cc,#ff7a7a,#8531c9,#2e41cc
// currentPlayerRow - Palette ---- > #51c86e,#ff7a7a,#2e41cc,#8531c9

// const  msMind = ['#2e41cc', '#ff7a7a', '#8531c9', '#2e41cc'];
// const currentPlayerRow = ['#51c86e', '#ff7a7a', '#2e41cc', '#8531c9'];

// const  msMind = ['ROJO', 'ROJO', 'AZUL', 'AMARILLO'];
// const currentPlayerRow = ['VERDE', 'VERDE', 'AZUL', 'ROJO'];
// const msMind = ['ROJO', 'AZUL', 'AZUL', 'ROJO'];
// const currentPlayerRow = ['VERDE', 'ROJO', 'AZUL', 'AZUL'];
const msMind = ['amarillo', 'amarillo', 'verde', 'azul'];
const currentPlayerRow = ['azul', 'rojo', 'azul', 'amarillo'];


console.log("msMind ------- > " + msMind);
console.log("playerRow ---- > " + currentPlayerRow);

const checkRow = (master, decoder) => {
    let colorCheck = master.length;
    let posColorCheck = 0;
    // let posColorElement = [];
    for (let i = 0; i < master.length; i++) {
        if (master[i] === decoder[i]) {
            colorCheck -= 1;
        }
        console.log(`
        iteracion ${i} a row msMind: ${master[i]}`);
        for (let j = 0; j < decoder.length; j++) {
            // if (master[decoder[j]] !== decoder[j]) {
            //     colorCheck += 1;
            //     // tengo que averiguar que color es igual solo en el decoder (jugador)
            // }
            // if (master[i] !== decoder[j]) {
            //     colorCheck += 1;
            // }
            if (master[i] === decoder[j] && i === j) {
                // colorCheck -= 1;
                posColorCheck += 1;
            }
            // if (colorCheck <= 0) {
            //     colorCheck = 0;
            // }
            console.log(`
            player - pos - ${j} - played ${decoder[j]}
            color - - - - - > ${master[i] === decoder[j]} 
            ${colorCheck}
            color y pos - - > ${master[i] === decoder[j] && i === j}
            ${posColorCheck}
            `);
            
        }

    }
    
    console.log(`
    Color checks: ---------> ${colorCheck} 
    Posiciones iguales: ---> ${posColorCheck}
    Todas iguales: ---> ${posColorCheck === master.length && posColorCheck === decoder.length}
    `);
    console.log("msMind ------- > " + master);
    console.log("playerRow ---- > " + decoder);
    if (posColorCheck === master.length && posColorCheck === decoder.length) {
        return console.log("WIN");
    }
}

checkRow(msMind, currentPlayerRow);


// let coloresRepes = colorCheck / 2 - posColorCheck;
// if(coloresRepes < 0){
//     coloresRepes = 0;
// }Colores repes que no están en la misma posición: --------> ${Math.ceil(coloresRepes)}

// if(posColorElement === arr2[j]){
//     colorCheck = colorCheck - 1;
// }
// if (colorCheck <= 0) {
//     colorCheck = 0;
// }

// if (arr1[i] === arr2[j] && i !== j && posColorElement % arr1[i-1] === 0) {
//     colorCheck = colorCheck + 1;
//     // me guardo el elemento y veo si ya lo tengo con includes
// }

// if (master[decoder[j]] !== decoder[j]) {
//     colorCheck = + 1;
//     // tengo que averiguar que color es igual solo en el decoder (jugador)
// }



