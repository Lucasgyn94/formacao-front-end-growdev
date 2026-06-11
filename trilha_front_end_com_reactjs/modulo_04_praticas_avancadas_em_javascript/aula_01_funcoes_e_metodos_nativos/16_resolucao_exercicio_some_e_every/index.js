// 1) Um usuário tem uma lista de pessoas com suas idades e deseja verificar se existe pelo menos uma pessoa maior de 18 anos.
let pessoas = [
  { nome: "Lucas", idade: 16 },
  { nome: "Maria", idade: 22 },
  { nome: "Carlos", idade: 15 },
  { nome: "Fernanda", idade: 30 },
];

console.log("EXISTE PELO MENOS UMA PESSOA MAIOR DE 18 ANOS:");
let maiorDeIdade = pessoas.some(p => p.idade > 18);
console.log(maiorDeIdade);


// 2) Um estudante tem uma lista de tarefas de estudo e deseja verificar se todas as tarefas foram concluídas (status true).
let tarefasEstudo = [
  { descricao: "Estudar Matemática", concluido: true },
  { descricao: "Revisar Física", concluido: true },
  { descricao: "Fazer exercícios de Química", concluido: true },
  { descricao: "Ler capítulo de Biologia", concluido: false }, // Esta tarefa não foi concluída
];

console.log("\nTODAS TAREFAS FORAM CONCLUÍDAS");
let todasTarefasConcluidas = tarefasEstudo.every(t => t.concluido);
console.log(todasTarefasConcluidas);

