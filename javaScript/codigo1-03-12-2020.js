// ate 10% de falta - aprovado
// entre 10.01% e 15% precisa fazer prova 
// maior que 15.01% ai reprovado

const curso = "FullStack";
const numeroAulasTotal = 49;
const qtdFaltas = 4;
const nomeAluno = "Wagner";
let porcentagemFaltas = null;
let alunoAprovado = false;

function calculaPorcentagem(_qtdFaltas, _numerosAulasTotal) {
  porcentagemFaltas = (_qtdFaltas / _numerosAulasTotal) * 100;
  console.log(porcentagemFaltas);
  return porcentagemFaltas;
}

pocentagemFaltas = calculaPorcentagem(qtdFaltas, numeroAulasTotal);


if(porcentagemFaltas <= 10) {
  alunoAprovado = true;
}
else if (porcentagemFaltas > 10 && porcentagemFaltas <= 15) {
  alunoAprovado = false;
}
else if (porcentagemFaltas > 15) {
  alunoAprovado = false;
}

console.log(alunoAprovado);