# Padronização de Projetos - Configurações Básicas de ESLint e Prettier

## 1. Introdução

Nas aulas anteriores vimos que a padronização ajuda a manter o código de um projeto consistente, principalmente quando diferentes desenvolvedores trabalham na mesma aplicação.

Também vimos duas ferramentas importantes:

```text
ESLint
  ↓
Analisa o código e aplica regras


Prettier
  ↓
Formata o código automaticamente
```

Nesta etapa, vamos entender como configurar essas ferramentas para trabalharem dentro de um projeto React + TypeScript.

---

# 2. ESLint e Prettier possuem responsabilidades diferentes

Antes da configuração, é importante lembrar a diferença entre as ferramentas.

## ESLint

O ESLint realiza **análise estática do código**.

Ele pode identificar problemas e verificar se determinadas regras estão sendo respeitadas.

Exemplo:

```ts
const nome = "Lucas";
const idade = 25;

console.log(nome);
```

A variável:

```ts
idade
```

foi declarada, mas não utilizada.

Dependendo das regras configuradas, o ESLint pode identificar esse problema.

Podemos pensar:

```text
Código
  ↓
ESLint
  ↓
Analisa
  ↓
Aplica regras
  ↓
Erros / Avisos
```

---

## Prettier

O Prettier é responsável principalmente pela **formatação automática do código**.

Por exemplo:

```ts
function somar(a:number,b:number){return a+b}
```

pode ser formatado para:

```ts
function somar(a: number, b: number) {
  return a + b;
}
```

A lógica não mudou.

O que mudou foi a apresentação do código.

Podemos pensar:

```text
Código
  ↓
Prettier
  ↓
Formatação
  ↓
Código padronizado
```

Portanto:

```text
ESLint   → análise e regras

Prettier → formatação
```

---

# 3. ESLint em projetos React com Vite

Ao criar um projeto React + TypeScript utilizando Vite, é comum que o projeto já possua uma configuração inicial do ESLint.

Podemos encontrar, dependendo da versão do projeto, um arquivo como:

```text
eslint.config.js
```

ou:

```text
eslint.config.mjs
```

Também podemos encontrar dependências relacionadas ao ESLint dentro do:

```text
package.json
```

Por isso, antes de instalar novamente o ESLint, devemos verificar se ele já está configurado no projeto.

Em muitos projetos criados com Vite:

```text
Vite
  ↓
Projeto React + TypeScript
  ↓
ESLint já configurado
```

Nesse caso, precisamos principalmente configurar a integração com o Prettier.

---

# 4. Instalando o Prettier e sua integração com ESLint

Nesta aula utilizaremos:

```bash
npm install prettier eslint-config-prettier eslint-plugin-prettier -D
```

Também poderíamos escrever:

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

O:

```text
-D
```

é uma abreviação de:

```text
--save-dev
```

Isso significa que os pacotes serão instalados como:

```text
devDependencies
```

ou seja, dependências utilizadas principalmente durante o desenvolvimento.

---

# 5. Entendendo o comando

Vamos dividir:

```bash
npm install prettier eslint-config-prettier eslint-plugin-prettier -D
```

Temos:

```text
npm install
```

Responsável por instalar pacotes no projeto.

Depois:

```text
prettier
```

Depois:

```text
eslint-config-prettier
```

Depois:

```text
eslint-plugin-prettier
```

E finalmente:

```text
-D
```

Portanto:

```text
npm install
    │
    ├── prettier
    │
    ├── eslint-config-prettier
    │
    └── eslint-plugin-prettier
             │
             ↓
            -D
             ↓
      devDependencies
```

---

# 6. O que é o pacote `prettier`?

O primeiro pacote:

```text
prettier
```

é o próprio formatador.

Ele é responsável por organizar automaticamente aspectos relacionados à apresentação do código.

Por exemplo:

```ts
const usuario={nome:"Lucas",idade:25}
```

pode ser formatado como:

```ts
const usuario = {
  nome: "Lucas",
  idade: 25,
};
```

Portanto:

```text
prettier
   ↓
Formatação automática
```

---

# 7. O que é `eslint-config-prettier`?

O segundo pacote é:

```text
eslint-config-prettier
```

Ele ajuda a evitar conflitos entre regras de formatação do ESLint e o Prettier.

Imagine que:

```text
ESLint
  ↓
possui uma determinada regra de estilo
```

enquanto:

```text
Prettier
  ↓
quer formatar aquele código de outra maneira
```

Poderíamos acabar com:

```text
ESLint
   ↕
CONFLITO
   ↕
Prettier
```

O:

```text
eslint-config-prettier
```

ajuda a desabilitar regras do ESLint que poderiam entrar em conflito com a formatação realizada pelo Prettier.

Assim:

```text
ESLint
  ↓
cuida principalmente da análise


Prettier
  ↓
cuida da formatação
```

Podemos guardar:

```text
eslint-config-prettier
        ↓
Evita conflitos de formatação
entre ESLint e Prettier
```

---

# 8. O que é `eslint-plugin-prettier`?

O terceiro pacote é:

```text
eslint-plugin-prettier
```

Ele permite integrar o Prettier ao fluxo de análise do ESLint.

Com essa integração, problemas de formatação detectados pelo Prettier podem aparecer através do ESLint.

Podemos pensar assim:

```text
Código
  ↓
ESLint
  │
  ├── regras do ESLint
  │
  └── integração com Prettier
             ↓
       verifica formatação
```

Portanto:

```text
eslint-plugin-prettier
        ↓
Permite integrar verificações
do Prettier ao ESLint
```

---

# 9. Diferença entre os três pacotes

Essa diferença é importante.

## `prettier`

```text
Responsabilidade:
formatar o código
```

---

## `eslint-config-prettier`

```text
Responsabilidade:
evitar conflitos entre
ESLint e Prettier
```

---

## `eslint-plugin-prettier`

```text
Responsabilidade:
integrar verificações do
Prettier ao ESLint
```

Podemos resumir:

```text
prettier
   ↓
FORMATA


eslint-config-prettier
   ↓
EVITA CONFLITOS


eslint-plugin-prettier
   ↓
INTEGRA PRETTIER AO ESLINT
```

---

# 10. O que acontece após a instalação?

Depois de executar:

```bash
npm install prettier eslint-config-prettier eslint-plugin-prettier -D
```

os pacotes serão adicionados ao:

```text
node_modules/
```

e registrados no:

```text
package.json
```

dentro de:

```json
"devDependencies": {
  "prettier": "...",
  "eslint-config-prettier": "...",
  "eslint-plugin-prettier": "..."
}
```

As versões dependerão do momento em que os pacotes forem instalados.

---

# 11. Por que utilizar `-D`?

Essas ferramentas são utilizadas principalmente durante o desenvolvimento.

Elas ajudam o desenvolvedor a:

```text
analisar código
formatar código
encontrar problemas
manter padrões
```

Elas não representam funcionalidades da aplicação para o usuário.

Por exemplo:

```text
React
  ↓
faz parte da aplicação


Prettier
  ↓
ajuda durante o desenvolvimento
```

Por isso instalamos como:

```text
devDependencies
```

utilizando:

```bash
-D
```

---

# 12. Configurando o Prettier

Depois da instalação, podemos criar um arquivo de configuração do Prettier.

Um formato comum é:

```text
.prettierrc
```

Exemplo:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}
```

Esse arquivo define algumas regras de formatação.

---

# 13. `semi`

A propriedade:

```json
"semi": true
```

define o uso de ponto e vírgula quando apropriado.

Exemplo:

```ts
const nome = "Lucas";
```

Se configurarmos:

```json
"semi": false
```

o Prettier pode formatar como:

```ts
const nome = "Lucas"
```

---

# 14. `singleQuote`

A propriedade:

```json
"singleQuote": true
```

define preferência por aspas simples em contextos JavaScript/TypeScript em que essa opção se aplica.

Exemplo:

```ts
const nome = 'Lucas';
```

Com:

```json
"singleQuote": false
```

teríamos normalmente:

```ts
const nome = "Lucas";
```

---

# 15. `tabWidth`

A propriedade:

```json
"tabWidth": 2
```

define a largura utilizada para indentação.

Exemplo:

```ts
function exemplo() {
  console.log("Olá");
}
```

Aqui temos uma indentação equivalente a dois espaços.

---

# 16. Exemplo de `.prettierrc`

Podemos ter:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all"
}
```

Não é necessário decorar todas essas opções.

O importante é entender:

```text
.prettierrc
     ↓
Configuração do Prettier
     ↓
Define o padrão de formatação
do projeto
```

---

# 17. Ignorando arquivos

Nem todos os arquivos precisam ser formatados.

Podemos criar:

```text
.prettierignore
```

Por exemplo:

```text
node_modules
dist
coverage
```

Assim:

```text
Prettier
   ↓
consulta .prettierignore
   ↓
ignora determinados arquivos
e diretórios
```

---

# 18. Executando o Prettier

Depois da instalação podemos executar:

```bash
npx prettier . --check
```

Esse comando verifica se os arquivos estão de acordo com a formatação.

Temos:

```text
npx prettier
      ↓
executa o Prettier instalado no projeto


.
      ↓
diretório atual


--check
      ↓
somente verifica
```

Portanto:

```bash
npx prettier . --check
```

significa:

> Verifique os arquivos do projeto e informe se estão de acordo com a formatação esperada.

---

# 19. Formatando automaticamente

Para aplicar a formatação:

```bash
npx prettier . --write
```

Agora:

```text
--write
   ↓
escreve as alterações
nos arquivos
```

Diferença:

```text
--check
   ↓
verifica


--write
   ↓
formata
```

---

# 20. Executando o ESLint

Se o projeto possuir um script como:

```json
"scripts": {
  "lint": "eslint ."
}
```

podemos executar:

```bash
npm run lint
```

O fluxo será:

```text
npm run lint
      ↓
eslint .
      ↓
analisa o projeto
      ↓
aplica as regras
      ↓
mostra erros e avisos
```

---

# 21. Correção automática do ESLint

Alguns problemas podem ser corrigidos automaticamente.

Podemos utilizar:

```bash
npx eslint . --fix
```

O:

```text
--fix
```

significa:

> Tente corrigir automaticamente os problemas que possuem uma correção disponível.

Porém, nem todos os problemas podem ser corrigidos automaticamente.

---

# 22. Criando scripts

Podemos facilitar o uso dessas ferramentas criando scripts no:

```text
package.json
```

Por exemplo:

```json
{
  "scripts": {
    "lint": "eslint .",
    "format": "prettier . --write",
    "format:check": "prettier . --check"
  }
}
```

Assim podemos executar:

```bash
npm run lint
```

para analisar.

```bash
npm run format
```

para formatar.

E:

```bash
npm run format:check
```

para verificar a formatação.

---

# 23. Fluxo com ESLint e Prettier

Depois da configuração podemos ter:

```text
Desenvolvedor
     ↓
Escreve código
     ↓
┌─────────────────────┐
│                     │
▼                     ▼
ESLint              Prettier
│                     │
▼                     ▼
Analisa             Formata
│                     │
└──────────┬──────────┘
           ↓
 Código padronizado
```

Com os pacotes de integração:

```text
ESLint
  │
  ├── suas próprias regras
  │
  └── eslint-plugin-prettier
             ↓
       integração com
          Prettier


eslint-config-prettier
             ↓
      ajuda a evitar
         conflitos
```

---

# 24. Exemplo prático

Imagine:

```tsx
export function Usuario({nome}:{nome:string}){const idade=25;return <h1>Olá, {nome}</h1>}
```

Primeiro temos problemas de formatação.

O Prettier pode organizar para:

```tsx
export function Usuario({ nome }: { nome: string }) {
  const idade = 25;

  return <h1>Olá, {nome}</h1>;
}
```

Agora ficou mais legível.

Porém:

```tsx
const idade = 25;
```

continua sem ser utilizada.

O ESLint pode identificar isso dependendo das regras configuradas.

Portanto:

```text
Prettier
   ↓
corrigiu a formatação


ESLint
   ↓
identificou um possível
problema no código
```

---

# 25. Estrutura possível do projeto

Depois da configuração, podemos ter algo semelhante a:

```text
blog/
│
├── node_modules/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── App.tsx
│   └── main.tsx
│
├── .prettierrc
├── .prettierignore
├── eslint.config.js
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

Cada parte possui sua responsabilidade:

```text
eslint.config.js
        ↓
Configuração do ESLint


.prettierrc
        ↓
Configuração do Prettier


.prettierignore
        ↓
Arquivos ignorados pelo Prettier


package.json
        ↓
Dependências e scripts
```

---

# 26. O que devemos guardar desta aula?

O comando principal utilizado é:

```bash
npm install prettier eslint-config-prettier eslint-plugin-prettier -D
```

Ele instala três pacotes:

```text
prettier
   ↓
Formatação


eslint-config-prettier
   ↓
Evita conflitos de regras
de formatação


eslint-plugin-prettier
   ↓
Integra o Prettier
ao ESLint
```

E:

```text
-D
 ↓
devDependencies
```

Depois podemos configurar e executar as ferramentas dentro do projeto.

---

# Resumo

O ESLint e o Prettier podem trabalhar juntos na padronização de um projeto.

```text
                 Projeto
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
       ESLint              Prettier
          ↓                   ↓
       Análise             Formatação
          │                   │
          └─────────┬─────────┘
                    ↓
             Padronização
```

Para instalar os pacotes utilizados na integração:

```bash
npm install prettier eslint-config-prettier eslint-plugin-prettier -D
```

Onde:

```text
prettier
    → formata o código

eslint-config-prettier
    → evita conflitos entre regras de formatação

eslint-plugin-prettier
    → permite integrar o Prettier ao ESLint

-D
    → instala como dependências de desenvolvimento
```

Com isso, o projeto pode possuir regras compartilhadas entre todos os desenvolvedores, ajudando a manter o código mais consistente e organizado.

A ideia principal é:

> ESLint analisa, Prettier formata, e os pacotes de integração ajudam as duas ferramentas a trabalharem juntas dentro do mesmo projeto.
