// criando um array, adicionando uma dado com o metodo push() no fim do array;

const pessoa = ["Tiringa", 1.70];
pessoa.push(39);
console.log(pessoa);

// removendo um dado no final de um array, com o metodo pop();

pessoa.pop();
console.log(pessoa);

// adicionando um dado no inicio de um array unshift();

pessoa.unshift(20);
console.log(pessoa);

// removendo um dado no inicio de um array shift();

pessoa.shift();
console.log(pessoa);

// indexOf(); procura um elemento pelo inicio de um array, retornando o indice deste elemento, se o elemento
// nao existir retorna -1;

console.log(pessoa.indexOf("Joao"));

// lastIndexOf(); procura o elemento pelo fim de um array, retornando o indice deste elemento, se o elemento
// nao existir retorna -1;

console.log(pessoa.lastIndexOf(1.70));

// join(); retorna uma string com todos os elementos de um array, separado por virgula por default

console.log(pessoa.join());

