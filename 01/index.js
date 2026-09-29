function corrigirProva(prova) {
    let acertos = 0;

   
    for (let questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            acertos++;
        }
    }

    
    const totalQuestoes = prova.questoes.length;
    const nota = (acertos / totalQuestoes) * prova.valor;

    
    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}`);
}


const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        { resposta: "a", correta: "b" },
        { resposta: "c", correta: "c" },
        { resposta: "e", correta: "b" },
        { resposta: "b", correta: "b" },
        { resposta: "c", correta: "c" }
    ]
};

corrigirProva(prova);