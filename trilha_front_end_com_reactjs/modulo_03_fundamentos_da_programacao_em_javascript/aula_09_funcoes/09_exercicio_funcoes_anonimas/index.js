// Crie uma arrow function chamada
// calcularPrecoComDesconto que recebe:

// precoOriginal: preço inicial de um produto.
// desconto: porcentagem de desconto.

// A função deve retornar o preço final após aplicar o
// desconto, arredondado para duas casas decimais.

const calcularPrecoComDesconto = (precoOriginal, desconto) => {
    const precoComDesconto = precoOriginal - (precoOriginal * (desconto / 100));
    return precoComDesconto.toFixed(2)
} 

// const preco = 10;
// const desconto = 10
// const resultado = calcularPrecoComDesconto(preco, desconto);

// console.log(`${resultado}`);

const calcularPrecoComDesconto2 = (precoOriginal, desconto) => `Preço com desconto: ${(precoOriginal - (precoOriginal * (desconto  / 100))).toFixed(2)} `;

const resultado = calcularPrecoComDesconto2(250,15);
console.log(resultado);