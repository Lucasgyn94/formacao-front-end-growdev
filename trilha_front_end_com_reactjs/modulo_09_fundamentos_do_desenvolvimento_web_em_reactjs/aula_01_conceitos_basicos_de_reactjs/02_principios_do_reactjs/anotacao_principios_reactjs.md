# Princípios aplicados ao ReactJS: DRY e SRP

## DRY — Don't Repeat Yourself

Significa **“Não se repita”**.

O objetivo é evitar duplicar a mesma lógica em diferentes partes do código. Quando uma regra precisar mudar, a alteração deve ficar concentrada em um único lugar.

No React, podemos aplicar DRY criando componentes reutilizáveis e extraindo lógica compartilhada para funções ou hooks personalizados.

### Exemplo

Se várias páginas exibem produtos com a mesma estrutura, podemos criar um componente `CardProduto` e reutilizá-lo, passando os dados de cada produto por props.

Assim, uma mudança na apresentação do card pode ser feita em um único componente.

> Nem todo código parecido precisa ser unificado. A reutilização faz sentido quando os trechos representam a mesma responsabilidade ou regra.

## SRP — Single Responsibility Principle

Significa **“Princípio da Responsabilidade Única”**.

Um módulo deve ter uma responsabilidade bem definida e, consequentemente, um motivo principal para mudar.

No React, isso ajuda a evitar componentes que concentram tarefas demais, como buscar dados, aplicar regras de negócio e renderizar toda uma página.

### Exemplo

Uma tela de produtos pode ser organizada assim:

- `buscarProdutos`: realiza a requisição dos produtos.
- `CardProduto`: apresenta os dados de um produto.
- `ListaProdutos`: organiza e exibe os cards.

Cada parte possui um propósito claro, facilitando a manutenção e os testes.

> Responsabilidade única não significa que um componente deve ter apenas uma linha ou uma função. Ele pode realizar várias operações relacionadas ao seu propósito.

## Diferença entre DRY e SRP

- **DRY:** evita duplicar regras e lógica.
- **SRP:** separa responsabilidades e mantém cada parte focada em seu propósito.

Os dois princípios ajudam a criar código mais organizado, reutilizável e fácil de manter.
