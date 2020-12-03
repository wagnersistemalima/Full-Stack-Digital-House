// Declarando tres funçoes

function anterior(numero) {
    return numero - 1;
}

function triplo(numero) {
    return numero * 3;
}

function anteriorDoTriplo(numero) {
    let resultado = triplo(numero);
    return anterior(resultado);
}