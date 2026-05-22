// Crie uma estrutura switch que recebe uma variável nota (A, B, C, D OU F)  e exibe uma mensagem correspondente à avaliação:

/*
A: "Excelente!"
B: "Muito bom!"
C: "Bom"
D: "Precisa melhorar"
E: "Reprovado"

Para qualquer outra nota, exiba: "Nota inválida"
*/

const nota = "C";
let mensagem = "";

switch(nota) {
    case "A":
        mensagem = "Excelente!";
        break;
    case "B":
        mensagem = "Muito bom!";
        break;
    case "C":
        mensagem = "Bom!";
        break;
    case "D":
        mensagem = "Precisa melhorar!";
        break
    case "E":
        mensagem = "Reprovado!";
        break
    default:
        mensagem = "Nota inválida!\nEscolha entre A e E";
        break;
}

console.log(mensagem);