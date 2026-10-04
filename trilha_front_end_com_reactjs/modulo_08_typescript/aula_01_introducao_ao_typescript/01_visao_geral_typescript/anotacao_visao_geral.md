# Introdução ao TypeScript

## O que é TypeScript?

TypeScript é uma linguagem criada pela Microsoft que estende o JavaScript.

Podemos pensar nele como:

```text
JavaScript + sistema de tipos = TypeScript
```

Todo código TypeScript será transformado em JavaScript antes de ser executado pelo navegador ou pelo Node.js.

Uma das principais características do TypeScript é permitir a definição e a verificação de tipos durante o desenvolvimento.

Exemplo em JavaScript:

```javascript
let idade = 25;

idade = "vinte e cinco";
```

Em JavaScript, isso é permitido.

Já em TypeScript podemos definir que a variável `idade` deve armazenar números:

```typescript
let idade: number = 25;

idade = "vinte e cinco";
```

Nesse caso, o TypeScript identifica um erro antes mesmo da execução do programa.

---

## TypeScript é JavaScript?

TypeScript não substitui o JavaScript.

Na prática, ele adiciona recursos ao JavaScript, principalmente relacionados à tipagem e à análise do código.

Podemos representar assim:

```text
JavaScript
    +
Sistema de tipos
    +
Verificação durante o desenvolvimento
    =
TypeScript
```

Por isso, TypeScript é considerado um **superset do JavaScript**.

Isso significa que ele possui os recursos do JavaScript e acrescenta funcionalidades próprias.

---

## Por que usar TypeScript?

JavaScript possui tipagem dinâmica.

Isso significa que uma variável pode armazenar valores de tipos diferentes ao longo da execução:

```javascript
let valor = 10;

valor = "Olá";
valor = true;
```

Essa flexibilidade pode ser útil, mas também pode provocar erros difíceis de encontrar em aplicações maiores.

TypeScript ajuda a tornar o código mais previsível.

Por exemplo:

```typescript
let nome: string = "João";
let idade: number = 25;
let ativo: boolean = true;
```

Agora o TypeScript conhece o tipo esperado para cada variável.

Caso tentemos fazer:

```typescript
idade = "vinte";
```

o editor ou compilador poderá indicar um erro.

---

## TypeScript não é executado diretamente

O navegador e o Node.js executam JavaScript.

Por isso, normalmente temos o seguinte fluxo:

```text
Código TypeScript (.ts)
        ↓
Compilador TypeScript
        ↓
Código JavaScript (.js)
        ↓
Browser ou Node.js
```

Exemplo em TypeScript:

```typescript
const nome: string = "Carlos";

console.log(nome);
```

Depois da compilação, teremos JavaScript equivalente:

```javascript
const nome = "Carlos";

console.log(nome);
```

As informações de tipo são utilizadas durante o desenvolvimento.

---

## Extensão dos arquivos

Arquivos JavaScript normalmente utilizam a extensão:

```text
.js
```

Exemplo:

```text
index.js
```

Arquivos TypeScript normalmente utilizam:

```text
.ts
```

Exemplo:

```text
index.ts
```

Em projetos React também é comum encontrar:

```text
.tsx
```

Exemplo:

```text
App.tsx
```

---

## Principais vantagens do TypeScript

O TypeScript pode ajudar principalmente com:

- detecção de erros antes da execução;
- autocomplete mais inteligente;
- melhor documentação do código;
- refatoração mais segura;
- maior previsibilidade;
- manutenção de projetos maiores;
- melhor experiência ao trabalhar em equipe.

---

## Exemplo simples

```typescript
const nome: string = "Maria";
const idade: number = 30;

function apresentar(nome: string, idade: number): string {
    return `Meu nome é ${nome} e tenho ${idade} anos.`;
}

console.log(apresentar(nome, idade));
```

Mesmo sem conhecer todos os detalhes da sintaxe ainda, já conseguimos perceber que o TypeScript deixa explícito quais tipos de valores esperamos utilizar.

---

## Resumo

TypeScript é uma extensão do JavaScript que adiciona um sistema de tipos e ferramentas de análise durante o desenvolvimento.

A ideia principal é:

```text
TypeScript
    ↓
Ajuda a identificar erros
antes da execução
    ↓
É convertido para JavaScript
    ↓
O JavaScript é executado
```

Portanto:

> TypeScript é JavaScript com recursos adicionais que ajudam a escrever código mais seguro, previsível e fácil de manter.

