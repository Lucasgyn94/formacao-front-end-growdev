console.log("Lista de Compras:");
const listaDeCompras = ["Maça", "Banana", "Laranja", "Uva"];
console.log(listaDeCompras);

console.log(`Primeira fruta: ${listaDeCompras[0]}`);
console.log(`Segunda fruta: ${listaDeCompras[1]}`);
console.log(`Terceira fruta: ${listaDeCompras[2]}`);
console.log(`Quarta fruta: ${listaDeCompras[3]}`);
console.log(`Tamanho do array: ${listaDeCompras.length}`);

console.log("\nLista de Alunos:");
const alunos = ["Lucas", "Maria", "João"];
console.log(alunos);

alunos[1] = "Thor";
console.log(alunos);

alunos[alunos.length] = "Maria";
console.log(alunos);
