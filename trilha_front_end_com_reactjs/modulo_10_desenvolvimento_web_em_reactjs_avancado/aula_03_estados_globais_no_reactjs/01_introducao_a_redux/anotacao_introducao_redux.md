# Introdução à Redux

## 1. O que é Redux?

Redux é uma biblioteca JavaScript utilizada para gerenciar o estado global de uma aplicação.

Em aplicações React, podemos utilizar o `useState` e o `useReducer` para controlar estados locais dos componentes. Entretanto, conforme a aplicação cresce, compartilhar informações entre diversos componentes pode se tornar mais complexo.

O Redux resolve esse problema centralizando o gerenciamento dos estados em um único lugar, chamado **Store**.

### Principais objetivos

- Centralizar o gerenciamento do estado da aplicação.
- Facilitar o compartilhamento de informações entre componentes.
- Tornar as alterações de estado mais previsíveis.
- Facilitar a manutenção e a depuração da aplicação.
- Evitar a necessidade de passar propriedades por vários componentes (prop drilling).

## 2. O que é estado global?

Estado global é uma informação que pode ser acessada por diferentes componentes da aplicação.

**Exemplo:**

Imagine uma aplicação de compras que possui:

- Um componente de cabeçalho (Header).
- Uma lista de produtos.
- Um carrinho de compras.
- Uma tela de finalização do pedido.

O número de produtos adicionados ao carrinho precisa ser compartilhado entre diferentes componentes.

Sem um gerenciamento global, seria necessário compartilhar essas informações manualmente entre os componentes.

Com Redux, os dados do carrinho podem ficar centralizados na Store, permitindo que diferentes componentes acessem essas informações.

## 3. Principais conceitos do Redux

O Redux trabalha com alguns conceitos fundamentais:

### 3.1. Store

É onde fica armazenado o estado global da aplicação.

A Store funciona como uma fonte centralizada de informações, permitindo que diferentes componentes consultem o estado.

### 3.2. Action

Actions são objetos JavaScript que descrevem uma intenção de alteração no estado da aplicação.

Uma Action possui obrigatoriamente uma propriedade `type`, que identifica o tipo da ação.

Exemplo:

```javascript
{
  type: "INCREMENTAR"
}
```

Também pode transportar informações adicionais através da propriedade `payload`.

```javascript
{
  type: "ADICIONAR_PRODUTO",
  payload: {
    id: 1,
    nome: "Notebook"
  }
}
```

### 3.3. Reducer

O Reducer é uma função responsável por determinar como o estado será atualizado a partir de uma Action.

Ele recebe dois parâmetros:

- `state`: estado atual.
- `action`: ação que descreve o que deve acontecer.

Exemplo conceitual:

```javascript
function contadorReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENTAR":
      return state + 1;

    case "DECREMENTAR":
      return state - 1;

    default:
      return state;
  }
}
```

**Importante:** Reducers devem ser funções previsíveis e não devem modificar diretamente o estado existente.

### 3.4. Dispatch

O Dispatch é responsável por enviar uma Action para a Store.

Quando uma Action é enviada, o Redux utiliza o Reducer para determinar o próximo estado.

Exemplo:

```javascript
dispatch({ type: "INCREMENTAR" });
```

## 4. Como funciona o fluxo do Redux?

O Redux utiliza um fluxo de dados unidirecional, ou seja, as alterações seguem uma sequência definida.

O funcionamento básico acontece da seguinte maneira:

1. O usuário realiza uma interação na aplicação.
2. O componente envia uma Action através do Dispatch.
3. O Reducer recebe a Action e o estado atual.
4. O Reducer determina e retorna o novo estado.
5. A Store disponibiliza o estado atualizado.
6. Os componentes interessados recebem as atualizações.

Representação simplificada:

```text
       Usuário
          |
          v
      Componente
          |
          v
       Dispatch
          |
          v
        Action
          |
          v
        Reducer
          |
          v
     Novo estado
          |
          v
        Store
          |
          v
 Componentes atualizados
```

## 5. Redux e React: qual é a relação?

Redux não é um substituto do React.

O React é uma biblioteca utilizada para construir interfaces de usuário, enquanto Redux é uma ferramenta de gerenciamento de estado.

Os dois podem trabalhar juntos para facilitar o desenvolvimento de aplicações maiores.

Para integrar Redux com React, normalmente utilizamos a biblioteca `React Redux`, que disponibiliza recursos para conectar os componentes React à Store.

## 6. Quando utilizar Redux?

Redux pode ser útil quando:

- Vários componentes precisam acessar as mesmas informações.
- A aplicação possui muitos estados compartilhados.
- O gerenciamento de estado começa a ficar complexo.
- É necessário manter um fluxo previsível de atualizações.
- A aplicação precisa de ferramentas avançadas de depuração.

**Atenção:** Nem toda aplicação React precisa de Redux. Para estados simples e locais, `useState` e `useReducer` podem ser suficientes.

## 7. Redux Toolkit

Redux Toolkit é a abordagem oficialmente recomendada para escrever código Redux atualmente.

Ele simplifica a configuração da Store, a criação de Reducers e o gerenciamento de Actions.

Entre seus principais recursos estão:

- `configureStore()`: configura a Store.
- `createSlice()`: cria Reducers e Actions relacionados a uma parte do estado.
- `createAsyncThunk()`: facilita o gerenciamento de operações assíncronas.

O Redux Toolkit reduz a quantidade de código repetitivo necessária na implementação do Redux tradicional.

## 8. Resumo dos principais conceitos

| Conceito | Responsabilidade |
|---|---|
| Store | Armazena o estado global. |
| Action | Descreve uma ação que deve acontecer. |
| Reducer | Determina como o estado será atualizado. |
| Dispatch | Envia uma Action para a Store. |
| React Redux | Integra Redux com componentes React. |
| Redux Toolkit | Simplifica a implementação do Redux. |

## 9. Conclusão

Redux é uma ferramenta de gerenciamento de estado global que ajuda a organizar aplicações React, principalmente quando diferentes componentes precisam compartilhar informações.

Seu funcionamento é baseado em um fluxo unidirecional, envolvendo Store, Actions, Reducers e Dispatch.

Compreender esses conceitos é fundamental para avançar nos próximos assuntos:

- Arquitetura Flux.
- Redux Toolkit.
- Instalação e configurações iniciais.
- Slice.
- Redux DevTools.
- Redux Persist.
- Entity Adapter.
- AsyncThunk.

---

**Observação de estudo:** Antes de avançar para Redux Toolkit, procure compreender bem a relação entre Store, Action, Reducer e Dispatch. Esses conceitos são a base para entender como o gerenciamento de estado funciona.
