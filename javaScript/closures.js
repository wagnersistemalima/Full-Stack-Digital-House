// Closures

// são funçoes que residem em outras funções, para otimizar o desempenho de nossos scripts

function saudacao(parametro1, parametro2) {
    let mensagem = "Olá!"

    function juntarParametros() {                          // -> clousures
        return mensagem + " " + parametro1 + " " + parametro2;
    }
    return juntarParametros();                                           // deve ser chamada somente dentro da função pai
}

// execultando

console.log(saudacao("Wagner", "Lima"));