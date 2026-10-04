# EXERCÍCIO

## Gerenciando Pedidos com TypeScript

Um sistema simples de gerenciamento de pedidos precisa:

- Identificar o status de um pedido.
- Organizar as informações de cada pedido.
- Calcular o valor total baseado em produtos e quantidades.
- Defina um `Enum` para representar os possíveis status de um pedido (Pendente, Processando, Concluído, Cancelado).

- Crie uma `Interface` para representar os dados de um pedido, incluindo:
  - Identificação (`id: string`).
  - Produtos (`products: array de strings`).
  - Quantidades (`quantities: array de números`).
  - Status (`status: use o Enum criado`).

- Utilize um `Type` para representar os possíveis métodos de pagamento (Cartão, Boleto, Pix).

- Implemente uma função que:
  - Recebe um pedido e calcula o valor total com base nos produtos e quantidades.
  - Exibe os dados completos do pedido no console.

- Exemplo de Saída Esperada:
  - Pedido #123
  - Status: Processando
  - Total: R$ 190

