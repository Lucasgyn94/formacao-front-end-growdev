// const meuModal = new bootstrap.Modal(document.getElementById('meuModalJs'), true);
const meuModal = new bootstrap.Modal('#meuModalJs');
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", () => {
    meuModal.toggle();
});

// meuModal.show();
// meuModal.hide();
// meuModal.toogle();