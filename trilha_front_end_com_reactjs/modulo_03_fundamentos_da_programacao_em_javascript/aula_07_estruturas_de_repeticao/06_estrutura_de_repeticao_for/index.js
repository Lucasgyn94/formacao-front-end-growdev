const exemplo_01 = () => {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

const frutas = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log(`${i + 1}º Fruta: ${frutas[i]}`);
}