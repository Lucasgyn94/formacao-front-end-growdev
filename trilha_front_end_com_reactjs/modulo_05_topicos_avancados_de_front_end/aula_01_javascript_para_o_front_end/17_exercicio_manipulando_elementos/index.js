const tarefa = document.getElementById("novaTarefa");
const btnAdicionar = document.getElementById("btn-add");
const lista = document.getElementById("lista");

const adicionarNovaTarefa = () => {
    const tarefaInput = document.getElementById("tarefaInput");
    const tarefaTexto = tarefaInput.value;

    if(tarefaTexto.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = tarefaTexto;

        li.style.padding = "0.625rem";
        li.style.cursor = "pointer";
        li.title = "Clique aqui para remover";

        // Adicionando evento de remoção ao clicar
        li.onclick = function() {
            this.remove();
        }

        // Adicionando o novo item a lista
        lista.appendChild(li);

        // Limpa o campo d entrada
        tarefaInput.value = "";
    }

}

btnAdicionar.addEventListener("click", adicionarNovaTarefa);

