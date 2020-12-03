// O que é uma função?   

// Função é uma sequência de açoes que são execultadas sempre que necessário


// Função declarada = quando a função recebe um nome e não se atribui a uma variavel

function somar(valorA, valorB) {
    return valorA + valorB;

}

console.log(somar(10, 2));

// Função expressa = quando a função é atribuida a uma variavel

const resultado = function(valorA, valorB) {
    return valorA * valorB;
}

console.log(resultado(10, 2));

