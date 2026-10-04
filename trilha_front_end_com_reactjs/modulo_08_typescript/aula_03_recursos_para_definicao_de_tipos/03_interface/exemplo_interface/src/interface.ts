interface Empregado {
    nome: string,
    sobrenome: string
    nomeCompleto(): string
}

let empregado: Empregado = {
    nome: "Lucas",
    sobrenome: "Ferreira da Silva",
    nomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }
    
}

console.log(typeof empregado);
console.log(empregado, empregado.nome, empregado.sobrenome, empregado.nomeCompleto());
