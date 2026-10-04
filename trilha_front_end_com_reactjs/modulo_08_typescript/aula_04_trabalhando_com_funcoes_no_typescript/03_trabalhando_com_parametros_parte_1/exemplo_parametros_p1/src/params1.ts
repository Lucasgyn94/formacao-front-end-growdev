
// Função com parâmetros opcionais
function saudarVisitanteParamsOpcional(nome: string, numero?: number): void {
    console.log(`Olá ${nome}! Seja bem-vindo!`);
    if (numero !== undefined) {
        console.log(`Você é o visitante de número: #${numero}`);
    }
    
}

saudarVisitanteParamsOpcional("Lucas", 98);
saudarVisitanteParamsOpcional("Thor");

console.log("\n");

// Função com parâmetros pre-definidos
function saudarVisitanteParamsPreDefinido(nome: string, numero = 0): void {
    console.log(`Olá ${nome}! Seja bem-vindo!`);
    if (numero !== undefined) {
        console.log(`Você é o visitante de número: #${numero}`);
    }
    

}
saudarVisitanteParamsPreDefinido("Felino", 10);
saudarVisitanteParamsPreDefinido("Felino");