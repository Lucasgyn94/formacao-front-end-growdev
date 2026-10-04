"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let texto;
texto = "Esse é meu texto";
console.log(texto.toLowerCase());
// console.log((<string> texto).toLowerCase());
if (typeof texto == "string") {
    console.log(texto.toLocaleUpperCase());
}
else {
    console.log("Seu texto não é uma string.");
}
//# sourceMappingURL=assercao-pretetor-tipos.js.map