const pessoa = {
    nome: "Lucas",
    idade: 31,
    profissao: "Dev"
};

for (const propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}

