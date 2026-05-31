/* Questão 1. Crie uma variável global chamada contadorGlobal e atribua o valor 0. Em seguida, incremente essa variável e imprima o
resultado no console. */
const questao01 = () => {
    let contadorGlobal = 0;
    console.log(`Valor inicial do contador global: ${contadorGlobal}`);

    contadorGlobal++;
    console.log(`Valor após incrementação: ${contadorGlobal}`);

}
/* Crie uma variável global chamada mensagemGlobal (usando const) e atribua o valor "Olá, mundo!". Imprima essa variável no console. Em seguida, tente alterar o valor da variável para "Mudança de mensagem"
e imprima novamente. O que acontece? */
const mensagemGlobal = "Olá, mundo!";
console.log(mensagemGlobal);

mensagemGlobal = "Mudança de mensagem";
console.log(mensagemGlobal);