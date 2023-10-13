const msMind = ['amarillo', 'amarillo', 'verde', 'azul'];
const currentPlayerRow = ['azul', 'rojo', 'azul', 'azul'];

// console.log("msMind ------- > " + msMind);
// console.log("playerRow ---- > " + currentPlayerRow);

const checkRow = (master, decoder) => {
    let colorCheck = 0;
    let posColorCheck = 0;
    for (let i = 0; i < decoder.length; i++) {
        const element = decoder[i];
        console.log("decoder row ---> " + decoder[i]);
        console.log("master row ---> " + master);
        const masterIncludes = master.includes(element);
        console.log(masterIncludes);
        if (masterIncludes){
            colorCheck++;
            console.log(colorCheck);
        }
        if(master[i] === element){
            posColorCheck++;
            console.log(posColorCheck);
        }
    }
}

checkRow(msMind, currentPlayerRow);