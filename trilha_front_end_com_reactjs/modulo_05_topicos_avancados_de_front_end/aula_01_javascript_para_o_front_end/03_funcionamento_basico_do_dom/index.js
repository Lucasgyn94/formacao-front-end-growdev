// SELEÇÃO DOS ELEMENTOS DA DOM USANDO MÉTODOS
const titulo = document.getElementById("title"); // Seleciona o elemento <h1>
const descricao = document.getElementById("description"); // Seleciona o elemento <p>
const botao = document.getElementById("change-text-button"); // Seleciona o elemento <button>

// EXIBIÇÃO DAS PROPRIEDADES DOS ELEMENTOS
console.log(`Texto do título: ${titulo.innerText}`); // Propriedade innerText
console.log(`Texto da descrição: ${descricao.innerText}`); // Propriedade innerText

// MANIPULAÇÃO DE UM ELEMENTO VIA MÉTODO
botao.addEventListener('click', () => {
    // Modifica a propriedade innerText do elemento <h1></h1>
    titulo.innerText = "O Título foi Alterado";
});