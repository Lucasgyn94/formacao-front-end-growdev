let taxaDeJuros = 1.8912123672;

// Arredondamento
const exemploArrendodamento = () => {
    console.log("===========================")
    console.log("ARREDONDAMENTO");
    console.log("===========================")

    
    console.log(taxaDeJuros);

    console.log(`Arrendondamento para baixo: ${Math.floor(taxaDeJuros)}`); // para baixo

    console.log(`\nArrendondamento para cima: ${Math.ceil(taxaDeJuros)}`); // para cima

    console.log(`\nArrendondamento para inteiro mais próximo: ${Math.round(taxaDeJuros)}`);

}

// CONVERSÃO
const exemploConversao = ()=> {
    console.log("\n===========================")
    console.log("CONVERSÃO");
    console.log("===========================")
    console.log(taxaDeJuros.toString());
    console.log(taxaDeJuros.toFixed(2));
    console.log(taxaDeJuros.toPrecision(3));

}

// Max e Min
const exemploMaxAndMin = () => {
    console.log("\n===========================")
    console.log("MAX E MIN");
    console.log("===========================")
    let nota1 = 1.9;
    let nota2 = 7.5;
    let nota3 = 4.5;

    let maiorNota = Math.max(nota1, nota2, nota3);
    console.log(maiorNota);

    let menorNota = Math.min(nota1, nota2, nota3);
    console.log(menorNota);

}

// Random - Aleatórios
console.log("\n===========================")
console.log("RANDOM - NÚMEROS ALEATÓRIOS");
console.log("===========================")
let aleatorio = Math.random();


//aleatorioEntre0e100 = (aleatorio * 1000) % 100;
aleatorioEntre0e100 = Math.floor(Math.random() * 100);
console.log(aleatorioEntre0e100);