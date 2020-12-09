// Criando um Objeto date

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

