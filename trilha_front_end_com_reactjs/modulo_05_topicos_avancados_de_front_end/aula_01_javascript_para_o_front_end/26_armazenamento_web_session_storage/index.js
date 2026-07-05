const inputNome = document.getElementById("sessaoNome");

const btnSalvarSessao = document.getElementById("btnSalvarSessao");
const btnRemoverSessao = document.getElementById("btnRemoverSessao");
const btnLimparSessao = document.getElementById("btnLimparSessao");

const sessaoInfo = document.getElementById("sessaoInfo");


const buscarNome = () => {
    const nomeNaSessao = window.sessionStorage.getItem("nome");

    if (nomeNaSessao) {
        sessaoInfo.innerHTML = `Nome salvo na sessão: ${nomeNaSessao}`;
    } else {
        sessaoInfo.innerHTML = `Nenhum nome salvo na sessão.`;
    }
}
window.onload = () => {
    buscarNome();
}

const salvarNaSessao = () => {
    const nome = inputNome.value;
    if (nome) {
        window.sessionStorage.setItem("nome", nome);
        buscarNome();
        alert("Nome salvo com sucesso!");
    } else {
        alert("Nome inválido!");
    }
}
btnSalvarSessao.addEventListener("click", salvarNaSessao);

const removerDaSessao = () => {
    const nomeSessao = window.sessionStorage.getItem("nome");

    if (nomeSessao) {
        window.sessionStorage.removeItem("nome");
        buscarNome();
        alert("Nome removido com sucesso!");
    } else {
        alert("Nome não encontrado!");
    }
}

btnRemoverSessao.addEventListener("click", removerDaSessao);

const limparSessao = () => {
    window.sessionStorage.clear();
    buscarNome();
    alert("Sessão limpa com sucesso!");
}

btnLimparSessao.addEventListener("click", limparSessao);