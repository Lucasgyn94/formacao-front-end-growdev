const btnTrocarImagem = document.getElementById("btn-trocar-imagem");

const trocarImagem = () => {
    const imagem = document.getElementById("imagem");
    const srcAtual = imagem.getAttribute("src");
    
    if (srcAtual === "./images/dog-image.jpg") {
        imagem.setAttribute("src", "./images/cat-image.jpg");
        imagem.setAttribute("alt", "Foto de um gato");
    } else {
        imagem.setAttribute("src", "./images/dog-image.jpg");
        imagem.setAttribute("alt", "Foto de um cachorro");
    }

}

btnTrocarImagem.addEventListener("click", trocarImagem);


