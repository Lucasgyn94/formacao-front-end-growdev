# Introdução ao React

React é uma biblioteca JavaScript usada para construir interfaces de usuário. Ela permite dividir uma página em partes reutilizáveis chamadas **componentes**, como botões, menus e formulários.

## Componentes

Um componente pode ser uma função que retorna o conteúdo que será exibido na tela:

    function BoasVindas() {
        return <h1>Olá, React!</h1>;
    }

O componente pode ser utilizado com a sintaxe `<BoasVindas />`. Seus nomes devem começar com letra maiúscula.

## JSX

JSX é uma extensão de sintaxe que permite escrever uma estrutura parecida com HTML dentro do JavaScript. Podemos inserir expressões JavaScript usando chaves:

    function Saudacao() {
        const nome = "Lucas";

        return <h1>Olá, {nome}!</h1>;
    }

Em projetos TypeScript, arquivos com JSX usam a extensão `.tsx`.

## Props

Props são dados recebidos por um componente. Elas permitem reutilizá-lo com informações diferentes:

    type SaudacaoProps = {
        nome: string;
    };

    function Saudacao({ nome }: SaudacaoProps) {
        return <h1>Olá, {nome}!</h1>;
    }

    // Exemplo de uso:
    <Saudacao nome="Lucas" />

As props devem ser tratadas como somente leitura pelo componente que as recebe.

## Estado e eventos

O estado armazena informações que podem mudar durante o uso da interface. O hook `useState` permite criar e atualizar esse estado:

    import { useState } from "react";

    function Contador() {
        const [contador, setContador] = useState(0);

        return (
            <button onClick={() => setContador(atual => atual + 1)}>
                Cliques: {contador}
            </button>
        );
    }

Nesse exemplo:

- `contador` guarda o valor atual.
- `setContador` solicita uma atualização do estado.
- `onClick` define o que acontece ao clicar no botão.
- Quando o estado muda, o React renderiza novamente o componente e atualiza a interface conforme necessário.

## Conhecimentos importantes

Para começar com React, é útil conhecer:

- HTML e CSS.
- Funções, arrays e objetos em JavaScript.
- Desestruturação e métodos como `map`.
- Módulos com `import` e `export`.
- Tipagem de propriedades e funções, caso utilize TypeScript.
