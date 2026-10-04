type AnoCarro = number;
type ModeloCarro = string;
type TipoCarro = string;

type Carro = {
    ano: AnoCarro,
    modelo: ModeloCarro,
    tipo: TipoCarro
}

const anoCarro: AnoCarro = 2026;
const modeloCarro: ModeloCarro = "Toyota Corolla";
const tipoCarro: TipoCarro = "Sedan";

const carro: Carro = {
    ano: anoCarro,
    modelo: modeloCarro,
    tipo: tipoCarro
}

console.log(carro, anoCarro, modeloCarro, tipoCarro);
