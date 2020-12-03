// adiçao

console.log(10 + 2);

// subtração

console.log(10 - 2);

// multiplicação

console.log(10 * 2);

// divisão

console.log(10 / 2);

// incremento parte 1

let numero = 10;
console.log(++numero);

// incremento parte 2

let valor = 10;
console.log(valor++);
console.log(valor);

// decremento

let numeroA = 5;
console.log(--numeroA);

// == comparação /   === comparação rigoroza, comparanto tambem o tipo da variavel

console.log(10 == 10);                                  // true
console.log("ola" == "ola");                            // true

console.log("5" === 5);                                 // false

// != diferente /    !==  diferença rigoroza, comparando tambem o tipo da variavel

console.log(10 != 9);                                   // true

console.log("10" !== 10);                               // true

// comparação de maior

console.log(10 > 5);                                    // true

// comparação de menor

console.log(10 < 5);                                   // false

// comparação de menor ou igual

console.log(5 <= 5);                                   // true

// comparação de maior ou igual

console.log(6 >= 4);                                   // true

// operadores logicos && / end                

console.log(10 > 5 && 8 < 10);                         // true as duas condiçoes tem que ser verdades para retornar true

console.log(10 > 5 && 8 > 10);                         // false

// operadores logicos || OR                

console.log(10 > 5 || 8 > 10);                        // true  uma ou outra condição sendo verdadeira a resposta e true

// operadores logicos de negação

console.log(!10 > 5);                                 // false  a negação altera o valor da condição

// operador de concatenar

let nome = "Wagner"
let sobrenome = "Lima"
let altura = 1.70;

console.log(nome + " " + sobrenome + " tem, " + altura + " de altura!");

