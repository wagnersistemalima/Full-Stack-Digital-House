// Definindo quatro funçoes

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