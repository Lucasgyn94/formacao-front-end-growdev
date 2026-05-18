/*
Escreva um programa que receba uma nota de 0 a 100 e exiba:

- "Reprovado" para notas menores de 50
- "Recuperação" para notas entre 50 e 69
- "Aprovado" para notas entre 70 e 89
- "Excelente" para notas 90 ou maiores

*/

const nota = 99;

if (nota >= 0 && nota <= 100) {
    if (nota < 50) {
        console.log("Reprovado!");
    } else if (nota >= 50 && nota <= 69) {
        console.log("Recuperação!");
    } else if (nota >= 70 && nota <= 89) {
        console.log("Aprovado!");
    } else {
        console.log("Excelente!");
    }
} else {
    console.log("Digite uma nota válida entre 0 e 100.");
}