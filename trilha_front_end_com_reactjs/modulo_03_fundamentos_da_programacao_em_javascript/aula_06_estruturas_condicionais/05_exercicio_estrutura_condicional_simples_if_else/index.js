// Questão 1. Verificar se uma pessoa é elegível para um prêmio com base em idade e número de compras. Regras: a pessoa será elegível se for maior de 18 anos e tiver feito mais de 5 compras, ou se form membro VIP. Utilize variáveis para simular comportamentos.
const questao1 = () => {
    const idade = 18;
    const qtdCompras = 5;
    const membroVip = true;
    const elegivelPremio = (idade >= 18 && qtdCompras > 5) || (idade >= 18 && membroVip) ? "Você é elegível para o prêmio!" : "Você não é elegível para o prêmio!";

    console.log(elegivelPremio);
}

// Questão 2. Verifica se a pessoa tem idade suficiente para dirigir e se possui carteira de habilitação. Regras: Só poderá dirigir se tiver pelo menos 18 anos e tiver carteira de habilitação.

const idade = 18;
const possuiCNH = true;
const podeDirigir = (idade >= 18 && possuiCNH) ? "Você está apto dirigir" : "Você não está apto para dirigir!";
console.log(podeDirigir);