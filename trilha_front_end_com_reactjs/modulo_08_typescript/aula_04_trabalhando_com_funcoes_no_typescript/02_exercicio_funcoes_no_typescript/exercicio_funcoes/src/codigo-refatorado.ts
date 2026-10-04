// Função Nomeada
function saudarVisitanteNomeado(nome: string): void {
    console.log(`Olá ${nome}! Seja bem vindo!`);
}

// Função Anônima
const saudarVisitanteAnonimo = function(nome: string): void {
    console.log(`Olá ${nome}! Seja bem vindo!`);
}

// Função de Flecha
const saudarVisitanteArrow = (nome: string): void => {
    console.log(`Olá ${nome}! Seja bem vindo!`);
}

saudarVisitanteNomeado("Lucas");
saudarVisitanteAnonimo("Lucas");
saudarVisitanteArrow("Lucas");

