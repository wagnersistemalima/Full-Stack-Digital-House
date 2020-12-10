// Alocação por desestruturação

// * permite extrair dados de arrays ou objetos literais 

let cores = ["branco", "azul", "amarelo", "preto"];

// Extrair dados de um array -> utilizar []

let[corBranco, corAzul, corAmarelo] = cores;   // javaScript vai criar as treis variaveis e atribuir o valor correspondente na mesma ordem

console.log(corBranco);
console.log(corAzul);
console.log(corAmarelo);

// Obs: A alocação por desestruturação não modifica nem altera o array de origem

// Extrair dados de um objeto literal -> utilizar {}

const pessoa = {                                               // objeto
    nome: "Maria",
    idade: 55,
    profissao: "Desenvolvedor Full Stack",
    SeriesFavoritas: ["El Chapo", "Vikings", "Pablo Escobar", "Cobra Key"]
}

let{nome, profissao} = pessoa;

console.log(nome);
console.log(profissao);