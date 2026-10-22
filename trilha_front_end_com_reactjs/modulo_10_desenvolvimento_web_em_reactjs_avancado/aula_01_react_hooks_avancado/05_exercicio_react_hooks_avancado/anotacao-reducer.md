# ReactJS — Hook `useReducer`

## 1. O que é o `useReducer`?

O `useReducer` é um Hook do React utilizado para gerenciar estados. Ele é especialmente útil quando o estado possui várias operações ou quando a lógica de atualização é mais complexa.

Ele funciona com três conceitos principais:

- **State:** estado atual do componente.
- **Action:** objeto que descreve a operação desejada.
- **Reducer:** função responsável por calcular o próximo estado a partir do estado atual e da ação recebida.

O `useReducer` é uma alternativa ao `useState`, principalmente quando várias atualizações de estado estão relacionadas.

## 2. Sintaxe

```jsx
import { useReducer } from 'react';

const [state, dispatch] = useReducer(reducer, initialState);
```

- `state`: estado atual.
- `dispatch`: função utilizada para enviar uma ação ao reducer.
- `reducer`: função que determina como o estado será atualizado.
- `initialState`: valor inicial do estado.

A função reducer recebe dois argumentos:

```jsx
function reducer(state, action) {
  // Decide como atualizar o estado.

  return state;
}
```

- `state`: estado atual.
- `action`: ação enviada por `dispatch`.
- `return`: novo estado.

## 3. Exemplo prático: contador

```jsx
import { useReducer } from 'react';

const initialState = { contador: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'incrementar':
      return {
        ...state,
        contador: state.contador + 1
      };

    case 'decrementar':
      return {
        ...state,
        contador: state.contador - 1
      };

    case 'zerar':
      return {
        ...state,
        contador: 0
      };

    default:
      throw new Error(`Ação desconhecida: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <h1>Contador: {state.contador}</h1>

      <button
        onClick={() => dispatch({ type: 'incrementar' })}
      >
        Incrementar
      </button>

      <button
        onClick={() => dispatch({ type: 'decrementar' })}
      >
        Decrementar
      </button>

      <button
        onClick={() => dispatch({ type: 'zerar' })}
      >
        Zerar
      </button>
    </div>
  );
}

export default App;
```

### Como funciona?

1. O componente chama `dispatch({ type: 'incrementar' })`.
2. O React envia a ação para a função `reducer`.
3. O reducer identifica o tipo da ação.
4. A função calcula e retorna o novo estado.
5. O React atualiza o estado e renderiza o componente novamente.

**Importante:** o reducer deve ser uma função pura. Não altere diretamente o estado recebido nem execute operações com efeitos colaterais dentro dele.

## 4. Entendendo as actions

Uma action normalmente é um objeto com uma propriedade `type`.

```jsx
dispatch({ type: 'incrementar' });

dispatch({
  type: 'adicionar',
  payload: 10
});
```

A propriedade `payload` é uma convenção comum para transportar dados necessários à ação.

Exemplo de reducer que utiliza o valor enviado:

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'adicionar':
      return state + action.payload;

    default:
      return state;
  }
}
```

Nesse caso, se o estado atual for `5` e a ação enviada for `{ type: 'adicionar', payload: 10 }`, o próximo estado será `15`.

## 5. Exemplo com objeto e formulário

O `useReducer` também pode organizar estados de formulários.

```jsx
import { useReducer } from 'react';

const initialState = {
  nome: '',
  email: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'alterar_campo':
      return {
        ...state,
        [action.campo]: action.valor
      };

    case 'limpar':
      return initialState;

    default:
      throw new Error(`Ação desconhecida: ${action.type}`);
  }
}

function App() {
  const [formulario, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <form>
      <input
        type="text"
        placeholder="Nome"
        value={formulario.nome}
        onChange={(event) =>
          dispatch({
            type: 'alterar_campo',
            campo: 'nome',
            valor: event.target.value
          })
        }
      />

      <input
        type="email"
        placeholder="E-mail"
        value={formulario.email}
        onChange={(event) =>
          dispatch({
            type: 'alterar_campo',
            campo: 'email',
            valor: event.target.value
          })
        }
      />

      <button
        type="button"
        onClick={() => dispatch({ type: 'limpar' })}
      >
        Limpar
      </button>

      <pre>{JSON.stringify(formulario, null, 2)}</pre>
    </form>
  );
}

export default App;
```

**Observe:** o operador `...state` preserva as demais propriedades do objeto. O reducer retorna um novo objeto em vez de modificar diretamente o estado anterior.

## 6. Diferença entre `useState` e `useReducer`

| Característica | `useState` | `useReducer` |
|---|---|---|
| Uso comum | Estados simples | Estados com lógica de atualização mais elaborada |
| Atualização | Setter, como `setContador` | `dispatch(action)` |
| Lógica | Geralmente no próprio componente | Centralizada na função reducer |
| Organização | Simples e direta | Separa ações da lógica de atualização |
| Complexidade | Ideal para começar | Útil quando há várias ações relacionadas |

**Regra prática:** não é necessário substituir todo `useState` por `useReducer`. Escolha o Hook que deixa o código mais claro.

## 7. Quando usar `useReducer`?

Considere utilizá-lo quando:

- O estado possui várias operações diferentes.
- Diversas atualizações estão relacionadas.
- A lógica de atualização está ficando extensa no componente.
- Você quer centralizar as regras de alteração do estado.
- Deseja facilitar os testes isolados da lógica do reducer.

Para um estado simples, como abrir ou fechar um menu, `useState` normalmente é suficiente.

## 8. Boas práticas e erros comuns

1. **Não mutar o estado:** evite alterar diretamente objetos e arrays existentes.
2. **Retornar o novo estado:** cada ação deve produzir o estado correto.
3. **Manter o reducer puro:** não faça requisições HTTP, manipulação do DOM ou outras operações com efeitos colaterais dentro dele.
4. **Tratar as ações conhecidas:** use `switch` ou outra estrutura clara para identificar as ações.
5. **Não confundir `dispatch` com o reducer:** `dispatch` envia a ação; o reducer calcula o próximo estado.
6. **Evitar complexidade desnecessária:** para estados simples, prefira a solução mais direta.
7. **Não presumir atualização imediata da variável:** após `dispatch`, a variável `state` da renderização atual continua representando o estado daquela renderização.

## 9. Exercício prático

Crie um gerenciador de tarefas usando `useReducer`.

O estado inicial deve ser:

```jsx
const initialState = {
  tarefas: []
};
```

Implemente as seguintes ações:

- `adicionar`: adiciona uma tarefa ao array.
- `remover`: remove uma tarefa pelo seu `id`.
- `concluir`: alterna a propriedade `concluida` de uma tarefa.
- `limpar`: remove todas as tarefas.

Cada tarefa deve ter esta estrutura:

```jsx
{
  id: 1,
  texto: 'Estudar React',
  concluida: false
}
```

### Desafio extra

1. Implemente o reducer separadamente do componente.
2. Utilize `dispatch` para enviar as ações.
3. Atualize arrays sem utilizar métodos que mutem o estado original.
4. Explique por que a lógica de atualização fica mais organizada com `useReducer`.

## 10. Resumo para revisão

- `useReducer` gerencia estados por meio de uma função reducer.
- `dispatch` envia ações para essa função.
- Uma action descreve o que deve acontecer.
- O reducer recebe o estado atual e a ação e retorna o próximo estado.
- O reducer deve ser puro e não deve mutar o estado.
- É útil quando há várias operações ou lógica de atualização complexa.
- `useState` continua sendo uma ótima opção para estados simples.

**Frase para memorizar:** `dispatch` envia a ação; `reducer` decide como o estado muda.

