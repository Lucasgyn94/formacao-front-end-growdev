function processoDemorado(callback) {

    setTimeout(() => {
        console.log("Hello do processo demorado assíncrono!");
        callback.call();    
    }, 5000);

    
}

processoDemorado(() => {
    console.log("Log após processo demorado assíncrono!");
})


