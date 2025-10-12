

// VARIÁVEIS E FUNCÕES
function exemploCriacaoVariaveisEFuncoes () {
    // criação de variável constante
    const nome = "Lucas Ferreira";
    // criação de variável não constante
    let nome2 = "Tampinha Ferreira";

    console.log(`Valor inicial: ${nome2}`);

    nome2 = "Tampinha Silva";

    console.log(`Valor alterado: ${nome2}`);

    // criação de funções
    function alterarNome() {
        nome2 = "Tampinha Function";
        console.log(`Valor alterado pela função: ${nome2}`);
    }
    // função que recebe parâmetros
    function recebeEAlteraNome(nome) {
        nome2 = nome;
        console.log(`Valor alterado pela função: ${nome2}`)
    }

    // chamar funções
    recebeEAlteraNome("Tampão");
    recebeEAlteraNome("Tampão Silva");

    // alterarNome();
}

// OBJETOS
function criacaoEManipulacaoObjetos() {
    
    // criação de objetos
    let personDefault = {
        nome: "Lucas Ferreira",
        idade: 30,
        trabalho: "Programador"

    }

    function imprimirPessoa(pessoa) {
        console.log(pessoa);
        console.log(pessoa.nome);
        console.log(pessoa.idade);
        console.log(pessoa.trabalho);        
    }
    imprimirPessoa(personDefault);

    console.log('Passando pessoa por parâmetro:');
    imprimirPessoa({
        nome: "Tampinha Ferreira",
        idade: 6,
        trabalho: "UX / Designer"
    })
    // console.log(pessoa)
    // console.log(pessoa.nome);
    // console.log(pessoa.idade);
    // console.log(pessoa.trabalho);
}

// LISTAS
console.log("Manipulação de nomes:");
let nomes = ["Lucas Ferreira", "Tampinha Silva", "Maria Silva"];
console.log(nomes);
console.log(`Nome: ${nomes[0]}`);
console.log(`Nome: ${nomes[1]}`);
console.log(`Nome: ${nomes[2]}`);

console.log("Manipulação de pessoas: ");
let pessoas = [
    {
        nome: "Lucas Ferreira",
        idade: 30,
        trabalho: "programador"
    },
    {
        nome: "Tampinha Silva",
        idade: 6,
        trabalho: "Guarda"
    }
]
console.log(pessoas)

function imprimirDadosPessoa() {
    pessoas.forEach(p => {
        console.log(
            ` 
                Nome: ${p.nome} \n
                Idade: ${p.idade} \n
                Trabalho: ${p.trabalho}  
            `
        );
    });
}

imprimirDadosPessoa();
// console.log("Pessoa 1: ");
// console.log(pessoas[0]);
// console.log(`Nome: ${pessoas[0]['nome']}`);
// console.log(`Idade: ${pessoas[0]['idade']}`);
// console.log(`Trabalho: ${pessoas[0]['trabalho']}`);

// console.log("Pessoa 2: ");
// console.log(pessoas[1]);
// console.log(`Nome: ${pessoas[1]['nome']}`);
// console.log(`Idade: ${pessoas[1]['idade']}`);
// console.log(`Trabalho: ${pessoas[1]['trabalho']}`);


function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
    console.log("Pessoa adicionada com sucesso: ");
}

adicionarPessoa({
    nome: "Joao Ferreira",
    idade: 10,
    trabalho: "Estudante"
});

imprimirDadosPessoa();
