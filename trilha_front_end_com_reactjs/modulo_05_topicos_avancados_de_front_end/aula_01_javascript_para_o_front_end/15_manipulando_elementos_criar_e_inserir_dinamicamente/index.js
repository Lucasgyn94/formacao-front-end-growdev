
const btnAdicionar = document.getElementById("btn-add-element");

const adicionarElemento = () => {
    const divContainer = document.getElementById("meuContainer");
    
    const novoParagrafo = document.createElement("p");
    
    novoParagrafo.innerText = "Este é um novo parágrafo adicionado ao container";

    divContainer.appendChild(novoParagrafo);
}

btnAdicionar.addEventListener("click", adicionarElemento);