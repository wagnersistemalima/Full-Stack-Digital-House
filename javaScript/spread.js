// spread operator  ... operador bastante funcional / para juntar dois arrays ou dois objetos

let frutas = ["maça", "banana", "uva"];

let frutas2 = ["laranja", "abacate", "goiaba"];

let listaCompleta = [...frutas, ...frutas2];



// objetos

let pessoa = {
    nome: "Paulo",
    idade: 32
}

let infoPessoa = {
    tel: "123456789",
    rg: 3232565698,
    ...pessoa

}

let pessoaCompleta = {
    endereco: "Rua das Acacias",
    ...infoPessoa
}

console.log(pessoaCompleta);

// spread operation no uso de funçoes. os parametros vem em formato de arrays

function letras(...paramns) {
    console.log(paramns);
}

letras("a", "b", "c");