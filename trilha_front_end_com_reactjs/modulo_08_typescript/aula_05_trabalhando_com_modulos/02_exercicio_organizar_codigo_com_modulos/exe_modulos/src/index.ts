import { generateUniqueRandomNumbers } from "./randomUtils";
import { sortAscending, sortDescending } from "./sortUtils";

const numbers = generateUniqueRandomNumbers(5,1,20);

console.log(`Números gerados: ${numbers}`);
console.log(`Ordem Crescente: ${sortAscending(numbers)}`);
console.log(`Ordem Decrescente: ${sortDescending(numbers)}`);
