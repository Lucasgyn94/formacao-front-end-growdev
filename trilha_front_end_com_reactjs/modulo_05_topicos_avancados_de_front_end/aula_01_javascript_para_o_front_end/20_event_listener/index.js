// Evento de clique
const clickButton = document.getElementById("clickButton");

clickButton.addEventListener("click", () => {
    console.log("Botão clicado!");
    
});

// Evento de carga de página
window.addEventListener("load", () => {
    console.log("Página carregada!");
});

// Manipulação de mudança
const handleChange = (event) => {
    const input = event.target; // O alvo do evento
    console.log(`O valor mudou para ${input.value}`);
    
}

// Evento de envio do formulário
const meuForm = document.getElementById("meuForm");
meuForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio do formulário
    alert(`Formulário enviado! (mas não realmente)`)
})