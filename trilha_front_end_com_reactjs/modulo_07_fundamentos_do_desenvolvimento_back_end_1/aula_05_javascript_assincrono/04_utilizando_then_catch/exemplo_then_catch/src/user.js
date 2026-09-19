function obterClienteApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Obter cliente API");

            resolve({
                id: 1,
                nome: "Lucas",
                idade: 32
            });
                 
        }, 2000);
    });
}

function tratarClienteApi(cliente) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Tratar cliente API");

            cliente.nome = cliente.nome.toUpperCase();
            resolve(cliente);
            
        }, 2000);
    });
}

obterClienteApi()
    .then(tratarClienteApi)
    .then((result) => {
        console.log(result);
        
    })
    .catch(() => {
        console.log("Processo Rejeitado!");
        
    });