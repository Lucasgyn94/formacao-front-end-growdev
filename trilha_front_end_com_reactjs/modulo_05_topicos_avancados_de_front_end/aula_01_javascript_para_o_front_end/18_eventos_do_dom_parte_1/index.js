// Função chamada ao carregar a página
function onPageLoad() {
    console.log("Página carregada!");
}

// Evento de clique no botão
const btnClick = document.getElementById("btn-click");
const mensagem = () => {
    console.log("Botão clicado!");
}
btnClick.onclick = mensagem;

// Evento de envio do formulário
const onFormSubmit = (event) => {
    event.preventDefault(); // Previne o envio real do formulário
    alert("Formulário enviado!");
    document.getElementById("inputForm").value = "";
    //return false; // Retorna false para evitar o envio
}

// Eventos de mouseenter e mouseleave
const hoverBox = document.getElementById("hoverBox");

const adicionarClasseHovered = () => {
    hoverBox.classList.add('hovered'); // Remove a classe 'hovered' ao sair com o mouse
}

const removerClasseHovered = () => {
    hoverBox.classList.remove("hovered"); // Remove a classe 'hovered' ao sair com o mouse
}

hoverBox.onmouseenter = adicionarClasseHovered;
hoverBox.onmouseleave = removerClasseHovered;