const myModal = new bootstrap.Modal("#transaction-modal");

let logado = sessionStorage.getItem("logado");
let sessao = localStorage.getItem("sessao");
let entradaDinheiro = [];
let saidaDinheiro = [];
let dados = {
    transactions: []
}

// EFETUAR LOGOUT
document.getElementById("button-logout").addEventListener("click", logout);

// IR PARA PÁGINA DE LANÇAMENTOS (TRANSAÇÕES)
document.getElementById("transactions-button").addEventListener("click", function() {
    window.location.href = "transactions.html"
});

// ADICIONAR LANÇAMENTO
document.getElementById("transaction-form").addEventListener("submit", adicionarLancamento);

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

    transacoesDeEntrada();
    transacoesDeSaida();
    obterTotalTransacoes();
}

function adicionarLancamento(e) {
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

    transacoesDeEntrada();
    transacoesDeSaida();
    obterTotalTransacoes();

    alert("Lançamento adicionado com sucesso");

}

function transacoesDeEntrada() {
    const transacoes = dados.transactions;

    const entrada = transacoes.filter((t) => t.tipo === "1");

    if (entrada.length) {
        let entradaHtml = ``;
        let limite = 0;

        if (entrada.length > 5) {
            limite = 5;
        } else {
            limite = entrada.length;
        }

        for (let index = 0; index < limite; index++) {
            entradaHtml += `
            <div class="row mb-4">
                <div class="col-12">
                    <h3 class="fs-2">${entrada[index].valor.toFixed(2)}</h3>
                    <div class="container p-0">
                        <div class="row">
                            <div class="col-12 col-md-8">
                                <p>${entrada[index].descricao}</p>
                            </div>
                            <div class="col-12 col-md-3 d-flex justify-content-end">
                                ${entrada[index].data}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            `
        }

        document.getElementById("cash-in-list").innerHTML = entradaHtml;
    }
}

function transacoesDeSaida() {
    const transacoes = dados.transactions;

    const entrada = transacoes.filter((t) => t.tipo === "2");

    if (entrada.length) {
        let entradaHtml = ``;
        let limite = 0;

        if (entrada.length > 5) {
            limite = 5;
        } else {
            limite = entrada.length;
        }

        for (let index = 0; index < limite; index++) {
            entradaHtml += `
            <div class="row mb-4">
                <div class="col-12">
                    <h3 class="fs-2">${entrada[index].valor.toFixed(2)}</h3>
                    <div class="container p-0">
                        <div class="row">
                            <div class="col-12 col-md-8">
                                <p>${entrada[index].descricao}</p>
                            </div>
                            <div class="col-12 col-md-3 d-flex justify-content-end">
                                ${entrada[index].data}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            `
        }

        document.getElementById("cash-out-list").innerHTML = entradaHtml;
    }
}

function obterTotalTransacoes() {
    const transacoes = dados.transactions;
    let total = 0;

    transacoes.forEach(t => {
        if (t.tipo === "1") {
            total += t.valor;
        } else if (t.tipo === "2") {
            total -= t.valor;
        }
    });

    document.getElementById("total").innerHTML = `R$ ${total.toFixed(2)}`
}


function logout() {
    sessionStorage.removeItem("logado");
    localStorage.removeItem("sessao");

    window.location.href = "index.html"
}

function salvarDados(dados) {
    localStorage.setItem(dados.email, JSON.stringify(dados));
}