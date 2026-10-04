# Componentes de Estilo - Instalação, Sintaxe Básica e Utilização com TypeScript

## 1. Introdução

Na aula anterior vimos que o **Styled Components** é uma biblioteca que utiliza a abordagem **CSS-in-JS**, permitindo criar componentes React que já possuem seus estilos associados.

A ideia básica é:

```text
Elemento HTML
     +
     CSS
     ↓
Styled Component
```

Por exemplo:

```tsx
const Button = styled.button`
  background-color: blue;
  color: white;
`;
```

Depois podemos utilizar esse componente normalmente no JSX:

```tsx
<Button>Clique aqui</Button>
```

Nesta aula veremos como:

```text
1. Instalar o Styled Components
2. Importar a biblioteca
3. Entender sua sintaxe
4. Criar componentes estilizados
5. Utilizar esses componentes no React
6. Trabalhar com Styled Components em TypeScript
```

---

# 2. Instalando o Styled Components

Dentro de um projeto React, podemos instalar a biblioteca através do npm.

No terminal, na raiz do projeto:

```bash
npm install styled-components
```

Depois da instalação, o pacote será adicionado às dependências do projeto no:

```text
package.json
```

Conceitualmente:

```text
Projeto React
     ↓
npm install styled-components
     ↓
node_modules
     +
package.json
     ↓
Styled Components disponível
```

---

# 3. Styled Components e TypeScript

Estamos trabalhando em um projeto:

```text
React
  +
TypeScript
```

O Styled Components pode ser utilizado normalmente nesse ambiente.

Nas versões atuais da biblioteca, as declarações de tipos já fazem parte do próprio pacote.

Portanto, em uma instalação atual, normalmente basta:

```bash
npm install styled-components
```

> Dependendo da versão utilizada em materiais ou projetos mais antigos, você pode encontrar também a instalação de `@types/styled-components`. Isso ocorre porque versões anteriores dependiam de um pacote separado para fornecer determinadas definições de tipos.

---

# 4. Importando o `styled`

Depois da instalação, podemos importar o objeto `styled`:

```tsx
import styled from 'styled-components';
```

O `styled` será utilizado para criar nossos componentes estilizados.

Por exemplo:

```tsx
const Button = styled.button`
  background-color: blue;
  color: white;
`;
```

Podemos entender:

```text
styled
  ↓
fornecido pelo styled-components

.button
  ↓
elemento HTML que será criado

` ... `
  ↓
CSS do componente
```

---

# 5. Sintaxe básica

A sintaxe básica é:

```tsx
const NomeDoComponente = styled.elementoHTML`
  propriedade: valor;
`;
```

Por exemplo:

```tsx
const Title = styled.h1`
  color: blue;
  font-size: 32px;
`;
```

Temos:

```text
Title
  ↓
nome do nosso componente


styled
  ↓
API do Styled Components


.h1
  ↓
elemento HTML utilizado


` ... `
  ↓
estilos CSS
```

Depois podemos utilizar:

```tsx
<Title>Meu Blog</Title>
```

O resultado será conceitualmente equivalente a um:

```html
<h1>Meu Blog</h1>
```

com os estilos:

```css
color: blue;
font-size: 32px;
```

---

# 6. `styled.elemento`

Podemos criar Styled Components a partir de vários elementos HTML.

Por exemplo:

```tsx
styled.div
styled.main
styled.section
styled.header
styled.footer
styled.article
styled.h1
styled.h2
styled.p
styled.span
styled.button
styled.input
styled.form
styled.img
```

Exemplo:

```tsx
const Container = styled.div`
  padding: 20px;
`;
```

Outro:

```tsx
const Title = styled.h1`
  font-size: 32px;
`;
```

Outro:

```tsx
const Description = styled.p`
  color: gray;
`;
```

Outro:

```tsx
const Button = styled.button`
  padding: 10px 20px;
`;
```

Cada um deles será um componente React.

---

# 7. Template Literals

Observe esta sintaxe:

```tsx
styled.button`
  background-color: blue;
  color: white;
`;
```

Os caracteres:

```text
` `
```

são chamados de **backticks**.

Eles são utilizados em JavaScript e TypeScript para criar **template literals**.

Já vimos usos como:

```ts
const nome = 'Lucas';

console.log(`Olá, ${nome}`);
```

Styled Components utiliza esse recurso para permitir escrever CSS:

```tsx
const Button = styled.button`
  background-color: blue;
  color: white;
`;
```

Portanto:

```text
styled.button
      ↓
recebe uma template literal
      ↓
contendo CSS
```

Essa característica será ainda mais importante quando começarmos a trabalhar com valores dinâmicos e props.

---

# 8. Criando nosso primeiro Styled Component

Podemos criar:

```tsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
`;
```

Agora `Button` é um componente React.

Podemos utilizá-lo:

```tsx
export function App() {
  return (
    <div>
      <Button>Clique aqui</Button>
    </div>
  );
}
```

Observe que não escrevemos:

```tsx
<button>Clique aqui</button>
```

Escrevemos:

```tsx
<Button>Clique aqui</Button>
```

Isso acontece porque criamos nosso próprio componente estilizado.

---

# 9. Do elemento HTML para o Styled Component

Podemos visualizar a transformação:

```text
<button>
   ↓

styled.button`
  ...
`
   ↓

Button
   ↓

<Button>
```

Por exemplo:

```tsx
const Button = styled.button`
  background-color: #333;
  color: white;
`;
```

Uso:

```tsx
<Button>Entrar</Button>
```

Conceitualmente, o Styled Components criará o elemento HTML necessário e associará os estilos a ele.

---

# 10. Criando vários componentes estilizados

Podemos criar vários Styled Components:

```tsx
import styled from 'styled-components';

const Container = styled.main`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
`;

const Description = styled.p`
  color: gray;
`;

const Button = styled.button`
  padding: 10px 20px;
`;
```

Depois:

```tsx
export function App() {
  return (
    <Container>
      <Title>Meu Blog</Title>

      <Description>
        Bem-vindo ao meu blog.
      </Description>

      <Button>Continuar</Button>
    </Container>
  );
}
```

Agora temos:

```text
Container
   ↓
<main>


Title
   ↓
<h1>


Description
   ↓
<p>


Button
   ↓
<button>
```

Todos são componentes React estilizados.

---

# 11. Separando os estilos do componente

Uma organização bastante utilizada é separar a definição dos Styled Components do componente principal.

Por exemplo:

```text
Button/
├── index.tsx
└── styles.ts
```

No:

```text
styles.ts
```

podemos ter:

```tsx
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
`;
```

E no:

```text
index.tsx
```

podemos importar:

```tsx
import { ButtonContainer } from './styles';

export function Button() {
  return (
    <ButtonContainer>
      Clique aqui
    </ButtonContainer>
  );
}
```

Assim temos uma separação:

```text
index.tsx
    ↓
estrutura/comportamento do componente


styles.ts
    ↓
componentes estilizados
```

---

# 12. Por que utilizar `styles.ts`?

Como os estilos são escritos utilizando TypeScript/JavaScript, não precisamos necessariamente utilizar:

```text
styles.css
```

Podemos utilizar:

```text
styles.ts
```

Por exemplo:

```text
components/
└── Header/
    ├── index.tsx
    └── styles.ts
```

O fluxo fica:

```text
styles.ts
   ↓
exporta componentes estilizados
   ↓
index.tsx
   ↓
utiliza esses componentes
```

---

# 13. Exemplo com um Header

Podemos criar:

```text
Header/
├── index.tsx
└── styles.ts
```

## `styles.ts`

```tsx
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #202024;
  padding: 20px;
`;

export const HeaderTitle = styled.h1`
  color: white;
  font-size: 24px;
`;
```

## `index.tsx`

```tsx
import { HeaderContainer, HeaderTitle } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Meu Blog</HeaderTitle>
    </HeaderContainer>
  );
}
```

Observe a responsabilidade de cada arquivo:

```text
styles.ts
│
├── HeaderContainer
└── HeaderTitle


index.tsx
│
└── Header
      │
      ├── utiliza HeaderContainer
      └── utiliza HeaderTitle
```

---

# 14. Comparando CSS tradicional e Styled Components

Com CSS tradicional poderíamos ter:

```tsx
import './styles.css';

export function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Meu Blog</h1>
    </header>
  );
}
```

E:

```css
.header {
  background-color: #202024;
  padding: 20px;
}

.header-title {
  color: white;
  font-size: 24px;
}
```

Com Styled Components:

```tsx
export const HeaderContainer = styled.header`
  background-color: #202024;
  padding: 20px;
`;

export const HeaderTitle = styled.h1`
  color: white;
  font-size: 24px;
`;
```

E:

```tsx
<HeaderContainer>
  <HeaderTitle>Meu Blog</HeaderTitle>
</HeaderContainer>
```

A diferença conceitual fica:

```text
CSS tradicional

elemento
   ↓
className
   ↓
classe CSS
   ↓
estilo
```

Enquanto:

```text
Styled Components

elemento
   +
estilo
   ↓
componente estilizado
```

---

# 15. Não precisamos de `className` para tudo

Com CSS tradicional é comum termos:

```tsx
<div className="container">
  <h1 className="title">
    Meu Blog
  </h1>
</div>
```

Com Styled Components podemos ter:

```tsx
<Container>
  <Title>Meu Blog</Title>
</Container>
```

Isso pode deixar a estrutura do JSX mais semântica.

Em vez de ler:

```text
div.container
h1.title
```

podemos ler:

```text
Container
Title
```

---

# 16. Styled Components são componentes React

Esse é um conceito muito importante.

Quando fazemos:

```tsx
const Button = styled.button`
  color: white;
`;
```

`Button` não é apenas uma variável contendo CSS.

Ele representa um **componente React estilizado**.

Por isso podemos utilizá-lo:

```tsx
<Button>Salvar</Button>
```

da mesma maneira que utilizamos outros componentes:

```tsx
<Header />
<Post />
<PostsList />
<Footer />
```

A diferença é que:

```text
Button
  ↓
foi criado através do Styled Components
```

---

# 17. TypeScript e os elementos HTML

Uma vantagem de utilizar Styled Components em um projeto TypeScript é que a tipagem acompanha o tipo de elemento criado.

Por exemplo:

```tsx
const Button = styled.button`
  padding: 10px;
`;
```

Como ele representa um:

```html
<button>
```

podemos utilizar propriedades próprias de um botão:

```tsx
<Button type="submit">
  Enviar
</Button>
```

Da mesma forma:

```tsx
const Image = styled.img`
  width: 200px;
`;
```

pode receber propriedades de uma imagem:

```tsx
<Image
  src="/imagem.png"
  alt="Descrição da imagem"
/>
```

E:

```tsx
const Input = styled.input`
  padding: 10px;
`;
```

pode receber:

```tsx
<Input
  type="text"
  placeholder="Digite seu nome"
/>
```

Temos então:

```text
styled.button
      ↓
propriedades de button


styled.img
      ↓
propriedades de img


styled.input
      ↓
propriedades de input
```

O TypeScript consegue ajudar na verificação dessas propriedades.

---

# 18. Exemplo utilizando nosso projeto de blog

No nosso projeto já possuímos componentes como:

```text
src/
└── components/
    ├── Header/
    ├── Footer/
    ├── Post/
    └── PostsList/
```

Poderíamos começar a organizar os estilos assim:

```text
src/
└── components/
    ├── Header/
    │   ├── index.tsx
    │   └── styles.ts
    │
    ├── Footer/
    │   ├── index.tsx
    │   └── styles.ts
    │
    ├── Post/
    │   ├── index.tsx
    │   └── styles.ts
    │
    └── PostsList/
        ├── index.tsx
        └── styles.ts
```

Assim:

```text
index.tsx
   ↓
componente


styles.ts
   ↓
estilos daquele componente
```

Isso mantém os arquivos relacionados próximos uns dos outros.

---

# 19. Exemplo completo simples

## `styles.ts`

```tsx
import styled from 'styled-components';

export const Container = styled.article`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-size: 24px;
`;

export const Description = styled.p`
  color: #555;
`;

export const Button = styled.button`
  padding: 8px 16px;
  cursor: pointer;
`;
```

## `index.tsx`

```tsx
import {
  Button,
  Container,
  Description,
  Title,
} from './styles';

export function Post() {
  return (
    <Container>
      <Title>Introdução ao React</Title>

      <Description>
        Aprendendo os fundamentos do React.
      </Description>

      <Button>Leia mais</Button>
    </Container>
  );
}
```

Observe que nosso JSX ficou:

```tsx
<Container>
  <Title>...</Title>
  <Description>...</Description>
  <Button>...</Button>
</Container>
```

Em vez de algo como:

```tsx
<article className="post">
  <h2 className="post-title">...</h2>
  <p className="post-description">...</p>
  <button className="post-button">...</button>
</article>
```

---

# 20. Fluxo geral

Podemos resumir todo o processo desta aula:

```text
1. Instalar
   ↓
npm install styled-components


2. Importar
   ↓
import styled from 'styled-components';


3. Criar
   ↓
const Button = styled.button`
  ...
`;


4. Utilizar
   ↓
<Button>
  Clique aqui
</Button>
```

Ou:

```text
styled
   ↓
escolhemos elemento HTML
   ↓
styled.button
   ↓
adicionamos CSS
   ↓
styled.button`...`
   ↓
criamos componente
   ↓
Button
   ↓
utilizamos no JSX
   ↓
<Button />
```

---

# 21. Resumo

O Styled Components pode ser instalado em um projeto React através do npm:

```bash
npm install styled-components
```

Depois importamos:

```tsx
import styled from 'styled-components';
```

A sintaxe básica é:

```tsx
const Componente = styled.elemento`
  propriedade: valor;
`;
```

Por exemplo:

```tsx
const Button = styled.button`
  background-color: blue;
  color: white;
`;
```

E utilizamos:

```tsx
<Button>Clique aqui</Button>
```

Podemos também separar nossos estilos:

```text
Componente/
├── index.tsx
└── styles.ts
```

Onde:

```text
index.tsx
   ↓
estrutura e comportamento


styles.ts
   ↓
componentes estilizados
```

Com TypeScript, os componentes estilizados também podem aproveitar a tipagem relacionada ao elemento HTML utilizado.

Por exemplo:

```text
styled.button → button
styled.input  → input
styled.img    → img
styled.form   → form
```

A ideia principal desta aula é:

> Com Styled Components podemos criar elementos React estilizados utilizando uma sintaxe que combina componentes, TypeScript e CSS.

A partir dessa base, podemos avançar para estilos dinâmicos, em que o visual do componente poderá mudar de acordo com suas **props**.
