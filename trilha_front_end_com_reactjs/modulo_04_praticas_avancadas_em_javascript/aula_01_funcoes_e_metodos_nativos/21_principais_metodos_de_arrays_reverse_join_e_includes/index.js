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

let clientes = ["Lucas", "Thor", "Cleide", "Pedro"];

// Join - Junta os itens de uma lista em uma única string
let exemploJoin = () => {
    let clientesTexto = clientes.join("; ");
    console.log(clientesTexto);

    let recadosTexto = recados
        //.filter((r) => r.urgente)
        .map((r) => r.descricao)
        .join("; ");
    console.log(recadosTexto);

}
// Includes
let clienteExistente = clientes.includes("Lucas");
console.log(clienteExistente);

// Reverse
let listaReverso = clientes.reverse();
console.log(listaReverso);