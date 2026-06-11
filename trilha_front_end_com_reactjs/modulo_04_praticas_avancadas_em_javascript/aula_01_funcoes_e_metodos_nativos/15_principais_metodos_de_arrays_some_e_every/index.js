let recados = [
    {
        id: 312,
        descricao: "Estudar JavaScript",
        urgente: true
    },
    {
        id: 412,
        descricao: "Fazer os exercícios",
        urgente: true
    },
    {
        id: 117,
        descricao: "Entender listas",
        urgente: false
    },
    {
        id: 55,
        descricao: "Comparar JavaScript com Python",
        urgente: false
    },
];

// Some (Testa se tem algum item que atende a determinada condição)
console.log("EXEMPLO SOME");
let existeRecadosUrgentes = recados.some(r => r.urgente);
console.log(existeRecadosUrgentes);

let existeRecadoJavascript = recados.some(r => r.descricao.includes("JavaScript"));

console.log(existeRecadoJavascript);

// Every (testa se todos os itens atende a determinada condição)
console.log("\nEXEMPLO EVERY");
let todosRecadosSaoUrgentes = recados.every(r => r.urgente);
console.log(todosRecadosSaoUrgentes);