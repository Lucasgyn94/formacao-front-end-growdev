// 1- Encontre o primeiro número par da lista abaixo e exiba
// no console a posição desse número na lista.
const exercicio01 = () => {
    const numeros = [1, 3, 7, 8, 9, 12, 20, 21];
    console.log("LISTA DE NÚMEROS");
    console.log(numeros);

    const primeiroPar = numeros.find((n) => n % 2 === 0);
    console.log(`Primeiro número par: ${primeiroPar}`);

    const primeiroParPosicao = numeros.findIndex((n) => n % 2 === 0);
    console.log(`Posição primeiro par: ${primeiroParPosicao}`);

}
// 2- Considere a lista de produtos abaixo e resolva as questões para encontrar determinados produtos. Se houver produto com a condição da questão, mostre o produto no console. Caso contrário, exiba "Produto não encontrado".
const produtos = [
  { nome: "Caneta", preco: 5, estoque: 6 },
  { nome: "Caderno", preco: 20, estoque: 20 },
  { nome: "Mochila", preco: 150, estoque: 2 },
  { nome: "Borracha", preco: 3, estoque: 1},
  { nome: "Lápis", preco: 2, estoque: 12 },
];
console.log("LISTA DE PRODUTOS");
console.table(produtos);

// 2.1 - Encontre o primeiro produto caro (acima de R$ 100).
console.log("PRIMEIRO PRODUTO CARO ACIMA DE R$ 100");
let produtoCaro = produtos.find((p) => (p.preco > 100));
console.log(produtoCaro);


// 2.2 - Encontre o primeiro produto que está sem estoque.
console.log("\nPRIMEIRO PRODUTO SEM ESTOQUE");
let produtoSemEstoque = produtos.find((p) => p.estoque === 0);
if (!produtoSemEstoque) {
    console.log("Produto não encontrado!");
    
} else {
    console.log(produtoSemEstoque);
}

// 2.3 - Encontre o primeiro produto que possua ao menos 10
// itens no estoque.
console.log("\nPRIMEIRO PRODUTO COM ESTOQUE ACIMA DE 10");
let produtoEstoqueAcima10 = produtos.find((p) => p.estoque > 10);

if (!produtoEstoqueAcima10) {
    console.log("Produto não encontrado!");
} else {
    console.log(produtoEstoqueAcima10);
    
}
