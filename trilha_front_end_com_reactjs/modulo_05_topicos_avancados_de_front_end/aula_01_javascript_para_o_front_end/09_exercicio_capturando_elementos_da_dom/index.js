const exibirTexto = () => {
    const segundoParagrafo = document.getElementsByTagName("p").item(1);
    alert(segundoParagrafo.textContent);
}
const btnExibirTexto = document.getElementById("btn-exibir-texto");

console.log(btnExibirTexto);
btnExibirTexto.addEventListener("click", exibirTexto);
