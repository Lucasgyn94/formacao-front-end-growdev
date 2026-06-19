
// Seleção de elementos
const meuContainer = document.getElementById("meuContainer");
const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");


// Remover um elemento com remove
const btnRemoverPrimeiroPara = document.getElementById("btn-remove");
const removerPrimeiroPara = () => {
    para1.remove();
}
btnRemoverPrimeiroPara.addEventListener("click", removerPrimeiroPara);

// Remover um elemento com removeChild
const btnRemoverSegundoPara = document.getElementById("btn-remove-child");

const removerSegundoPara = () => {
    meuContainer.removeChild(para2);
}

btnRemoverSegundoPara.addEventListener("click", removerSegundoPara);

// Substituir primeiro Parágrafo
const btnSubstituirPrimeiroPara = document.getElementById("btn-replace");

const substituirPrimeiroPara = () => {
    const paragrafoNovo = document.createElement("p");
    paragrafoNovo.innerText = "Parágrafo 1 substituído!";
    meuContainer.replaceChild(paragrafoNovo, para1);
}

btnSubstituirPrimeiroPara.addEventListener("click", substituirPrimeiroPara);