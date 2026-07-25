const form = document.getElementById("meu-form");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.add("was-validated");

    if (!form.checkValidity()) {
        alert("Campos inválidos, por favor verifique!");
        inputEmail.value = "";
        inputSenha.value = "";
    } else {
        const usuario = {
            email: inputEmail.value,
            senha: inputSenha.value
        }
        console.log(usuario);

    }


});
// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   const forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event => {
//         event.preventDefault();

//         if (!form.checkValidity()) {
//             event.stopPropagation();
//         }

//       form.classList.add('was-validated')
//     });
//   })
// })()