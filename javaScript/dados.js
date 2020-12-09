// Conversao de dados

// typeof -> descobrir o tipo de dado de uma variavel

let palavra = "Todo dia";
let numero = 6;
let afirmacao = true;


console.log(typeof (palavra));
console.log(typeof (numero));
console.log(typeof (afirmacao));

// Uma String pode se tornar um numero? // metodo parseInt();

let stringNumero = "28abc";
let conversao = parseInt(stringNumero);
console.log(conversao);                              // retorna 123, converte o que e numero
console.log(typeof (conversao));

// Uma String pode se tornar um numero? // metodo Number();

let stringNumero2 = "28abc";
let conversao2 = Number(stringNumero2);
console.log(conversao2);                     // retorna NaN -> nao consegue converter pois a letras
console.log(typeof(conversao2));

// Um numero pode se tornar uma String?  // metodo String();

let numero3 = 111;
let texto1 = String(numero3);
console.log(typeof(texto1));

// Um numero pode se tornar uma String?  // metodo toString();

let numero4 = 115;
let texto2 = numero4.toString();
console.log(typeof(texto2));


