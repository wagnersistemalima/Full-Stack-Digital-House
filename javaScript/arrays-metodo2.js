// metodos de arrays 2 Callback
// É uma função que se passa como parametro de outra função

// map(); -> invoca a função callback passada por argumento para cada elemento do array e devolve um novo array como resultado

let numeros = [2, 4, 6];

let dobroDeNumeros = numeros.map((_cadaNumero) => _cadaNumero * 2);

console.log(dobroDeNumeros);

// filter() -> cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida

let idades = [15, 39, 18, 23, 10];

let maiores = idades.filter((_maiorIdade) => _maiorIdade >= 18);

console.log(maiores);

// reduce() -> execulta uma função reduce(fornecida por você) para cada elemento do array, resultando em um unico valor de retorno. recebe dois parametros, (_acumulador, _numero)

let valores = [5, 7, 16];

let resultado = valores.reduce((_acumulador, _numero) => {
    _acumulador + _numero
});

console.log(resultado);

// find(); retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

let animais = ["cachorro", "gato", "cavalo"];

const animalAchado = animais.find((animal) => animal === "cavalo");
console.log(animalAchado);

// forEach() permite executar uma função em cada elemento.

let paises = ["Brasil", "Colombia", "Argentina"];

paises.forEach((_pais, _indice) => {
    console.log(_pais + ", e seu indice no array é " + _indice)
});