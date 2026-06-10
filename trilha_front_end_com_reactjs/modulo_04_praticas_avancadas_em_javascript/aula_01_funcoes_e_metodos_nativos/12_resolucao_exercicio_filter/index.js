// 1) Um usuário tem uma lista de números e deseja filtrar apenas os números pares.
const exercicio01 = () => {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("LISTA DE NÚMEROS");
    console.log(numeros);

    console.log("\nNÚMEROS PARES")
    let numerosPares = numeros.filter((n) => n % 2 == 0);
    console.log(numerosPares);
}


// 2) Uma cliente tem uma lista de nomes e deseja filtrar apenas os nomes que iniciam com a palavra "João".
const exercicio02 = () => {
    let nomes = ["João", "Maria", "Daphne", "Pedro", "João Pedro", "Ana", "José"];

    console.log("LISTA DE NOMES");
    console.log(nomes);


    let nomesFiltrados = nomes.filter((n) => n.startsWith("João"));
    console.log("\nNOMES QUE INICIAM COM A PALAVRA 'João'");
    console.log(nomesFiltrados);
}

// 3) Um usuário tem uma lista de objetos onde cada objeto possui várias propriedades, incluindo uma informação sobre o nível de urgência (de 1 a 5), sendo 1 pouco urgente e 5 muito urgente. O objetivo é filtrar apenas os objetos onde o campo urgente é maior ou igual a 3.
const exercicio03 = () => {
    let itens = [
        { nome: "Item 1", categoria: "Eletrônicos", urgente: 5 },
        { nome: "Item 2", categoria: "Livros", urgente: 3 },
        { nome: "Item 3", categoria: "Alimentos", urgente: 4 },
        { nome: "Item 4", categoria: "Roupas", urgente: 2 },
        { nome: "Item 5", categoria: "Ferramentas", urgente: 5 },
    ];
    console.log("LISTA DE OBJETOS");
    console.table(itens);

    console.log("\nOBJETOS COM URGÊNCIA MAIOR OU IGUAL A 3");
    let itensFiltrados = itens.filter((i) => i.urgente >= 3);
    console.table(itensFiltrados);

}


// 4) Um cliente tem uma lista de cidades com seus respectivos estados e deseja filtrar apenas as cidades que estão licalizadas no estado do Rio Grande do Sul (RS).
let cidades = [
    {
        nome: "Porto Alegre",
        estado: "RS"

    },
    {
        nome: "Pelotas",
        estado: "RS"

    },
    {
        nome: "Caxias do Sul",
        estado: "RS"

    },
    {
        nome: "Curitiba",
        estado: "PR"

    },
    {
        nome: "Florianópolis",
        estado: "SC"

    },
];

console.log("LISTA DE CIDADES - ESTADOS");
console.table(cidades);

console.log("\nLISTA DE CIDADES DO RIO GRANDE DO SUL - RS");
let cidadesRS = cidades.filter(c => c.estado === "RS");
console.table(cidadesRS);

