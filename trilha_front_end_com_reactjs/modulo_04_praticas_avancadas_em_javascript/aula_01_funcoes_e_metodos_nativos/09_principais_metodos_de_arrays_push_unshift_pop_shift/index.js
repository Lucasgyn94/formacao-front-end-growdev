console.log("LISTA DE COMPRAS");
let listaCompras = ["arroz", "feijão", "pão"];
console.log(listaCompras);

// Adicionar itens no final da lista
console.log("\nADICIONANDO ITENS AO FINAL DA LISTA: ");
let tamanho = listaCompras.push("macarrão");
console.log(listaCompras);
console.log(tamanho);

// Adicionar itens ao início da lista
console.log("\nADICIONANDO ITENS AO INÍCIO DA LISTA: ");
listaCompras.unshift("cebola");
console.log(listaCompras);

console.log(listaCompras.length);


// Removendo elemento do final da lista
console.log("\nREMOVENDO ITENS DO FINAL DA LISTA");
let elementoRemovido = listaCompras.pop();
console.log(listaCompras);

// Removendo elemento do início da lista
console.log("\nREMOVENDO ITENS DO INÍCIO DA LISTA");
listaCompras.shift();
console.log(listaCompras);
