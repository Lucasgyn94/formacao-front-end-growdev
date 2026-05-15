const exemplo1 = () => {
    const chovendo = true;

    if (chovendo) {
        console.log("Levar guarda-roupa");
    }
}

//exemplo1();

const exemplo2 = () => {
    const idade = 18;

    if (idade >= 18) {
        console.log("Você é maior de idade!");
    }
}

//exemplo2();

const exemplo3 = () => {
    if (true) {
        console.log("Entrou no IF");
    }
}

//exemplo3();

const nome = "Lucas";
const email = "";
const telefone = "6299999-9999";

if ((nome === "") || (email === "") || (telefone === "")) {
    console.log("Faltam informações no formulário!");
}