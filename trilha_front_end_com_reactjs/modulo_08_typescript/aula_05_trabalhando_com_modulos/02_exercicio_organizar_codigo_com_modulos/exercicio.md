# Exercício

## Cenário

Você possui um código que gera números aleatórios, ordena esses números e exibe o resultado. O código está começando a ficar grande e difícil de manter. Para melhorar a organização e reutilização do código, você decide dividir o código em módulos.

## Separe o código em dois módulos

- **randomUtils.ts:** Contém funções relacionadas à geração de números aleatórios e verificação de números exclusivos.
- **sortUtils.ts:** Contém funções de ordenação (ordem crescente e decrescente).
- **index.ts:** O arquivo principal que importa os módulos e chama as funções.

## Requisitos

- O módulo **randomUtils.ts** deve conter:
  - Uma função **generateUniqueRandomNumbers** que gera números aleatórios exclusivos.

- O módulo **sortUtils.ts** deve conter:
  - Funções **sortAscending** e **sortDescending** para ordenar os números.

- O módulo **index.ts** deve importar e usar as funções dos outros módulos para gerar os números e ordená-los.
