let ano: number = 1998; // Inferência Explícita
let ano2 = 2030; // Inferência Implícita
let ano3: number = 2025; // Inferência Explícita com atribuição

let ano4; // any

ano4 = 2090;
ano4 = "Lucas";

console.log(typeof(ano), typeof(ano2), typeof(ano3),typeof(ano4));