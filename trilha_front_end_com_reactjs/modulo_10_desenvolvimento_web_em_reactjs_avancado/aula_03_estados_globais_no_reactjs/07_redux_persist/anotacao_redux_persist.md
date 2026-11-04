# Redux Persist

## 1. O que é Redux Persist?

Redux Persist é uma biblioteca utilizada para salvar e restaurar automaticamente o estado global de uma aplicação Redux.

Normalmente, quando atualizamos a página de uma aplicação React, o estado armazenado na Store é reiniciado, retornando aos seus valores iniciais.

O Redux Persist resolve esse problema permitindo armazenar os dados do Redux em um mecanismo de armazenamento persistente, como o `localStorage`.

Dessa forma, quando o usuário atualiza ou fecha e abre novamente a aplicação, os dados armazenados podem ser recuperados.

### Principais objetivos

- Persistir o estado global da aplicação.
- Evitar a perda de informações ao atualizar a página.
- Restaurar automaticamente os estados salvos.
- Controlar quais partes do estado devem ser persistidas.
- Melhorar a experiência do usuário.

## 2. Como funciona o Redux Persist?

O Redux Persist trabalha interceptando as alterações realizadas na Store e salvando os estados configurados no mecanismo de armazenamento escolhido.

Seu funcionamento básico acontece da seguinte maneira:

1. A aplicação é iniciada.
2. O Redux Persist verifica se existem estados anteriormente armazenados.
3. Caso existam, os dados são recuperados.
4. O estado persistido é restaurado na Store.
5. Durante a utilização da aplicação, as alterações são salvas automaticamente.
6. Ao atualizar a página, os dados podem ser recuperados novamente.

### Representação do fluxo

```text
       Aplicação React
              |
              v
          Redux Store
              |
              v
         Redux Persist
              |
              v
        Local Storage
              |
              v
       Dados persistidos
              |
              v
       Recuperação dos dados
              |
              v
          Redux Store
```

## 3. Principais conceitos do Redux Persist

### 3.1. persistReducer()

A função `persistReducer()` é responsável por envolver um Reducer existente, adicionando a capacidade de persistir seu estado.

Ela recebe duas informações principais:

- Configuração de persistência.
- Reducer que terá seu estado persistido.

Exemplo:

```typescript
import { persistReducer } from "redux-persist";

const reducerPersistido = persistReducer(
  persistConfig,
  rootReducer
);
```

Nesse exemplo, o `rootReducer` passa a utilizar as configurações de persistência definidas em `persistConfig`.

### 3.2. persistStore()

A função `persistStore()` é responsável por criar o objeto que controla a persistência da Store.

Ela permite iniciar o processo de recuperação dos dados armazenados.

Exemplo:

```typescript
import { persistStore } from "redux-persist";

export const persistor = persistStore(store);
```

O objeto `persistor` será utilizado posteriormente pelo componente `PersistGate`.

### 3.3. persistConfig

É o objeto responsável por definir as configurações de persistência.

Entre suas principais propriedades estão:

- `key`: identifica o armazenamento persistido.
- `storage`: define onde os dados serão armazenados.
- `whitelist`: define quais partes do estado serão persistidas.
- `blacklist`: define quais partes do estado não serão persistidas.

Exemplo:

```typescript
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
```

Nesse exemplo:

- `key: "root"` define a identificação do armazenamento.
- `storage` utiliza o `localStorage` do navegador.

### 3.4. PersistGate

O componente `PersistGate` é utilizado para controlar a renderização da aplicação enquanto o estado persistido está sendo recuperado.

Ele evita que os componentes sejam renderizados antes da conclusão da reidratação do estado.

Exemplo:

```tsx
import { PersistGate } from "redux-persist/integration/react";

<PersistGate loading={null} persistor={persistor}>
  <App />
</PersistGate>
```

A propriedade `loading` permite definir o que será exibido enquanto os dados estão sendo recuperados.

## 4. Instalação do Redux Persist

Para utilizar Redux Persist em um projeto React com Redux Toolkit, instalamos a biblioteca:

```bash
npm install redux-persist
```

Também precisamos ter instalados:

```bash
npm install @reduxjs/toolkit react-redux
```

## 5. Configurando Redux Persist com Redux Toolkit

Vamos considerar uma aplicação React que utiliza Redux Toolkit para gerenciar seu estado global.

### 5.1. Criando o persistConfig

Primeiramente, importamos o mecanismo de armazenamento e definimos as configurações de persistência.

```typescript
import storage from "redux-persist/lib/storage";

export const persistConfig = {
  key: "root",
  storage,
};
```

O `storage` utiliza o `localStorage` do navegador.

### 5.2. Configurando a Store

Depois, precisamos envolver o Reducer principal com `persistReducer()`.

Exemplo:

```typescript
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contadorReducer from "./slices/contadorSlice";

const rootReducer = combineReducers({
  contador: contadorReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
          "persist/FLUSH",
        ],
      },
    }),
});

export const persistor = persistStore(store);
```

### Entendendo o exemplo

- `combineReducers()`: combina os Reducers dos diferentes Slices em um único Reducer principal.
- `persistConfig`: define as configurações de persistência.
- `persistReducer()`: envolve o Reducer principal para adicionar a persistência.
- `configureStore()`: cria a Store utilizando o Reducer persistido.
- `serializableCheck`: configura o middleware para ignorar as Actions internas do Redux Persist que podem gerar avisos de serialização.
- `persistStore()`: cria o objeto responsável por controlar a persistência.

**Importante:** O Redux Toolkit possui verificações de serialização por padrão. Como o Redux Persist utiliza algumas Actions internas com valores que não são serializáveis, precisamos configurar as exceções para evitar avisos desnecessários no console.

## 6. Integrando PersistGate ao React

Depois de configurar a Store, precisamos disponibilizá-la para a aplicação através do `Provider` e utilizar o `PersistGate`.

Exemplo:

```tsx
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";
import App from "./App";

function Root() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

export default Root;
```

Nesse exemplo:

- `Provider`: disponibiliza a Store para os componentes React.
- `PersistGate`: aguarda a recuperação dos dados persistidos.
- `App`: representa a aplicação principal.

## 7. Controlando quais estados serão persistidos

Nem sempre queremos salvar todos os dados da aplicação.

O Redux Persist permite controlar quais Slices devem ou não ser armazenados.

### 7.1. Whitelist

A propriedade `whitelist` define quais partes do estado serão persistidas.

Exemplo:

```typescript
const persistConfig = {
  key: "root",
  storage,

  whitelist: ["contador"],
};
```

Nesse exemplo, somente o estado do Slice `contador` será persistido.

### 7.2. Blacklist

A propriedade `blacklist` define quais partes do estado não serão persistidas.

Exemplo:

```typescript
const persistConfig = {
  key: "root",
  storage,

  blacklist: ["contador"],
};
```

Nesse exemplo, o estado do Slice `contador` não será persistido.

**Importante:** Quando utilizadas no nível raiz, `whitelist` e `blacklist` controlam os Reducers registrados naquele nível. Para configurações mais específicas, podemos utilizar persistência aninhada.

## 8. Mecanismos de armazenamento

O Redux Persist permite utilizar diferentes mecanismos de armazenamento.

Os mais conhecidos são:

- `localStorage`: mantém os dados armazenados no navegador mesmo depois que ele é fechado.
- `sessionStorage`: mantém os dados durante a sessão da aba do navegador.
- `AsyncStorage`: utilizado principalmente em aplicações React Native.

Para projetos React executados no navegador, o `localStorage` é uma opção bastante comum.

## 9. Reidratação do estado (Rehydration)

Reidratação é o processo de recuperar os dados anteriormente persistidos e carregá-los novamente na Store.

Por exemplo:

Imagine que o estado inicial de um contador seja:

```typescript
{
  valor: 0
}
```

Durante a utilização da aplicação, o usuário incrementa o contador até chegar a:

```typescript
{
  valor: 5
}
```

O Redux Persist salva esse estado no armazenamento configurado.

Quando a aplicação é aberta novamente, o estado armazenado é recuperado.

Assim, o contador volta a apresentar:

```typescript
{
  valor: 5
}
```

Esse processo é chamado de reidratação.

## 10. Removendo dados persistidos

O Redux Persist também permite remover os dados armazenados através da função `purge()`.

Exemplo:

```typescript
persistor.purge();
```

Essa operação remove os dados persistidos associados ao persistor.

É útil quando precisamos limpar informações armazenadas, por exemplo, após determinadas operações de logout.

**Atenção:** `purge()` remove os dados persistidos, mas não deve ser confundido com uma ação que, sozinha, redefine todo o estado atual da Store em memória.

## 11. Redux Persist e segurança

Embora o Redux Persist seja útil para manter informações entre sessões, é importante ter cuidado com os dados armazenados.

O `localStorage` não é um armazenamento seguro para informações sensíveis.

Evite persistir:

- Senhas.
- Tokens sensíveis sem uma estratégia de segurança adequada.
- Informações confidenciais.
- Dados pessoais que não precisam permanecer armazenados.

O armazenamento no navegador pode ser acessado por scripts executados na mesma origem, inclusive em situações de vulnerabilidade XSS.

Portanto, devemos persistir somente os dados realmente necessários.

## 12. Resumo dos principais conceitos

- **Redux Persist:** biblioteca que permite salvar e recuperar o estado global do Redux.
- **persistConfig:** objeto responsável pelas configurações de persistência.
- **persistReducer():** envolve um Reducer para adicionar a persistência.
- **persistStore():** cria o objeto responsável por controlar a persistência.
- **PersistGate:** aguarda a reidratação antes de renderizar os componentes filhos.
- **storage:** define o mecanismo de armazenamento.
- **whitelist:** define quais estados serão persistidos.
- **blacklist:** define quais estados não serão persistidos.
- **Rehydration:** processo de recuperação dos estados armazenados.
- **purge():** remove os dados persistidos.

## 13. Conclusão

Redux Persist é uma biblioteca que complementa o Redux Toolkit, permitindo manter os estados globais armazenados mesmo depois que a aplicação é atualizada ou fechada.

Com ela, podemos configurar mecanismos de armazenamento, selecionar quais Slices serão persistidos e recuperar automaticamente os dados quando a aplicação for iniciada novamente.

Seus principais recursos são `persistReducer()`, `persistStore()` e `PersistGate`.

Compreender esses conceitos é fundamental para desenvolver aplicações React que precisam manter informações entre diferentes sessões de utilização.

---

**Observação de estudo:** Procure compreender principalmente a diferença entre `persistReducer()`, `persistStore()` e `PersistGate`. Cada um possui uma responsabilidade diferente dentro do processo de persistência do estado global.
