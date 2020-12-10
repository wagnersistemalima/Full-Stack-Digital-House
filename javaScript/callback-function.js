// exemplo de Callback utilizando function

// função dobro
function dobro(numero) {
    return numero * 2;
}

// função multiplicar
function multiplicar(numeroA, numeroB) {
    return numeroA * numeroB;
}

// função Callback

function calcular(numeroA, numeroB, operacao) {
    return operacao(numeroA, numeroB);
}

// execultando

console.log(calcular(10, 20, multiplicar));