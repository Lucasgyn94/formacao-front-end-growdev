// Selecionar o elemento <div></div>
const minhaDiv = document.getElementById("myDiv");

// Obeter atributo com getAttribute
const btnObterAtributo = document.getElementById("btn-get-attr");

const obterAtributo = () => {
    let atributo = minhaDiv.getAttribute("data-info");
    alert(`Atributo data-info: ${atributo}`);
}
btnObterAtributo.addEventListener("click", obterAtributo);

// Alterar atributo com setAttribute
const btnAlterarAtributo = document.getElementById("btn-set-attr");
const alterarAtributo = () => {
    minhaDiv.setAttribute("data-info", "informação alterada");
    alert(`Atributo data-info alterado para: ${minhaDiv.getAttribute("data-info")}`)
}

btnAlterarAtributo.addEventListener("click", alterarAtributo);

// Adicionar classe com classList.add
const btnAdicionarClasse = document.getElementById("btn-add-class");

const adicionarClasse = () => {
    minhaDiv.classList.add("hidden");
    alert("Classe hidden adicionada");
}
btnAdicionarClasse.addEventListener("click", adicionarClasse);

// Remover classe com classList.remove
const btnRemoverClasse = document.getElementById("btn-remove-class");

const removerClasse = () => {
    minhaDiv.classList.remove("highlight");
}

btnRemoverClasse.addEventListener("click", removerClasse);

// Alternar classe com classList.toggle
const btnAlternarClasse = document.getElementById("btn-toggle-class");

const alternarClasse = () => {
    minhaDiv.classList.toggle("highlight");
    const status = minhaDiv.classList.contains("highlight") ? "adicionada" : "removida";
    alert(`Classe highlight: ${status}.`);
}

btnAlternarClasse.addEventListener("click", alternarClasse);
