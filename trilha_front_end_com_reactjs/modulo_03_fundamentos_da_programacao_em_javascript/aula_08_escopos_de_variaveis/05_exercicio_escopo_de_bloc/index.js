/* Questão 1. Em um bloco if, crie uma variável chamada valorBloco usando let e atribua a ela o valor 50. Imprima essa variável dentro do bloco e, em seguida, tente imprimir fora do bloco. O que acontece? */

const desafio01 = () => {
    if (true) {
        let valorBloco = 50;
        console.log(valorBloco);
    }
    console.log(valorBloco); //Erro: valor de bloco não foi definido
}
/* Questão 2: Crie uma variável chamada numero usando const e atribua o valor 10. Em um bloco for, crie uma variável chamada resultado usando let que multiplique numero por 3. Imprima resultado dentro do
bloco e, em seguida, tente imprimir fora do bloco. O que acontece? */
const desafio03 = () => {
    const numero = 10;

    for (let i = 0; i < 1; i++) {
        let resultado = numero * 3;
        console.log(resultado);
    }

    console.log(resultado); // resultado não foi definido - fora de escopo
}

console.log(nome);
let nome = "lucas";
