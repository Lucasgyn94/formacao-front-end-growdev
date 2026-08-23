// ## Exercício

// - Crie um arquivo chamado `calculator.js`.
// - Escreva uma função `add` que recebe dois números como parâmetros e retorna a soma deles.
// - Imprima o resultado da soma de dois números de exemplo usando `console.log`.

function add(n1, n2) {
    return n1 + n2;
}

const n1 = 5;
const n2 = 5;
const soma = add(n1, n2);

console.log(`${n1} + ${n2} = ${soma}`);