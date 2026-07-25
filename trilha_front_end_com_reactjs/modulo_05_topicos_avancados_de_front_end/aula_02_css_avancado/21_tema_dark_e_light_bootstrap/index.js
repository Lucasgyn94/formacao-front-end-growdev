const btnTema = document.getElementById("btnDark");

let temaAtual = "light";
const body = document.getElementsByTagName("body");
const iconeTema = document.getElementById("iconeTema");
btnTema.addEventListener("click", () => {
    switch(temaAtual) {
        case "light":
            temaAtual = "dark";
            document.body.setAttribute("data-bs-theme", "dark");
            iconeTema.setAttribute("class", "bi bi-moon-stars-fill");
            break;
        case "dark":
            temaAtual = "light";
            document.body.setAttribute("data-bs-theme", "light");
            iconeTema.setAttribute("class", "bi bi-sun-fill");
            break;
        default: "";
    }
});