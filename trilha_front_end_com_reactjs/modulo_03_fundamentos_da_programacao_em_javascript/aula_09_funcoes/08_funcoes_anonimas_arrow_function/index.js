const exemploAdicao = () => {
        const somar = (n1, n2) => {
        const soma = n1 + n2;
        return soma;
    }

    const n1 = 5;
    const n2 = 5;
    const resultado = somar(n1, n2); 
    console.log(`${n1} + ${n2} = ${resultado}`);
}

const exemploMultiplicacao = () => {
    const multiplicar = numero => numero * 2;
    //const multiplicar = (numero) => numero * 2; Quando queremos passar mais de um parâmetro utilizamos o parêntese();

    const numeroEscolhido = 5;
    const resultado = multiplicar(numeroEscolhido);
    console.log(resultado);
}

const exemploBoasVindas = () => {

    const boasVindas = (nome) => `Olá, ${nome}`;
    const mensagem = boasVindas("Lucas");
    console.log(mensagem);

}

const exemploBoasVindas2 = () => {
    const boasVindas2 = () => `Olá Lucas`;
    const mensagem = boasVindas2();
    console.log(mensagem);
}

const exemploBoasVindas3 = () => {
    function exibirBoasVindas(gerarMensagem) {
        const mensagem = gerarMensagem("Lucas");
        console.log(mensagem);
    }

    exibirBoasVindas((nome) => `Olá, seja bem-vindo ${nome}`);
}

((nome) => {
    console.log(`Olá! Seja bem-vindo ${nome}.`);
})(`Lucas`);