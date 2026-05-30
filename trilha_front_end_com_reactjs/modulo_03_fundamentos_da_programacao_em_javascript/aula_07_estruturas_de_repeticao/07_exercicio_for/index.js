// Crie um programa que exiba a tabuada de multiplicação de um número fornecido pela pessoa usuária.

// Saída no console
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30


const resolucaoDoWhile = () => {
    // const numero = 3;
    let contador = 1;
    let numero = parseInt(prompt("Digite um número para ver a sua tabuada ou 0 para sair: "));

    do {
        const resultado = numero * contador;
        console.log(`${numero} x ${contador} = ${resultado}`);
        contador++;
        
    } while(contador <= 10);    
}

resolucaoDoWhile();

const resolucaoFor = () => {
    let numero = parseInt(prompt("Digite um número para ver a sua tabuada ou 0 para sair!"));

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}