// Crie um programa que faça uma contagem regressiva de um número até chegar a zero. O programa deve imprimir cada número da contagem no console.

// Instruções:

// 1. Solicite que pessoa usuária insira um número inteiro positivo.
// 2. Imprima cada número no console.
// 3. quando chegar em zero, imprima "Contagem finalizada!".

// - Use prompt() para obter a entrada da pessoa usuária.
// - Certifique-se de que o número seja um inteiro positivo antes de começar a contagem.

// Saída no console
// 2
// 1
// 0
// Contagem finalizada

let numeroUsuario = parseInt(prompt("Digite um número: "));

if (numeroUsuario > 0) {
    while (numeroUsuario >= 0) {
        console.log(numeroUsuario);
        numeroUsuario--;
    }
    console.log("Contagem finalizada!");
} else {
    console.log("Digite um número inteiro positivo!");
}
