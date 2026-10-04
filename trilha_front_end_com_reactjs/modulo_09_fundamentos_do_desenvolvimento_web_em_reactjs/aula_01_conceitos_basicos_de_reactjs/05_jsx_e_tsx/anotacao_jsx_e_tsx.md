# JSX e TSX

JSX e TSX permitem escrever uma estrutura parecida com HTML dentro do código de componentes React.

## O que é JSX?

JSX é uma extensão de sintaxe do JavaScript usada para descrever interfaces.

Arquivos JavaScript que utilizam essa sintaxe geralmente possuem a extensão `.jsx`.

```jsx
function Saudacao() {
    const nome = "Lucas";

    return <h1>Olá, {nome}!</h1>;
}
```

As chaves `{}` permitem inserir expressões JavaScript, como variáveis, cálculos e chamadas de funções.

## O que é TSX?

TSX é a combinação de TypeScript com JSX. Arquivos TypeScript que contêm JSX utilizam a extensão `.tsx`.

Com TypeScript, podemos definir os tipos das props recebidas pelo componente:

```tsx
type SaudacaoProps = {
    nome: string;
    idade: number;
};

function Saudacao({ nome, idade }: SaudacaoProps) {
    return (
        <p>
            Olá, {nome}! Você tem {idade} anos.
        </p>
    );
}

// Exemplo de uso:
function App() {
    return <Saudacao nome="Lucas" idade={25} />;
}
```

O TypeScript verifica se os valores passados correspondem aos tipos definidos.

## Diferenças entre as extensões

| Extensão | Conteúdo |
|---|---|
| `.js` | JavaScript. |
| `.jsx` | JavaScript com JSX. |
| `.ts` | TypeScript sem JSX. |
| `.tsx` | TypeScript com JSX. |

Algumas ferramentas também aceitam JSX em arquivos `.js`. Em TypeScript, use `.tsx` quando houver JSX.

## Regras importantes

### 1. Agrupe os elementos retornados

Para retornar vários elementos juntos, envolva-os em um elemento pai ou em um fragmento:

```tsx
function Apresentacao() {
    return (
        <>
            <h1>Bem-vindo!</h1>
            <p>Aprendendo React com TypeScript.</p>
        </>
    );
}
```

O fragmento `<>...</>` agrupa os elementos sem adicionar uma tag ao HTML da página.

### 2. Feche todas as tags

Tags sem conteúdo também precisam ser fechadas:

```tsx
<img src="/logo.png" alt="Logo" />
<input type="text" />
```

### 3. Use `className` para classes CSS

```tsx
<h1 className="titulo">Olá, React!</h1>
```

### 4. Use chaves para expressões JavaScript

```tsx
<p>Resultado: {10 + 5}</p>
```

Aspas representam texto; chaves permitem passar outros valores:

```tsx
<Saudacao nome="Lucas" idade={25} />
```

### 5. Comece nomes de componentes com letra maiúscula

```tsx
function MeuBotao() {
    return <button>Clique aqui</button>;
}
```

Usamos `<MeuBotao />` para o componente e `<button>` para o elemento HTML.

## Como o navegador executa isso?

O navegador não interpreta JSX ou TSX diretamente.

Ferramentas como o Vite transformam esse código em JavaScript que o navegador consegue executar. A verificação de tipos do TypeScript é uma etapa separada dessa transformação.
