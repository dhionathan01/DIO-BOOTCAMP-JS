function retornarValoresPares(array) {
    let valoresPares = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) {
            valoresPares.push(array[i]);
        } else {
            console.log(`${array[i]} Não é par`);
       }
    }
    console.log(valoresPares);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
valoresPares(array);