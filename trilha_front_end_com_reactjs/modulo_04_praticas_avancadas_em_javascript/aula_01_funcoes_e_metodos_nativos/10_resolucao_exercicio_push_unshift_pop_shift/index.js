// 1) Um usuário criou uma lista de compras com alguns itens. Agora ele deseja adicionar novos itens, tanto no início quanto no final da lista. Adicione pelo menos 1 item no início e 1 item no final da lista.
const exercicio01 = () => {
    let listaDeCompras = ["arroz", "feijão", "carne"];
    console.log("LISTA DE COMPRAS");
    console.log(listaDeCompras);

    console.log("\nADICIONANDO ITEM NO INÍCIO");
    listaDeCompras.unshift("macarrão");
    console.log(listaDeCompras);

    console.log("\nADICIONANDO ITEM NO FINAL");
    listaDeCompras.push("farinha");
    console.log(listaDeCompras);


}

// 2) Um cliente tem uma lista de frutas e quer remover a
// última fruta da lista.
const exercicio02 = () => {
    let frutas = ["maçã", "banana", "laranja"];
    console.log("LISTA DE FRUTAS");
    console.log(frutas);

    console.log("\nREMOVENDO ÚLTIMA FRUTA");
    frutas.pop();
    console.log(frutas);
}

// 3) Um usuário tem uma estante de livros com os seguintes
// títulos: "Game of Thrones", "Harry Potter" e "O Código Da Vinci".
// Ele deseja remover o primeiro livro da estante.
let estanteDeLivros = ["Game of Thrones", "Harry Potter", "O Código Da Vinci"];

console.log("ESTANTES DE LIVROS");
console.log(estanteDeLivros);

console.log("\nREMOVENDO PRIMEIRO LIVRO");
estanteDeLivros.shift();
console.log(estanteDeLivros);

