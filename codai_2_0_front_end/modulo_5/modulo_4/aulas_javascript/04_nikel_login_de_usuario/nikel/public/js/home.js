const myModal = new bootstrap.Modal("#transaction-modal");
let logado = sessionStorage.getItem("logado");
let sessao = localStorage.getItem("sessao");

function checkLogado() {
    if (sessao) {
        sessionStorage.setItem("logado", sessao);
        logado = sessao;
    }

    if (!logado) {
        window.location.href = "index.html";
        return;
    }
}

checkLogado();