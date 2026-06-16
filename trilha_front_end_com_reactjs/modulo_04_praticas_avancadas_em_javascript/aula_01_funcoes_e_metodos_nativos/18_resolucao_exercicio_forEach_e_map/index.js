// 1) Em um supermercado, o gerente decidiu dar um desconto de 10% em alguns produtos.
// Sua tarefa é calcular o preço final desses produtos com o desconto aplicado
// e exibir a nova lista de preços.
const exercio01 = () => {
    let produtos = [
        { nome: "Arroz", preco: 20 },
        { nome: "Feijão", preco: 10 },
        { nome: "Macarrão", preco: 8 },
        { nome: "Açúcar", preco: 5 },
    ];

    console.log("LISTA ORIGINAL");
    console.log(produtos);

    let listaProdutosComDesconto = produtos.map((p) => {
        let desconto = (p.preco * 10) / 100;
        let precoComDesconto = p.preco - desconto;
        return {
            nome: p.nome,
            preco: precoComDesconto
        }
    });
    console.log("\nLISTA COM DESCONTO");
    console.log(listaProdutosComDesconto);
}
//exercio01();

// 2) Você trabalha numa biblioteca e precisa criar uma lista para saber quantas páginas
// ainda faltam para terminar de ler cada livro. Para isso, você tem uma lista de livros
// com o total de páginas e as páginas que já foram lidas.

const exercicio02 = () => {
    let livros = [
        { titulo: "O Senhor dos Anéis", totalPaginas: 1000, paginasLidas: 320 },
        { titulo: "1984", totalPaginas: 328, paginasLidas: 100 },
        { titulo: "O Código da Vinci", totalPaginas: 96, paginasLidas: 50 },
    ];

    let livrosComContagemDePaginasRestantes = livros.map((l) => {
        let paginasRestantes = l.totalPaginas - l.paginasLidas;

        return {
            titulo: l.titulo,
            // totalPaginas: l.totalPaginas,
            // paginasLidas: l.paginasLidas,
            paginasRestantes: paginasRestantes
        };
    });

    console.table(livrosComContagemDePaginasRestantes);
}
//exercicio02();

// 3) Você está organizando uma festa e tem uma lista de convidados. Agora quer enviar uma mensagem de confirmaçõa para cada um deles. Mostre no console uma mensagem para cada convidado usando forEach.
let convidados = ["Lucas", "João", "Thor", "Fernanda"];

convidados.forEach((c) => {
    console.log(`Olá convidado: ${c}`);
})