// ate 10% de falta - aprovado
// entre 10.01% e 15% precisa fazer prova 
// maior que 15.01% ai reprovado

const curso = "FullStack";
const numeroAulasTotal = 49;
const qtdFaltas = 4;
const nomeAluno = "Wagner";
let porcentagemFaltas = null;
let alunoAprovado = false;
let statusDoAluno = " ";

function calculaPorcentagem(_qtdFaltas, _numerosAulasTotal) {
  porcentagemFaltas = (_qtdFaltas / _numerosAulasTotal) * 100;
  console.log(porcentagemFaltas);
  return porcentagemFaltas;
}

pocentagemFaltas = calculaPorcentagem(qtdFaltas, numeroAulasTotal);

if(porcentagemFaltas <= 10) {
    statusDoAluno = "Aprovado";
  }
  else if (porcentagemFaltas > 10 && porcentagemFaltas <= 15) {
    statusDoAluno = "Precisa fazer prova"
  }
  else if (porcentagemFaltas > 15) {
    statusDoAluno = "Reprovado";
  }

switch (statusDoAluno) {
    case "Aprovado":
        alunoAprovado = true;
        break;
    case "Precisa fazer prova":
        alunoAprovado = false;
        break;
    default:
        alunoAprovado = false;      
}

console.log(alunoAprovado);