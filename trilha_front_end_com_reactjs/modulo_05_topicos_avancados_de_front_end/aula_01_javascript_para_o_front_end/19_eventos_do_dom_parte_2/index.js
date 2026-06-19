// Evento de foco no input
const onInputFocus = () => {
    console.log("Campo de texto focado");
}

// Evento de mudança no input (onChange)
const onInputChange = () => {
    const nameInput = document.getElementById("name");
    console.log(`Nome alterado para: ${nameInput.value}`);
    
}

// Evento de mudança no input de email
const onEmailChange = () => {
    const emailInput = document.getElementById("email");
    console.log(`Email alterado para: ${emailInput.value}`);
    
}

// Evento de pressionar tecla (onKeyDown)
const onKeyDown = (event) => {
    console.log(`Tecla pressionada: ${event.key}`);
}


// Evento de pressionar tecla (onKeyUp)
const onKeyUp = (event) => {
    console.log(`Tecla solta: ${event.key}`);
}


// Evento de pressionar tecla (onKeyPress)
const onKeyPress = (event) => {
    console.log(`Tecla pressionada (keyPress): ${event.key}`);
}