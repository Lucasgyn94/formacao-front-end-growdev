// Questão 1. Crie um array com os anos que o Brasil ganhou a copa (1959, 1962, 1970, 1994, 2002).

// Interaja com o array utilizando um loop para mostrar no console O Brasil ganhou a copa de 1959, 1962...
const questao01 = () => {
    const anosGanhouCopa = [1959, 1962, 1970, 1994, 2002];

    for (let ano of anosGanhouCopa) {
        console.log(`O Brasil ganhou a copa de: ${ano}`);
    }

}

// Questão 2. Crie um objeto chamado original com algumas propriedades  e valores (por exemplo, nome, idade, cidade). Utilize um loop para criar uma cópia do objeto em uma nova variável chamada cópia, e exiba a cópia no console.

// Dica: Inicialize a variável copia como um objeto vazio {}, e vá adicionando as propriedades conforme o laço percorre o objeto original.

let original = [
    {
        nome: "Lucas",
        idade: 30,
        cidade: "Goiânia"
    },
    {
        nome: "Thor",
        idade: 1,
        cidade: "Goiânia"
    }
];

const copia = {};

for (const key in original) {
    copia[key] = original[key];
}

console.log(copia);