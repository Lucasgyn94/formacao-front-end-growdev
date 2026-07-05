## Introdução
* Variáveis CSS são como "nomes" que armazenam valores reutilizáveis em um arquivo CSS.

## Por que usar?
* Facilitam a manutenção do código.
* Tornam o design mais consistente.

## Como Declarar
* As variáveis são declaradas usando o prefixo -- dentro de um seletor, geralmente :root.
```
:root {
   --cor-primaria: #3498db;
   --margem-padrao: 16px;
}
```

## Como Usar
* Use a função var() para aplicar o valor da variável.
```
button {
   background-color: var(--cor-primaria);
   margin: var(--margem-padrao);
}
```

## Benefícios
* __Centralização__: Alterar valores no :root reflete em todo o projeto.
* __Reutilização__: Menos código repetido.
* __Temas dinâmicos__: Fáceis de aplicar temas claros e escuros.

## Quando Usar?
* __Cores e temas__: Gerenciar paletas de cores.
* __Tamanhos__: Margens, espaçamentos, fontes.
* __Layouts dinâmicos__: Facilitar ajustes em múltiplas telas.
