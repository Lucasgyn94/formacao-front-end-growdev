function somaParams (num1: number, num2: number): number {
    return num1 + num2
}

function concatenaParams (text1: string, text2: string): string {
    return text1 + " " + text2
}

function saudarVisitanteParams(nome: string): void {
    console.log(`Olá ${nome}! Seja bem-vindo!`);
}

console.log(somaParams(5,5));
console.log(concatenaParams("Lucas","Ferreira"));
saudarVisitanteParams("Lucas");


