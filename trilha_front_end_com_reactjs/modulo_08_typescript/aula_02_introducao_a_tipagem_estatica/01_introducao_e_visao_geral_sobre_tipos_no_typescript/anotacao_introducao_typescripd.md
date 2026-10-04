# Introdução e Visão Geral sobre Tipos no TypeScript

## 1. O que são tipos?

Em programação, um **tipo** representa a natureza de um determinado valor.

Por exemplo:

```ts
let nome: string = "João";
let idade: number = 25;
let ativo: boolean = true;
```

Nesse exemplo:

- `"João"` é um valor do tipo `string`;
- `25` é um valor do tipo `number`;
- `true` é um valor do tipo `boolean`.

Os tipos ajudam a definir **quais valores podem ser armazenados** em uma variável e quais operações podem ser realizadas com esses valores.

---

## 2. JavaScript possui tipos?

Sim.

O JavaScript possui tipos, porém utiliza **tipagem dinâmica**.

Isso significa que uma variável pode armazenar valores de tipos diferentes durante a execução do programa.

Exemplo:

```js
let idade = 25;

idade = "vinte e cinco";
```

O JavaScript permite essa alteração.

Primeiro:

```txt
idade → number
```

Depois:

```txt
idade → string
```

Isso oferece flexibilidade, mas também pode facilitar o surgimento de erros durante a execução do programa.

---

## 3. TypeScript e tipagem estática

O TypeScript adiciona ao JavaScript um sistema de **tipagem estática**.

Podemos informar qual tipo de valor uma variável deve receber:

```ts
let idade: number = 25;
```

Agora, se tentarmos:

```ts
idade = "vinte e cinco";
```

o TypeScript apresentará um erro.

Isso acontece porque a variável foi definida para trabalhar com valores do tipo `number`.

```txt
idade
  │
  └── number
       │
       ├── 18  ✓
       ├── 25  ✓
       ├── 40  ✓
       └── "vinte e cinco"  ✗
```

---

## 4. JavaScript x TypeScript

### JavaScript

```js
let valor = 10;

valor = "Olá";
valor = true;
```

A mesma variável pode receber valores de tipos diferentes.

### TypeScript

```ts
let valor: number = 10;

valor = 20;     // OK
valor = "Olá";  // Erro
valor = true;   // Erro
```

O TypeScript verifica se os valores utilizados são compatíveis com os tipos definidos.

---

## 5. Verificação de tipos

Uma das principais vantagens do TypeScript é conseguir identificar determinados erros **antes da execução do programa**.

Exemplo:

```ts
let idade: number = 25;

idade.toUpperCase();
```

Existe um problema nesse código.

O método:

```ts
toUpperCase()
```

é utilizado em strings:

```ts
let nome: string = "joão";

nome.toUpperCase();
```

Como `idade` é um `number`, o TypeScript consegue detectar o erro durante o desenvolvimento.

Isso evita que determinados erros apareçam somente quando o programa estiver sendo executado.

---

## 6. TypeScript não substitui o JavaScript

O navegador não executa TypeScript diretamente.

O código TypeScript:

```ts
let idade: number = 25;
```

precisa ser compilado/transpilado para JavaScript.

De forma simplificada:

```txt
Código TypeScript (.ts)
        │
        │ compilador TypeScript (tsc)
        ▼
Verificação dos tipos
        │
        ▼
Código JavaScript (.js)
        │
        ▼
Navegador / Node.js
```

Por exemplo:

### TypeScript

```ts
let idade: number = 25;

console.log(idade);
```

Depois da compilação, teremos JavaScript equivalente:

```js
let idade = 25;

console.log(idade);
```

As informações de tipos são utilizadas principalmente durante o desenvolvimento e a compilação.

---

## 7. Por que utilizar tipos?

O sistema de tipos do TypeScript ajuda principalmente a:

- detectar erros antecipadamente;
- evitar valores incompatíveis;
- melhorar o autocomplete da IDE/editor;
- facilitar a leitura do código;
- documentar melhor a intenção do código;
- facilitar refatorações;
- tornar aplicações maiores mais fáceis de manter.

Exemplo:

```ts
function calcularDobro(numero: number) {
    return numero * 2;
}
```

Ao observar a função, já sabemos que ela espera receber um número:

```ts
calcularDobro(10);      // OK
calcularDobro("dez");   // Erro
```

---

## 8. Tipos fazem parte da documentação do código

Compare:

```js
function cadastrarUsuario(nome, idade) {
    // ...
}
```

Não sabemos imediatamente quais tipos devem ser enviados.

Com TypeScript:

```ts
function cadastrarUsuario(nome: string, idade: number) {
    // ...
}
```

Agora fica claro que:

```txt
nome  → string
idade → number
```

Os próprios tipos ajudam a explicar como o código deve ser utilizado.

---

## 9. TypeScript ajuda durante o desenvolvimento

Um ponto importante é que o TypeScript não serve apenas para impedir erros.

O sistema de tipos também fornece informações para ferramentas como o VS Code e outros editores.

Isso permite recursos como:

- autocomplete;
- sugestões de métodos;
- identificação de propriedades;
- avisos de tipos incorretos;
- navegação pelo código;
- refatoração mais segura.

Por exemplo:

```ts
let nome: string = "Maria";

nome.
```

O editor consegue sugerir métodos relacionados a `string`, como:

```ts
nome.toUpperCase();
nome.toLowerCase();
nome.includes("Mar");
```

Isso acontece porque o TypeScript sabe que `nome` é uma `string`.

---

## 10. Exemplo geral

```ts
let nome: string = "Carlos";
let idade: number = 30;
let empregado: boolean = true;

console.log(nome);
console.log(idade);
console.log(empregado);
```

Cada variável possui um tipo associado:

```txt
nome
└── string
    └── "Carlos"

idade
└── number
    └── 30

empregado
└── boolean
    └── true
```

Se tentarmos atribuir um valor incompatível:

```ts
idade = "trinta";
```

o TypeScript identificará o problema.

---

# Resumo

O **TypeScript** adiciona um sistema de tipos ao JavaScript.

Enquanto o JavaScript utiliza tipagem dinâmica, o TypeScript permite trabalhar com **tipagem estática**, possibilitando verificar se os valores utilizados no programa são compatíveis com os tipos esperados.

Exemplo:

```ts
let nome: string = "Ana";
let idade: number = 20;
```

Os tipos ajudam a:

- detectar erros antes da execução;
- melhorar o autocomplete;
- tornar o código mais previsível;
- documentar melhor funções e variáveis;
- facilitar manutenção e refatoração.

Fluxo básico:

```txt
TypeScript (.ts)
      ↓
Verificação de tipos
      ↓
Compilação (tsc)
      ↓
JavaScript (.js)
      ↓
Execução
```

> **Ideia principal:** o TypeScript utiliza informações de tipos durante o desenvolvimento para tornar o código JavaScript mais seguro, previsível e fácil de manter.
