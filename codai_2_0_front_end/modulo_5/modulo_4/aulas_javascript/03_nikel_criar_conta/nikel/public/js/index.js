// Garantir que o script so rode apos carregamento da pagina
document.addEventListener('DOMContentLoaded', function() {
    // Pegando a modal do login
    const myModal = new bootstrap.Modal("#register-modal");

    function salvarDados(dados) {
        localStorage.setItem(dados.email, JSON.stringify(dados));
    }

    // CRIAR CONTA
    document.getElementById("create-form").addEventListener("submit", function(evento) {
        // evitar recarregamento ao submeter formulário
        evento.preventDefault();

        const nome = document.getElementById("name-create-input").value;
        const email = document.getElementById("email-create-input").value;
        const senha = document.getElementById("password-create-input").value;
        
        if (nome.length < 2) {
            alert("Nome inválido! Deve ser maior que 2 caracteres");
            return;
        }

        if (email.length < 3) {
            alert("Email inválido! deve ser maior que 3 caracteres");
            return
        }

        if (senha.length < 4) {
            alert("Senha deve ser maior ou igual a 4")
            return;
        }

        salvarDados({
            nome: nome,
            email: email,
            senha: senha,
            transactions: []
        })
        
        myModal.hide();

        alert("Conta criada com sucesso!");
    });

});
