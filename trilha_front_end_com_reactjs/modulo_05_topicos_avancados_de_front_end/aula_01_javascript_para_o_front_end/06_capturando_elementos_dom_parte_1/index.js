// Usando getElementById para selecionar o título
const titulo = document.getElementById("titulo");

// Usando querySelector para selecionar o primeiro parágrafo com a classe .texto
const paragrafo = document.querySelector(".texto");

// Alterar o título ao clicar no botão
const btnAlterarTitulo = document.getElementById("btn-alterar-titulo");

const btnAlterarParagrafo = document.getElementById("btn-alterar-paragrafo");

const alterarTitulo = () => {
    titulo.innerText = "O Título foi alterado!";
}

const alterarParagrafo = () => {
    paragrafo.innerText = "Este é um parágrafo alterado!"
}

btnAlterarTitulo.addEventListener('click', alterarTitulo);
btnAlterarParagrafo.addEventListener('click', alterarParagrafo);

window.Cach