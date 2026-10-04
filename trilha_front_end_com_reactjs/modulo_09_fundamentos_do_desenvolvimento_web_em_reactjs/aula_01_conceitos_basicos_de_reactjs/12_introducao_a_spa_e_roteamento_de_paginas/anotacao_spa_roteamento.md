# Conceitos básicos de ReactJS — Introdução à SPA e Roteamento de Páginas

## 1. O que é ReactJS?

**ReactJS** é uma biblioteca JavaScript utilizada para construir **interfaces de usuário (UI)**, principalmente em aplicações web.

Uma aplicação React normalmente é dividida em pequenos blocos reutilizáveis chamados de **componentes**.

Exemplos de componentes:

- Navbar
- Header
- Footer
- Botão
- Formulário
- Card de produto
- Página de login

Exemplo simples:

```jsx
function App() {
  return (
    <div>
      <h1>Minha aplicação React</h1>
      <p>Olá, mundo!</p>
    </div>
  );
}

export default App;
```

---

## 2. O que é uma SPA?

**SPA** significa:

> Single Page Application — Aplicação de Página Única.

Em uma aplicação web tradicional, ao navegar entre páginas, o navegador normalmente solicita uma nova página HTML ao servidor.

Exemplo:

```text
/login
/produtos
/clientes
/contato
```

Cada navegação pode resultar no carregamento de uma nova página.

Em uma **SPA**, normalmente existe uma página HTML principal e o JavaScript controla a troca do conteúdo exibido.

```text
index.html
    |
    +-- React
          |
          +-- Home
          +-- Produtos
          +-- Clientes
          +-- Contato
```

Assim, quando o usuário muda de uma página para outra, a aplicação pode atualizar apenas o conteúdo necessário, sem recarregar toda a página.

---

## 3. React e SPA

O React é muito utilizado para desenvolver SPAs.

Imagine uma aplicação com:

```text
/
├── Home
├── /produtos
├── /clientes
└── /contato
```

Ao acessar:

```text
/produtos
```

não é necessário carregar um novo arquivo HTML chamado `produtos.html`.

O React pode simplesmente renderizar o componente correspondente:

```jsx
<Produtos />
```

Da mesma forma:

```text
/clientes
```

pode renderizar:

```jsx
<Clientes />
```

---

## 4. O que é roteamento?

**Roteamento** é o mecanismo utilizado para determinar qual conteúdo ou componente deve ser exibido de acordo com a URL acessada.

Exemplo:

```text
/           -> Home
/login      -> Login
/produtos   -> Produtos
/clientes   -> Clientes
```

Podemos pensar em uma rota como uma associação entre:

```text
URL -> Componente
```

Por exemplo:

```text
/produtos -> <Produtos />
```

---

## 5. React Router

O React, por si só, não possui um sistema completo de roteamento.

Uma biblioteca bastante utilizada para isso é o **React Router**.

Ela permite criar diferentes rotas dentro de uma aplicação React.

A instalação pode ser feita pelo npm:

```bash
npm install react-router-dom
```

---

## 6. Exemplo básico de roteamento

Exemplo simplificado:

```jsx
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

Nesse exemplo:

```text
/           -> Home
/produtos   -> Produtos
/contato    -> Contato
```

---

## 7. Principais componentes do React Router

### BrowserRouter

O `BrowserRouter` envolve a aplicação e permite que o React Router controle a navegação.

```jsx
<BrowserRouter>
  ...
</BrowserRouter>
```

---

### Routes

O `Routes` é utilizado para agrupar as rotas da aplicação.

```jsx
<Routes>
  ...
</Routes>
```

---

### Route

O `Route` representa uma rota.

Exemplo:

```jsx
<Route path="/produtos" element={<Produtos />} />
```

Onde:

```text
path
```

define a URL.

E:

```text
element
```

define o componente que será exibido.

---

## 8. Navegação com Link

Para navegar entre páginas sem provocar o recarregamento completo da aplicação, podemos utilizar o componente `Link`.

```jsx
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  );
}
```

O atributo:

```text
to
```

indica para qual rota o usuário será direcionado.

Exemplo:

```jsx
<Link to="/produtos">Produtos</Link>
```

---

## 9. Link x tag `<a>`

Em uma SPA React, geralmente utilizamos:

```jsx
<Link to="/produtos">Produtos</Link>
```

em vez de:

```html
<a href="/produtos">Produtos</a>
```

O `Link` permite que o React Router faça a navegação pelo lado do cliente, evitando um recarregamento completo da página.

---

## 10. Organização básica de um projeto

Uma possível estrutura seria:

```text
src/
├── components/
│   └── Navbar.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Produtos.jsx
│   └── Contato.jsx
│
├── App.jsx
└── main.jsx
```

A pasta:

```text
components/
```

pode armazenar componentes reutilizáveis.

Enquanto:

```text
pages/
```

pode armazenar os componentes que representam as páginas da aplicação.

---

## 11. Fluxo simplificado

Quando o usuário acessa:

```text
/produtos
```

o fluxo pode ser entendido como:

```text
Usuário acessa /produtos
        |
        v
React Router verifica a URL
        |
        v
Encontra a rota /produtos
        |
        v
Renderiza <Produtos />
        |
        v
Conteúdo aparece na tela
```

Tudo isso pode acontecer sem que o navegador precise recarregar completamente a aplicação.

---

## 12. Resumo

### ReactJS

Biblioteca JavaScript utilizada para construir interfaces através de componentes.

### SPA

**Single Page Application** é uma aplicação em que a navegação pode ocorrer sem o recarregamento completo de uma nova página HTML a cada mudança de tela.

### Rota

Relaciona uma URL a determinado conteúdo ou componente.

```text
/produtos -> Produtos
```

### React Router

Biblioteca utilizada para implementar o roteamento em aplicações React.

Principais elementos:

```text
BrowserRouter -> habilita o roteamento
Routes        -> agrupa as rotas
Route         -> define uma rota
Link          -> permite navegar entre rotas
```

### Ideia principal

```text
React
  |
  +-- Componentes
  |
  +-- SPA
       |
       +-- React Router
              |
              +-- URL
              |
              +-- Rota
              |
              +-- Componente/Página
```

Em resumo:

> Uma SPA desenvolvida com React pode utilizar o React Router para alterar os componentes exibidos conforme a URL, proporcionando navegação entre páginas sem recarregar completamente a aplicação.
