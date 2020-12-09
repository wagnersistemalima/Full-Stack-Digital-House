// criando um objeto

const pessoa = {
    nome: "Maria",
    idade: 25,
    sexo: "F"
}

// obeto tipo JSON

const variavelJson = '{"curso": "js_full_stack", "aulas": 49, "turma": 16}';


// transformando o objeto em JSON

const objetoTransformado = JSON.stringify(pessoa);
console.log(objetoTransformado);

// transformando o JSON em um objeto

const jsonTransformado = JSON.parse(variavelJson);
console.log(jsonTransformado);