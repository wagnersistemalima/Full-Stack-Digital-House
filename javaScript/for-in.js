// for in só intera em objetos literais

const pessoa = {
    nome: "Joao",
    idade: 20,
    cidade: "Campina Grande",
    estado: "PB"
}

for(let caracteristicas in pessoa) {
    console.log(pessoa[caracteristicas]);
}

