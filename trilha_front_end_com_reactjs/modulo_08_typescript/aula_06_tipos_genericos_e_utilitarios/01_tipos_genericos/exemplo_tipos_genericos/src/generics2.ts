function obterArray<T>(itens: T[]): T[] {
    return new Array().concat(itens);
}

let arrayDeNumeros: number[] = obterArray<number>([5, 10, 15, 20, 25]);
arrayDeNumeros.push(30);
console.log(arrayDeNumeros);



let arrayDeStrings: string[] = obterArray<string>(["Cachorro", "Gato", "Passáro"]);
arrayDeStrings.push("Coelho");
console.log(arrayDeStrings);

