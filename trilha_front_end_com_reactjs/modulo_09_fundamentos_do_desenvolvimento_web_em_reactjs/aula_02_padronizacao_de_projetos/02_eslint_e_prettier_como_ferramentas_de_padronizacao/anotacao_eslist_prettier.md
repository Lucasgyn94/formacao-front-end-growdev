# Padronização de Projetos - ESLint e Prettier como Ferramentas de Padronização

## 1. Relembrando o problema

Em um projeto de software, diferentes desenvolvedores podem possuir diferentes formas de escrever código.

Por exemplo:

```ts
const nome="Lucas"
```

Outro desenvolvedor poderia escrever:

```ts
const nome = "Lucas";
```

Enquanto outro poderia escrever:

```ts
const nome = 'Lucas'
```

Os códigos podem funcionar normalmente, porém não seguem necessariamente o mesmo padrão.

Em projetos maiores:

```text
Vários desenvolvedores
        ↓
Diferentes estilos
        ↓
Código inconsistente
        ↓
Maior dificuldade de manutenção
```

Para ajudar a resolver esse problema, podemos utilizar ferramentas que automatizam parte da padronização.

Duas ferramentas muito utilizadas no ecossistema JavaScript e TypeScript são:

```text
ESLint
Prettier
```

---

# 2. O que é ESLint?

O **ESLint** é uma ferramenta de análise estática de código utilizada principalmente em projetos JavaScript e TypeScript.

Ele analisa o código sem precisar executá-lo e verifica se determinadas regras estão sendo respeitadas.

Podemos pensar no ESLint como um:

> "Fiscal do código".

O ESLint recebe um conjunto de regras e verifica se o código está de acordo com elas.

Fluxo simplificado:

```text
Código
  ↓
ESLint
  ↓
Regras configuradas
  ↓
Problemas encontrados
  ↓
Avisos / Erros
```

---

# 3. O que significa análise estática?

**Análise estática** significa analisar o código sem precisar executar o programa.

Por exemplo:

```ts
const nome = "Lucas";
const idade = 25;

console.log(nome);
```

Nesse código:

```ts
idade
```

foi declarada, mas nunca utilizada.

Uma ferramenta de análise estática pode identificar esse tipo de situação antes mesmo de executarmos a aplicação.

Exemplo conceitual:

```text
const idade = 25;
      ↓
ESLint analisa
      ↓
Variável não utilizada
      ↓
Aviso ou erro
```

---

# 4. Regras do ESLint

O ESLint trabalha utilizando **regras**.

Essas regras determinam quais padrões ou práticas devem ser verificadas.

Por exemplo, uma regra pode determinar que variáveis declaradas precisam ser utilizadas.

Código:

```ts
const nome = "Lucas";
const idade = 25;

console.log(nome);
```

O ESLint poderia identificar:

```text
idade
  ↓
declarada
  ↓
não utilizada
  ↓
problema identificado
```

Outro exemplo poderia envolver determinadas práticas consideradas inadequadas de acordo com as regras configuradas no projeto.

Portanto:

```text
ESLint
  ↓
analisa o código
  ↓
aplica regras
  ↓
encontra possíveis problemas
```

---

# 5. ESLint em projetos React

O ESLint também pode ser utilizado em projetos React.

Nesse caso, além das regras relacionadas a JavaScript e TypeScript, podemos utilizar regras específicas relacionadas ao React.

Por exemplo, ele pode ajudar a verificar determinados padrões envolvendo:

```text
componentes
Hooks
JSX
TypeScript
boas práticas
```

Em um projeto React + TypeScript podemos ter:

```text
Código React/TypeScript
          ↓
        ESLint
          ↓
Regras JavaScript
Regras TypeScript
Regras React
          ↓
Possíveis problemas
```

---

# 6. O que é Prettier?

O **Prettier** é uma ferramenta utilizada principalmente para **formatação automática de código**.

Podemos pensar no Prettier como um:

> "Formatador automático do código".

Imagine o seguinte código:

```ts
function somar(a:number,b:number){return a+b}
```

O código funciona.

Porém, o Prettier pode formatá-lo automaticamente para algo como:

```ts
function somar(a: number, b: number) {
  return a + b;
}
```

A lógica não foi alterada.

O que mudou foi a **formatação**.

---

# 7. O que o Prettier pode padronizar?

O Prettier pode cuidar de aspectos de formatação como:

```text
indentação
espaçamento
quebras de linha
aspas
ponto e vírgula
organização visual do código
```

Dependendo das configurações utilizadas pelo projeto.

Por exemplo:

```ts
const usuario={nome:"Lucas",idade:25}
```

Depois da formatação:

```ts
const usuario = {
  nome: "Lucas",
  idade: 25,
};
```

O resultado lógico continua sendo o mesmo.

---

# 8. ESLint x Prettier

Essa é a diferença mais importante desta aula.

Embora as duas ferramentas estejam relacionadas à padronização, elas possuem responsabilidades diferentes.

## ESLint

O ESLint está mais relacionado à:

```text
ANÁLISE DO CÓDIGO
```

Ele procura possíveis problemas e verifica regras.

Exemplo:

```ts
const idade = 25;
```

Se essa variável nunca for utilizada, uma regra pode identificar o problema.

---

## Prettier

O Prettier está relacionado principalmente à:

```text
FORMATAÇÃO DO CÓDIGO
```

Por exemplo:

```ts
function soma(a:number,b:number){return a+b}
```

pode ser transformado em:

```ts
function soma(a: number, b: number) {
  return a + b;
}
```

---

# 9. Comparação simples

Podemos guardar assim:

```text
ESLint
   ↓
"Existe algum problema ou regra
sendo desrespeitada neste código?"


Prettier
   ↓
"Como este código deve ser
formatado?"
```

Ou:

```text
ESLint  → análise e regras

Prettier → formatação
```

Essa é uma das principais diferenças entre as duas ferramentas.

---

# 10. Exemplo utilizando as duas ideias

Imagine este código:

```ts
const nome="Lucas"
const idade=25
console.log(nome)
```

Temos dois tipos diferentes de situação.

### Formatação

O código poderia ser formatado:

```ts
const nome = "Lucas";
const idade = 25;

console.log(nome);
```

Essa é uma responsabilidade típica do:

```text
Prettier
```

---

### Análise

Agora observe:

```ts
const idade = 25;
```

A variável foi declarada, mas nunca utilizada.

Uma regra pode identificar isso.

Essa é uma responsabilidade típica do:

```text
ESLint
```

Portanto:

```text
Código
  │
  ├── problema de formatação
  │        ↓
  │     Prettier
  │
  └── problema relacionado a regras
           ↓
         ESLint
```

---

# 11. Por que utilizar Prettier?

Imagine uma equipe discutindo:

```text
"Vamos usar aspas simples ou duplas?"

"Quantos espaços de indentação?"

"Essa linha deveria quebrar aqui?"

"Devemos colocar isso em várias linhas?"
```

Essas discussões normalmente não estão relacionadas à lógica da aplicação.

O Prettier ajuda a reduzir esse tipo de preocupação porque o código pode ser formatado automaticamente de acordo com um padrão.

Assim:

```text
Desenvolvedor escreve código
          ↓
       Prettier
          ↓
Formatação padronizada
```

---

# 12. Por que utilizar ESLint?

Enquanto o Prettier cuida principalmente da aparência do código, o ESLint ajuda a identificar possíveis problemas e violações das regras estabelecidas.

Fluxo:

```text
Desenvolvedor escreve código
          ↓
        ESLint
          ↓
   Analisa o código
          ↓
      Aplica regras
          ↓
Avisos / erros encontrados
```

Isso permite identificar problemas durante o desenvolvimento.

---

# 13. ESLint e Prettier trabalhando juntos

As duas ferramentas podem ser utilizadas no mesmo projeto.

Podemos visualizar assim:

```text
            Código
              │
       ┌──────┴──────┐
       ↓             ↓
    ESLint        Prettier
       ↓             ↓
    Análise       Formatação
       ↓             ↓
    Regras        Estilo
       └──────┬──────┘
              ↓
      Código mais consistente
```

Cada ferramenta possui sua responsabilidade.

---

# 14. Exemplo em um projeto React

Imagine um componente escrito assim:

```tsx
export function Usuario({nome}:{nome:string}){const idade=25;return <h1>Olá, {nome}</h1>}
```

Existem questões diferentes nesse código.

## Formatação

O Prettier poderia organizá-lo para algo semelhante a:

```tsx
export function Usuario({ nome }: { nome: string }) {
  const idade = 25;

  return <h1>Olá, {nome}</h1>;
}
```

Agora ficou mais fácil de ler.

Porém, ainda existe:

```tsx
const idade = 25;
```

e `idade` não está sendo utilizada.

Dependendo das regras configuradas, o ESLint poderia identificar esse problema.

Portanto:

```text
Prettier
   ↓
melhora/padroniza a formatação


ESLint
   ↓
identifica a variável não utilizada
```

Isso demonstra por que as duas ferramentas são complementares.

---

# 15. Automatizando tarefas repetitivas

Sem ferramentas:

```text
Desenvolvedor
     ↓
Escreve código
     ↓
Verifica manualmente a formatação
     ↓
Procura problemas
     ↓
Corrige manualmente
```

Com ferramentas:

```text
Desenvolvedor
     ↓
Escreve código
     ↓
┌───────────────┐
│ ESLint        │ → verifica regras
│ Prettier      │ → formata código
└───────────────┘
     ↓
Código mais consistente
```

Isso permite que o desenvolvedor concentre mais atenção na lógica da aplicação.

---

# 16. ESLint e Prettier não substituem o desenvolvedor

Essas ferramentas ajudam bastante, mas não garantem que toda a lógica da aplicação esteja correta.

Por exemplo:

```ts
function somar(a: number, b: number) {
  return a - b;
}
```

A função se chama:

```text
somar
```

mas está realizando:

```text
subtração
```

O código pode estar perfeitamente formatado e ainda possuir um erro lógico.

Portanto:

```text
Prettier
   ↓
não garante lógica correta


ESLint
   ↓
pode detectar vários problemas,
mas não entende necessariamente
todas as regras de negócio


Desenvolvedor
   ↓
continua responsável pela lógica
e comportamento da aplicação
```

---

# 17. Relação com a aula anterior

Na primeira aula vimos a problemática:

```text
Vários desenvolvedores
        ↓
Diferentes estilos
        ↓
Código inconsistente
        ↓
Dificuldade de manutenção
```

Agora começamos a conhecer ferramentas que ajudam a resolver parte desse problema:

```text
Problema
   ↓
Necessidade de padronização
   ↓
┌───────────────────────┐
│                       │
▼                       ▼
ESLint                Prettier
│                       │
▼                       ▼
Análise              Formatação
│                       │
└───────────┬───────────┘
            ↓
    Código padronizado
```

---

# 18. Resumo

O **ESLint** e o **Prettier** são ferramentas que podem ser utilizadas para ajudar na padronização de projetos JavaScript, TypeScript e React.

### ESLint

Utilizado principalmente para:

```text
analisar o código
verificar regras
identificar possíveis problemas
manter padrões de qualidade
```

Podemos lembrar:

> ESLint = análise e regras.

---

### Prettier

Utilizado principalmente para:

```text
formatar o código
padronizar espaçamento
padronizar indentação
padronizar quebras de linha
manter um estilo consistente
```

Podemos lembrar:

> Prettier = formatação.

---

## Diferença principal

```text
ESLint
  ↓
Analisa


Prettier
  ↓
Formata
```

Ou:

```text
ESLint  → "Este código respeita as regras?"

Prettier → "Como este código deve ser formatado?"
```

Quando utilizados em conjunto:

```text
ESLint + Prettier
       ↓
Análise + Formatação
       ↓
Código mais consistente
       ↓
Melhor padronização do projeto
```

A ideia principal desta aula é entender que **ESLint e Prettier possuem responsabilidades diferentes, mas podem trabalhar juntos para automatizar parte da padronização de um projeto**.
