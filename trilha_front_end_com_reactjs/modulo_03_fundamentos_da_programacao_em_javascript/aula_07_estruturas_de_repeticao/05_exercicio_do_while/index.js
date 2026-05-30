// Crie um programa que solicite a pessoa usuária para inserir números positivos e continue somando esses números até que um número negativo seja digitado. Ao final, exiba o total da soma.

let soma = 0;
let numero = 0;
let numeros = [];
do {
    numero = parseInt(prompt("Digite um número inteiro positivo (ou negativo para finalizar)."));
    
    if (numero > 0) {
        soma += numero;
        numeros.push(numero);
    }
} while (numero >= 0);

console.log(`Soma: ${soma}`);
console.log(`Números digitados: ${numeros}`);
