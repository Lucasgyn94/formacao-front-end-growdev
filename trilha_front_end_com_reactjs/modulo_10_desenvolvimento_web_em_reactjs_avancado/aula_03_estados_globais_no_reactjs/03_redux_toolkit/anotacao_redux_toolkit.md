# Redux Toolkit

## 1. O que é Redux Toolkit?

Redux Toolkit (RTK) é a biblioteca oficial e recomendada para trabalhar com Redux em aplicações JavaScript e React.

Seu principal objetivo é simplificar a implementação do Redux, reduzindo a quantidade de código necessário para configurar e gerenciar o estado global de uma aplicação.

Antes do Redux Toolkit, era necessário escrever muitas configurações e códigos repetitivos para criar Actions, Reducers e configurar a Store.

O Redux Toolkit oferece funções que facilitam essas tarefas, tornando o código mais organizado e fácil de manter.

### Principais objetivos

- Simplificar a configuração do Redux.
- Reduzir códigos repetitivos (boilerplate).
- Facilitar a criação de Actions e Reducers.
- Gerenciar estados globais de maneira organizada.
- Facilitar o desenvolvimento de operações assíncronas.
- Incentivar boas práticas no gerenciamento de estados.

## 2. Principais recursos do Redux Toolkit

O Redux Toolkit disponibiliza diversas funções para facilitar o gerenciamento de estado.

As principais são:

- `configureStore()`
- `createSlice()`
- `createAsyncThunk()`
- `createEntityAdapter()`

Cada uma possui uma responsabilidade específica.

## 3. configureStore()

A função `configureStore()` é utilizada para criar e configurar a Store do Redux.

Ela simplifica a configuração que anteriormente precisava ser realizada manualmente.

Entre seus recursos estão:

- Configuração automática do Redux DevTools.
- Inclusão de middlewares padrão.
- Combinação de diferentes Reducers.
- Configuração simplificada da Store.

### Exemplo:

```typescript
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // Reducers da aplicação
  },
});
```

Nesse exemplo, criamos uma Store utilizando `configureStore()`.

A propriedade `reducer` recebe os Reducers responsáveis por gerenciar os diferentes estados da aplicação.

## 4. createSlice()

A função `createSlice()` permite criar uma parte específica do estado global, reunindo em um único lugar:

- Nome do Slice.
- Estado inicial.
- Reducers.
- Actions geradas automaticamente.

Um Slice representa uma parte do estado global da aplicação.

Por exemplo, uma aplicação pode possuir:

- `userSlice`: gerenciamento dos usuários.
- `productSlice`: gerenciamento dos produtos.
- `cartSlice`: gerenciamento do carrinho de compras.

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

export const { incrementar, decrementar } =
  contadorSlice.actions;

export default contadorSlice.reducer;
```

### Entendendo o exemplo

- `name`: identifica o Slice.
- `initialState`: define o estado inicial.
- `reducers`: contém as funções responsáveis pelas alterações do estado.
- `contadorSlice.actions`: disponibiliza as Actions criadas automaticamente.
- `contadorSlice.reducer`: disponibiliza o Reducer do Slice.

**Importante:** O Redux Toolkit utiliza a biblioteca Immer internamente, permitindo escrever alterações no estado com uma sintaxe semelhante à mutação direta.

Apesar dessa sintaxe, o estado original não é modificado diretamente. O Immer produz um novo estado de maneira imutável.

## 5. Integrando o Slice à Store

Depois de criar um Slice, precisamos registrar seu Reducer na Store para disponibilizar seu estado globalmente.

### Exemplo:

```typescript
import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "./contadorSlice";

export const store = configureStore({
  reducer: {
    contador: contadorReducer,
  },
});
```

Nesse exemplo, o Reducer do contador foi registrado na Store.

O estado poderá ser acessado através de:

```typescript
state.contador
```

## 6. Integrando Redux com React

Para utilizar Redux em uma aplicação React, precisamos instalar e utilizar a biblioteca `React Redux`.

Ela disponibiliza ferramentas que permitem conectar os componentes React à Store.

### Provider

O componente `Provider` disponibiliza a Store para todos os componentes que estiverem dentro dele.

Exemplo:

```tsx
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <MeuComponente />
    </Provider>
  );
}

export default App;
```

### useSelector()

O Hook `useSelector()` permite acessar informações armazenadas na Store.

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

Ele recebe uma função seletora que permite selecionar a informação desejada do estado global.

### useDispatch()

O Hook `useDispatch()` permite enviar Actions para a Store.

Exemplo:

```tsx
import { useDispatch } from "react-redux";
import { incrementar } from "./contadorSlice";

function Controles() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(incrementar())}>
      Incrementar
    </button>
  );
}
```

Nesse exemplo, ao clicar no botão, a Action `incrementar()` é enviada para a Store através do `dispatch()`.

## 7. createAsyncThunk()

A função `createAsyncThunk()` facilita o gerenciamento de operações assíncronas no Redux Toolkit.

Ela é muito utilizada em situações que envolvem requisições HTTP, como:

- Buscar informações de uma API.
- Cadastrar usuários.
- Atualizar registros.
- Excluir informações.

Quando uma operação assíncrona é executada, o Redux Toolkit disponibiliza três estados de execução:

| Estado | Significado |
|---|---|
| `pending` | A operação está em andamento. |
| `fulfilled` | A operação foi concluída com sucesso. |
| `rejected` | A operação apresentou um erro. |

### Exemplo:

```typescript
import { createAsyncThunk } from "@reduxjs/toolkit";

export const buscarUsuarios = createAsyncThunk(
  "usuarios/buscar",
  async () => {
    const resposta = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!resposta.ok) {
      throw new Error("Erro ao buscar usuários");
    }

    return await resposta.json();
  }
);
```

Nesse exemplo, criamos uma operação assíncrona responsável por buscar usuários em uma API.

O Redux Toolkit gera automaticamente as Actions correspondentes aos estados `pending`, `fulfilled` e `rejected`.

Essas Actions podem ser tratadas no `extraReducers` de um Slice.

## 8. createEntityAdapter()

A função `createEntityAdapter()` facilita o gerenciamento de coleções de dados, especialmente quando trabalhamos com listas de entidades.

Ela fornece métodos para:

- Adicionar registros.
- Atualizar registros.
- Remover registros.
- Consultar registros.
- Manter os dados organizados por identificadores.

É especialmente útil para trabalhar com listas de usuários, produtos e outras entidades.

## 9. Redux Toolkit x Redux tradicional

| Característica | Redux tradicional | Redux Toolkit |
|---|---|---|
| Configuração da Store | Mais manual. | Simplificada com `configureStore()`. |
| Criação de Actions | Geralmente manual. | Automática com `createSlice()`. |
| Criação de Reducers | Separada e manual. | Organizada com `createSlice()`. |
| Imutabilidade | Gerenciada manualmente. | Facilitada pelo Immer. |
| Operações assíncronas | Exigem configuração adicional. | Facilitadas pelo `createAsyncThunk()`. |
| Código repetitivo | Maior quantidade. | Menor quantidade. |

## 10. Resumo dos principais conceitos

| Recurso | Responsabilidade |
|---|---|
| `configureStore()` | Cria e configura a Store. |
| `createSlice()` | Cria um Slice com estado, Reducers e Actions. |
| `createAsyncThunk()` | Gerencia operações assíncronas. |
| `createEntityAdapter()` | Facilita o gerenciamento de coleções de entidades. |
| `Provider` | Disponibiliza a Store para os componentes React. |
| `useSelector()` | Acessa informações da Store. |
| `useDispatch()` | Envia Actions para a Store. |

## 11. Conclusão

Redux Toolkit é a abordagem oficialmente recomendada para utilizar Redux, oferecendo recursos que simplificam o gerenciamento do estado global em aplicações React.

Com ele, conseguimos configurar a Store, criar Slices, gerar Actions automaticamente e gerenciar operações assíncronas com menos código.

É importante compreender principalmente a relação entre `configureStore()`, `createSlice()`, `useSelector()` e `useDispatch()`, pois esses recursos são fundamentais para trabalhar com Redux Toolkit.

---

**Observação de estudo:** Como você já estudou `useReducer` no React, procure relacionar seu funcionamento com os Reducers do Redux Toolkit. Ambos trabalham com estado e ações, mas o Redux Toolkit organiza esse gerenciamento em uma estrutura global compartilhada pela aplicação.
