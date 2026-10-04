// Imprime cada elemento do array.
function printArray<T>(itens: T[]): void {
    itens.forEach((item) => {
        console.log(item);
        
    });
}

// Retorna o primeiro elemento
// Se o array tiver vazio, retorna undefined
function getFirstElement<T>(itens: T[]): T | undefined {
    return itens[0];
}

// Arrays de números e strings.
const numeros: number[] = [10, 20, 30, 40, 50];
const nomes: string[] = ["Lucas", "Thor", "Ana"];

// Exibição dos elementos.
console.log("Array de números: ");
printArray(numeros);

console.log("\n");

console.log("Array de strings: ");
printArray(nomes)



// Definição do tipo dos objetos.
interface Produto {
    nome: string,
    preco: number
}

const produtos: Produto[] = [
    {nome: "Teclado Gamer", preco: 150},
    {nome: "Mouse Gamer", preco: 80},
    {nome: "Monitor Gamer", preco: 900}
];

// Consulta do primeiro elemento de cada array
const primeiroNumero = getFirstElement(numeros);
const primeiroProduto = getFirstElement(produtos);

console.log("Primeiro número: ", primeiroNumero);
console.log("Primeiro produto: ", primeiroProduto);

// Teste com array vazio
const numerosVazios: number[] = [];
console.log("Primeiro elemento do array vazio: ", getFirstElement(numerosVazios));

