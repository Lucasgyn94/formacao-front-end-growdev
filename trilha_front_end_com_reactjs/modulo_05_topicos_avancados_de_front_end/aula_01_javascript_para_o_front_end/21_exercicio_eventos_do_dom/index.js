// Variável de controle de clique
let cliques = 0;

// Seleção de elementos
const contador = document.getElementById("contador");
const botao = document.getElementById("btnClique");
const hoverText = document.getElementById("hoverText");

// Evento de Clique
botao.addEventListener("click", ()=> {
    cliques++;
    contador.textContent = `Números de cliques: ${cliques}`;
})

// Evento de hover (mouse over)
hoverText.addEventListener("mouseover", () => {
    hoverText.textContent = `Você passou o mouse aqui!`;
});

// Evento de hover (mouse out)
hoverText.addEventListener("mouseout", () => {
    hoverText.textContent = `Passe o mouse aqui!`;
})

// Evento ao carregar a página
window.addEventListener("load", () => {
    alert(`Bem-vindo visitante!`);
})  
