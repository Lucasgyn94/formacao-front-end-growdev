// 1) Um engenheiro está trabalhando em um projeto e precisa calcular a potência de um número. Faça um código que calcule o valor de 5 elevado ao cubo (5³).

const exercicio1 = () => {
    const calculadoraDePotencia = (numeroBase, expoente) => {
        const potencia = Math.pow(numeroBase, expoente);
        return `${numeroBase} elevado à ${expoente} = ${potencia}`;
    }

    const numeroBase = 2;
    const expoente = 2;
    const resultado = calculadoraDePotencia(numeroBase, expoente);
    console.log(resultado);

}
// 2) Uma pessoa está preenchendo um formulário online e inseriu a idade como "25 anos" (uma string). O sistema precisa extrair apenas o número inteiro dessa string.
const exercicio2 = () => {
    let idade = "25 anos";
    let idadeInteira = parseInt(idade);
    console.log(idadeInteira);
}

// 3) Um contador está calculando a taxa de um empréstimo e obteve um número com muitas casas decimais. Ele precisa formatar esse número para que tenha apenas 2 casas decimais.
const exercicio3 = () => {
    const taxaEmprestimo = 1.95769836;
    const taxaEmprestimoFormatada = taxaEmprestimo.toFixed(2);
    console.log(taxaEmprestimo);
    console.log(taxaEmprestimoFormatada);
}


// 4) Uma equipe de cientistas registrou as temperaturas mais altas de três cidades diferentes. Agora, eles precisam descobrir qual foi a maior temperatura registrada entre essas cidades.

const temperatura1 = 38;
const temperatura2 = 45;
const temperatura3 = 42;

const maiorTemperatura = Math.max(temperatura1, temperatura2, temperatura3);
console.log(maiorTemperatura);