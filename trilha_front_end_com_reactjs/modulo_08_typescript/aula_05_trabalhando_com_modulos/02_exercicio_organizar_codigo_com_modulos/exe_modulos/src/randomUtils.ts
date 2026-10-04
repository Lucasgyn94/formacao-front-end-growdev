export function generateUniqueRandomNumbers(quantity: number, min: number, max: number): number[] {
    if (
        !Number.isInteger(quantity) ||
        !Number.isInteger(min) ||
        !Number.isInteger(max)
    ) {
        throw new Error("Os argumentos devem ser números inteiros!");
    }

    if (min > max) {
        throw new Error("O mínimo não pode ser maior que o máximo!");
    }

    if (quantity < 0 || quantity > max - min + 1) {
        throw new Error("Quantidade inválida para o intervalo informado.");
    }

    const numbers = new Set<number>();

    while(numbers.size < quantity) {
        const randomNumber = 
            Math.floor(Math.random() * (max - min + 1)) + min;
        
            numbers.add(randomNumber);
    }

    
    return [...numbers];
}