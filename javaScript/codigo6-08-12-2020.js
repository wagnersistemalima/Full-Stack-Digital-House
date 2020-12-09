// exercicio sobre Callback



// metodo 1

const calculaValorTotalPisoProfissional = (valor, metros) => valor * metros;

// metodo 2

const calculaValorDoMetroDoProfissional = (valorTotal, metros) => valorTotal / metros;


// Callback

const realizarCalculos = (numeroUm, numeroDois, calculo) => calculo (numeroUm, numeroDois);


// execultando

console.log(realizarCalculos(10, 2, calculaValorDoMetroDoProfissional));


