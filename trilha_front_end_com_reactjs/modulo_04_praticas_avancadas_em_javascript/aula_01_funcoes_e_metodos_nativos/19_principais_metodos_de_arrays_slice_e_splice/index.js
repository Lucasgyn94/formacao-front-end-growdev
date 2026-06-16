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

const exemploSlice = () => {
    // SLICE - (Fatiar) - Extrai uma parte do array sem modificar o array original
    //let recadosFatiados = recados.slice(1);
    let recadosFatiados = recados.slice(1, 3);
    console.log(recadosFatiados);
    console.log(recados);
}

//exemploSlice();

//  SPLICE - (Emendar / Modificar) - Altera o array original (mutação), permitindo remover, substituir ou adicionar novos elementos.

let recadosRemovidos = recados.splice(1, 1);
console.log(recadosRemovidos);
console.log(recados);