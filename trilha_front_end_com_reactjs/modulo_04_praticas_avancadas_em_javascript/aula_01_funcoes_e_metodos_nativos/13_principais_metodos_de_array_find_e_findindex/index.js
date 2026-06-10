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
]

const exemploFind = () => {
    console.log("RECADOS");
    console.table(recados);

    console.log("\nRECADOS FILTRADOS POR ID");
    let recadosFiltrados = recados.find((r) => r.id === 312);
    console.table(recadosFiltrados);

    console.log("\nRECADOS FILTRADOS POR URGÊNCIA");
    let recadosUrgentes = recados.find((r) => r.urgente);
    console.table(recadosUrgentes);

    console.log("\nRECADOS INEXISTENTE");
    let recadoInexistente = recados.find((r) => r.id === 999);
    console.log(recadoInexistente);
};

// FindIndex
console.log("RECADOS");
console.table(recados);

console.log("\nRETORNANDO POSIÇÃO");
let posicaoRecadoLista = recados.findIndex((r) => r.id === 117);
console.log(posicaoRecadoLista);

console.log("\nRETORNANDO INEXISTENTE");
let posicaoRecadoInexistente = recados.findIndex((r) => r.id === 999);
console.log(posicaoRecadoInexistente);

console.log("\nACESSANDO PROPRIEDADE PELA POSIÇÃO");
console.log(recados[posicaoRecadoLista].descricao);




