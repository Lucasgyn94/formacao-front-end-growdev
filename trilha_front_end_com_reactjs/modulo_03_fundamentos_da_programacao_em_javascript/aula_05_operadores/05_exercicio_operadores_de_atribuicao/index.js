// Utilize operadores de atribuição

/*Questão 1. Um cliente fez um depósito de R$ 200,00 em sua conta bancária, que tinha um saldo de R$ 1000,00. Atualize o saldo da conta. */

const questao01 = () => {
    console.log("Questão 01\n");
    let saldo = 1000.00;
    const valorDeposito = 200.00;
    //const saldoTotal = saldo + valorDeposito;
    saldo += valorDeposito;
    console.log(        
        "Valor Depósito: " + "R$ " + valorDeposito + "\n" + 
        "Saldo Atual: " + "R$ " + saldo
    );

}
questao01();

/*Questão 2. Uma loja vendeu 5 unidades de um produto que tem 50 unidades em estoque. Atualize o estoque */
const questao02 = () => {
    console.log("==================\n")
    console.log("Questão 02\n");
    const unidadesVendidas = 5;
    let estoque = 50;
    //const estoqueAtualizado = estoque - unidadesVendidas;
    estoque -= unidadesVendidas;
    
    console.log(
        "Unidades Vendidas: " + unidadesVendidas + "\n" +
        "Estoque: " + estoque + " unidades"
    );
}

questao02();