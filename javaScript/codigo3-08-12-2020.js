// criar um objeto, com  propriedades recebendo um dado do tipo valor string, depois converter o objeto para json

const carro = {
    nome: "Gol",
    marca: "wolksvagem",
    cor: "Vermelho"
}

const carroTransformadoJson = JSON.stringify(carro);

console.log(carroTransformadoJson);