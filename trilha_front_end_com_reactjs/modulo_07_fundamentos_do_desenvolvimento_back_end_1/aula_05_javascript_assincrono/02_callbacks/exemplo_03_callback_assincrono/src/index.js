function obterClienteApi (callback) {
    setTimeout(() => {
        console.log("Obter cliente API");

        callback.call(null, {
            id: 1,
            nome: "Lucas",
            idade: 30
        });
    }, 2000);
}

function tratarClienteApi(cliente, callback) {
    setTimeout(() => {
        console.log("Tratar cliente API");

        cliente.nome = cliente.nome.toUpperCase();
        callback.call(null, cliente);
    }, 2000);

}

obterClienteApi((resultado) => {
    tratarClienteApi(resultado, (cliente) => {
        console.log(cliente);
    })
})