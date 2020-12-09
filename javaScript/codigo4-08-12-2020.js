// assunto abordado na aula 08-12-2020

const varString = "3.4";


// transformando para um numero inteiro / parseInt();
const varNumberInt = parseInt(varString);
console.log("Tipo do dado = " + typeof(varNumberInt));
console.log("Numero transformado para inteiro = " + varNumberInt);

// transformando para float
const varNumberFloat = parseFloat(varString);
console.log("Tipo do dado " + typeof(varNumberFloat));
console.log("Numero transformado para float = " + varNumberFloat);

// transformando String para Number com o metodo Number(); ?
const varTexto = "365 dias tem um ano";
const vartoNumberComNumber = Number(varTexto);
console.log("Tipo do dado = " + typeof(vartoNumberComNumber))
console.log("Texto transformado = " + vartoNumberComNumber);                            // retorno NaN, não consegue transformar a String

// transformando String para Number com o metodo parseInt();
const texto = "300 Espartanos na batalha contra um Deus Rei!";
const textoTransformadoEmNumero = parseInt(texto);
console.log("Tipo do dado = " + typeof(textoTransformadoEmNumero));
console.log("Texto transformado = " + textoTransformadoEmNumero);           // transforma a parte numerica da string

// transformando um numero em String, com o metodo String();
const numero = 999;
const numeroTransformadoEmString = String(numero);
console.log("Tipo do dado = " + typeof(numeroTransformadoEmString));
console.log("Numero transformado = " + numeroTransformadoEmString);

// transformando um numero em String, com metodo toString();
const numero2 = 450;
const numeroTransformado2 = numero2.toString();
console.log("Tipo do dado = " + typeof(numeroTransformado2));
console.log("Numero transformado = " + numeroTransformado2);