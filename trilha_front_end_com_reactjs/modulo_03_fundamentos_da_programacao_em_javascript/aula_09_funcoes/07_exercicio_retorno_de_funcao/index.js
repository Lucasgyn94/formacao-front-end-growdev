// Escreva uma função chamada calcularAreaRetangulo que receba a largura e a altura de um retângulo e retorne a área. Teste a função com diferentes valores.

function calcularAreaRetangulo(base, altura) {
    const areaRetangulo = base * altura;
    return areaRetangulo;
}


const base = 5;
const altura = 10;
const resultado = calcularAreaRetangulo(base, altura);

console.log(`Àrea do retângulo de base ${base} e altura ${altura}:\n${resultado}`);
