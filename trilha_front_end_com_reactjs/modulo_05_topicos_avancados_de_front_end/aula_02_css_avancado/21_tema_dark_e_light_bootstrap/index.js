const btnTema = document.getElementById("btnDark");
const iconeTema = document.getElementById("iconeTema");

let temaAtual = window.localStorage.getItem("tema") || "light";

const aplicarTema = (tema) => {
    temaAtual = tema;

    document.body.setAttribute("data-bs-theme", tema);

    if (tema === "dark") {
        iconeTema.className = "bi bi-moon-stars-fill";
    } else {
        iconeTema.className = "bi bi-sun-fill";
    }
    localStorage.setItem("tema", tema);
}

aplicarTema(temaAtual);

btnTema.addEventListener("click", () => {
    aplicarTema(temaAtual === "light" ? "dark" : "light");
})