// Utilize operadores relacionais

/*Questão 1. Um cliente tem 17 anos e o produto que ele deseja comprar exige idade mínima de 18 anos. Verifique se ele pode comprar o produto. */
const questao01 = () => {
    const idadeCliente = 17;
    const idadeMinima = 18;
    const podeComprarProduto = idadeCliente >= idadeMinima ? 
                                `Você possui ${idadeCliente} anos e está autorizado a comprar o produto!` : 
                                `Você possui ${idadeCliente} anos e não está autorizado a comprar o produto! \nIdade mínima necessária: ${idadeMinima} anos!`;

    console.log(podeComprarProduto);

}
//questao01();

/*
Questão 2. Um cliente deseja realizar uma compra de R$ 300,00, mas seu limite de crédito é de R$ 500,00. Verifique se a compra está dentro do limite de crédito.
*/
const valorCompra = 400.00;
const limiteCredito = 500.00;
const compraDentroLimite = valorCompra <= limiteCredito ?
                                        `Valor de Compra: ${valorCompra}\nLimite de Crédito ${limiteCredito}\nStatus Compra: Aprovada com sucesso!` :
                                        `Valor de Compra: ${valorCompra}\nLimite de Crédito ${limiteCredito}\nStatus Compra: Saldo Insuficiente!`;
console.log(compraDentroLimite);