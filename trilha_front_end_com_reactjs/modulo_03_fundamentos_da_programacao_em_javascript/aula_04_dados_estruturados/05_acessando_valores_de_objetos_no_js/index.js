console.log("Exemplo 1: Acessando propriedades com ponto (.)");
const pessoa = {
    nome: "Lucas",
    sobrenome: "Ferreira",
    idade: 31
}

console.log(`Nome: ${pessoa.nome}`);
console.log(`Sobrenome: ${pessoa.sobrenome}`);
console.log(`Idade: ${pessoa.idade}`);

console.log("\nExemplo 2: Acessando propriedades com colchetes []");
const pessoa2 = {
    nome: "Thor",
    sobrenome: "Ferreira",
    idade: "7 meses"
}
console.log(`Nome: ${pessoa2["nome"]}`);
console.log(`Sobrenome: ${pessoa2["sobrenome"]}`);
console.log(`Idade: ${pessoa2["idade"]}`);

console.log("\nExemplo 3: Atualizando propriedades.");
pessoa2.sobrenome = "Silva";
console.log(`Nome: ${pessoa2["nome"]}`);
console.log(`Sobrenome: ${pessoa2["sobrenome"]}`);
console.log(`Idade: ${pessoa2["idade"]}`);

console.log("\nExemplo 4: Uso de colchetes.");
const pessoa3 = {
    id: 1,
    nome: "Lucas",
    sobrenome: "Ferreira",
    idade: 31
}
const key = "id";

console.log(`Id: ${pessoa3[key]}`)
console.log(`Nome: ${pessoa3["nome"]}`);
console.log(`Sobrenome: ${pessoa3["sobrenome"]}`);
console.log(`Idade: ${pessoa3["idade"]}`);

