function processoDemorado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello do processo demorado!");
            resolve();
        }, 2000);
    });
}

async function executarProcessoDemorado() {
    try {
        await processoDemorado();
        console.log("Log após processo demorado!");
        
    } catch(error) {
        console.log("Promise rejeitada!");
    }
}

executarProcessoDemorado();