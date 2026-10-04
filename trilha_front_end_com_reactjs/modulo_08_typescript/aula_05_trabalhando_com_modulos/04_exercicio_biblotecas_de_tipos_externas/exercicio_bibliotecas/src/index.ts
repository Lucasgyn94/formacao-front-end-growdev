import uniq from "lodash/uniq.js";
import sortBy from "lodash/sortBy.js";
import cloneDeep from "lodash/cloneDeep.js";

// 1. Removendo números duplicados

const numeros: number[] = [5, 2, 8, 2, 5, 1, 8];

const numerosUnicos: number[] = uniq(numeros);

console.log(`Números originais: ${numeros}`);
console.log(`Sem duplicados: ${numerosUnicos}`);

// 2. Ordenando por uma propriedade
interface Produto {
    nome: string,
    preco: number
}

const produtos: Produto [] = [
    {nome: "Teclado Gamer", preco: 150},
    {nome: "Mouse Gamer", preco: 80},
    {nome: "Monitor Gamer", preco: 900},
];

const produtosOrdenados: Produto[] = sortBy(produtos, "preco");

console.log(`Produtos por preço: `, produtosOrdenados);

// 3. Criando uma cópia profunda de um objeto
interface Usuario {
    nome: string,
    endereco: {
        cidade: string,
        estado:string
    };
}

const usuarioOriginal: Usuario = {
    nome: "Lucas",
    endereco: {cidade: "Goiânia", estado: "Go"}
};

const copiaUsuario: Usuario = cloneDeep(usuarioOriginal);

// Alterando o objeto interno da copia
copiaUsuario.endereco.cidade = "Trindade";

console.log("Usuário original: ", usuarioOriginal);
console.log("Usuário copiado: ", copiaUsuario);
