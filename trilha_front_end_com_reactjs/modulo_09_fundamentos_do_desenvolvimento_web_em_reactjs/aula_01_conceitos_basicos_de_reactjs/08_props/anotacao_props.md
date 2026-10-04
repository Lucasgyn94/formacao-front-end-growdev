# Props no React

Props, abreviação de *properties*, são informações que um componente recebe do componente pai.

Elas permitem reutilizar o mesmo componente com dados diferentes, como títulos, imagens e descrições.

## Definindo e recebendo props

No TypeScript, podemos definir os tipos das props com uma interface:

```tsx
// Post.tsx
interface PostProps {
    titulo: string;
    descricao: string;
    imagem: string;
}

export function Post({ titulo, descricao, imagem }: PostProps) {
    return (
        <article>
            <img src={imagem} alt={titulo} />
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </article>
    );
}
```

A desestruturação `{ titulo, descricao, imagem }` permite acessar diretamente as propriedades recebidas.

## Passando props

O componente pai passa os valores como atributos:

```tsx
// App.tsx
import { Post } from "./Post";

export function App() {
    return (
        <main>
            <Post
                titulo="Bolo de chocolate"
                descricao="Aprenda a preparar um bolo caseiro."
                imagem="/bolo.jpg"
            />

            <Post
                titulo="Torta de morango"
                descricao="Uma sobremesa para o fim de semana."
                imagem="/torta.jpg"
            />
        </main>
    );
}
```

O componente `Post` define a estrutura da publicação. As props definem o conteúdo de cada instância.

## Tipos de valores

Props podem receber strings, números, booleanos, arrays, objetos e funções.

Use aspas para textos e chaves para expressões JavaScript:

```tsx
<Perfil
    nome="Lucas"
    idade={25}
    ativo={true}
    interesses={["React", "TypeScript"]}
/>
```

Nesse exemplo:

- `nome` recebe uma string.
- `idade` recebe um número.
- `ativo` recebe um booleano.
- `interesses` recebe um array de strings.

## Props opcionais e valores padrão

O `?` indica que uma prop é opcional. Podemos definir um valor padrão na desestruturação:

```tsx
interface SaudacaoProps {
    nome?: string;
}

function Saudacao({ nome = "Visitante" }: SaudacaoProps) {
    return <h1>Olá, {nome}!</h1>;
}

// Exibe: Olá, Visitante!
<Saudacao />

// Exibe: Olá, Lucas!
<Saudacao nome="Lucas" />
```

O valor padrão é utilizado quando a prop não é informada ou recebe `undefined`.

## A prop children

`children` é a prop que recebe o conteúdo colocado entre a abertura e o fechamento de um componente.

Pense em um componente `Card` como uma caixa: `children` é o conteúdo colocado dentro dela.

```tsx
<Card>
    <p>Olá, Lucas!</p>
</Card>
```

Nesse exemplo, o React passa `<p>Olá, Lucas!</p>` para o componente `Card` por meio da prop `children`.

### Recebendo e exibindo children

O componente precisa receber `children` e colocá-lo no local onde o conteúdo deve aparecer:

```tsx
// Card.tsx
import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

export function Card({ children }: CardProps) {
    return (
        <section className="card">
            {children}
        </section>
    );
}
```

- `children` recebe o conteúdo passado entre as tags.
- `ReactNode` representa conteúdos que o React pode renderizar, como elementos JSX, textos e números.
- `{children}` define onde esse conteúdo será exibido.

Se o componente não incluir `{children}` no retorno, o conteúdo recebido não aparecerá na tela.

### Reutilizando o componente com conteúdos diferentes

```tsx
// App.tsx
import { Card } from "./Card";

export function App() {
    return (
        <main>
            <Card>
                <h2>Receita</h2>
                <p>Bolo de chocolate.</p>
            </Card>

            <Card>
                <h2>Autor</h2>
                <p>Lucas Ferreira</p>
                <button>Ver perfil</button>
            </Card>
        </main>
    );
}
```

O primeiro `Card` recebe um título e um parágrafo. O segundo recebe um título, um parágrafo e um botão.

Ambos usam a mesma estrutura externa, mas possuem conteúdos internos diferentes.

O primeiro card produz uma estrutura HTML equivalente a:

```html
<section class="card">
    <h2>Receita</h2>
    <p>Bolo de chocolate.</p>
</section>
```

### Combinando children com outras props

Um componente pode receber props por atributos e também receber conteúdo entre suas tags:

```tsx
import type { ReactNode } from "react";

interface PainelProps {
    titulo: string;
    children: ReactNode;
}

function Painel({ titulo, children }: PainelProps) {
    return (
        <section>
            <h2>{titulo}</h2>
            <div>{children}</div>
        </section>
    );
}

function App() {
    return (
        <Painel titulo="Truques de maquiagem">
            <p>Confira nossas dicas de maquiagem.</p>
            <button>Ler mais</button>
        </Painel>
    );
}
```

Nesse exemplo:

- `titulo` recebe o texto passado como atributo.
- `children` recebe o parágrafo e o botão.

### Children opcional

Se o componente puder ser utilizado sem conteúdo interno, declare `children` como opcional:

```tsx
interface CardProps {
    children?: ReactNode;
}
```

Isso permite utilizar o componente como `<Card />`, sem passar conteúdo.

### Quando usar children?

Use `children` quando o componente deve fornecer uma estrutura reutilizável e permitir que o componente pai escolha o conteúdo interno.

Exemplos:

- Cards.
- Painéis.
- Janelas modais.
- Layouts de páginas.

Use props específicas, como `titulo` e `imagem`, quando o componente precisar de dados bem definidos para montar sua interface.

## Regras importantes

- Props são somente leitura: o componente não deve modificá-las, incluindo os objetos e arrays recebidos.
- Os dados são passados do componente pai para o filho.
- Para comunicar uma ação ao pai, o filho pode chamar uma função recebida por props.
- Props configuram o componente; estado armazena informações que o componente pode atualizar.
- `children` também é uma prop e segue as mesmas regras.
- Receber `children` não o exibe automaticamente: o componente precisa incluí-lo no JSX retornado.
