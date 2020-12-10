
                // Callback

// e uma função que se passa como parametro de outra função

// essa função é responsavel por execultar a função recebida quando for necessario


// metodo somar Arrow function

let somar = (n1, n2) => n1 + n2;

// metodo subtrair Arrow function

let subtrair = (n1, n2) => n1 - n2;

// metodo operação matematica Arrow function Callback

let operacaoMatematica = (n1, n2, operacao) => operacao(n1, n2);   // callback

// execultando: dentro da função operaçao matematica e que iremos execultar a função somar

console.log(operacaoMatematica(10, 5, somar));// nao passar parametro na função somar, pois o calback se encarrega disto

// execultando: dentro da função operaçao matematica e que iremos execultar a função subtrair

console.log(operacaoMatematica(10, 5, subtrair));

//  criando um callback

const calculadora = (x, y, operacao) => operacao(x, y);

// criando a function dentro da execução

console.log(calculadora(10, 20, (x, y) => x + y));