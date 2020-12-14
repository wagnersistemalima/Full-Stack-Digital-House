// Usar um array contendo números aleatórios, realizar um for/of multiplicando o valor por 3 e printar no console.

// Plus: Multiplicar somente os números pares; 

const lista = [10, 5, 15, 9, 18, 57];

for (numero of lista) {
    if (numero % 2 === 0) {
        console.log(numero * 3);
    }
}

