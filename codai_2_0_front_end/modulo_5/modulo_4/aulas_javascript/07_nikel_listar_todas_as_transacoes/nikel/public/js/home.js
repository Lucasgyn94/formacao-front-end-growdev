// constantes para os tipos de transações
const TIPO_ENTRADA = "1";
const TIPO_SAIDA = "2";

const myModal = new bootstrap.Modal("#transaction-modal");
let logado = sessionStorage.getItem("logado");
let sessao = localStorage.getItem("sessao");

let dados = {
    transactions: []
}

// --- OUVIDORES DE EVENTO (EVENT LISTENERS) ---

// EFETUAR LOGOUT
document.getElementById("button-logout").addEventListener("click", logout);
// IR PARA PÁGINA DE LANÇAMENTOS (TRANSAÇÕES)
document.getElementById("transactions-button").addEventListener("click", function() {
    window.location.href = "transactions.html"
});
// ADICIONAR LANÇAMENTO
document.getElementById("transaction-form").addEventListener("submit", adicionarLancamento);

// --- INICIALIZAÇÃO ---
checkLogado(); 

// -- FUNÇÕES PRINCIPAIS
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

    atualizarUI();
}

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

    atualizarUI();

    alert("Lançamento adicionado com sucesso");

}

function obterTotalTransacoes() {
    const transacoes = dados.transactions;
    let total = 0;

    transacoes.forEach(t => {
        if (t.tipo === TIPO_ENTRADA) {
            total += t.valor;
        } else if (t.tipo === TIPO_SAIDA) {
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
    localStorage.setItem(logado, JSON.stringify(dados));
}

// -- Função para atualizar todos os elementos da tela.
function atualizarUI() {
    exibirTransacoes(TIPO_ENTRADA, "cash-in-list");
    exibirTransacoes(TIPO_SAIDA, "cash-out-list");
    obterTotalTransacoes();
}

// função reutilizável para exibir lista de transações
function exibirTransacoes(tipo, elementoId) {
    const container = document.getElementById(elementoId);
    const transacoesFiltradas = dados.transactions.filter(t => t.tipo === tipo);

    container.innerHTML = "";
    let limite = 0;

    if (transacoesFiltradas.length === 0) {
        return;
    }

    if (transacoesFiltradas.length > 5) {
        limite = 5;
    } else {
        limite = transacoesFiltradas.length;
    }
    //const limite = Math.min(transacoesFiltradas.length, 5);

    let html = ``;

     for (let i = 0; i < limite; i++) {
        const transacao = transacoesFiltradas[i];
        html += `
            <div class="row mb-4">
                <div class="col-12">
                    <h3 class="fs-2">${parseFloat(transacao.valor).toFixed(2)}</h3>
                    <div class="container p-0">
                        <div class="row">
                            <div class="col-12 col-md-8">
                                <p>${transacao.descricao}</p>
                            </div>
                            <div class="col-12 col-md-3 d-flex justify-content-end">
                                ${transacao.data}
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    container.innerHTML = html;

}

// function transacoesDeEntrada() {
//     const transacoes = dados.transactions;

//     const entrada = transacoes.filter((t) => t.tipo === "1");

//     if (entrada.length) {
//         let entradaHtml = ``;
//         let limite = 0;

//         if (entrada.length > 5) {
//             limite = 5;
//         } else {
//             limite = entrada.length;
//         }

//         for (let index = 0; index < limite; index++) {
//             entradaHtml += `
//             <div class="row mb-4">
//                 <div class="col-12">
//                     <h3 class="fs-2">${entrada[index].valor.toFixed(2)}</h3>
//                     <div class="container p-0">
//                         <div class="row">
//                             <div class="col-12 col-md-8">
//                                 <p>${entrada[index].descricao}</p>
//                             </div>
//                             <div class="col-12 col-md-3 d-flex justify-content-end">
//                                 ${entrada[index].data}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             `
//         }

//         document.getElementById("cash-in-list").innerHTML = entradaHtml;
//     }
// }

// function transacoesDeSaida() {
//     const transacoes = dados.transactions;

//     const entrada = transacoes.filter((t) => t.tipo === "2");

//     if (entrada.length) {
//         let entradaHtml = ``;
//         let limite = 0;

//         if (entrada.length > 5) {
//             limite = 5;
//         } else {
//             limite = entrada.length;
//         }

//         for (let index = 0; index < limite; index++) {
//             entradaHtml += `
//             <div class="row mb-4">
//                 <div class="col-12">
//                     <h3 class="fs-2">${entrada[index].valor.toFixed(2)}</h3>
//                     <div class="container p-0">
//                         <div class="row">
//                             <div class="col-12 col-md-8">
//                                 <p>${entrada[index].descricao}</p>
//                             </div>
//                             <div class="col-12 col-md-3 d-flex justify-content-end">
//                                 ${entrada[index].data}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             `
//         }

//         document.getElementById("cash-out-list").innerHTML = entradaHtml;
//     }
// }
