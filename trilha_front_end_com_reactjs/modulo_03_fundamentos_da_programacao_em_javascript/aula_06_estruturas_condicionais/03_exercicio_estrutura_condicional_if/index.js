// Questão 1. Crie um programa que recebe um número e verifica se ele é par. Caso seja, exiba "O número é par";
const questao1 = () => {
    const numero = 2;

    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par!`);
    }
}
questao1();


// Questão 2. Crie um programa que recebe um número e verifica se ele é negativo. Caso seja, exiba "O número é negativo".
const questao2 = () => {
    const numero = -2;

    if (numero < 0) {
        console.log(`O número ${numero} é negativo!`);
    }
}
questao2();

// Questão 3. Crie um programa que recebe um valor e verifica se ele é maior que um limite de R$ 100,00. Se for, exiba "O valor excede o limite".

const questao3 = () => {
    const valor = 101;
    const limite = 100;

    if (valor > limite) {
        console.log("O valor excede o limite!");
    }
}

questao3();