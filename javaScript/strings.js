// Strings  = Aray de caracteres / Um objeto

// Podemos fazer muito mais com uma String do que gerar texto.

// Contem diversos metodos

let frase = "     Eu gosto de javascript!    ";
console.log(frase.length);     // .length ->Retorna a quantidade de caracteres da String, incluindo os espaços em branco

console.log(frase.indexOf("gosto")); // IndexOf(); retorna o indice da palavra procurada - > 8 / se não achar a palavra, retorna -1

                                     
                                     
console.log(frase.slice(3,8)); // recorta a String de acordo com os parametros passado, retorna "Eu".

// .trim() -> remover os espaços em branco antes e depois da ocorrencia de um caractere alfanumerico

console.log(frase.trim());     // nao remove espaços em branco no meio da string

// .split();   converte a string em um array. separando cada palavra pelo indice

let frase2 = "Estou estudando javaScript";
let stringTrasformada = frase2.split(" ");
console.log(stringTrasformada);

// .replace(); substitui a parte de um texto, em uma String, passando dois parametros. (oQueBusca, suaSubstituicao)

console.log(frase2.replace("estudando", "aprendendo"));

