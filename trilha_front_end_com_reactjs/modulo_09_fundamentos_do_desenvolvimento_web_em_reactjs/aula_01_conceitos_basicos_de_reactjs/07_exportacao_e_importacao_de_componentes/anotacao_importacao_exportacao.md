# Exportação e importação no React

Exportações e importações permitem compartilhar componentes, funções e outros recursos entre arquivos. Esse mecanismo faz parte dos módulos JavaScript e também é utilizado no TypeScript.

## Exportação padrão — Default export

Um arquivo pode ter apenas **uma exportação padrão**.

```tsx
// Button.tsx
export default function Button() {
    return <button>Clique aqui</button>;
}
```

A importação é feita **sem chaves**, e você pode escolher o nome:

```tsx
import Button from "./Button";

// Também seria válido:
import MeuBotao from "./Button";
```

## Exportação nomeada — Named export

Um arquivo pode ter **várias exportações nomeadas**.

```tsx
// Components.tsx
export function Button() {
    return <button>Clique aqui</button>;
}

export function Title() {
    return <h1>Meu blog</h1>;
}
```

A importação utiliza **chaves** e os nomes exportados:

```tsx
import { Button, Title } from "./Components";
```

Para utilizar outro nome localmente, use `as`:

```tsx
import { Button as MeuBotao } from "./Components";
```

## Exportações padrão e nomeadas no mesmo arquivo

É possível combinar os dois tipos, mantendo apenas uma exportação padrão.

```tsx
// Components.tsx
export function Title() {
    return <h1>Meu blog</h1>;
}

export default function Button() {
    return <button>Clique aqui</button>;
}
```

A importação pode reunir ambos:

```tsx
import Button, { Title } from "./Components";
```

## Importação de todas as exportações nomeadas

Podemos agrupar as exportações de um módulo usando `* as`:

```tsx
import * as Components from "./Components";

function App() {
    return <Components.Title />;
}
```

Essa sintaxe cria um namespace para acessar as exportações. Se houver uma exportação padrão, ela estará disponível em `Components.default`.

## Comparação

| Característica | Padrão (`default`) | Nomeada |
|---|---|---|
| Quantidade por arquivo | Uma | Várias |
| Importação usual | Sem chaves | Com chaves |
| Nome local | Pode ser escolhido livremente | Usa o nome exportado ou um alias com `as` |

## Atenção

- O tipo de importação deve corresponder ao tipo de exportação.
- Componentes utilizados em JSX devem ter nomes iniciados com letra maiúscula.
- `./` indica um caminho relativo à pasta do arquivo que faz a importação.
- Exportar um componente não o exibe na tela: é necessário utilizá-lo, por exemplo, com `<Button />`.
