// metodo .length           

const texto = "Essa é nossa string modelo              ";

console.log(texto.length);           // retorna o comprimento da string

console.log(texto.indexOf("nossa"));              // retorna o indice da palavra procurada

console.log(texto.slice(texto.indexOf("g")));     // recorta a string de acordo com parametro

console.log(texto.trim().length);      // remove os espaços em brancos antes e depois da ocorrencia.

console.log(texto.split(" , "));     // converte uma string em um array

console.log(texto.replace(",", " "));          // substitui parte de um texto, em uma string, passando dois parametros

console.log(texto.toUpperCase());          // transforma todo o texto para maiusculo

console.log(texto.toLowerCase());          // transformar todo o texto em minusculo