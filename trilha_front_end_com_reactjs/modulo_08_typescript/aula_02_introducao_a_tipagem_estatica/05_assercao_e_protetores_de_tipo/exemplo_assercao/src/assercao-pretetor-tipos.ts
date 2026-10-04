let texto: unknown;

texto = "Esse é meu texto";

console.log((texto as string).toLowerCase());
// console.log((<string> texto).toLowerCase());

if (typeof texto === "string") {
    console.log((texto as string).toUpperCase());
    
} else {
    console.log("Seu texto não é uma string.");
    
}