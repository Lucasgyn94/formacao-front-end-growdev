const contadorLocalStorage = document.getElementById("contadorLocalStorage");
const contadorSessionStorage = document.getElementById("contadorSessionStorage");
const btnClique = document.getElementById("btnClique");

// Função para inicializar contadores ao carregar a página
window.onload = () => {
    // Inicializa o contador de cliques da sessão em 0 se não tiver definido
    if (!sessionStorage.getItem("contadorSessao")) {
        sessionStorage.setItem("contadorSessao", 0);
    }

    atualizarContadores();
}

// Função para atualizar os contadores (Corrigidas com retorno implícito)
const obterContadorLocal = () => localStorage.getItem("contadorTotal") || 0;
const obterContadorSessao = () => sessionStorage.getItem("contadorSessao") || 0;

const atualizarContadores = () => {
    // obter os contadores do localStorage e sessionStorage
    var contadorTotal = obterContadorLocal();
    var contadorSessao = obterContadorSessao();

    // atualizar o contador total e o da sessão
    contadorLocalStorage.textContent = `Total de Cliques: ${contadorTotal}`;
    contadorSessionStorage.textContent = `Cliques nesta sessão: ${contadorSessao}`;
}

// Função para incrementar os contadores
const contarCliques = () => {
    // Incrementa o contador da sessão
    var contadorSessao = parseInt(sessionStorage.getItem("contadorSessao")) + 1;
    sessionStorage.setItem("contadorSessao", contadorSessao);

    // incrementa o contador total
    var contadorTotal = parseInt(localStorage.getItem("contadorTotal")) || 0;
    contadorTotal++;
    localStorage.setItem("contadorTotal", contadorTotal);

    // atualiza os contadores exibidos
    atualizarContadores();
}

btnClique.addEventListener("click", contarCliques);