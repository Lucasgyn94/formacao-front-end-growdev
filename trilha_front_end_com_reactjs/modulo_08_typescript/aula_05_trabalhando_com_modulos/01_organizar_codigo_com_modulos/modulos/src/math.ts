const sum = (...numeros:number[]): number => {
    let resultado: number = 0;

    numeros.forEach((n) => {
        resultado += n;
    });
    return resultado;
}

export {sum};