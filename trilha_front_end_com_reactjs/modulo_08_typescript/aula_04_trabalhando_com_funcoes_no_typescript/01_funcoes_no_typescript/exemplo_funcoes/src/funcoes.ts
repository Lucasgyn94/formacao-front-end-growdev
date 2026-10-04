const n1 = 15;
const n2 = 5;

// Função nomeada
function soma (n1: number, n2: number): number {
    return n1 + n2;
}

const resultadoSoma = soma(n1, n2);
console.log(`${n1} + ${n2} = ${resultadoSoma}`);

// Função anônima
let subtrai = function(n1: number, n2: number) : number{
    return n1 + n2;
}

const resultadoSubtracao = subtrai(n1, n2);
console.log(`${n1} - ${n2} = ${resultadoSubtracao}`);

// Função de flecha - Aero Function
let multiplica = (n1: number, n2: number): number => n1 * n2;

const resultadoMultiplicacao = multiplica(n1,n2);
console.log(`${n1} * ${n2} = ${resultadoMultiplicacao}`);

// Função sem retorno - void
function saudacao(): void {
    console.log("Olá Lucas!");
    
}

saudacao();

export {};