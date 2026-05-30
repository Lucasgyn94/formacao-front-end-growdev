const exemplo_01 = () => {
    let contador = 10;

    do {
        console.log(contador);
        contador--;
    } while(contador >= 0);
}

let totalIdades = 0;
let somaIdades = 0;
let maioresDe21 = 0;

let continuar;

do {
    const idade = parseInt(prompt("Digite a idade: "))

    totalIdades++;
    somaIdades += idade;

    if (idade >= 21) {
        maioresDe21++;
    }

    continuar = confirm("Deseja continuar digitando idades?");

} while(continuar === true);

const mediaIdades = somaIdades / totalIdades;

console.log(`Total de idades digitadas: ${totalIdades}`);
console.log(`Média das idades digitas: ${mediaIdades}`);
console.log(`Maiores de 21 anos: ${maioresDe21}`);