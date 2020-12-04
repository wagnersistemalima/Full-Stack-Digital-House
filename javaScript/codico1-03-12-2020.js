// ate 10% de falta - aprovado
// entre 10.01% e 15% precisa fazer prova 
// maior que 15.01% ai reprovado



const curso = "FullStack";
const numeroDeAulasTotal = 49;
const qtdFaltas = 4;
const nomeAluno = "Luis Silva";
let porcentagemFaltas = null;
let alunoAprovado = false;
let statusAluno = " ";

// metodo para calcular a porcentagem de faltas

function calculoPorcentagemFalta(_qtdFaltas, _numeroDeAulasTotal) {
    porcentagemFaltas = _qtdFaltas / _numeroDeAulasTotal * 100;
    return porcentagemFaltas;
}

// criando objetos aluno literal

const pedro = {
    nome: "Pedro",
    qtdFaltas: 4
}

const julia = {
    nome: "Julia",
    qtdFaltas: 7
}

const joao = {
    nome: "João",
    qtdFaltas: 10
}

// criando array para adicionar os objetos alunos

const listaDeAlunos = [];

//adicionando alunos a lista

listaDeAlunos.push(pedro);
listaDeAlunos.push(julia);
listaDeAlunos.push(joao);

// percorrendo a lista de alunos
for (let i=0; i < listaDeAlunos.length; i++) {
    porcentagemFaltas = calculoPorcentagemFalta(listaDeAlunos[i].qtdFaltas, numeroDeAulasTotal);
    if (porcentagemFaltas <= 10) {
        statusAluno = "Aprovado";
    }
    else if (porcentagemFaltas > 10 && porcentagemFaltas <= 15) {
        statusAluno = "Precisa fazer prova";
    }
    else if (porcentagemFaltas > 15) {
        statusAluno = "Reprovado";
    }
    switch(statusAluno) {
        case "Aprovado":
            alunoAprovado = true;
            break;
        case "Precisa fazer prova":
            alunoAprovado = false;
            break;
        case "Reprovado":
            alunoAprovado = false;
            break;
        default:
            alunoAprovado = false;            
    }
    listaDeAlunos[i].status = statusAluno;                         // adicionando atributo e valor no aluno
    listaDeAlunos[i].porcentagemFaltas = porcentagemFaltas;
    listaDeAlunos[i].alunoAprovado = alunoAprovado;
    console.log(listaDeAlunos[i]);
}