// exercicio 2.  aula 08-12-2020

// Escrever uma arrow function que vai receber um parametro

// * imprimir no console qual o tipo do parametro estão recebendo

// * realizar uma conversao

// * imprimir no console o novo tipo de dados desse parametro (convertido)

// * retornar o parametro convertido

const recebendoUmParametro = numero => {
    console.log("tipo do dado = " + typeof(numero));
    const numeroConvertido = String(numero);              // metodo String(); transforma numero p/ String
    console.log("O numero convertido é " + numeroConvertido);
    return "retornar o parametro convertido = " + numeroConvertido;
}


// execultando

console.log(recebendoUmParametro(10));





