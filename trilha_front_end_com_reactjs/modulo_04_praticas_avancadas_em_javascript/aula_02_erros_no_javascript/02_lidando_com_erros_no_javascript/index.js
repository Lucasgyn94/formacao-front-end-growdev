// SyntaxeError
const erroDeSintaxe = () => {
//    consta nome = "Lucas";
    console.log(nome);

}

// ReferenceError
const erroDeReferencia = () => {
    const a = b + 2;
    console.log(a);

}

// TypeError
const erroDeTipo = () => {
    const idade = 20;
    idade.sort();

}