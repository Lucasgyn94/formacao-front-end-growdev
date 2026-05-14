/* 
Questão 1: Você está desenvolvendo um sistema para calcular o preço final de um produto após aplicar um desconto. O produto custa 100 reais e tem um desconto de 20%. Em seguida, você precisa calcular o preço final após adicionar 5 reais a taxa de entrega.
*/
const questao01 = () => {
    const precoProduto = 100;
    const desconto = 20;
    const descontoFinal = (desconto / 100) * precoProduto;
    const taxaEntrega = 5;
    const precoProdutoFinal = (precoProduto - desconto) + taxaEntrega;

    console.log(`Preço Produto: R$ ${precoProduto.toFixed(2)} reais`);
    console.log(`Desconto: R$ ${desconto.toFixed(2)} reais`);
    console.log(`Taxa: R$ ${taxaEntrega.toFixed(2)} reais`)
    console.log(`Preço final produto: R$ ${precoProdutoFinal.toFixed(2)}`);
}


/* 
Questão 2: Você está ajudando a calcular a média das notas de uma pessoa estudante. As notas são armazenadas em variáveis e a média deve ser calculada considerando as notas de três provas. Defina as variáveis de nota e calcule a média.
*/
const notas = [10,10,8];
const media = ((notas[0] + notas[1] + notas[2]) / notas.length);
console.log(
    `Nota 01: ${notas[0]}` + "\n" +
    `Nota 02: ${notas[1]}` + "\n" +
    `Nota 03: ${notas[2]}` + "\n" +
    `Média de Notas: ${media.toFixed(2)}`
);