import { sum as soma } from "./math";

function sum (n1: number, n2: number): number {
    return n1 + n2;
}

const n1: number = 15;
const n2: number = 5;
let resultadoSoma = soma(n1,n2);
let ResultadoSum = sum(n1,n2);
console.log(`Soma: ${resultadoSoma}`);
console.log(`Resultado Sum: ${ResultadoSum}`);