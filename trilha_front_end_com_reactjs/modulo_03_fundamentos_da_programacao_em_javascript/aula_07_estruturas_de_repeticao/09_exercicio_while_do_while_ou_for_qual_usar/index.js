// Questão 1: Imprima os números de 1 a 10, cada um em uma linha.
const questao01 = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// Questão 2: Peça ao usuário para inserir palavras. Continue pedindo até que o usuário digite a palavra "sair". Exiba cada palavra digitada.


const questao02 = () => {
    let arrayPalavra = [];
    let palavra = "";
    do {
        palavra = prompt("Digite uma palavra ou 'sair' para encerrar o programa");
        arrayPalavra.push(palavra);
    } while(palavra != "sair");

    for (let i = 0; i < arrayPalavra.length - 1; i++) {
        console.log(arrayPalavra[i]);
    }
}

// Questão 3: Peça ao usuário que insira a palavra "aceito" para confirmar a leitura dos termos. Continue pedindo até que a palavra "aceito" seja digitada.

let palavra = "";

do {
    palavra = prompt("Digite 'aceito' para confirmar a leitura dos termos!");

} while (palavra !== "aceito");

console.log(`Você concordou com os termos com sucesso!`);