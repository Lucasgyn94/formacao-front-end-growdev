type calculadora = (n1: number, n2: number) => number;

interface Calculadora {
    (n1: number, n2: number) : number;
}

let funcSoma: calculadora = (n1: number, n2: number) => n1 + n2;
let funcSubtrai: calculadora = (n1: number, n2: number) => n1 - n2;
