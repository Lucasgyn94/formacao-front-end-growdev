const inputNome = document.getElementById("nome");
const btnSalvar = document.getElementById("btnSalvar");
const btnRemover = document.getElementById("btnRemover");
const btnLimpar = document.getElementById("btnLimpar");
const displayDiv = document.getElementById("display");


const listarNomes = () => {
    const nomeStored = localStorage.getItem("Nome");

    if (nomeStored) {
        displayDiv.innerHTML = `Nome salvo: ${nomeStored}`;
    } else {
        displayDiv.innerHTML = `Nenhum nome salvo`;
    }
}

window.onload = () => {
    listarNomes();
}

const salvarNome = () => {
    const nomeUsuario = inputNome.value;

    if (nomeUsuario) {
        window.localStorage.setItem("Nome", nomeUsuario);
        listarNomes();
        alert("Nome salvo com sucesso!");
    } else {
        alert("Digite um nome para salvar.")
    }
    
}
btnSalvar.addEventListener("click", salvarNome);

const removerNome = () => {
    window.localStorage.removeItem("Nome");
    listarNomes();
    alert("Nome removido.")
}
btnRemover.addEventListener("click", removerNome);

const limparLocalStorage = () => {
    window.localStorage.clear();
    listarNomes();
    alert("Local Storage limpo.")
}
btnLimpar.addEventListener("click", limparLocalStorage);

