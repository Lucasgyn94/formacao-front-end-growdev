# ReactJS — useCallback

## 📌 O que é?

O `useCallback` é um Hook do React que memoriza uma função entre renderizações de um componente, evitando que ela seja recriada desnecessariamente enquanto suas dependências não mudarem.

## 🧩 Sintaxe

```jsx
const funcaoMemorizada = useCallback(() => {
  // Código da função
}, [dependencias]);
```

## 💻 Exemplo prático

```jsx
import { useState, useCallback } from "react";

function App() {
  const [contador, setContador] = useState(0);

  const incrementar = useCallback(() => {
    setContador((valor) => valor + 1);
  }, []);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>
        Incrementar
      </button>
    </div>
  );
}

export default App;
```

## ⚙️ Como funciona?

- `useCallback`: memoriza a referência da função.
- `[]`: indica que a função não depende de valores reativos externos.
- Quando as dependências mudam, o React retorna uma nova função.
- Quando as dependências não mudam, a referência da função é mantida.

## 🎯 Quando usar?

Use `useCallback` principalmente quando:

- Você passa funções como propriedades (`props`) para componentes otimizados com `React.memo`.
- A referência estável de uma função é importante para outros Hooks, como `useEffect`.

**Atenção:** não use `useCallback` em todas as funções. Ele tem um custo e só é útil quando a memorização traz algum benefício.

## 🔍 useCallback vs useMemo

| Hook | Memoriza |
|---|---|
| `useCallback` | Uma função |
| `useMemo` | O resultado de uma computação |

## 📝 Resumo final

O `useCallback` ajuda a manter a mesma referência de uma função entre renderizações, desde que suas dependências não mudem. Ele é uma ferramenta de otimização, não uma necessidade para toda função.

## 🏋️ Exercício

Crie um componente com dois estados: `contador` e `nome`.

1. Crie uma função `incrementar` usando `useCallback`.
2. Faça o botão incrementar o contador.
3. Altere o nome e observe o comportamento do componente.
4. Explique por que `useCallback` pode ser útil quando a função é passada para um componente filho otimizado.

