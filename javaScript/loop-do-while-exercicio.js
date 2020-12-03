// encontre o 5

function encontreUm5(numeros) {
    let contador = 0;
    do {
        if(numeros[contador] == 5) {
            console.log("Encontramos um 5!")
            break;
        }
        console.log(numeros[contador]);
        contador++;
        
    }while(contador < numeros.length);
    
}

let array =[3, 4, 5, 6, 7];
encontreUm5(array);