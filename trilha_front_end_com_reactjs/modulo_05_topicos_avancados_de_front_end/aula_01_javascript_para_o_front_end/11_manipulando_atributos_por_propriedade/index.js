// Selecionar o elemento <div></div>
const div = document.getElementById("myDiv");

// Alterar conteúdo HTML com innerHTML
const btnAlterarHtml = document.getElementById("btn-alterar-html");

const alterarHtml = () => {
    div.innerHTML = "<h2>HTML Alterado</h2>" + 
                    "<p>Parágrafo modificado utilizando innerHTML</p>"
}
btnAlterarHtml.addEventListener("click", alterarHtml);

// Alterar apenas o texto com innerText
const btnAlterarTexto = document.getElementById("btn-alterar-texto");

const alterarTexto = () => {
    div.innerText = "Texto alterado com innerText. HTML não é reconhecido aqui."
}
btnAlterarTexto.addEventListener("click", alterarTexto);

// Alterar o atributo do elemento (exemplo: id)
const btnAlterarAtributo = document.getElementById("btn-alterar-atributo");

const alterarAtributo = () => {
    console.log(`Id da div antes da mudança: ${div.id}`);
    div.id = "myDivAlterado"
    console.log(`Id da div após mudança: ${div.id}`);
}

btnAlterarAtributo.addEventListener('click', alterarAtributo);

// Alterar o estilo (exemplo: cor de fundo);
const btnAlterarEstilo = document.getElementById("btn-alterar-estilo");

const alterarEstilo = () => {
    div.style.backgroundColor = 'blue';
    div.style.color = 'white';
    div.style.fontSize = '20px';

}

btnAlterarEstilo.addEventListener("click", alterarEstilo);