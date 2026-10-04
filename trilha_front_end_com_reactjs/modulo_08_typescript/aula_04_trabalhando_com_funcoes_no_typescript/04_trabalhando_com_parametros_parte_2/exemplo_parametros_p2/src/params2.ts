function saudarAlunos(escola: string, ...alunos: string[]) {
    console.log(`Saudações alunos da escola ${escola}:`);

    alunos.forEach(aluno => {
        console.log(aluno);
        
    });
    
}

saudarAlunos("Growdev", "Lucas", "Thor", "Camila", "Julia");

function soma1(...numeros: number[]): number {
    return numeros.reduce(((acumulador, valorAtual) => {
        return acumulador + valorAtual;
    }), 0);
}

function soma2(...numeros: number[]): number {
    let agregador = 0;

    numeros.forEach((numero) => {
        agregador += numero;
    })

    return agregador;
}

console.log(soma1(1,2,3,4,5));
console.log(soma2(1,2,3,4,5));

interface Aluno {
    nome: string,
    turma: string
}

const aluno: Aluno = {
    nome: "Lucas",
    turma: "E1"
}

function saudarAluno({nome, turma}: Aluno): void {
    console.log(`Olá ${nome}, aluno da turma: ${turma}`);
    

}

saudarAluno(aluno);