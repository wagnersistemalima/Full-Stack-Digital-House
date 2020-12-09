
                // Callback

// e uma função que se passa como parametro de outra função

// essa função é responsavel por execultar a função recebida quando for necessario


// metodo somar Arrow function

let somar = (n1, n2) => n1 + n2;

// metodo subtrair Arrow function

let subtrair = (n1, n2) => n1 - n2;

// metodo operação matematica Arrow function Callback

let operacaoMatematica = (n1, n2, operacao) => operacao(n1, n2);

// execultando: dentro da função operaçao matematica e que iremos execultar a função somar

console.log(operacaoMatematica(10, 5, somar));

// execultando: dentro da função operaçao matematica e que iremos execultar a função subtrair

console.log(operacaoMatematica(10, 5, subtrair));