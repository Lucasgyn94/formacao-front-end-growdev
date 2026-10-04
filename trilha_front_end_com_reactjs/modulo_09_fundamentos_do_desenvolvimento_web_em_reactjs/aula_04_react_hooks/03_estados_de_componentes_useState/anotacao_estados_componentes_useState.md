# React Hooks — Estado de componentes (`useState`)

O Hook `useState` permite adicionar estado a componentes funcionais. Estado é um dado que pode mudar e atualizar o que aparece na tela.

## Sintaxe

```jsx
import { useState } from 'react';

const [contador, setContador] = useState(0);
```

- `contador`: valor atual do estado.
- `setContador`: função que atualiza o estado.
- `0`: valor inicial.

Quando o estado muda, o React renderiza novamente o componente.

## Exemplo

```jsx
function Contador() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador((valorAtual) => valorAtual + 1);
  }

  return (
    <button onClick={incrementar}>
      Cliques: {contador}
    </button>
  );
}
```

Use a função atualizadora (`valorAtual => valorAtual + 1`) quando o novo valor depender do anterior.

## Estado com objetos e arrays

Não altere o estado diretamente. Crie um novo objeto ou array:

```jsx
setUsuario((usuarioAtual) => ({
  ...usuarioAtual,
  nome: 'Ana',
}));

setItens((itensAtuais) => [...itensAtuais, novoItem]);
```

## Regras importantes

- Chame Hooks no nível superior do componente, sem colocá-los em condições, loops ou funções aninhadas.
- Cada chamada de `useState` mantém um estado independente.
- Não dependa de a variável de estado mudar imediatamente após chamar sua função atualizadora.
- Use estado para dados que afetam a interface. Para valores que não precisam causar nova renderização, considere `useRef`.

## Resumo

`useState` guarda dados entre renderizações. Ao atualizar o estado, o React renderiza novamente o componente para refletir a mudança.
