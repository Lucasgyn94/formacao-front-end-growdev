const myModal = new bootstrap.Modal("#transaction-modal");

let logado = sessionStorage.getItem("logado");
let sessao = localStorage.getItem("sessao");
let dados = {
    transactions: []
}

document.getElementById("button-logout").addEventListener("click", logout);

// ADICIONAR LANÇAMENTO
document.getElementById("transaction-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = document.getElementById("date-input").value;
    const descricao = document.getElementById("description-input").value;
    const valor = parseFloat(document.getElementById("value-input").value);
    const tipo = document.querySelector('input[name="type-input"]:checked').value

    dados.transactions.unshift({
        valor: valor,
        tipo: tipo,
        descricao: descricao,
        data: data
    })

    salvarDados(dados);
    e.target.reset();
    myModal.hide();

    alert("Lançamento adicionado com sucesso");

});

checkLogado(); 

function checkLogado() {
    if (sessao) {
        sessionStorage.setItem("logado", sessao);
        logado = sessao;
    }

    if (!logado) {
        window.location.href = "index.html";
        return;
    }

    buscarDadosUsuarioLogado();

}

function buscarDadosUsuarioLogado() {
    const dadosUsuario = localStorage.getItem(logado);

    if (dadosUsuario) {
        dados = JSON.parse(dadosUsuario);
    }

    console.log(dados);
}

function logout() {
    sessionStorage.removeItem("logado");
    localStorage.removeItem("sessao");

    window.location.href = "index.html"
}

function salvarDados(dados) {
    localStorage.setItem(dados.email, JSON.stringify(dados));
}

