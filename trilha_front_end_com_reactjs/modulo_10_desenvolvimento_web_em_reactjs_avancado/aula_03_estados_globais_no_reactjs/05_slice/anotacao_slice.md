# Slice – Redux Toolkit

## 1. O que é um Slice?

Um Slice é uma parte específica do estado global de uma aplicação Redux.

No Redux Toolkit, utilizamos a função `createSlice()` para criar e organizar essa parte do estado.

Um Slice reúne em um único lugar:

- Nome do Slice.
- Estado inicial (`initialState`).
- Reducers responsáveis por atualizar o estado.
- Actions geradas automaticamente.

Essa organização facilita a manutenção e evita a necessidade de criar arquivos separados para cada Action e Reducer.

### Exemplo prático

Imagine uma aplicação de comércio eletrônico que possui diferentes informações:

- Usuários.
- Produtos.
- Carrinho de compras.
- Pedidos.

Podemos criar um Slice para cada responsabilidade:

```text
src/
├── redux/
│   ├── store.ts
│   └── slices/
│       ├── usuarioSlice.ts
│       ├── produtoSlice.ts
│       ├── carrinhoSlice.ts
│       └── pedidoSlice.ts
```

Cada Slice será responsável por gerenciar uma parte específica do estado global.

## 2. createSlice()

A função `createSlice()` é utilizada para criar um Slice no Redux Toolkit.

Ela recebe um objeto de configuração com três propriedades fundamentais:

| Propriedade | Responsabilidade |
|---|---|
| `name` | Define o nome do Slice. |
| `initialState` | Define o estado inicial. |
| `reducers` | Define as funções responsáveis pelas alterações do estado. |

### Exemplo:

```typescript
import { createSlice } from "@reduxjs/toolkit";

const contadorSlice = createSlice({
  name: "contador",

  initialState: {
    valor: 0,
  },

  reducers: {
    incrementar: (state) => {
      state.valor += 1;
    },

    decrementar: (state) => {
      state.valor -= 1;
    },
  },
});
```

Nesse exemplo, criamos um Slice chamado `contador`, responsável por controlar um estado numérico.

## 3. initialState

A propriedade `initialState` define o estado inicial do Slice.

Esse estado pode ser um número, uma string, um array ou um objeto, dependendo da necessidade da aplicação.

### Exemplo com objeto:

```typescript
const initialState = {
  nome: "",
  email: "",
  idade: 0,
};
```

### Exemplo com array:

```typescript
const initialState = [];
```

### Exemplo com valor numérico:

```typescript
const initialState = 0;
```

O importante é definir uma estrutura inicial compatível com os dados que serão armazenados e manipulados pelo Slice.

## 4. reducers

A propriedade `reducers` contém as funções responsáveis por determinar como o estado será atualizado.

Cada função representa uma operação que pode ser realizada naquele Slice.

Exemplo:

```typescript
reducers: {
  incrementar: (state) => {
    state.valor += 1;
  },

  decrementar: (state) => {
    state.valor -= 1;
  },

  reiniciar: (state) => {
    state.valor = 0;
  },
}
```

Nesse exemplo, temos três Reducers:

- `incrementar`: aumenta o valor em uma unidade.
- `decrementar`: diminui o valor em uma unidade.
- `reiniciar`: retorna o valor para zero.

### Utilizando payload

Quando precisamos enviar informações para um Reducer, utilizamos o parâmetro `action`, que contém a propriedade `payload`.

Exemplo:

```typescript
reducers: {
  adicionarValor: (state, action) => {
    state.valor += action.payload;
  },
}
```

Podemos enviar um valor através da Action:

```typescript
dispatch(adicionarValor(5));
```

Nesse caso, o valor `5` será recebido através de `action.payload`.

**Importante:** O Redux Toolkit utiliza Immer internamente para permitir essa sintaxe de alteração do estado. Portanto, não estamos modificando diretamente o estado original.

## 5. Actions geradas automaticamente

Uma das principais vantagens do `createSlice()` é a geração automática das Actions.

Cada função definida dentro de `reducers` gera uma Action correspondente.

Por exemplo:

```typescript
reducers: {
  incrementar: (state) => {
    state.valor += 1;
  },

  decrementar: (state) => {
    state.valor -= 1;
  },
}
```

O Redux Toolkit gera automaticamente as Actions:

```typescript
contadorSlice.actions.incrementar
contadorSlice.actions.decrementar
```

Para disponibilizá-las em outros arquivos, podemos exportá-las:

```typescript
export const { incrementar, decrementar } =
  contadorSlice.actions;
```

Assim, podemos importar essas Actions nos componentes que precisam atualizar o estado.

## 6. Exportando o Reducer

Além das Actions, precisamos exportar o Reducer do Slice para registrá-lo na Store.

Exemplo:

```typescript
export default contadorSlice.reducer;
```

É importante entender a diferença:

- `contadorSlice.actions`: contém as Actions geradas automaticamente.
- `contadorSlice.reducer`: contém o Reducer responsável por atualizar o estado.

As Actions são utilizadas pelos componentes através do `dispatch()`, enquanto o Reducer é registrado na Store.

## 7. Integrando o Slice à Store

Depois de criar o Slice, precisamos registrar seu Reducer na Store utilizando `configureStore()`.

Exemplo:

```typescript
import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "./slices/contadorSlice";

export const store = configureStore({
  reducer: {
    contador: contadorReducer,
  },
});
```

Nesse exemplo:

- `configureStore()` cria a Store.
- `contador` define a chave pela qual o estado será acessado.
- `contadorReducer` é o Reducer responsável por gerenciar esse estado.

O estado poderá ser acessado através de:

```typescript
state.contador.valor
```

## 8. Utilizando o Slice em componentes React

Depois de registrar o Slice na Store e disponibilizar a Store através do `Provider`, podemos utilizar dois Hooks principais do React Redux.

### 8.1. useSelector()

O `useSelector()` permite acessar informações armazenadas no estado global.

Exemplo:

```tsx
import { useSelector } from "react-redux";

function Contador() {
  const valor = useSelector(
    (state) => state.contador.valor
  );

  return <h1>{valor}</h1>;
}
```

Nesse exemplo, acessamos o valor armazenado no Slice `contador`.

### 8.2. useDispatch()

O `useDispatch()` permite enviar Actions para a Store.

Exemplo:

```tsx
import { useDispatch } from "react-redux";
import { incrementar } from "./slices/contadorSlice";

function BotaoIncrementar() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(incrementar())}>
      Incrementar
    </button>
  );
}
```

Quando o botão é clicado, a Action `incrementar()` é enviada para a Store, que utiliza o Reducer correspondente para atualizar o estado.

## 9. Fluxo de funcionamento de um Slice

O funcionamento básico de um Slice pode ser representado da seguinte maneira:

```text
       Componente React
              |
              v
          useDispatch
              |
              v
            Action
              |
              v
            Store
              |
              v
            Reducer
              |
              v
        Estado atualizado
              |
              v
          useSelector
              |
              v
       Componente atualizado
```

Esse fluxo permite que diferentes componentes compartilhem informações e acompanhem as atualizações do estado global.

## 10. Tipando um Slice com TypeScript

Quando utilizamos TypeScript, podemos definir uma interface para representar a estrutura do estado.

Exemplo:

```typescript
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface EstadoContador {
  valor: number;
}

const initialState: EstadoContador = {
  valor: 0,
};

const contadorSlice = createSlice({
  name: "contador",
  initialState,

  reducers: {
    incrementar: (state) => {
      state.valor += 1;
    },

    adicionarValor: (state, action: PayloadAction<number>) => {
      state.valor += action.payload;
    },
  },
});

export const { incrementar, adicionarValor } =
  contadorSlice.actions;

export default contadorSlice.reducer;
```

Nesse exemplo:

- `EstadoContador` define a estrutura do estado.
- `PayloadAction<number>` informa que o payload da Action deve ser um número.
- O TypeScript ajuda a identificar erros de tipagem durante o desenvolvimento.

## 11. Resumo dos principais conceitos

| Conceito | Responsabilidade |
|---|---|
| Slice | Representa uma parte do estado global. |
| `createSlice()` | Cria e configura um Slice. |
| `name` | Identifica o Slice. |
| `initialState` | Define o estado inicial. |
| `reducers` | Define as funções de atualização do estado. |
| `actions` | Disponibiliza as Actions geradas automaticamente. |
| `reducer` | Disponibiliza o Reducer para registro na Store. |
| `payload` | Transporta informações para uma Action. |
| `useSelector()` | Permite consultar o estado global. |
| `useDispatch()` | Permite enviar Actions para a Store. |

## 12. Conclusão

Slice é uma das principais estruturas do Redux Toolkit, pois permite dividir o estado global em partes menores e organizadas.

Através de `createSlice()`, conseguimos definir o estado inicial, criar Reducers e gerar Actions automaticamente.

Depois, registramos o Reducer na Store e utilizamos `useSelector()` e `useDispatch()` para acessar e atualizar as informações nos componentes React.

Compreender o funcionamento dos Slices é fundamental para desenvolver aplicações React com Redux Toolkit.

---

**Observação de estudo:** Procure compreender principalmente a diferença entre `contadorSlice.actions` e `contadorSlice.reducer`. As Actions são enviadas pelos componentes através do Dispatch, enquanto o Reducer é registrado na Store para controlar as atualizações do estado.
