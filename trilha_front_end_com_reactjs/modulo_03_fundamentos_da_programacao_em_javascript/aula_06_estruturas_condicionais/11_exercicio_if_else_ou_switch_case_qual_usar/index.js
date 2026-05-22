/*
Questão 1. Crie um programa que recebe a hora do dia e exibe se é "Manhã", "Tarde", "Noite" ou "Hora inválida". Considere:
    - Manhã: 5h às 11h
    - Tarde: 12h às 17
    - Noite: 18h às 22h
*/

const questao1 = () => {
    const hora = 10;
    let mensagem = ""

    if (hora >= 5 && hora <= 11) {
        mensagem = "Manhã"
    } else if (hora >= 12 && hora <= 17) {
        mensagem = "Tarde";
    } else if (hora >= 18 && hora <= 22) {
        console.log("Noite");
    } else {
        mensagem = "Hora inválida!";
    }

    console.log(mensagem);
}
//questao1();

/*
Questão 2. Crie um programa que recebe o nome de uma cor e exibe uma mensagem correspondente:
    - "vermelho": "Você escolheu a cor paixão."
    - "azul": "Você escolheu a cor da tranquilidade."
    - "verde": "Você escolheu a cor da natureza."

Caso a cor não esteja na lista, exiba "Cor desconhecida.";
*/

const cor = "verde";
let mensagem = ""

switch (cor) {
    case "vermelho":
        mensagem = "Você escolheu a cor paixão.";
        break;
    case "azul":
        mensagem = "Você escolheu a cor da tranquilidade.";
        break;
    case "verde":
        mensagem = "Você escolheu a cor da natureza.";
        break;
    default:
        mensagem = "Cor desconhecida!";
        break;
        
}
console.log(mensagem);