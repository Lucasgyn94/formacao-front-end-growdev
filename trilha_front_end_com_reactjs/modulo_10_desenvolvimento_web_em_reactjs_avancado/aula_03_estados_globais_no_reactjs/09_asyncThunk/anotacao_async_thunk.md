# AsyncThunk – Redux Toolkit

## 1. O que é AsyncThunk?

`createAsyncThunk()` é uma função disponibilizada pelo Redux Toolkit para facilitar o gerenciamento de operações assíncronas no Redux.

Ela é utilizada principalmente quando precisamos executar operações que dependem de processos externos, como requisições HTTP para buscar, cadastrar, atualizar ou excluir informações em uma API.

Em aplicações React, essas operações normalmente envolvem o uso de `async` e `await`, pois precisamos aguardar a resposta de uma requisição antes de atualizar o estado da aplicação.

O `createAsyncThunk()` simplifica esse processo, gerando automaticamente Actions que representam as diferentes etapas de execução de uma operação assíncrona.

### Principais objetivos

- Gerenciar operações assíncronas no Redux.
- Facilitar requisições HTTP para APIs.
- Controlar estados de carregamento.
- Tratar erros durante operações assíncronas.
- Evitar a criação manual de Actions para cada etapa da requisição.
- Integrar operações assíncronas com `createSlice()`.

## 2. O que são operações assíncronas?

Operações assíncronas são processos que podem levar algum tempo para serem concluídos, sem bloquear a execução do restante da aplicação.

Um exemplo comum é realizar uma requisição HTTP para buscar usuários em uma API.

```typescript
const resposta = await fetch(
  "https://jsonplaceholder.typicode.com/users"
);

const usuarios = await resposta.json();
```

Nesse exemplo:

- `fetch()` realiza a requisição HTTP.
- `await` aguarda a resposta da requisição.
- `resposta.json()` converte o conteúdo recebido para JSON.

Como não sabemos exatamente quanto tempo uma API levará para responder, precisamos tratar diferentes situações durante a execução.

É nesse contexto que o `createAsyncThunk()` se torna útil.

## 3. createAsyncThunk()

A função `createAsyncThunk()` permite criar uma Action assíncrona que executa uma operação e gera automaticamente três tipos de Actions para representar seu ciclo de vida.

Sua estrutura básica é:

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

### Entendendo o exemplo

- `createAsyncThunk()`: cria uma Action assíncrona.
- `"usuarios/buscar"`: define o identificador da operação.
- `async`: permite executar operações assíncronas.
- `await`: aguarda a conclusão de cada operação.
- `return`: retorna os dados obtidos na requisição.

O Redux Toolkit utiliza o resultado dessa operação para gerar automaticamente as Actions correspondentes.

## 4. Os três estados do AsyncThunk

Uma das principais características do `createAsyncThunk()` é a geração automática de três estados de execução.

### 4.1. pending

Representa o momento em que a operação assíncrona foi iniciada e ainda está em andamento.

É normalmente utilizado para indicar que a aplicação está carregando informações.

Exemplo:

```typescript
buscarUsuarios.pending
```

### 4.2. fulfilled

Representa o momento em que a operação foi concluída com sucesso.

Os dados retornados pela operação ficam disponíveis em `action.payload`.

Exemplo:

```typescript
buscarUsuarios.fulfilled
```

### 4.3. rejected

Representa o momento em que a operação foi rejeitada ou apresentou algum erro.

É utilizado para tratar falhas durante a execução da operação.

Exemplo:

```typescript
buscarUsuarios.rejected
```

### Resumo do ciclo de execução

```text
       createAsyncThunk()
               |
               v
            pending
               |
               v
       Executa operação
               |
          +----+----+
          |         |
          v         v
      fulfilled   rejected
          |         |
          v         v
      Sucesso      Erro
```

Essas três Actions são geradas automaticamente pelo Redux Toolkit, sem a necessidade de criá-las manualmente.

## 5. extraReducers

O `extraReducers` é utilizado dentro do `createSlice()` para tratar Actions que foram criadas fora da propriedade `reducers`.

É especialmente utilizado para controlar os três estados gerados pelo `createAsyncThunk()`.

Exemplo:

```typescript
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Usuario {
  id: number;
  name: string;
  email: string;
}

interface EstadoUsuarios {
  usuarios: Usuario[];
  carregando: boolean;
  erro: string | null;
}

export const buscarUsuarios = createAsyncThunk(
  "usuarios/buscar",

  async () => {
    const resposta = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!resposta.ok) {
      throw new Error("Erro ao buscar usuários");
    }

    return (await resposta.json()) as Usuario[];
  }
);

const initialState: EstadoUsuarios = {
  usuarios: [],
  carregando: false,
  erro: null,
};

const usuariosSlice = createSlice({
  name: "usuarios",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(buscarUsuarios.pending, (state) => {
        state.carregando = true;
        state.erro = null;
      })

      .addCase(buscarUsuarios.fulfilled, (state, action) => {
        state.carregando = false;
        state.usuarios = action.payload;
      })

      .addCase(buscarUsuarios.rejected, (state, action) => {
        state.carregando = false;
        state.erro = action.error.message ?? "Erro desconhecido";
      });
  },
});

export default usuariosSlice.reducer;
```

### Entendendo o exemplo

**pending:**

- Indica que a requisição começou.
- Define `carregando` como `true`.
- Limpa um possível erro anterior.

**fulfilled:**

- Indica que a requisição terminou com sucesso.
- Define `carregando` como `false`.
- Armazena os usuários recebidos em `state.usuarios`.

**rejected:**

- Indica que ocorreu algum erro.
- Define `carregando` como `false`.
- Armazena uma mensagem de erro.

## 6. Diferença entre reducers e extraReducers

Embora os dois sejam utilizados dentro do `createSlice()`, possuem responsabilidades diferentes.

### reducers

São utilizados para definir as Actions e os Reducers relacionados ao próprio Slice.

Exemplo:

```typescript
reducers: {
  limparUsuarios: (state) => {
    state.usuarios = [];
  },
}
```

Nesse caso, o Redux Toolkit gera automaticamente a Action `limparUsuarios()`.

### extraReducers

São utilizados para responder a Actions criadas fora da propriedade `reducers`.

Um exemplo comum é tratar as Actions geradas pelo `createAsyncThunk()`.

```typescript
extraReducers: (builder) => {
  builder.addCase(buscarUsuarios.pending, (state) => {
    state.carregando = true;
  });
}
```

**Importante:** `extraReducers` não cria novas Actions. Ele apenas permite que o Slice reaja a Actions já existentes.

## 7. Enviando parâmetros para o AsyncThunk

Também podemos enviar informações para uma operação assíncrona.

Para isso, utilizamos o segundo parâmetro recebido pela função `createAsyncThunk()`.

Exemplo:

```typescript
export const buscarUsuarioPorId = createAsyncThunk(
  "usuarios/buscarPorId",

  async (id: number) => {
    const resposta = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!resposta.ok) {
      throw new Error("Usuário não encontrado");
    }

    return await resposta.json();
  }
);
```

Nesse exemplo, a função recebe um identificador do tipo `number`.

Podemos executar a operação através do Dispatch:

```typescript
dispatch(buscarUsuarioPorId(1));
```

O valor `1` será recebido pelo parâmetro `id` dentro da função assíncrona.

## 8. Utilizando AsyncThunk em componentes React

Depois de criar o AsyncThunk e configurar o Slice, podemos utilizá-lo nos componentes React através do `useDispatch()`.

Exemplo:

```tsx
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { buscarUsuarios } from "../store/slices/usuariosSlice";

export function ListaUsuarios() {
  const dispatch = useAppDispatch();

  const { usuarios, carregando, erro } = useAppSelector(
    (state) => state.usuarios
  );

  useEffect(() => {
    dispatch(buscarUsuarios());
  }, [dispatch]);

  if (carregando) {
    return <p>Carregando usuários...</p>;
  }

  if (erro) {
    return <p>{erro}</p>;
  }

  return (
    <ul>
      {usuarios.map((usuario) => (
        <li key={usuario.id}>
          {usuario.name} - {usuario.email}
        </li>
      ))}
    </ul>
  );
}
```

### Entendendo o exemplo

- `useAppDispatch()`: permite enviar Actions para a Store.
- `useAppSelector()`: permite acessar o estado global.
- `useEffect()`: executa a busca quando o componente é montado.
- `dispatch(buscarUsuarios())`: inicia a operação assíncrona.
- `carregando`: controla a exibição do estado de carregamento.
- `erro`: permite apresentar mensagens quando ocorre uma falha.
- `usuarios`: armazena e apresenta os dados recebidos da API.

## 9. Tratamento de erros com rejectWithValue()

Além de utilizar `throw new Error()`, o `createAsyncThunk()` disponibiliza o recurso `rejectWithValue()`.

Ele permite retornar um valor personalizado quando uma operação precisa ser rejeitada.

Exemplo:

```typescript
import { createAsyncThunk } from "@reduxjs/toolkit";

export const buscarUsuarios = createAsyncThunk(
  "usuarios/buscar",

  async (_, { rejectWithValue }) => {
    try {
      const resposta = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!resposta.ok) {
        return rejectWithValue("Não foi possível buscar os usuários");
      }

      return await resposta.json();

    } catch {
      return rejectWithValue("Erro de conexão com o servidor");
    }
  }
);
```

Para acessar a mensagem personalizada no `extraReducers`, utilizamos `action.payload`.

Exemplo:

```typescript
.addCase(buscarUsuarios.rejected, (state, action) => {
  state.carregando = false;

  state.erro =
    (action.payload as string) ??
    action.error.message ??
    "Erro desconhecido";
});
```

**Importante:** `rejectWithValue()` é útil quando precisamos controlar as mensagens ou os dados enviados junto com uma Action rejeitada.

## 10. AsyncThunk e Entity Adapter

O `createAsyncThunk()` também pode trabalhar em conjunto com o Entity Adapter.

Essa combinação é bastante útil quando precisamos buscar coleções de dados em uma API e armazená-las de maneira normalizada.

Por exemplo:

- `createAsyncThunk()`: realiza a requisição para buscar os usuários.
- `createEntityAdapter()`: organiza os usuários em `ids` e `entities`.
- `extraReducers`: trata os estados `pending`, `fulfilled` e `rejected`.

Dessa forma, conseguimos combinar operações assíncronas com o gerenciamento organizado de coleções.

## 11. Vantagens do AsyncThunk

- **Automatização:** gera automaticamente as Actions de cada etapa da operação.
- **Organização:** separa a lógica assíncrona do gerenciamento do estado.
- **Carregamento:** facilita controlar estados de carregamento.
- **Tratamento de erros:** permite identificar e apresentar falhas.
- **Integração:** funciona diretamente com `createSlice()` e `extraReducers`.
- **Reutilização:** permite criar operações assíncronas que podem ser utilizadas em diferentes componentes.

## 12. Resumo dos principais conceitos

- **createAsyncThunk():** cria Actions assíncronas.
- **pending:** indica que a operação está em andamento.
- **fulfilled:** indica que a operação foi concluída com sucesso.
- **rejected:** indica que a operação apresentou um erro.
- **extraReducers:** permite que um Slice responda a Actions externas.
- **action.payload:** contém os dados retornados pela operação ou enviados por `rejectWithValue()`.
- **action.error:** contém informações sobre um erro ocorrido na operação.
- **rejectWithValue():** permite rejeitar uma operação enviando um valor personalizado.
- **dispatch():** inicia a execução de uma operação assíncrona.
- **useSelector():** permite acessar os dados armazenados na Store.

## 13. Conclusão

AsyncThunk é um recurso do Redux Toolkit utilizado para facilitar o gerenciamento de operações assíncronas, principalmente requisições HTTP para APIs.

Através de `createAsyncThunk()`, conseguimos criar operações que geram automaticamente três Actions: `pending`, `fulfilled` e `rejected`.

Combinando esse recurso com `extraReducers`, podemos controlar o carregamento, armazenar os dados recebidos e tratar possíveis erros.

É especialmente importante compreender a relação entre `createAsyncThunk()`, `extraReducers`, `dispatch()` e `action.payload`, pois esses conceitos são fundamentais para trabalhar com requisições assíncronas em aplicações React com Redux Toolkit.

---

**Observação de estudo:** Procure compreender principalmente o ciclo `pending`, `fulfilled` e `rejected`. Tente visualizar como cada etapa modifica o estado global e como o componente React reage a essas alterações.
