function processoDemorado () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello do processo demorado!");
            resolve();
        }, 2000);
    });
}

processoDemorado()
    .then(() => {
        console.log("Log após processo demorado!");
    })
    .catch(() => {
        console.log("Processo REJEITADO");
        
    });