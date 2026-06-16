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

// sort
// clientes.sort();
// console.log(clientes);

clientes.sort((a, b) => (a > b) ? 1 : -1);
console.log(clientes);

recados.sort((a, b) => (a.id > b.id) ? 1 : -1);
console.log(recados);
