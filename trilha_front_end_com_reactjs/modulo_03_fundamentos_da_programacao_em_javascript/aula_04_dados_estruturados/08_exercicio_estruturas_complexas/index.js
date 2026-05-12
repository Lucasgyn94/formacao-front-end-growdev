/*
Crie um array chamado produtos, onde cada objeto representa um produto com as propriedades nome, preço e categoria. A tarefa é acessar e exibir as infomrações do terceiro produto na lista.
*/

const produtos = [
    {
        nome: "Smartphone Redmi Note 12S",
        preco: 1999.99,
        categoria: "Smartphones"
    },
    {
        nome: "Notebook Vaio",
        preco: 3999.99,
        categoria: "Computadores"
    },
    {
        nome: "Bicicleta GTSM-1",
        preco: 3299.99,
        categoria: "Bicicletas"
    }
]

console.log(produtos[2].nome);

console.log(produtos[2].preco);

console.log(produtos[2].categoria);
