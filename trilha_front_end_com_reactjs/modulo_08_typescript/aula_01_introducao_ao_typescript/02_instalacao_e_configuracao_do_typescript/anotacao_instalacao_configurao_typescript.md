# Instalação e Configuração do TypeScript

## Pré-requisitos

Antes de instalar o TypeScript, é necessário ter o **Node.js** e o **npm** instalados na máquina.

Podemos verificar se eles estão disponíveis executando:

```bash
node --version
```

e:

```bash
npm --version
```

Se os comandos retornarem as versões instaladas, o ambiente já está pronto para utilizar o TypeScript.

---

## Criando um projeto

Primeiro, podemos criar uma pasta para o projeto:

```bash
mkdir projeto-typescript
```

Entramos na pasta:

```bash
cd projeto-typescript
```

Depois inicializamos um projeto Node.js:

```bash
npm init -y
```

Esse comando cria o arquivo:

```text
package.json
```

O `package.json` contém informações e configurações relacionadas ao projeto e às suas dependências.

---

## Instalando o TypeScript

A forma mais comum é instalar o TypeScript como uma dependência de desenvolvimento do projeto:

```bash
npm install --save-dev typescript
```

Também podemos utilizar a forma abreviada:

```bash
npm install -D typescript
```

O `-D` indica que o TypeScript será instalado como uma **devDependency**, ou seja, uma dependência utilizada durante o desenvolvimento.

Depois da instalação, o TypeScript aparecerá no `package.json`:

```json
{
    "devDependencies": {
        "typescript": "..."
    }
}
```

---

## Verificando a instalação

Podemos verificar a versão instalada executando:

```bash
npx tsc --version
```

ou:

```bash
npx tsc -v
```

O comando:

```text
tsc
```

significa:

```text
TypeScript Compiler
```

Ele é responsável por analisar e transformar arquivos TypeScript em JavaScript.

---

## Por que utilizar `npx`?

Quando instalamos o TypeScript dentro do próprio projeto, o executável fica disponível localmente.

O `npx` permite executar esse programa sem precisar instalar o TypeScript globalmente.

Por exemplo:

```bash
npx tsc
```

Assim, cada projeto pode utilizar sua própria versão do TypeScript.

---

## Criando o arquivo de configuração

O TypeScript utiliza um arquivo chamado:

```text
tsconfig.json
```

Esse arquivo contém as configurações utilizadas pelo compilador TypeScript.

Podemos criá-lo automaticamente com:

```bash
npx tsc --init
```

Depois desse comando, teremos algo parecido com:

```text
projeto-typescript/
├── node_modules/
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

## O que é o `tsconfig.json`?

O `tsconfig.json` é o arquivo utilizado para configurar o comportamento do compilador TypeScript dentro do projeto.

Uma configuração simplificada pode ser:

```json
{
    "compilerOptions": {
        "target": "ES2022",
        "module": "NodeNext",
        "strict": true,
        "rootDir": "./src",
        "outDir": "./dist"
    }
}
```

Cada opção possui uma finalidade.

---

## `target`

```json
"target": "ES2022"
```

Define para qual versão do JavaScript o TypeScript deverá gerar o código.

Exemplo:

```text
TypeScript
    ↓
target
    ↓
JavaScript
```

---

## `module`

```json
"module": "NodeNext"
```

Define como o TypeScript deverá tratar o sistema de módulos utilizado pela aplicação.

Módulos estão relacionados principalmente ao uso de:

```javascript
import
export
```

A configuração adequada pode variar dependendo do tipo de projeto.

---

## `strict`

```json
"strict": true
```

Ativa verificações mais rigorosas do sistema de tipos.

Essa configuração ajuda o TypeScript a encontrar mais possíveis problemas durante o desenvolvimento.

Em geral, é recomendado trabalhar com:

```json
"strict": true
```

---

## `rootDir`

```json
"rootDir": "./src"
```

Define a pasta onde ficará o código-fonte TypeScript.

Por exemplo:

```text
src/
├── index.ts
├── usuario.ts
└── produto.ts
```

---

## `outDir`

```json
"outDir": "./dist"
```

Define a pasta onde serão colocados os arquivos JavaScript gerados após a compilação.

Assim:

```text
src/
└── index.ts

        ↓ compilação

dist/
└── index.js
```

---

## Estrutura básica do projeto

Depois da configuração, podemos organizar o projeto assim:

```text
projeto-typescript/
│
├── src/
│   └── index.ts
│
├── dist/
│
├── node_modules/
│
├── package.json
├── package-lock.json
└── tsconfig.json
```

A pasta:

```text
src/
```

contém o código TypeScript.

A pasta:

```text
dist/
```

normalmente contém o JavaScript gerado pelo compilador.

---

## Criando um arquivo TypeScript

Dentro de `src`, podemos criar:

```text
src/index.ts
```

Exemplo:

```typescript
const mensagem: string = "Olá, TypeScript!";

console.log(mensagem);
```

O arquivo `.ts` contém nosso código TypeScript.

---

## Resumo dos principais comandos

```bash
# Criar o projeto Node.js
npm init -y

# Instalar o TypeScript
npm install -D typescript

# Verificar a versão
npx tsc --version

# Criar o tsconfig.json
npx tsc --init
```

---

## Resumo

O processo básico de configuração de um projeto TypeScript é:

```text
Node.js + npm
      ↓
Criar projeto
      ↓
npm init -y
      ↓
Instalar TypeScript
      ↓
npm install -D typescript
      ↓
Criar configuração
      ↓
npx tsc --init
      ↓
Criar arquivos .ts
```

Os principais elementos são:

```text
package.json
    ↓
Dependências do projeto

tsconfig.json
    ↓
Configurações do TypeScript

src/
    ↓
Código TypeScript

dist/
    ↓
Código JavaScript compilado
```

Portanto, após instalar e configurar o TypeScript, o projeto já estará preparado para começar a trabalhar com arquivos `.ts` e utilizar o compilador `tsc`
.
