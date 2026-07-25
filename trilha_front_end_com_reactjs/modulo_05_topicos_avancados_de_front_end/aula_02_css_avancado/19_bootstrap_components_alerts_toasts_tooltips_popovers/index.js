const exemploAlerts = (() => {
    const espacoAlerta = document.getElementById('espacoAlerta');
    const mostrarAlerta = (mensagem, tipo) => {
        const divAlerta = document.createElement("div");
        divAlerta.setAttribute("class", `alert alert-${tipo} alert-dismissible`);
        divAlerta.setAttribute("role", "alert");
        divAlerta.innerHTML = `
                                <div>${mensagem}</div>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            `;

    //   const wrapper = document.createElement('div')
    //   wrapper.innerHTML = [
    //     `<div class="alert alert-${tipo} alert-dismissible" role="alert">`,
    //     `   <div>${mensagem}</div>`,
    //     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    //     '</div>'
    //   ].join('')

        espacoAlerta.append(divAlerta);
    }

    const btnAlerta = document.getElementById('btnAlerta');

    if (btnAlerta) {
        btnAlerta.addEventListener('click', () => {
            const teste = true;
            if (teste) {
                mostrarAlerta('Obrigado, tudo ocorreu perfeitamente!', 'success');
            } else {
                mostrarAlerta("Ops, houve um erro!", "danger");
            }
        });
    }
})();

const exemploToasts = (() => {
    const notificacaoGatilho = document.getElementById('btnNotificacao')
    const notificacaoExemplo = document.getElementById('notificacaoTempoReal')

    if (notificacaoGatilho) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(notificacaoExemplo);
        notificacaoGatilho.addEventListener('click', () => {
            toastBootstrap.show()
        });
    }
})();

