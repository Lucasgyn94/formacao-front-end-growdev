const exemplo1 = () => {
    const chovendo = false;

    if (chovendo) {
        console.log("Levar Guarda-Chuva!");
    } else {
        console.log("Levar óculos de sol!");
    }
}

const exemplo2 = () => {
    const idade = 18;

    if (idade >= 18) {
        console.log("Você é maior de idade!");
    } else {
        console.log("Você é menor de idade!");
    }
}

const exemplo3 = () => {
    const usuario = "admin";
    senha = "123456";

    if (usuario === "admin" && senha === "123456") {
        console.log("Logim bem-sucedido!")
    } else {
        console.log("Dados incorretos!");
    }
}

// condicao ? trecho para verdadeiro : trecho para falso

const idade = 17;
const resultado = (idade >= 18) ? "Você é maior de idade!" : "Você e menor de idade!";
console.log(resultado);