// modelo Arrow function

const dob = numero => numero * 2;

const trip = numero => numero * 3;

const aplic = (numero, operacao) => operacao(numero);


// modelo Function do exercicio Callback

function dobro(numero) {
    return numero * 2;
}

function triplo(numero) {
    return numero * 3;
}

function aplicar(numero, operacao) {
    return operacao(numero);
}

// modelo Function do exercicio callback

function somar(numeroA, numeroB) {
    return numeroA + numeroB;
}

function subtrair(numeroA, numeroB) {
    return numeroA - numeroB;
}

function multiplicar(numeroA, numeroB) {
    return numeroA * numeroB;
}

function dividir(numeroA, numeroB) {
    return numeroA / numeroB;
}

// função callback

function calculadora(numeroA, numeroB, operacao) {
    return operacao(numeroA, numeroB);
}

// modelo function do exercicio callback 2

function adicionarHttp(url) {
    return "http://" + url;
}

function processar(listaDeSitesWeb, operacao) {
    let listaAuxiliar = [];
    for(url of listaDeSitesWeb) {
        listaAuxiliar.push(operacao(url));
    }
    return listaAuxiliar;
}



console.log(processar(["www.google.com","www.yahoo.com"], adicionarHttp));