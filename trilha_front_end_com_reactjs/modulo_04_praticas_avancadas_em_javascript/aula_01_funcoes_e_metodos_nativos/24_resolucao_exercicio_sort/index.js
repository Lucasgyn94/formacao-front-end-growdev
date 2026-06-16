// Você está organizando uma lista de nomes e quer se
// certificar de que todos os convidados estão organizados em
// ordem alfabética para facilitar a hora de fazer as ligações.
const exercicio01 = () => {
    let nomes = ["Carlos", "Ana", "Mariana", "Felipe", "João"];
    console.log("Lista Atualizada");
    //nomes.sort((a, b) => (a > b) ? 1 : -1);
    nomes.sort();
    console.log(nomes);


}

// Você está organizando uma equipe para um torneio de
// esportes e precisa classificar os participantes por idade.
// Para isso, você fez uma lista com as idades deles e quer
// organizá-los do mais jovem para o mais velho.
let clienteLista = [
  { nome: "Pedro", idade: 20 },
  { nome: "Joana", idade: 25 },
  { nome: "Maria", idade: 12 },
  { nome: "Cleide", idade: 65 },
];

clienteLista.sort((a, b) => a.idade < b.idade ? -1 : 1);
console.log(clienteLista);
