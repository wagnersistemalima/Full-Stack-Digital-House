function presencaDoAluno(status = "faltou") {
    const mensagem = {
        presente: "Aluno compareceu na aula",
        atrasado: "Aluno chegou atrasado, mas assistiu a aula",
        faltou: "Aluno não veio a aula"
    }
    return mensagem[status];
}

console.log(presencaDoAluno("presente"));

