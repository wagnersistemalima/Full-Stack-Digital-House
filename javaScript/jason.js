//                                     Json = JavaScript Object Notation

// É um formato de texto simples, usado para trocar dados entre diferentes sistemas, que é compartilhado facilmente por varias linguagens de progamação.

let dadosEmJson = [{"nome": "Brasil", "capital": "Brasilia"}];



// Javascript nos da um Objeto nativo Json, com dois metodos


// JSON.stringify();  transformando o objeto em um "arquivo/String" json

let pessoa = {
    nome: "Maria",
    idade: 19,
    altura: 1.80
}

let objetoTransformado1 = JSON.stringify(pessoa);

console.log(objetoTransformado1);

// JSON.parse(); transformando o "arquivo/String" json em um objeto novamente

let objetoNovamente = JSON.parse(objetoTransformado1);

console.log(objetoNovamente);

// transformar um array em um "arquivo/String" json

let listaDeCompras = ["Pao", "Presunto", "Queijo"];

let objetoTransformado2 = JSON.stringify(listaDeCompras);

console.log(objetoTransformado2[0]);

// transformar o "arquivo/String" json em um objeto novamente

let objetoNovamente2 = JSON.parse(objetoTransformado2);

console.log(objetoNovamente2);