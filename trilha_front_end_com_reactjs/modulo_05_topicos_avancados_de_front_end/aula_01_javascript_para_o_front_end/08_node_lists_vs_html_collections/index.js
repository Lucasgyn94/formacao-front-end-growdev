const exemploNodeList = () => {
    // Exemplo de NodeList usando querySelectorAll
    const items = document.querySelectorAll(".item");
    console.log("NodeList usando querySelectorAll");
    console.log(`Números de elementos com a classe "item" ${items.length}`);

    // Iterando sobre o NodeList
    items.forEach((item, index) => {
        console.log(`Item ${index + 1}: ${item.textContent}`);
        
    })

    // Exemplo de NodeList usando childNodes
    const allChidren = document.body.childNodes;
    console.log("\nNodeList usando childNotes");
    console.log(`Número de nós filhos do body: ${allChidren.length}`);

    // Exibindo os tipos de nós
    console.log("\nTipos de Nós:");
    allChidren.forEach((child, index) => {
        console.log(`Nó ${index + 1}: ${child.nodeName}`);
        
    });
}
// Exemplo de HTMLCollection usando getElementByTagName
const divs = document.getElementsByTagName("div");
console.log("\nHTMLCollection usando getElementsByTagName");
console.log(`Número de elementos <div>: ${divs.length}`);

// Iterando sobre a HTMLCollection
for (let i = 0; i < divs.length; i++) {
    console.log(`Div ${i + 1}: ${divs[i].textContent}`);
}

// Exibindo a atualização dinâmica da HTMLCollection
const novaDiv = document.createElement("div");
novaDiv.textContent = "Novo Item";
document.body.appendChild(novaDiv);

console.log("\nApós adicionar um novo <div></div>");
console.log(`Ǹúmero de elementos ${divs.length}`);

