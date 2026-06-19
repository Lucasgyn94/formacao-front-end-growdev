// Usando getElementByClassName para selecionar todos os parágrafos com a classe .texto
const paragrafosByClass = document.getElementsByClassName("texto");

// Usando getElementByTagName para selecionar todos os elementos <p></p>
const paragrafosByTag = document.getElementsByTagName("p");

// Usando querySelectorAll para selecionar todos os elementos <p></p> com a classe .texto
const paragrafosByQuery = document.querySelectorAll(".texto");

// Alterar o texto de todos os parágrafos usando getElementByClassName
const btnAlterarPorClasse = document.getElementById("btn-alterar-por-classe");
const btnAlterarPorTag = document.getElementById("btn-alterar-por-tag");
const btnAlterarComQuery = document.getElementById("btn-alterar-com-query");

const alterarPorClasse = () => {
    for (let i = 0; i < paragrafosByClass.length; i++) {
        paragrafosByClass[i].innerText = `Alterado por Classe - Parágrafo ${i + 1}`;
    }
}

// Alterar o texto de todos os parágrafos usando getElementByTagName

const alterarPorTag = () => {
    for (let i = 0; i < paragrafosByTag.length; i++) {
        paragrafosByTag[i].innerText = `Alterado por Tag - Parágrafo ${i + 1}`;
    }
}

// Alterar o texto de todos os parágrafos usando querySelectorAll
const alterarPorQuery = () => {
    paragrafosByQuery.forEach((paragrafo, index) => {
        paragrafo.innerText = `Alterado por querySelectorAll - Parágrafo ${index + 1}`;
    });
}


// Execução
btnAlterarPorClasse.addEventListener('click', alterarPorClasse);

btnAlterarPorTag.addEventListener('click', alterarPorTag);
btnAlterarComQuery.addEventListener('click', alterarPorQuery);

