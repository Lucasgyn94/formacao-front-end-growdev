// Use operadores aritméticos para resolver:

/*Questão 1. Dado que um funcionário trabalha 8 horas por dia e trabalhou 5 dias na semana, calcule o total de horas trabalhadas. */

const questao1 = () => {
    const cargaHorariaDiaria = 8;
    const diasTrabalhados = 5;
    const totalDeHorasTrabalhadas = cargaHorariaDiaria * diasTrabalhados;
    console.log(`Total de Horas trabalhadas na semana: ${totalDeHorasTrabalhadas} horas!`);
}

//questao1();

/*Questão 2. O preço de um poroduto é R$ 50,00 e um cliente comprou 3 unidades. Ele recebeu um desconto de R$ 10,00 no final. Calcule o valor total da compra após aplicar o desconto. */
const precoProduto = 50.00;
const unidadesCompradas = 3;
const desconto = 10.00;
const valorTotal = ((precoProduto * unidadesCompradas) - desconto);
console.log(`Valor total compra: R$ ${valorTotal}`);