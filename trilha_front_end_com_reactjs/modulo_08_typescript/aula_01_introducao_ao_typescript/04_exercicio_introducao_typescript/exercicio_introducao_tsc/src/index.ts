const saudarVisitante = (nome: string) => {
    return `Olá ${nome}! Seja Bem Vindo.`;
}

const saudacao = saudarVisitante("Lucas");

const mensagem = document.getElementById("boas-vindas");

if (mensagem) {
    mensagem.textContent = saudacao;
}