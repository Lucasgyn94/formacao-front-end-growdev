// 1) Vamos imaginar que você tem uma lista de frutas e deseja
// obter apenas as primeiras três frutas dessa lista.
const exercicio01 = () => {
    let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];
    let primeirasTresFrutas = frutas.slice(0, 3);
    console.log(primeirasTresFrutas);
    console.log(frutas);
}

//exercicio01();

// 2) Você tem uma lista de tarefas e deseja obter todas as
// tarefas, exceto as duas primeiras, mas sem alterar a lista
// original.
const exercicio02 = () => {
    let tarefas = ["Estudar para a prova", "Revisar os exercícios", "Assistir as aulas", "Ler um livro"];
    let filtroTarefas = tarefas.slice(2);
    console.log(filtroTarefas);
    console.log(tarefas);

}

//exercicio02();

// 3) Refaça o exercício 2, mas dessa vez excluindo os dois
// primeiros itens da lista original.
const exercicio03 = () => {
    let tarefas = ["Estudar para a prova", "Revisar os exercícios", "Assistir as aulas", "Ler um livro"];
    let filtroTarefas = tarefas.splice(0, 2);
    console.log(filtroTarefas);
    console.log(tarefas);
}

