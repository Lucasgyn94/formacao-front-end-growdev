// Um funcionário de uma loja precisa saber quanto vendeu no
// último dia. Então ele fez uma lista com os valores das vendas
// dos produtos e calculou o total.
const exemplo01 = () => {
    let valorInicial = 0;
    let vendas = [150.75, 200.5, 50.25, 80.0, 120.0];
    let somaVendas = vendas.reduce((atual, item) => {
        return atual + item;
    }, valorInicial);

    console.log(somaVendas);

}


// Você está acompanhando um campeonato de videogame e deseja
// saber quantos pontos seus amigos acumularam juntos em uma
// partida.

let pontosJogadores = [
  { jogador: 'Pedro', pontos: 20 },
  { jogador: 'Maria', pontos: 50 },
  { jogador: 'Cleide', pontos: 5 },
  { jogador: 'Pedro', pontos: 150 },
  { jogador: 'Maria', pontos: 298 },
];

let valorInicial = 0;
let pontuacaoTotal = pontosJogadores.reduce((atual, item) => {
    return atual + item.pontos;
}, valorInicial);

console.log(pontuacaoTotal);
