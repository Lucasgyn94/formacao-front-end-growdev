const exemplo01 = () => {
    if (true) {
        var marca = "Toyota";
        let modelo = "Corolla";
        const ano = 2020;

        console.log(marca);
    }

     console.log(`Marca fora do escopo: ${marca}`);
    // console.log(modelo);
    // console.log(ano);
}

const exemplo02 = () => {
    for (let i = 0; i < 10; i++) {
        console.log(`Número: ${i}`);
    }

    console.log(i);
}

const exemplo03 = () => {

    console.log(nome);
    var nome = "Lucas";
}

const exemplo04 = () => {
    var nome = "Lucas";

    var nome = 31;
    console.log(nome);

    nome = "Thor";
    console.log(nome);
}

const exemplo05 = () => {
    let nome = "Lucas";
    console.log(nome);

    nome = "Thor";
    console.log(nome);
}

const exemplo06 = () => {
    const nome = "Lucas";
    console.log(nome);

    nome = "Thor";
    console.log(nome);

}

const data = {
    dia: 28,
    mes: "Dezembro"
};
console.log(data);
//data = "Janeiro";

data.dia = 31;
console.log(data);