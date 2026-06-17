// A função abaixo calcula a média das notas de um aluno e
// mostra no console se o aluno foi aprovado ou reprovado. Um
// aluno é representado por um objeto, sendo que as notas estão
// em uma lista. Porém, a função possui dois erros (um de lógica
// e outro de referência). Identifique o erros usando o modo
// debug do navegador e faça a correção.

const usuario = {
    nome: "Joaozinho",
    notas: [9, 10, 7]
};

const lista = ['abaxate', 'uva', 'cenoura'];
lista.find()

function calcularMedia(aluno) {
    const somaNotas = aluno.notas
        .reduce((atual, item) => {
            return atual + item;
        }, 0);

    const qtdNotas = aluno.notes.length;

    const media = somaNotas / qtdNotas;

    if(media >= 6) {
        console.log("Aluno aprovado");
    } else {
        console.log("Aluno reprovado");
    }
    return media;
}

calcularMedia(usuario);