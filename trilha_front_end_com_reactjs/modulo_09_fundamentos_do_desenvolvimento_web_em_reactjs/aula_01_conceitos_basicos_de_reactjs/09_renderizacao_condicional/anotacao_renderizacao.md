# Renderização Condicional no React

Renderização condicional é exibir conteúdos diferentes de acordo com uma condição.

No React, usamos recursos do JavaScript, como `if`, operador ternário e `&&`, para decidir o que aparece na tela.

## Usando if

É útil quando o componente deve retornar conteúdos diferentes.

```tsx
interface SaudacaoProps {
    logado: boolean;
}

function Saudacao({ logado }: SaudacaoProps) {
    if (logado) {
        return <h1>Bem-vindo!</h1>;
    }

    return <h1>Faça login para continuar.</h1>;
}
```

## Usando o operador ternário

O ternário escolhe entre duas opções diretamente no JSX.

Sua estrutura é: `condição ? valorSeVerdadeiro : valorSeFalso`.

```tsx
function Saudacao({ logado }: SaudacaoProps) {
    return (
        <h1>
            {logado ? "Bem-vindo!" : "Faça login para continuar."}
        </h1>
    );
}
```

## Usando &&

O operador `&&` é útil para exibir um elemento somente quando uma condição for verdadeira.

```tsx
interface PostProps {
    title: string;
    destaque: boolean;
}

function Post({ title, destaque }: PostProps) {
    return (
        <article>
            <h2>{title}</h2>
            {destaque && <span>Post em destaque!</span>}
        </article>
    );
}
```

Exemplo de uso:

```tsx
<Post title="Bolo de chocolate" destaque={true} />
<Post title="Truques de maquiagem" destaque={false} />
```

A mensagem de destaque aparece somente no primeiro post.

### Cuidado com números no &&

Evite usar um número diretamente como condição:

```tsx
// Se quantidade for 0, o React renderiza o número 0.
{quantidade && <p>Existem publicações.</p>}

// Use uma comparação que resulte em true ou false.
{quantidade > 0 && <p>Existem publicações.</p>}
```

## Retornando null

Um componente pode retornar `null` quando não deve exibir nada.

```tsx
interface AvisoProps {
    exibir: boolean;
}

function Aviso({ exibir }: AvisoProps) {
    if (!exibir) {
        return null;
    }

    return <p>Você possui uma nova mensagem.</p>;
}
```

## Qual opção usar?

- **if:** para separar caminhos de renderização.
- **Ternário:** para escolher entre dois conteúdos dentro do JSX.
- **&&:** para exibir um conteúdo somente quando a condição for verdadeira.
- **null:** para não renderizar conteúdo.

As condições podem depender de props ou estado. Quando esses dados mudam, o React avalia novamente o que deve aparecer.
