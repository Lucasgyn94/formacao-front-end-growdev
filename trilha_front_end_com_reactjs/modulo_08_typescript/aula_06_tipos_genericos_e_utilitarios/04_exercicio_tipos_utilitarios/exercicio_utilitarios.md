# Exercício

## Cenário

Você tem um tipo que representa um usuário. Esse tipo possui algumas propriedades que nem sempre são obrigatórias. Você precisará usar os tipos utilitários Required e Partial para modificar esse comportamento, fazendo com que as propriedades sejam todas obrigatórias ou todas opcionais, dependendo do caso.

## Tarefa

- Crie um tipo **User** com as propriedades `id`, `name` e `email`, sendo que `name` e `email` são opcionais.
- Use o tipo utilitário **Required** para criar um tipo **FullUser** onde todas as propriedades de **User** são obrigatórias.
- Use o tipo utilitário **Partial** para criar um tipo **UserUpdate** onde todas as propriedades de **User** são opcionais.

## Requisitos

- O tipo **User** deve ter as propriedades `id`, `name` e `email`. As propriedades `name` e `email` devem ser opcionais.
- O tipo **FullUser** deve tornar todas as propriedades de **User** obrigatórias.
- O tipo **UserUpdate** deve permitir que qualquer propriedade de **User** seja opcional.
