/*
Questão 1. A partir de uma idade da pessoa usuária, verifique se ela pode votar (idade maior ou igual a 16) e se ela é obrigada a votar (idade entre 18 e 70 anos)
*/
console.log("========================")
console.log("Questão 01");
console.log("========================")
const idade = 18;
const podeVotar = idade >= 16;
const obrigadoVotar = (idade >= 18) && (idade < 70);
console.log(`Idade: ${idade} anos.\nPode votar: ${podeVotar}`);
console.log(`Idade: ${idade} anos.\nObrigado votar: ${obrigadoVotar}`);


/*
Questão 2. Você está programando um sistema de e-commerce e precisa verificar se a pessoa cliente tem direito a um desconto. As regras são:

- A pessoa cliente só tem direito ao desconto se for VIP Ou se o valor da compra for maior ou igual a 100 reais.

Dica: Utilize as variáveis com as condições.
*/
console.log("========================")
console.log("Questão 02");
console.log("========================")
const clienteVip = false;
const valorCompra = 100.00;
const direitoDesconto = (clienteVip) || (valorCompra >= 100.00);
console.log(`Direito ao desconto: ${direitoDesconto}`);