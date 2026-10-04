# Componentes de Estilo - Introdução ao Styled Components

## 1. Introdução

Ao desenvolver aplicações com React, além de criar os componentes responsáveis pela estrutura e comportamento da interface, também precisamos definir sua aparência.

Por exemplo, podemos ter um componente:

```tsx
export function Button() {
  return <button>Clique aqui</button>;
}
```

O React cria a estrutura do componente, porém ainda precisamos definir características visuais como:

```text
cor
tamanho
espaçamento
fonte
borda
background
posicionamento
```

Tradicionalmente, essas características são definidas utilizando CSS.

Por exemplo:

```css
button {
  background-color: blue;
  color: white;
  padding: 10px;
}
```

Com o crescimento das aplicações baseadas em componentes, surgiram também outras formas de organizar os estilos.

Uma dessas abordagens é o **CSS-in-JS**.

E uma biblioteca que utiliza essa abordagem é o:

```text
Styled Components
```

---

# 2. Relembrando a componentização

No React, construímos a interface utilizando componentes.

Por exemplo:

```text
Aplicação
│
├── Header
├── Home
│   ├── PostsList
│   │   ├── Post
│   │   ├── Post
│   │   └── Post
│   └── ...
│
└── Footer
```

Cada componente representa uma determinada parte da interface.

No nosso projeto de blog, por exemplo, já temos componentes como:

```text
Header
Footer
Post
PostsList
```

Essa organização permite separar a aplicação em pequenas partes reutilizáveis.

Podemos pensar:

```text
Interface
   ↓
dividida em
   ↓
Componentes
```

Porém, esses componentes também precisam possuir estilos.

---

# 3. Estilizando componentes

Uma maneira tradicional de estilizar uma aplicação é criar arquivos CSS.

Por exemplo:

```text
Button/
├── index.tsx
└── styles.css
```

No componente:

```tsx
import './styles.css';

export function Button() {
  return <button className="button">Clique aqui</button>;
}
```

E no CSS:

```css
.button {
  background-color: blue;
  color: white;
  padding: 10px;
}
```

Temos então:

```text
Componente React
      +
Arquivo CSS
      ↓
Componente estilizado
```

Essa abordagem continua sendo válida.

Porém, existem outras maneiras de organizar os estilos em aplicações React.

Uma delas é utilizar **CSS-in-JS**.

---

# 4. O que é CSS-in-JS?

CSS-in-JS é uma abordagem em que os estilos dos componentes são definidos utilizando JavaScript ou TypeScript.

Em vez de termos necessariamente:

```text
Componente
    ↓
index.tsx

+

CSS separado
    ↓
styles.css
```

podemos aproximar a definição dos estilos do próprio componente.

Conceitualmente:

```text
JavaScript / TypeScript
          ↓
      estilos CSS
          ↓
      componente
```

É justamente nesse contexto que entra o **Styled Components**.

---

# 5. O que é Styled Components?

**Styled Components** é uma biblioteca utilizada para estilização de componentes, principalmente em aplicações React.

Ela utiliza a abordagem:

```text
CSS-in-JS
```

permitindo escrever estilos CSS associados a componentes.

Em vez de depender somente de:

```tsx
<button className="button">
  Clique aqui
</button>
```

podemos criar um componente que já possui seus estilos associados.

Conceitualmente:

```text
Elemento HTML
     +
Estilos CSS
     ↓
Styled Component
```

Por exemplo, podemos criar algo semelhante a:

```tsx
const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
`;
```

Depois podemos utilizar:

```tsx
<Button>Clique aqui</Button>
```

Ou seja, `Button` passa a ser um componente React estilizado.

---

# 6. Entendendo `styled.button`

Observe:

```tsx
const Button = styled.button`
  background-color: blue;
  color: white;
`;
```

Temos:

```text
styled
   ↓
biblioteca Styled Components


.button
   ↓
elemento HTML que queremos criar


` ... `
   ↓
estilos CSS


Button
   ↓
novo componente estilizado
```

Podemos visualizar assim:

```text
styled.button
     +
     CSS
     ↓
<Button />
```

Portanto:

```tsx
<Button>Clique aqui</Button>
```

resultará conceitualmente em um elemento:

```html
<button>
  Clique aqui
</button>
```

com os estilos definidos pelo Styled Components.

---

# 7. Styled Components continua utilizando CSS

É importante entender que Styled Components **não elimina a necessidade de aprender CSS**.

Continuamos escrevendo propriedades CSS como:

```css
color: white;
background-color: blue;
padding: 10px;
border-radius: 5px;
font-size: 16px;
```

A diferença está principalmente na forma como esses estilos são organizados e associados aos componentes.

Por exemplo:

```tsx
const Button = styled.button`
  color: white;
  background-color: blue;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
`;
```

Portanto:

```text
CSS tradicional
        ↓
propriedades CSS


Styled Components
        ↓
também utiliza propriedades CSS
```

O conhecimento de CSS continua sendo fundamental.

---

# 8. Estilo associado ao componente

Uma das ideias importantes do Styled Components é aproximar o estilo do componente ao qual ele pertence.

Podemos ter:

```text
Button
  │
  ├── comportamento
  ├── conteúdo
  └── estilo
```

Isso combina com a própria ideia de componentização utilizada pelo React.

Em vez de pensar apenas:

```text
HTML
 +
CSS
```

passamos a pensar mais em:

```text
Componente
   ↓
possui sua própria responsabilidade
   ↓
inclusive visual
```

---

# 9. Evitando classes manualmente

No CSS tradicional podemos ter:

```tsx
<button className="button-primary">
  Salvar
</button>
```

E:

```css
.button-primary {
  background-color: blue;
  color: white;
}
```

Precisamos relacionar:

```text
className="button-primary"
          ↓
.button-primary
```

Com Styled Components, podemos criar diretamente:

```tsx
const Button = styled.button`
  background-color: blue;
  color: white;
`;
```

e utilizar:

```tsx
<Button>Salvar</Button>
```

Assim, não precisamos necessariamente criar e controlar manualmente nomes de classes para cada componente estilizado.

---

# 10. Componentes com nomes semânticos

Styled Components também permite criar componentes com nomes que representam melhor sua responsabilidade.

Por exemplo:

```tsx
const Container = styled.main`
  padding: 20px;
`;
```

```tsx
const Title = styled.h1`
  font-size: 32px;
`;
```

```tsx
const Button = styled.button`
  padding: 10px;
`;
```

Depois podemos escrever:

```tsx
<Container>
  <Title>Meu Blog</Title>

  <Button>Continuar</Button>
</Container>
```

Observe como podemos identificar facilmente:

```text
Container
Title
Button
```

como componentes da interface.

---

# 11. Styled Components e React

Styled Components combina naturalmente com a ideia de componentização do React.

No React:

```text
Interface
   ↓
Componentes
```

Com Styled Components:

```text
Interface
   ↓
Componentes
   ↓
Componentes estilizados
```

Assim podemos ter:

```text
Aplicação React
│
├── Header
│   └── estilos
│
├── Post
│   └── estilos
│
├── Button
│   └── estilos
│
└── Footer
    └── estilos
```

Isso ajuda a organizar a estilização de acordo com os componentes da aplicação.

---

# 12. Exemplo conceitual

Sem Styled Components:

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

```css
.header {
  background-color: #222;
  padding: 20px;
}

.header-title {
  color: white;
}
```

Temos:

```text
index.tsx
    ↓
className
    ↓
styles.css
```

---

Com Styled Components, poderíamos ter algo conceitualmente semelhante a:

```tsx
const HeaderContainer = styled.header`
  background-color: #222;
  padding: 20px;
`;

const Title = styled.h1`
  color: white;
`;
```

E utilizar:

```tsx
<HeaderContainer>
  <Title>Meu Blog</Title>
</HeaderContainer>
```

Agora:

```text
HeaderContainer
       ↓
já possui seu estilo


Title
       ↓
já possui seu estilo
```

---

# 13. Vantagens da abordagem

Styled Components pode trazer algumas vantagens na organização de aplicações baseadas em componentes.

Entre elas:

```text
estilos associados aos componentes
           ↓
melhor organização


componentes reutilizáveis
           ↓
reutilização de estilos


nomes semânticos
           ↓
maior clareza na estrutura


CSS-in-JS
           ↓
integração entre estilo e JavaScript/TypeScript
```

Além disso, Styled Components possui recursos que permitem criar estilos mais dinâmicos.

Esses recursos serão vistos nas próximas aulas.

---

# 14. Estilos dinâmicos

Uma característica importante da abordagem CSS-in-JS é a possibilidade de utilizar informações do componente para influenciar sua estilização.

Conceitualmente, podemos ter:

```text
Componente
    ↓
recebe informações
    ↓
estilo pode mudar
```

Por exemplo:

```text
<Button primary />

primary = true
      ↓
botão com determinado estilo


primary = false
      ↓
botão com outro estilo
```

Esse tipo de recurso será estudado posteriormente através de **props**.

Por enquanto, o importante é entender que Styled Components permite integrar:

```text
Componente
    +
Props
    +
CSS
```

---

# 15. Styled Components com TypeScript

Como nosso projeto utiliza:

```text
React
   +
TypeScript
```

também podemos utilizar Styled Components juntamente com TypeScript.

Isso permite combinar:

```text
Styled Components
        +
TypeScript
        ↓
componentes estilizados
com tipagem
```

Nas próximas aulas veremos como instalar a biblioteca e utilizá-la dentro de um projeto React + TypeScript.

---

# 16. Organização conceitual

Podemos comparar as abordagens desta forma:

## CSS tradicional

```text
Componente React
      │
      ↓
  className
      │
      ↓
Arquivo CSS
      │
      ↓
    estilo
```

## Styled Components

```text
Elemento HTML
      +
     CSS
      ↓
Styled Component
      ↓
Componente React estilizado
```

Exemplo:

```text
styled.button
      +
     CSS
      ↓
   <Button />
```

---

# 17. Styled Components não substitui React

Styled Components não é uma alternativa ao React.

Temos responsabilidades diferentes:

```text
React
  ↓
construção da interface
e componentes


Styled Components
  ↓
estilização desses componentes
```

As duas tecnologias trabalham juntas:

```text
React
   +
Styled Components
   ↓
Interface componentizada
e estilizada
```

---

# 18. Styled Components não substitui o conhecimento de CSS

Também é importante não pensar:

```text
Styled Components
      =
não preciso aprender CSS
```

Na verdade:

```text
Styled Components
      ↓
é uma maneira diferente
de utilizar e organizar CSS
```

Continuaremos utilizando conceitos como:

```text
display
margin
padding
color
background
border
font-size
flexbox
grid
pseudo seletores
media queries
etc.
```

Portanto, conhecer CSS continua sendo essencial.

---


# 19. Resumo

**Styled Components** é uma biblioteca para estilização de componentes que utiliza a abordagem **CSS-in-JS**.

A ideia básica é:

```text
CSS
 +
Componente
     ↓
Styled Component
```

Em vez de utilizar somente:

```tsx
<button className="button">
  Clique aqui
</button>
```

podemos criar conceitualmente:

```tsx
const Button = styled.button`
  background-color: blue;
  color: white;
`;
```

e utilizar:

```tsx
<Button>Clique aqui</Button>
```

Podemos guardar:

```text
React
  ↓
Componentização da interface


CSS
  ↓
Estilização


Styled Components
  ↓
Estilos associados aos componentes
utilizando CSS-in-JS
```

A principal ideia desta introdução é:

> Styled Components permite criar componentes React que já possuem seus estilos associados, utilizando CSS dentro do ecossistema JavaScript/TypeScript.

Isso aproxima a estilização da lógica de componentização utilizada pelo React e abre caminho para recursos como estilos baseados em props, extensão de estilos, pseudoseletores, animações e temas.
