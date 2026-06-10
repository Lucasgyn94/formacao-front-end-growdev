const exemplo01 = () => {
    let numeros = [1, 7, 19, 20, 6, 109, 77, 42, 6, 1.5, 200];
    console.log("LISTA DE NÚMEROS");
    console.log(numeros);


    let numerosGrandes = numeros.filter(n => n > 20);
    console.log("\nNÚMEROS MAIORES QUE 20");
    console.log(numerosGrandes);

}

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

console.table(recados);

console.log("\nFILTRANDO RECADOS URGENTES");
// let recadosUrgentes = recados.filter(r => r.urgente === true);
let recadosUrgentes = recados.filter((r) => r.urgente);
console.table(recadosUrgentes);

console.log("\nFILTRANDO RECADOS JAVASCRIPT");
let recadosJavascript = recados.filter((r) => r.descricao.includes("JavaScript"));
console.table(recadosJavascript);