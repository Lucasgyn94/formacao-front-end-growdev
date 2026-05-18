/*
Questão. Crie um programa que calcule o desconto de um produto com base no valor total:

- Se o valor for menor que R$ 100, sem desconto
- Se o valor estiver entre R$ 100 e R$ 500, 10% de desconto.
- Se for maior que R$ 500, 20% de desconto;
*/

const precoProduto = 10;
const descontoDezPorcento = ((precoProduto * 10) / 100);
const descontoVintePorCento = ((precoProduto * 20) / 100);
let precoFinal = 0;

if (precoProduto < 100) {
    precoFinal = precoProduto;
    console.log("Sem desconto!");
    console.log(`Valor Final: R$ ${precoFinal.toFixed(2)}`);
} else if (precoProduto >= 100 && precoProduto <= 500) {
    precoFinal = precoProduto - descontoDezPorcento;
    console.log(`Desconto de 10% aplicado!`);
    console.log(`Valor Final: R$ ${precoFinal.toFixed(2)}`);
} else {
    precoFinal = precoProduto - descontoVintePorCento;
    console.log(`Desconto de 20% aplicado!`);
    console.log(`Valor Final: R$ ${precoFinal.toFixed(2)}`);
}