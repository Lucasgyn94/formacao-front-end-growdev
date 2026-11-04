# Entity Adapter – Redux Toolkit

## 1. O que é Entity Adapter?

Entity Adapter é um recurso do Redux Toolkit utilizado para facilitar o gerenciamento de coleções de dados (entidades) dentro do estado global da aplicação.

Ele é especialmente útil quando trabalhamos com listas de informações, como:

- Usuários.
- Produtos.
- Tarefas.
- Clientes.
- Pedidos.

Normalmente, quando armazenamos uma lista de objetos no Redux, precisamos implementar manualmente operações para adicionar, atualizar, remover e consultar esses registros.

O `createEntityAdapter()` simplifica essas operações, oferecendo métodos prontos para manipular os dados de maneira organizada e padronizada.

### Principais objetivos

- Organizar coleções de entidades no estado global.
- Evitar códigos repetitivos para manipulação de listas.
- Facilitar operações de criação, atualização e remoção.
- Permitir consultas eficientes por identificador.
- Manter os dados normalizados.
- Simplificar a implementação de Reducers e Selectors.

## 2. O que são entidades?

Entidades são objetos que representam elementos específicos de uma aplicação.

Por exemplo, em um sistema de gerenciamento de tarefas, cada tarefa pode ser representada por um objeto:

```typescript
interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}
```

Podemos ter várias tarefas armazenadas em uma coleção:

```typescript
const tarefas: Tarefa[] = [
  {
    id: 1,
    titulo: "Estudar React",
    concluida: false,
  },
  {
    id: 2,
    titulo: "Estudar Redux",
    concluida: true,
  },
];
```

O Entity Adapter facilita o gerenciamento desse tipo de estrutura.

## 3. O que é normalização de dados?

Normalização é uma maneira de organizar os dados para evitar estruturas desnecessariamente complexas ou duplicadas.

Em vez de armazenar uma coleção apenas como um array de objetos, o Entity Adapter organiza os registros utilizando identificadores.

Essa estrutura possui duas propriedades principais:

### 3.1. ids

Armazena os identificadores de todas as entidades.

Exemplo:

```typescript
ids: [1, 2, 3]
```

### 3.2. entities

Armazena os objetos organizados pelo identificador correspondente.

Exemplo:

```typescript
entities: {
  1: {
    id: 1,
    titulo: "Estudar React",
    concluida: false
  },

  2: {
    id: 2,
    titulo: "Estudar Redux",
    concluida: true
  }
}
```

Dessa forma, conseguimos localizar uma entidade diretamente pelo seu identificador.

### Estrutura normalizada

O Entity Adapter utiliza a seguinte estrutura:

```typescript
{
  ids: [1, 2],

  entities: {
    1: {
      id: 1,
      titulo: "Estudar React",
      concluida: false
    },

    2: {
      id: 2,
      titulo: "Estudar Redux",
      concluida: true
    }
  }
}
```

**Importante:** O Entity Adapter utiliza essa estrutura automaticamente, evitando que precisemos implementar toda a lógica de normalização manualmente.

## 4. createEntityAdapter()

A função `createEntityAdapter()` é responsável por criar um adaptador para gerenciar uma coleção de entidades.

Ela disponibiliza métodos prontos para manipular os dados e Selectors para consultar as informações armazenadas.

Exemplo:

```typescript
import { createEntityAdapter } from "@reduxjs/toolkit";

interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

const tarefasAdapter = createEntityAdapter<Tarefa>();
```

Nesse exemplo:

- `createEntityAdapter()` cria o adaptador.
- `<Tarefa>` define o tipo das entidades.
- `tarefasAdapter` disponibiliza os métodos necessários para gerenciar a coleção.

## 5. initialState

O Entity Adapter possui o método `getInitialState()`, utilizado para criar o estado inicial da coleção.

Exemplo:

```typescript
const initialState = tarefasAdapter.getInitialState();
```

O resultado será uma estrutura semelhante a:

```typescript
{
  ids: [],
  entities: {}
}
```

Também podemos adicionar outras propriedades ao estado inicial.

Exemplo:

```typescript
const initialState = tarefasAdapter.getInitialState({
  carregando: false,
  erro: null as string | null,
});
```

Nesse caso, além das propriedades `ids` e `entities`, teremos também `carregando` e `erro`.

Isso é útil quando precisamos armazenar informações adicionais relacionadas à coleção.

## 6. Principais métodos do Entity Adapter

O Entity Adapter disponibiliza diversos métodos para manipular as entidades.

### 6.1. addOne()

Adiciona uma única entidade à coleção.

Exemplo:

```typescript
tarefasAdapter.addOne(state, {
  id: 1,
  titulo: "Estudar React",
  concluida: false,
});
```

### 6.2. addMany()

Adiciona várias entidades de uma só vez.

Exemplo:

```typescript
tarefasAdapter.addMany(state, [
  {
    id: 1,
    titulo: "Estudar React",
    concluida: false,
  },
  {
    id: 2,
    titulo: "Estudar Redux",
    concluida: true,
  },
]);
```

### 6.3. setAll()

Substitui todas as entidades existentes pelas entidades fornecidas.

É bastante utilizado quando recebemos uma lista completa de dados de uma API.

Exemplo:

```typescript
tarefasAdapter.setAll(state, tarefas);
```

### 6.4. removeOne()

Remove uma entidade específica utilizando seu identificador.

Exemplo:

```typescript
tarefasAdapter.removeOne(state, 1);
```

Nesse exemplo, a tarefa com identificador `1` será removida.

### 6.5. removeMany()

Remove várias entidades utilizando seus identificadores.

Exemplo:

```typescript
tarefasAdapter.removeMany(state, [1, 2]);
```

### 6.6. removeAll()

Remove todas as entidades da coleção.

Exemplo:

```typescript
tarefasAdapter.removeAll(state);
```

### 6.7. updateOne()

Atualiza parcialmente uma entidade existente.

Exemplo:

```typescript
tarefasAdapter.updateOne(state, {
  id: 1,

  changes: {
    concluida: true,
  },
});
```

Nesse exemplo, somente a propriedade `concluida` será atualizada.

### 6.8. updateMany()

Atualiza várias entidades de uma só vez.

Exemplo:

```typescript
tarefasAdapter.updateMany(state, [
  {
    id: 1,
    changes: {
      concluida: true,
    },
  },
  {
    id: 2,
    changes: {
      titulo: "Estudar TypeScript",
    },
  },
]);
```

### 6.9. upsertOne()

Adiciona uma entidade caso ela não exista ou atualiza os campos de uma entidade existente.

Exemplo:

```typescript
tarefasAdapter.upsertOne(state, {
  id: 1,
  titulo: "Estudar Redux Toolkit",
  concluida: true,
});
```

### 6.10. upsertMany()

Realiza a operação de inserção ou atualização para várias entidades.

É útil quando recebemos dados que podem conter registros novos e registros já existentes.

## 7. Criando um Slice com Entity Adapter

Uma das principais aplicações do Entity Adapter é sua integração com `createSlice()`.

Vamos criar um Slice responsável por gerenciar uma lista de tarefas.

### Exemplo completo:

```typescript
import {
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";

interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

const tarefasAdapter = createEntityAdapter<Tarefa>();

const initialState = tarefasAdapter.getInitialState();

const tarefasSlice = createSlice({
  name: "tarefas",

  initialState,

  reducers: {
    adicionarTarefa: tarefasAdapter.addOne,

    adicionarTarefas: tarefasAdapter.addMany,

    removerTarefa: tarefasAdapter.removeOne,

    atualizarTarefa: tarefasAdapter.updateOne,

    limparTarefas: tarefasAdapter.removeAll,
  },
});

export const {
  adicionarTarefa,
  adicionarTarefas,
  removerTarefa,
  atualizarTarefa,
  limparTarefas,
} = tarefasSlice.actions;

export default tarefasSlice.reducer;
```

### Entendendo o exemplo

- `createEntityAdapter<Tarefa>()`: cria o adaptador para gerenciar tarefas.
- `getInitialState()`: cria o estado inicial normalizado.
- `createSlice()`: cria o Slice responsável pelas tarefas.
- `reducers`: utiliza diretamente os métodos do Adapter para definir as operações.
- `tarefasSlice.actions`: disponibiliza as Actions geradas automaticamente.
- `tarefasSlice.reducer`: disponibiliza o Reducer para registro na Store.

Observe que não precisamos implementar manualmente a lógica de adicionar, remover ou atualizar as tarefas.

O próprio Entity Adapter fornece essas operações.

## 8. Selectors do Entity Adapter

Além dos métodos para manipular as entidades, o Entity Adapter também disponibiliza Selectors para consultar os dados armazenados.

Esses Selectors são criados através de `getSelectors()`.

Exemplo:

```typescript
export const tarefasSelectors =
  tarefasAdapter.getSelectors(
    (state: RootState) => state.tarefas
  );
```

Nesse exemplo, estamos criando Selectors para acessar o estado do Slice `tarefas`.

Entre os principais Selectors estão:

### selectAll()

Retorna todas as entidades em formato de array.

```typescript
const tarefas = tarefasSelectors.selectAll(state);
```

### selectById()

Retorna uma entidade específica através do identificador.

```typescript
const tarefa = tarefasSelectors.selectById(state, 1);
```

### selectIds()

Retorna um array contendo os identificadores das entidades.

```typescript
const ids = tarefasSelectors.selectIds(state);
```

### selectEntities()

Retorna as entidades organizadas por seus identificadores.

```typescript
const entities = tarefasSelectors.selectEntities(state);
```

### selectTotal()

Retorna a quantidade total de entidades armazenadas.

```typescript
const quantidade = tarefasSelectors.selectTotal(state);
```

## 9. Utilizando os Selectors no React

Podemos utilizar os Selectors do Entity Adapter juntamente com o Hook `useSelector()` do React Redux.

Exemplo:

```tsx
import { useAppSelector } from "../store/hooks";
import { tarefasSelectors } from "../store/slices/tarefasSlice";

export function ListaTarefas() {
  const tarefas = useAppSelector(
    tarefasSelectors.selectAll
  );

  return (
    <ul>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id}>
          {tarefa.titulo}
        </li>
      ))}
    </ul>
  );
}
```

Nesse exemplo:

- `useAppSelector()` acessa o estado global.
- `selectAll()` retorna todas as tarefas.
- `map()` percorre a lista para apresentar cada tarefa na interface.

## 10. Vantagens do Entity Adapter

- **Organização:** mantém as entidades em uma estrutura padronizada.
- **Normalização:** evita estruturas complexas e facilita o acesso aos registros.
- **Menos código:** disponibiliza métodos prontos para manipular coleções.
- **Facilidade de manutenção:** centraliza operações comuns de gerenciamento de dados.
- **Selectors:** facilita consultar entidades específicas ou coleções completas.
- **Integração:** funciona diretamente com `createSlice()` e Redux Toolkit.

## 11. Resumo dos principais conceitos

- **Entity Adapter:** recurso do Redux Toolkit para gerenciar coleções de entidades.
- **createEntityAdapter():** cria o adaptador para manipulação dos dados.
- **ids:** armazena os identificadores das entidades.
- **entities:** armazena os objetos organizados por identificador.
- **getInitialState():** cria o estado inicial normalizado.
- **addOne():** adiciona uma entidade.
- **addMany():** adiciona várias entidades.
- **setAll():** substitui todas as entidades.
- **removeOne():** remove uma entidade.
- **removeMany():** remove várias entidades.
- **removeAll():** remove todas as entidades.
- **updateOne():** atualiza uma entidade.
- **updateMany():** atualiza várias entidades.
- **upsertOne():** adiciona ou atualiza uma entidade.
- **getSelectors():** disponibiliza Selectors para consultar as entidades.
- **selectAll():** retorna todas as entidades.
- **selectById():** retorna uma entidade pelo identificador.
- **selectIds():** retorna os identificadores.
- **selectEntities():** retorna as entidades organizadas por identificador.
- **selectTotal():** retorna a quantidade de entidades.

## 12. Conclusão

Entity Adapter é um recurso do Redux Toolkit que facilita o gerenciamento de coleções de dados através de uma estrutura normalizada.

Com `createEntityAdapter()`, conseguimos organizar entidades utilizando `ids` e `entities`, além de contar com métodos prontos para adicionar, atualizar, remover e consultar registros.

Sua integração com `createSlice()` permite reduzir a quantidade de código necessário para implementar operações comuns de gerenciamento de dados.

É especialmente útil em aplicações que trabalham com listas maiores ou diferentes tipos de entidades, como usuários, produtos, tarefas e pedidos.

---

**Observação de estudo:** Procure compreender principalmente a estrutura `ids` e `entities`, a diferença entre `addOne()`, `setAll()` e `upsertOne()`, e como utilizar `getSelectors()`. Esses conceitos são fundamentais para aproveitar o Entity Adapter no Redux Toolkit.
