// 1) Um cliente chamado "João" preencheu o formulário como nome cheio de espaços em branco no início e no final. Agora você precisa corrigir isso
const exercicio1 = () => {
    const cliente = "   João    ";
    console.log(`Nome com espaços: ${cliente}`);

    console.log(`Nome sem espaços: ${cliente.trim()}`);
    
}

//exercicio1();


// 2) Uma aluna chamada "Ana" preencheu um formulário, e o sistema precisa exibir o nome dela em letras mauiúsculas, já que será usado em um banner publicitário. Converta todo o nome para maiúscula.

const exercicio2 = () => {
    const aluna = "ana";
    console.log(`Nome aluna original: ${aluna}`);
    console.log(`Nome aluna em maiúsculo: ${aluna.toUpperCase()}`);
}

//exercicio2();


// 3) Um escritor chamado "Paulo" está escrevendo um livro e, por engano, usou a palavra "antigo" onde deveria estar "novo". Substitua todas as ocorrências da palavra "antigo" por "novo" no texto abaixo.
const exercicio3 = () => {
    const livro = "O livro antigo foi revisado. A capa do livro antigo também foi trocada.";
    const livroCorrigido = livro.replaceAll("antigo", "novo");
    console.log(`Trecho original do livro: ${livro}`);
    console.log(`Trecho modificado do livro: ${livroCorrigido}`);
    
}
//exercicio3();

// 4) Um professor está verificando as respostas de seus alunos, e ele quer garantir que todas as respostas iniciem com a palavra "Resposta". Verifique se as respostas abaixo começam com a palavra "Resposta".

const exercicio4 = () => {
    const resposta1 = "Resposta: A capital do Brasil é Brasília.";
    const resposta2 = "Minha resposta: A capital do Brasil é Brasília";

    console.log(resposta1.startsWith("Resposta"));
    console.log(resposta2.startsWith("Resposta"));
    
}

//exercicio4();

// 5) Um usuário quer garantinr que sua mensagem de saudação termine com "!" no final. Ele já escreveu a saudação "Olá, como vai", mas quer adicionar um ponto de exclamação no final usando um método.

const saudacao = "Olá, como vai";
const saudacaoCompleta = saudacao.concat("!");
console.log(saudacaoCompleta);

exercicio5();