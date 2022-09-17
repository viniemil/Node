"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aluno_1 = require("./aluno");
function gerarIdade(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function gerarReposta(min, max) {
    const resposta = Math.floor(Math.random() * (max - min)) + min;
    if (resposta == 1) {
        return "A";
    }
    if (resposta == 2) {
        return "B";
    }
    if (resposta == 3) {
        return "C";
    }
}
const aluno1 = new aluno_1.Aluno("Aluno1", gerarIdade(18, 40));
const aluno2 = new aluno_1.Aluno("Aluno2", gerarIdade(18, 40));
const aluno3 = new aluno_1.Aluno("Aluno3", gerarIdade(18, 40));
const aluno4 = new aluno_1.Aluno("Aluno4", gerarIdade(18, 40));
const aluno5 = new aluno_1.Aluno("Aluno5", gerarIdade(18, 40));
const aluno6 = new aluno_1.Aluno("Aluno6", gerarIdade(18, 40));
const aluno7 = new aluno_1.Aluno("Aluno7", gerarIdade(18, 40));
const aluno8 = new aluno_1.Aluno("Aluno8", gerarIdade(18, 40));
const aluno9 = new aluno_1.Aluno("Aluno9", gerarIdade(18, 40));
const aluno10 = new aluno_1.Aluno("Aluno10", gerarIdade(18, 40));
const listaDeAlunos = [
    aluno1,
    aluno2,
    aluno3,
    aluno4,
    aluno5,
    aluno6,
    aluno7,
    aluno8,
    aluno9,
    aluno10,
];
const gabarito = ["A", "C", "C", "B", "A", "B", "C", "A", "A", "B"];
listaDeAlunos.forEach((aluno) => gabarito.forEach((questao) => {
    const alunoResposta = gerarReposta(1, 3);
    if (alunoResposta === questao) {
        aluno.atualizarNota();
    }
}));
const alunosAprovados = listaDeAlunos.filter((aluno) => aluno.status === "Aprovado");
const alunosReprovados = listaDeAlunos.filter((aluno) => aluno.status === "Reprovado");
const mediaNotas = listaDeAlunos.reduce((total, { nota }) => {
    total.soma += nota;
    total.quantidade++;
    total.media = total.soma / total.quantidade;
    return total;
}, {
    quantidade: 0,
    soma: 0,
    media: 0,
});
const melhorAluno = listaDeAlunos.sort((aluno1, aluno2) => aluno2.nota - aluno1.nota)[0];
const piorAluno = listaDeAlunos.sort((aluno1, aluno2) => aluno1.nota - aluno2.nota)[0];
console.log("== Aprovados ==");
alunosAprovados.forEach((aluno) => {
    console.log(`Nome: ${aluno.nome}`);
});
console.log("\n== Reprovados ==\n");
alunosReprovados.forEach((aluno) => {
    console.log(`Nome: ${aluno.nome}`);
});
console.table("\n== Média da Turma ==\n" + `Média: ${mediaNotas.media}`);
console.log("\n== Melhor Aluno ==\n" + `Nome: ${melhorAluno.nome}`);
console.log("\n== Pior Aluno ==\n" + `Nome: ${piorAluno.nome}`);
