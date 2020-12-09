// funcao para retornar as informaçoes em JSON, que papai noel necessita, para comprar os presentes para as crianças que tiveram um bom comportamento na cidade de São Paulo

function calculaValorTotal(_valorDoPresente, _qtdCrianca, lista) {
    const listaAuxiliar = [];
    const nome = encontrarNomeLojaComPrecoEmConta(lista);
    const valorTransformado = parseInt(_qtdCrianca * _valorDoPresente);
    const saoPaulo = {};
    listaAuxiliar.push(saoPaulo);
    
    listaAuxiliar[0].totalGasto = valorTransformado;
    listaAuxiliar[0].custoPresente = _valorDoPresente;
    listaAuxiliar[0].qtdCriancaComportada = _qtdCrianca;
    listaAuxiliar[0].loja = nome;


    objetoTransformado = JSON.stringify(listaAuxiliar);
    return objetoTransformado;
}

// objetos lojas

const loja1 = {
    nome: "Americanas",
    valorDoPresente: 45
}

const loja2 = {
    nome: "Magazine Luiza",
    valorDoPresente: 50
}

const loja3 = {
    nome: "Amazon",
    valorDoPresente: 100
}

const loja4 = {
    nome: "Magazine Lima",
    valorDoPresente: 25
}

// criando uma lista para adicionar os objetos lojas

const lista = [];
lista.push(loja1);
lista.push(loja2);
lista.push(loja3);
lista.push(loja4);

// função para encontrar o nome da loja que tem o valor do presente mais barato
function encontrarNomeLojaComPrecoEmConta(lista) {
    let nome = " ";
    let valorMenor = lista[0].valorDoPresente;
    for (let i=0; i < lista.length; i++) {
        
        if (lista[i].valorDoPresente <= valorMenor) {
            valorMenor = lista[i].valorDoPresente;
            nome = lista[i].nome.toUpperCase();
        }
       
    }
    return nome;

}


// função para encontrar o preco do presente mais em conta nas lojas
function encontrarLojaComPrecoEmConta(lista) {

    let valorMenor = lista[0].valorDoPresente;
    for (let i=0; i < lista.length; i++) {
        
        if (lista[i].valorDoPresente <= valorMenor) {
            valorMenor = lista[i].valorDoPresente;
        }
       
    }
    return valorMenor;

}

// execultando os metodos

const valorUnitarioDoPresente = encontrarLojaComPrecoEmConta(lista);
console.log(calculaValorTotal(valorUnitarioDoPresente, 100, lista));



