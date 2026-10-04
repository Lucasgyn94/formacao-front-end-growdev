interface Empregado {
    cracha: string,
    nome: string
}

interface Gestor {
    acessoAdmin: boolean
}

let pessoa: Empregado & Gestor = {
    cracha: "ABC123",
    nome: "Lucas Ferreira",
    acessoAdmin: true
}

console.log(pessoa);
