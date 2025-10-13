// constantes para os tipos de transações
const TIPO_ENTRADA = "1";
const TIPO_SAIDA = "2";

const myModal = new bootstrap.Modal("#transaction-modal");

let logado = sessionStorage.getItem("logado");
let sessao = localStorage.getItem("sessao");
let dados = {
    transactions: []
}

// ADICIONAR LANÇAMENTO
document.getElementById("transaction-form").addEventListener("submit", adicionarLancamento);

// EFETUAR LOGOUT
document.getElementById("button-logout").addEventListener("click", logout);

function adicionarLancamento(e) {
    e.preventDefault();

    const data = document.getElementById("date-input").value;
    const descricao = document.getElementById("description-input").value;
    const valorInput = document.getElementById("value-input").value; 
    const tipo = document.querySelector('input[name="type-input"]:checked').value

    if (!valorInput || !descricao || !data) {
        alert("Por favor, preencha todos os campos.");
        return; 
    }

    const valor = parseFloat(valorInput); 
    
    dados.transactions.unshift({
        valor: valor,
        tipo: tipo,
        descricao: descricao,
        data: data
    })

    salvarDados(dados);
    e.target.reset();
    myModal.hide();

    buscarTransacoes();

    alert("Lançamento adicionado com sucesso");

}

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
    buscarTransacoes();

}

function buscarDadosUsuarioLogado() {
    const dadosUsuario = localStorage.getItem(logado);

    if (dadosUsuario) {
        dados = JSON.parse(dadosUsuario);
    }
}


function buscarTransacoes() {
    const transacoes = dados.transactions;
    let transacoesHtml = ``;

    if(transacoes.length) {
        transacoes.forEach((t) => {
            const tipo = t.tipo === TIPO_ENTRADA ? "Entrada" : "Saída";

            transacoesHtml += `
                <tr>
                    <th scope="row">${t.data}</th>
                    <td>R$ ${parseFloat(t.valor).toFixed(2)}</td>
                    <td>${tipo}</td>
                    <td>${t.descricao}</td>
                </tr>    
            `
        });
    }

    document.getElementById("transactions-list").innerHTML = transacoesHtml;
}

function salvarDados(dados) {
    localStorage.setItem(logado, JSON.stringify(dados));
}

function logout() {
    sessionStorage.removeItem("logado");
    localStorage.removeItem("sessao");

    window.location.href = "index.html"
}