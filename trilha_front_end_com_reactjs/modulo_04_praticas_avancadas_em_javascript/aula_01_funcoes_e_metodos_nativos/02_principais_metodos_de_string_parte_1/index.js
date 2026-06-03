
const exemploTrim = () => {
    let nome = "    Lucas Ferreira      ";
    console.log(nome.trim());
    console.log(nome.trimStart());
    console.log(nome.trimEnd());

}

const exemploToLowerAndUpperCase = () => {
    let titulo = "Práticas avançadas em javascript";
    console.log(titulo);
    console.log(titulo.toUpperCase());
    console.log(titulo.toLowerCase());

}

let titulo = "Práticas avançadas em javascript";
console.log(titulo);

let tituloPython = titulo.replace("javascript", "python");
console.log(tituloPython);

let tituloSemLetraA = titulo.replaceAll("a", "X");
console.log(tituloSemLetraA);