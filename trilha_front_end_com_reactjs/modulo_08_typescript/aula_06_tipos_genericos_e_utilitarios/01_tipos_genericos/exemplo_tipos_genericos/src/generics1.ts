function identificar<T>(valor: T): T {
    return valor;
}

const numero = identificar<number>(5);
const texto = identificar<string>("Olá mundo");