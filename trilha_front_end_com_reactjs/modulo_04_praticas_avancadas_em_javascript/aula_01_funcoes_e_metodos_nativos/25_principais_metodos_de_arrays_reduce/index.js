// ================================
// 📦 LISTA DE COMPRAS (ARRAY)
// ================================

// Aqui temos um array de objetos.
// Cada objeto representa um item da lista de compras.
const listaDeCompras = [
    {
        id: 55,
        descricao: "Arroz",
        valor: 20.00,
        categoria: "Alimentos"
    },
    {
        id: 90,
        descricao: "Feijão",
        valor: 10.00,
        categoria: "Alimentos"
    },
    {
        id: 47,
        descricao: "Refrigerante",
        valor: 8.50,
        categoria: "Bebidas"
    },
    {
        id: 11,
        descricao: "Óleo",
        valor: 12.00,
        categoria: "Bazar"
    }
];


// ================================
// 🔢 EXEMPLO 01 - SOMAR VALORES
// ================================

const exemplo01 = () => {
    // Valor inicial do acumulador
    const valorInicial = 0;

    // O reduce vai percorrer toda a lista
    // "soma" → acumulador
    // "item" → cada objeto da lista
    let somaLista = listaDeCompras.reduce((soma, item) => {
        
        // A cada iteração, soma o valor do item atual
        return soma += item.valor;

    }, valorInicial); // começa em 0

    // Exibe o resultado final no console
    console.log("Total da lista:", somaLista);
};


// ================================
// 🗂️ AGRUPAR POR CATEGORIA
// ================================

// Aqui usamos reduce para transformar o array em um objeto agrupado
let categorias = listaDeCompras.reduce((atual, item) => {

    // Se ainda NÃO existe essa categoria no objeto...
    if (!atual[item.categoria]) {
        // Cria um array vazio para essa categoria
        atual[item.categoria] = [];
    }

    // Adiciona o item dentro da categoria correspondente
    atual[item.categoria].push(item);

    // Retorna o acumulador atualizado
    return atual;

}, {}); // começa com objeto vazio


// ================================
// 📊 EXIBIÇÃO DOS DADOS
// ================================

// Mostra o objeto agrupado em formato de tabela no console
console.table(categorias);

