let nomeCliente = "Lucas Ferreira da Silva";

console.log(nomeCliente);
console.log(nomeCliente.startsWith("L"));
console.log(nomeCliente.endsWith("a"));
console.log(nomeCliente.includes("da Silva"));

let clienteSilva = nomeCliente.includes("Silva");

if (clienteSilva) {
    console.log("O cliente é da família Silva!");
} else {
    console.log("O cliente não é da família Silva!");
}

console.log("\nDisciplinas:\n");
let disciplinas = "FrontEnd, BackEnd, Banco de Dados, GIT";
console.log(disciplinas);

let listaDisciplinas = disciplinas.split(", ");
console.log("\nLista de disciplinas:\n");
console.log(listaDisciplinas);
console.log(listaDisciplinas[1]);

console.log("\nConcatenação");
disciplinas = disciplinas.concat(", ", "React", ", ", "Python");
console.log(disciplinas);