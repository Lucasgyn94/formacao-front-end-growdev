// Operaçoes
const exemploOPeracoes = () => {
    let numero = 42;
    let numeroNegativo = -42;

    console.log(Math.pow(numero, 2)); // 42 elevado a 2
    console.log(Math.sqrt(numero)); // raiz quadrada de 42
    console.log(Math.abs(numeroNegativo)); // retira o número absoluto sem contar o sinal negativo.
}

// Parsing
console.log("Parsing String para Decimal.");

let decimal = "10.5";
let decimalConvertido = parseFloat(decimal);
console.log(decimalConvertido);
console.log(typeof(decimalConvertido));

console.log("\nParsing String para Inteiro.");
let inteiro = "10.9";
let inteiroConvertido = parseInt(inteiro);
console.log(inteiroConvertido);
console.log(typeof(inteiroConvertido));

console.log("\nParsing direto com método Number()");

let numeroReal = Number("10.99kkl");
console.log(numeroReal);
console.log(typeof numeroReal);

// Verificação
console.log("\nVerificações");
console.log(Number.isInteger(inteiroConvertido));
console.log(Number.isInteger(decimalConvertido));
console.log(Number.isNaN(numeroReal));


