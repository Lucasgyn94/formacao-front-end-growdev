# Introdução ao consumo de APIs com Axios e ReactJS

## 1. O que significa consumir uma API?

Imagine que você está desenvolvendo um blog. Você precisa exibir uma lista de publicações, mas não quer cadastrar todos os posts manualmente dentro do código React.

Esses dados podem estar armazenados em um servidor, que disponibiliza uma API para que outras aplicações possam consultá-los.

A comunicação funciona da seguinte maneira:

1. O React solicita dados ao servidor.
2. A API recebe a requisição HTTP.
3. O servidor processa a solicitação e retorna uma resposta.
4. O React recebe os dados e os exibe na interface.

### Exemplo de resposta de uma API

```json
[
    {
        "id": 1,
        "title": "Introdução ao React",
        "body": "Aprendendo a criar componentes."
    },
    {
        "id": 2,
        "title": "Consumo de APIs",
        "body": "Aprendendo a buscar dados externos."
    }
]
```

**Em resumo:** consumir uma API significa fazer uma requisição a um serviço para obter, cadastrar, atualizar ou excluir informações.

## 2. O que é Axios?

O Axios é uma biblioteca JavaScript que facilita a comunicação entre uma aplicação e uma API por meio de requisições HTTP.

Ele pode ser utilizado com React, Vue, Angular, Node.js e outras tecnologias.

Embora o JavaScript já possua a função `fetch()`, o Axios oferece recursos convenientes para trabalhar com respostas, erros, configurações e interceptadores.

### Principais métodos HTTP

| Método | Finalidade | Exemplo |
|---|---|---|
| GET | Consultar dados | Listar publicações |
| POST | Criar dados | Cadastrar uma publicação |
| PUT | Substituir um registro | Atualizar uma publicação |
| PATCH | Atualizar parcialmente | Alterar somente o título |
| DELETE | Excluir dados | Remover uma publicação |

Nesta introdução, utilizaremos principalmente o método `GET`.

## 3. Criando o projeto React

Para começar um projeto utilizando React, Vite e TypeScript, execute os seguintes comandos no terminal:

```bash
npm create vite@latest consumo-api -- --template react-ts

cd consumo-api

npm install

npm install axios

npm run dev
```

### Entendendo os comandos

- `npm create vite@latest`: cria um projeto utilizando Vite.
- `cd consumo-api`: acessa a pasta do projeto.
- `npm install`: instala as dependências do projeto.
- `npm install axios`: instala a biblioteca Axios.
- `npm run dev`: inicia o servidor de desenvolvimento.

Se você já possui um projeto React com TypeScript, basta executar:

```bash
npm install axios
```

## 4. Conhecendo a API que vamos utilizar

Para praticar, utilizaremos a API pública JSONPlaceholder.

Ela disponibiliza dados fictícios para testes e estudos, sem a necessidade de criar um servidor próprio.

Endpoint que utilizaremos:

```text
https://jsonplaceholder.typicode.com/posts
```

Essa URL retorna uma lista de publicações.

Cada publicação contém propriedades como:

- `userId`: identificador do usuário que criou a publicação.
- `id`: identificador da publicação.
- `title`: título da publicação.
- `body`: conteúdo da publicação.

Podemos acessar esse endereço diretamente pelo navegador para visualizar a resposta da API.

## 5. Fazendo a primeira requisição com Axios

Antes de integrar a API ao React, vamos entender como realizar uma requisição utilizando somente o Axios.

```tsx
import axios from 'axios';

async function buscarPosts() {
    try {
        const resposta = await axios.get(
            'https://jsonplaceholder.typicode.com/posts',
        );

        console.log(resposta.data);
    } catch (erro) {
        console.error('Erro ao buscar posts:', erro);
    }
}

buscarPosts();
```

### 5.1. Importando o Axios

```tsx
import axios from 'axios';
```

Importamos a biblioteca instalada pelo npm para utilizá-la no código.

### 5.2. Realizando a requisição

```tsx
const resposta = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
);
```

O método `get()` realiza uma requisição HTTP GET para o endereço informado.

A palavra-chave `await` aguarda a conclusão da operação assíncrona antes de continuar a execução da função.

Por isso, utilizamos `async` na declaração da função:

```tsx
async function buscarPosts() {
    // Código assíncrono.
}
```

### 5.3. Acessando os dados recebidos

```tsx
console.log(resposta.data);
```

O Axios disponibiliza o corpo da resposta na propriedade `data`.

A resposta completa também contém outras informações, como o status HTTP e os cabeçalhos.

### 5.4. Tratando erros

```tsx
try {
    const resposta = await axios.get(url);

    console.log(resposta.data);
} catch (erro) {
    console.error('Erro ao buscar posts:', erro);
}
```

O bloco `try` contém o código que pode apresentar falhas.

O bloco `catch` permite tratar erros de rede e respostas HTTP que o Axios considera malsucedidas, entre outras falhas da requisição.

O tratamento adequado evita que os erros sejam simplesmente ignorados.

## 6. Utilizando Axios com React

Agora vamos integrar a requisição à interface React.

Para isso, utilizaremos dois hooks importantes:

- `useState`: armazena dados e estados que influenciam a interface.
- `useEffect`: permite executar efeitos colaterais, como buscar dados em uma API.

O fluxo de funcionamento será:

1. O componente é montado.
2. O `useEffect` inicia a requisição.
3. O Axios solicita os dados à API.
4. O React armazena os dados utilizando `setState`.
5. A interface é atualizada automaticamente.

## 7. Criando o componente completo

No arquivo `src/App.tsx`, coloque o seguinte código:

```tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export function App() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');

    useEffect(() => {
        async function buscarPosts() {
            try {
                const resposta = await axios.get<Post[]>(
                    'https://jsonplaceholder.typicode.com/posts',
                );

                setPosts(resposta.data);
            } catch {
                setErro('Não foi possível carregar os posts.');
            } finally {
                setCarregando(false);
            }
        }

        buscarPosts();
    }, []);

    if (carregando) {
        return <p>Carregando publicações...</p>;
    }

    if (erro) {
        return <p>{erro}</p>;
    }

    return (
        <main>
            <h1>Lista de publicações</h1>

            {posts.map((post) => (
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </main>
    );
}

export default App;
```

## 8. Entendendo o código passo a passo

### 8.1. Criando a interface Post

```tsx
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
```

A interface `Post` define a estrutura esperada de cada publicação.

Como estamos utilizando TypeScript, podemos especificar o tipo de cada propriedade.

- `userId`: número.
- `id`: número.
- `title`: texto.
- `body`: texto.

Essa definição ajuda o editor a oferecer sugestões e o compilador a identificar incompatibilidades de tipos.

Importante: a interface define o formato esperado durante o desenvolvimento, mas não valida automaticamente os dados recebidos em tempo de execução.

### 8.2. Criando os estados

```tsx
const [posts, setPosts] = useState<Post[]>([]);
const [carregando, setCarregando] = useState(true);
const [erro, setErro] = useState('');
```

Criamos três estados.

**Estado dos posts:**

```tsx
const [posts, setPosts] = useState<Post[]>([]);
```

- `posts`: contém as publicações.
- `setPosts`: atualiza a lista.
- `Post[]`: indica um array de objetos do tipo `Post`.
- `[]`: representa o array inicialmente vazio.

**Estado de carregamento:**

```tsx
const [carregando, setCarregando] = useState(true);
```

Controla se a aplicação está aguardando a resposta da API.

**Estado de erro:**

```tsx
const [erro, setErro] = useState('');
```

Armazena uma mensagem para informar ao usuário quando a requisição falhar.

### 8.3. Utilizando useEffect

```tsx
useEffect(() => {
    async function buscarPosts() {
        // Requisição à API.
    }

    buscarPosts();
}, []);
```

O `useEffect` permite executar a busca após a renderização do componente.

O array de dependências está vazio:

```tsx
[]
```

Isso significa que o efeito não depende de valores reativos e, em condições normais, é executado na montagem do componente.

A função assíncrona é declarada dentro do efeito e chamada em seguida.

Não devemos declarar o próprio callback do `useEffect` como `async`, pois ele deve retornar nada ou uma função de limpeza, e não uma `Promise`.

**Observação:** no modo de desenvolvimento, o `StrictMode` do React pode executar novamente o ciclo dos efeitos para ajudar a identificar problemas.

### 8.4. Realizando a requisição com tipagem

```tsx
const resposta = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts',
);
```

O tipo `Post[]` indica ao TypeScript que esperamos receber uma lista de publicações.

Depois, utilizamos:

```tsx
setPosts(resposta.data);
```

O estado recebe os dados retornados pela API.

Quando o estado é atualizado, o React renderiza novamente o componente com os dados recebidos.

### 8.5. Tratando o estado de carregamento

```tsx
if (carregando) {
    return <p>Carregando publicações...</p>;
}
```

Enquanto a requisição estiver em andamento, mostramos uma mensagem de carregamento.

Isso melhora a experiência do usuário, pois a requisição pode demorar alguns instantes.

### 8.6. Tratando erros

```tsx
if (erro) {
    return <p>{erro}</p>;
}
```

Se ocorrer um erro, mostramos a mensagem armazenada no estado `erro`.

O tratamento é importante porque uma API pode ficar indisponível ou uma requisição pode falhar por problemas de conexão.

### 8.7. Utilizando finally

```tsx
finally {
    setCarregando(false);
}
```

O bloco `finally` é executado após a conclusão do `try` ou do `catch`.

Nesse caso, ele encerra o estado de carregamento tanto quando a requisição funciona quanto quando ocorre uma falha.

### 8.8. Renderizando os posts

```tsx
{posts.map((post) => (
    <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </article>
))}
```

O método `map()` percorre o array e retorna um elemento visual para cada publicação.

A propriedade `key` identifica cada elemento da lista para que o React possa acompanhar suas alterações.

Utilizamos `post.id` porque é um identificador único para cada publicação retornada pela API.

## 9. Boas práticas no consumo de APIs

### 9.1. Separar responsabilidades

Evite concentrar todas as requisições e regras de negócio em componentes muito grandes.

Conforme a aplicação cresce, você pode criar arquivos específicos para os serviços de comunicação com a API.

### 9.2. Tratar carregamento e erros

Sempre considere situações como:

- Requisição em andamento.
- Requisição concluída com sucesso.
- Falha de conexão.
- Resposta HTTP de erro.
- Resposta sem dados.

### 9.3. Utilizar TypeScript

Defina interfaces ou tipos para os dados utilizados pela aplicação.

Isso facilita a manutenção e ajuda a encontrar erros durante o desenvolvimento.

### 9.4. Evitar requisições desnecessárias

Organize os efeitos e suas dependências para evitar chamadas desnecessárias.

Quando houver mudanças rápidas de filtros ou parâmetros, considere cancelar requisições anteriores ou ignorar respostas obsoletas.

### 9.5. Proteger credenciais

Não coloque chaves secretas, senhas ou credenciais privadas diretamente no código React.

O código executado no navegador pode ser inspecionado pelos usuários. Segredos que precisam permanecer protegidos devem ficar no servidor.

## 10. Organização futura do projeto

Conforme a aplicação crescer, podemos adotar uma estrutura semelhante a esta:

```text
src/
├── components/
│   └── PostCard.tsx
├── services/
│   └── api.ts
├── types/
│   └── Post.ts
├── pages/
│   └── Home.tsx
├── App.tsx
└── main.tsx
```

### Responsabilidades das pastas

- `components/`: componentes reutilizáveis da interface.
- `services/`: configuração do Axios e funções de comunicação com APIs.
- `types/`: interfaces e tipos TypeScript.
- `pages/`: páginas da aplicação.
- `App.tsx`: componente principal.

Essa estrutura é apenas uma sugestão inicial. A organização ideal depende do tamanho e das necessidades do projeto.

## 11. Exercícios práticos

Depois de executar o projeto, tente realizar os seguintes desafios.

### Exercício 1 — Alterar o título

Altere o título principal da aplicação para:

```tsx
<h1>Meu Blog</h1>
```

### Exercício 2 — Limitar a quantidade de posts

Exiba somente os dez primeiros posts.

Dica:

```tsx
posts.slice(0, 10)
```

Você pode utilizar o resultado desse método antes de chamar `map()`.

### Exercício 3 — Melhorar o tratamento de erros

Altere a mensagem exibida quando a requisição falhar.

Exemplo:

```text
Não foi possível carregar as publicações. Tente novamente.
```

### Exercício 4 — Criar um componente PostCard

Crie um componente chamado `PostCard.tsx` para exibir cada publicação.

O componente deverá receber um objeto `Post` por meio de uma propriedade (`prop`) e renderizar seu título e conteúdo.

### Exercício 5 — Criar um botão para recarregar os posts

Implemente um botão que permita ao usuário realizar novamente a requisição à API.

Pense em como organizar a função `buscarPosts` para que ela possa ser chamada tanto na montagem do componente quanto no clique do botão.

## 12. Resumo da aula

Nesta introdução, aprendemos:

- O que é uma API.
- O que significa consumir uma API.
- O que é Axios.
- Como instalar o Axios em um projeto React.
- Como realizar requisições HTTP GET.
- Como utilizar `async` e `await`.
- Como acessar os dados com `resposta.data`.
- Como utilizar `useState` para armazenar dados.
- Como utilizar `useEffect` para buscar dados.
- Como definir interfaces com TypeScript.
- Como tratar carregamento e erros.
- Como renderizar listas com `map()`.
- Como organizar o código seguindo boas práticas.

## 13. Próximos passos

Depois de dominar esta introdução, avance nesta ordem:

1. **Organização dos serviços:** criar `services/api.ts` e configurar o Axios com `axios.create()`.
2. **Componentização:** criar componentes reutilizáveis, como `PostCard`.
3. **Parâmetros e filtros:** buscar dados com parâmetros e filtrar resultados.
4. **Rotas dinâmicas:** exibir detalhes de uma publicação específica.
5. **Operações CRUD:** implementar consultas, cadastros, atualizações e exclusões.
6. **Tratamento avançado de erros:** estudar códigos HTTP, cancelamento de requisições e interceptadores.

**Objetivo final:** conseguir consumir uma API de forma organizada, tipada e reutilizável, aplicando os conceitos em projetos reais com ReactJS e TypeScript.

