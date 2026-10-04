# Padronização de Projetos - Introdução à Problemática

## 1. O que é padronização de projetos?

A **padronização de projetos** consiste em estabelecer regras e convenções para que o código de uma aplicação mantenha uma estrutura consistente.

Em um projeto de software, principalmente quando várias pessoas trabalham no mesmo código, cada desenvolvedor pode possuir uma maneira diferente de escrever e organizar suas implementações.

Por exemplo:

```ts
const nome="Lucas"
```

Outro desenvolvedor poderia escrever:

```ts
const nome = "Lucas";
```

E outro:

```ts
const nome = 'Lucas'
```

Os três códigos podem funcionar, porém seguem **padrões diferentes de escrita**.

---

## 2. Qual é a problemática?

Em projetos pequenos e individuais, diferenças de estilo podem parecer pouco importantes.

Porém, imagine um projeto desenvolvido por várias pessoas:

```text
Desenvolvedor A
      ↓
Possui seu estilo

Desenvolvedor B
      ↓
Possui outro estilo

Desenvolvedor C
      ↓
Possui outro estilo
```

Sem regras definidas, o projeto pode acabar contendo diferentes padrões de código.

Exemplo:

```ts
const nome="Lucas"

const idade = 25;

const cidade= 'Goiânia'

function calcular(a:number,b:number){
    return a+b
}
```

Embora o código possa funcionar, ele apresenta inconsistências de escrita e organização.

---

## 3. Código funcionando x código padronizado

Um ponto importante é entender que:

> Um código funcionar corretamente não significa necessariamente que ele esteja bem padronizado.

Podemos ter:

```ts
function somar(a:number,b:number){return a+b}
```

e:

```ts
function somar(a: number, b: number) {
    return a + b;
}
```

Os dois podem produzir exatamente o mesmo resultado.

A diferença está na **forma como o código foi escrito e organizado**.

---

## 4. Por que isso se torna um problema?

Conforme o projeto cresce, a falta de padronização pode dificultar:

- leitura do código;
- manutenção;
- colaboração entre desenvolvedores;
- identificação de problemas;
- entrada de novos desenvolvedores no projeto;
- revisão de código;
- organização geral da aplicação.

Imagine:

```text
Projeto pequeno
     ↓
Poucos arquivos
     ↓
Diferenças de estilo são menos perceptíveis


Projeto grande
     ↓
Muitos arquivos
     ↓
Vários desenvolvedores
     ↓
Diferentes estilos
     ↓
Código inconsistente
```

---

## 5. Trabalhando em equipe

A padronização se torna ainda mais importante quando várias pessoas trabalham no mesmo projeto.

Por exemplo:

```text
Desenvolvedor A → prefere aspas simples
Desenvolvedor B → prefere aspas duplas
Desenvolvedor C → utiliza ponto e vírgula
Desenvolvedor D → não utiliza ponto e vírgula
```

Sem uma regra comum, cada parte do projeto pode possuir um estilo diferente.

O objetivo da padronização é fazer com que todos sigam um conjunto comum de regras:

```text
Desenvolvedor A ─┐
Desenvolvedor B ─┤
Desenvolvedor C ─┼──> Padrões do projeto
Desenvolvedor D ─┘
                        ↓
                 Código consistente
```

---

## 6. Padronização não é apenas estética

Padronizar um projeto não significa apenas deixar o código mais bonito.

A padronização busca tornar o projeto:

```text
mais consistente
mais previsível
mais legível
mais organizado
mais fácil de manter
```

Quando um desenvolvedor abre um arquivo novo, ele deve encontrar um estilo semelhante ao restante do projeto.

---

## 7. Padronização manual

Uma equipe poderia simplesmente definir regras como:

```text
- utilizar determinado padrão de indentação;
- utilizar uma convenção para nomes;
- definir como o código deve ser formatado;
- manter uma estrutura comum entre os arquivos;
```

Porém, existe um problema:

```text
Regras definidas
      ↓
Desenvolvedor precisa lembrar delas
      ↓
Pode esquecer ou cometer erros
      ↓
Código pode ficar fora do padrão
```

Por isso, em projetos reais, é comum utilizar ferramentas que ajudam a **automatizar a aplicação e verificação desses padrões**.

Essas ferramentas serão estudadas nas próximas etapas.

---

## 8. Ideia principal da aula

A problemática que leva à necessidade de padronização pode ser resumida assim:

```text
Vários desenvolvedores
        ↓
Diferentes formas de escrever código
        ↓
Falta de consistência
        ↓
Projeto mais difícil de manter
        ↓
Necessidade de padronização
```

Com padrões definidos:

```text
Equipe
  ↓
Regras comuns
  ↓
Código consistente
  ↓
Melhor organização
  ↓
Maior facilidade de manutenção
```

---

## Resumo

A **padronização de projetos** busca estabelecer regras comuns para a escrita e organização do código.

O problema surge porque diferentes desenvolvedores podem possuir diferentes estilos e práticas.

Em projetos maiores, isso pode gerar:

```text
Código inconsistente
       ↓
Dificuldade de leitura
       ↓
Dificuldade de manutenção
       ↓
Problemas de colaboração
```

A solução é estabelecer padrões que sejam seguidos por todo o projeto.

> A ideia não é apenas fazer o código funcionar, mas fazer com que ele seja escrito de maneira consistente, organizada e compreensível para toda a equipe.

Nas próximas etapas, ferramentas específicas poderão ser utilizadas para ajudar a aplicar esses padrões automaticamente.
