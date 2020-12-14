// Criando um objeto Date com uma data especifica, passando os parametros. mascara yyyy - MM - dd

let date = new Date("2019-11-07");

console.log(date);

// metodo getDay();

console.log(date.getDay());  // retorna o numero referente ao dia da semana / 0 = domingo / 4 = quinta

// metodo getDate();

console.log(date.getDate()); // retorna o numero referente ao dia do mes -1

// metodo getMonth();

console.log(date.getMonth()); // retorna o numero referente ao mes -1 / 0 = janeiro / 11 = dezembro

// metodo getFullYear();

console.log(date.getFullYear()); // retorna o numero completo do ano