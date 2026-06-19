const botao = document.getElementById("change-background-color");
const descricao = document.getElementById("description");

const alterarCor = () => {
    const cor = prompt("Escolha uma cor em inglês (green, black, red, blue etc...): ");
    if (cor) {
        document.body.style.backgroundColor = cor;
    }

};

//botao.addEventListener('click', alterarCor);

