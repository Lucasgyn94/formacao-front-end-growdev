const exemplo_01 = () => {
    let contador = 1;

    while (contador <= 5) {
        console.log(contador);
        contador++;
    }
}

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;
let acertou = false;
console.log(numeroAleatorio);


while(!acertou) {
    const palpite = parseInt(prompt("Digite um número entre 1 e 10!"));
    
    
    tentativas++;

    if (palpite === numeroAleatorio) {
        console.log("Parabéns! Você acertou em " + tentativas + ".");
        acertou = true;
    } else {
        alert("Tente novamente!");
    }
}

