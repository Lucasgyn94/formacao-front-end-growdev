# Rotas

Um princípio importante do REST é o uso de **URIs** (**Uniform Resource Identifiers**) claros e bem definidos para definir as rotas.

Por exemplo, devemos usar a rota `/usuarios/1` para acessar os dados de um usuário específico com ID 1.

# Rotas (Padrões de Construção)

Alguns dos padrões mais importantes para a construção de rotas em uma API REST:

* **Nomes no Plural:** Usar nomes no plural para recursos.
  * *Ex.:* `/usuarios` e não `/usuario`.

* **Identificação por ID:** Para acessar, atualizar ou excluir um item específico, usa-se o ID ou outro identificador único.
  * *Ex.:* `/usuarios/{id}` sendo que `{id}` pode ser qualquer identificador.

* **Hierarquia de Recursos:** Para recursos relacionados, pode-se usar rotas hierárquicas.
  * *Ex.:* `/usuarios/{id}/posts` (indica todos os posts de um usuário específico).

# Rotas (Boas Práticas)

Alguns dos padrões mais importantes para a construção de rotas em uma API REST:

* **Uso de verbos:** O uso de verbos em rotas deve ser evitado.
  * *Ex.:* `/usuarios` e não `/listarUsuarios`.

* **Uso correto dos verbos HTTP:** Deve-se sempre respeitar a aplicação dos verbos HTTP. Ou seja, uma rota GET não pode ser usada para criar um novo recurso.
  * *Ex.:* `POST /usuarios` ao invés de `PUT /usuarios` para criar um usuário novo.
