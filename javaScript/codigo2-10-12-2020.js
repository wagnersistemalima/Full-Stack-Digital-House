// exercicio 2

// Enunciado: Criar um array com  objetos que contenham nome e data de nascimento, após criar uma arrow function que faça primeiramente a desestruturação do array pela pessoa2 e depois desestruture o objeto para capturar o nome da pessoa.. Imprimir o nome da pessoa no console.



var arrayPessoas = []

const pessoa1 = {
    nome: 'Maria', 
    nascimento: new Date('1991 12 05')
}

const pessoa2 = {
    nome: 'Fátima', 
    nascimento: new Date('1989 02 23')
}

const pessoa3 = {
    nome: 'João', 
    nascimento: new Date('1971 12 20')
}

// adicionando os objetos no array

arrayPessoas.push(pessoa1);
arrayPessoas.push(pessoa2);
arrayPessoas.push(pessoa3);




function desestruturacaoPessoa(array) {
    const pessoa = array[1];
    const caracteristica = {nome, nascimento} = pessoa;
    console.log(nome);
}

desestruturacaoPessoa(arrayPessoas);