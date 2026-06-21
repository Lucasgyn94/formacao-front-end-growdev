const infoDiv = document.getElementById("info");
const showLocationButton = document.getElementById("showLocation");
const goToPageButton = document.getElementById("goToPage");

// Mostrar informações da URL atual
const mostrarInfoURL = () => {
    infoDiv.innerHTML = `
    <p><strong>URL Completa (href): </strong>${window.location.href}</p>
    <p><strong>Hostname:</strong>${window.location.hostname}</p>
    <p><strong>Caminho (pathname):</strong>${window.location.pathname}</p>
    <p><strong>Protocolo: </strong>${window.location.protocol}</p>
      <p><strong>Porta: </strong>${window.location.port}</p>

    `
}
showLocationButton.addEventListener("click", mostrarInfoURL);

// Redirecionar para uma nova Página usando assign
const irParaPagina = () => {
    window.location.assign("https://www.google.com.br");
    // window.location.replace("https://www.google.com.br");
    // window.location.href("https://www.google.com.br");
    
}
goToPageButton.addEventListener("click", irParaPagina);
console.log(window);
