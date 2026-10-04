type status = "ativo" | "inativo" | "indefinido";

let statusAtual: status = "ativo";
statusAtual = "inativo";
statusAtual = "indefinido";
//statusAtual = "não identificado"; // erro

type notaPossivel = 0 | 1| 2| 3| 4| 5
let nota: notaPossivel = 0;
//nota = 10; // erro