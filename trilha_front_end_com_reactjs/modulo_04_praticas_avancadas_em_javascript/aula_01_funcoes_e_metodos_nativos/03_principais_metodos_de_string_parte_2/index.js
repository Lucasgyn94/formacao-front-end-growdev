// Indíces
let titulo = "Práticas avançadas em javascript";
let index = titulo.indexOf("javascript");
console.log(index);

// Substrings
let subtitulo = titulo.substring(index);
console.log(`Subtítulo: ${subtitulo}`);

let subtitulo2 = titulo.slice(index);
console.log(`Subtítulo 2: ${subtitulo2}`);