const calcularDesconto = (preco, taxa) => {
    const desconto = preco * taxa;
    const precoFinal = preco - desconto;
    return precoFinal;
}

let taxa = 0.10;
let preco = 10;
let preco01 = calcularDesconto(preco, taxa);
console.log(preco01);