// Você tem uma lista de ingredientes para uma receita e
// deseja criar uma única string que contenha todos os
// ingredientes separados por vírgulas.
const exercicio01 = () => {
    let ingredientes = ["Farinha", "Açúcar", "Ovos", "Leite", "Manteiga"];

    let listaIngredientesSeparados = ingredientes.join(", ");
    console.log(listaIngredientesSeparados);

}

// Você está organizando um campeonato de jogos e tem uma
// lista de jogadores inscritos. Você quer verificar se um
// jogador específico se inscreveu no campeonato.
const exercicio02 = () => {
    let jogadoresInscritos = ["Lucas", "Mariana", "Felipe", "Tatiane", "Roberto"];
    let jogadorParaVerificar = "Lucas";
    let jogadorInscrito = jogadoresInscritos.includes(jogadorParaVerificar);
    console.log(jogadorInscrito);
}

// Você é o organizador de um campeonato de futebol. Para
// garantir que tudo saia conforme o planejado, você criou uma
// lista de tarefas. Mas essa lista está em ordem invertida e
// você precisa corrigir.

let tarefasDoCampeonato = [
  "Divulgar o evento",
  "Definir as equipes",
  "Comprar os prêmios",
  "Escolher o local do jogo",
  "Criar as regras do torneio",
];

tarefasDoCampeonato.reverse();
console.log(tarefasDoCampeonato);