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

// MAP
const exemploMap = () => {

    let recadosMap = recados.map((r) => {
        return {
            id: r.id + 100,
            descricao: r.descricao,
        }
    });

    console.log(recados);
    console.log(recadosMap);

    console.log("\nLISTA DE DESCRIÇÕES");
    let listaDescricoes = recados.map(r => r.descricao);
    console.log(listaDescricoes);

}
// ForEach
recados.forEach((r) => {
    r.id = r.id + 500;
    console.log(r);

});

console.table(recados);
