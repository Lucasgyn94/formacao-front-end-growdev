const input = document.getElementById("input-url");
const btnNavegar = document.getElementById("btn-navegar");
const btnSubstituir = document.getElementById("btn-substituir");
const btnAtribuir = document.getElementById("btn-atribuir");
const urlAtual = document.getElementById("url");

const navegarPara = () => {
    const url = input.value;
    if (url !== "") {
        window.location.href = url;
    } else {
        alert('Verifique a url');
    }
}
btnNavegar.addEventListener("click", navegarPara);

const substituirUrl = () => {
    const url = input.value;
    if (url !== "") {
        window.location.replace(url);
    }
}

btnSubstituir.addEventListener("click", substituirUrl);

const atribuirUrl = () => {
    const url = input.value;

    if (url !== "") {
        window.location.assign(url);
    }
}

btnAtribuir.addEventListener("click", atribuirUrl);


window.onload = () => {
    urlAtual.textContent = `Url atual: ${window.location.href}`;
}

const soma = ((n1, n2) => {console.log(n1+n2)})(5,10);