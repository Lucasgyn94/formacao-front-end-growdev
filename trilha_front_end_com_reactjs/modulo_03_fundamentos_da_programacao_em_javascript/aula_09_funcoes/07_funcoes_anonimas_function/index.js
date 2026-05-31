const exemplo01 = () => {
    const multiplicar = function(n1, n2) {
    return n1 * n2;
}

    const n1 = 4;
    const n2 = 5;
    const resultado = multiplicar(n1,n2);
    console.log(`${n1} * ${n2} = ${resultado}`);
}

const exemplo03 = () => {
    function exibirBoasVindas (gerarMensagem) {
        const mensagem = gerarMensagem("Lucas");
        console.log(mensagem);
    }

    exibirBoasVindas(function(nome) {
        return `Olá, seja bem vindo ${nome}`;
    })
}

// função auto-executável
(function() {
    const mensagem = "Função executa imediatamente!"
    console.log(mensagem);
})();