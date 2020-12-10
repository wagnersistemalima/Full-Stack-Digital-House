// Criando um Objeto date

// Cria uma instância JavaScript de Date que representa um único momento no tempo. Objetos Date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 1970 (UTC).

const date = new Date();

console.log(date);                    // retorna a data e a hora atual no formato utc, com 3 horas a menos

// metodos para extrair dados mais precisos deste objeto

// metodo getDay(); retorna um numero referente ao dia da semana, obs domingo = 0 / segunda = 1 / terça = 2

console.log(date.getDay());

// metodo getDate(); retorna o dia do mes corrente

console.log(date.getDate());

// metodo getMonth(); retorna o numero do mes / obs = javascript o primeiro mes começa com 0 / exemplo: janeiro = 0 / dezembro = 11;

console.log(date.getMonth());

// metodo getFullYear(); retorna um numero completo do nosso ano

console.log(date.getFullYear());

