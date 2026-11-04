# Redux DevTools

## 1. O que é Redux DevTools?

Redux DevTools é uma ferramenta de desenvolvimento utilizada para inspecionar, acompanhar e depurar o estado de aplicações que utilizam Redux.

Ela permite visualizar como o estado global da aplicação se comporta durante sua execução, acompanhando as Actions enviadas e as alterações produzidas pelos Reducers.

Seu principal objetivo é facilitar a identificação de erros e ajudar os desenvolvedores a entender como os dados estão sendo atualizados.

### Principais objetivos

- Inspecionar o estado global da aplicação.
- Visualizar as Actions enviadas para a Store.
- Acompanhar as alterações de estado.
- Identificar problemas no gerenciamento de estado.
- Facilitar a depuração da aplicação.
- Reproduzir e analisar alterações anteriores.

## 2. Principais funcionalidades

O Redux DevTools oferece diversos recursos para acompanhar o funcionamento do Redux.

### 2.1. Visualização do estado (State)

Permite visualizar o estado global armazenado na Store.

Podemos acompanhar os dados de diferentes Slices e verificar seus valores durante a execução da aplicação.

Exemplo:

```typescript
{
  contador: {
    valor: 5
  },

  usuario: {
    nome: "Lucas",
    email: "lucas@email.com"
  }
}
```

Nesse exemplo, conseguimos visualizar os estados dos Slices `contador` e `usuario`.

### 2.2. Histórico de Actions (Action History)

Permite visualizar todas as Actions que foram enviadas para a Store.

Cada Action representa uma operação realizada na aplicação.

Exemplo:

```typescript
dispatch(incrementar());
dispatch(incrementar());
dispatch(decrementar());
```

No Redux DevTools, podemos acompanhar o histórico dessas operações e identificar qual Action foi responsável por determinada alteração.

### 2.3. Inspeção de Actions (Action Inspection)

Além de visualizar o histórico, podemos selecionar uma Action específica para consultar suas informações.

Entre elas:

- Tipo da Action (`type`).
- Dados enviados através do `payload`.
- Estado anterior à execução.
- Estado resultante da execução.

Exemplo de Action:

```typescript
{
  type: "contador/incrementar",
  payload: undefined
}
```

### 2.4. Time Travel Debugging

Uma das funcionalidades mais interessantes do Redux DevTools é o Time Travel Debugging.

Esse recurso permite navegar pelo histórico de Actions e visualizar como o estado da aplicação estava em diferentes momentos.

Com isso, podemos:

- Voltar para um estado anterior.
- Avançar para um estado posterior.
- Identificar quando determinado problema aconteceu.
- Reproduzir alterações realizadas anteriormente.

Isso facilita bastante a depuração de aplicações complexas.

## 3. Como instalar e configurar o Redux DevTools?

Uma das vantagens do Redux Toolkit é que ele já configura automaticamente a integração com o Redux DevTools quando utilizamos `configureStore()`.

### 3.1. Instalação do Redux Toolkit

Caso ainda não tenha instalado o Redux Toolkit e o React Redux:

```bash
npm install @reduxjs/toolkit react-redux
```

### 3.2. Configurando a Store

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

Nesse exemplo, o Redux DevTools já estará habilitado por padrão no ambiente de desenvolvimento.

Não é necessário instalar ou configurar manualmente uma extensão para conectar o Redux Toolkit à ferramenta.

### 3.3. Instalação da extensão no navegador

Para visualizar as informações da aplicação, podemos instalar a extensão Redux DevTools no navegador.

Após a instalação:

1. Execute a aplicação React.
2. Abra a aplicação no navegador.
3. Abra as ferramentas de desenvolvedor (DevTools).
4. Localize a aba Redux.
5. Visualize as Actions e os estados da aplicação.

A extensão permite acompanhar as atualizações do Redux em tempo real.

## 4. Principais recursos da interface

Ao abrir o Redux DevTools, encontramos diferentes áreas para analisar o funcionamento da aplicação.

### Action History

Exibe o histórico de Actions enviadas para a Store.

### State

Mostra o estado global atual da aplicação.

### Action

Exibe os detalhes da Action selecionada, incluindo seu tipo e payload.

### Diff

Mostra as diferenças entre o estado anterior e o novo estado.

### Dispatcher

Permite despachar Actions manualmente para testar o comportamento da aplicação.

A disponibilidade e a organização dessas opções podem variar conforme a versão da extensão.

## 5. Redux DevTools e Redux Toolkit

O Redux Toolkit já possui integração com o Redux DevTools através do `configureStore()`.

Exemplo:

```typescript
export const store = configureStore({
  reducer: {
    contador: contadorReducer,
  },

  devTools: true,
});
```

A propriedade `devTools` controla a integração com a ferramenta.

Por padrão, ela já é habilitada em ambientes de desenvolvimento.

Também podemos desabilitá-la:

```typescript
export const store = configureStore({
  reducer: {
    contador: contadorReducer,
  },

  devTools: false,
});
```

**Importante:** Não é necessário configurar `devTools: true` em uma aplicação comum, pois essa já é a configuração padrão do Redux Toolkit.

## 6. Exemplo prático

Imagine que temos um Slice responsável por controlar um contador.

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

Quando executamos:

```typescript
dispatch(incrementar());
dispatch(incrementar());
dispatch(decrementar());
```

O Redux DevTools permite acompanhar o seguinte histórico:

- **Estado inicial:** valor = 0.
- **Primeira Action (incrementar):** valor passa de 0 para 1.
- **Segunda Action (incrementar):** valor passa de 1 para 2.
- **Terceira Action (decrementar):** valor passa de 2 para 1.

Assim, conseguimos identificar exatamente quais Actions foram executadas e como cada uma modificou o estado.

## 7. Vantagens do Redux DevTools

- **Depuração:** facilita encontrar erros relacionados ao gerenciamento de estado.
- **Visibilidade:** permite acompanhar as informações armazenadas na Store.
- **Histórico:** registra as Actions executadas durante a utilização da aplicação.
- **Time Travel:** permite navegar entre diferentes estados da aplicação.
- **Produtividade:** reduz o tempo necessário para investigar problemas.
- **Análise:** ajuda a compreender o comportamento dos Reducers e Actions.

## 8. Resumo dos principais conceitos

- **Redux DevTools:** ferramenta de inspeção e depuração do Redux.
- **State:** permite visualizar o estado global.
- **Action History:** apresenta o histórico de Actions.
- **Action Inspection:** permite analisar os detalhes de uma Action.
- **Time Travel Debugging:** permite navegar pelo histórico de estados.
- **Diff:** mostra as diferenças entre estados.
- **configureStore():** configura automaticamente a integração com Redux DevTools.

## 9. Conclusão

Redux DevTools é uma ferramenta importante para o desenvolvimento de aplicações que utilizam Redux, pois permite acompanhar o comportamento do estado global e investigar possíveis problemas.

Com ela, conseguimos visualizar Actions, inspecionar estados, acompanhar alterações e utilizar o Time Travel Debugging para navegar pelo histórico da aplicação.

Quando utilizamos Redux Toolkit, a integração já é configurada automaticamente através de `configureStore()`, facilitando sua utilização.

---

**Observação de estudo:** Procure praticar principalmente a visualização do histórico de Actions, a inspeção dos estados e o Time Travel Debugging. Esses recursos ajudam a entender na prática como o Redux Toolkit atualiza o estado global da aplicação.
