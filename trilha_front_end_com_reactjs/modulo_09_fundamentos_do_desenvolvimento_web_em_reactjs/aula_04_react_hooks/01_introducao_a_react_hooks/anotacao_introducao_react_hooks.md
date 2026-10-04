# React Hooks — Resumo

## O que são Hooks?

Hooks são funções do React que permitem usar recursos como estado e efeitos em componentes funcionais. Os nomes dos Hooks começam com `use`, por exemplo: `useState` e `useEffect`.

**Regras principais:**
- Chame Hooks no nível superior do componente, sem colocá-los dentro de `if`, loops ou funções aninhadas.
- Use Hooks dentro de componentes React ou de outros Hooks.

## Virtual DOM

O Virtual DOM é uma representação leve da interface. Quando o estado ou as propriedades mudam, o React compara a nova versão com a anterior e atualiza no DOM real apenas o que precisa mudar.

## `useState` — estado do componente

Permite guardar dados que podem mudar durante o uso do componente. Atualizar o estado faz o React renderizar o componente novamente.

```jsx
const [contador, setContador] = useState(0);

function incrementar() {
  setContador((valorAtual) => valorAtual + 1);
}
