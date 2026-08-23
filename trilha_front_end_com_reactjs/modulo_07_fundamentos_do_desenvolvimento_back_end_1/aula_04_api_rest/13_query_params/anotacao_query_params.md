# Parâmetros – Query

**O que são Query Parameters (Query Params)?**
Os **Query Parameters** são parâmetros opcionais anexados ao final de uma URL para modificar ou customizar o resultado da busca no servidor. Diferente dos *Route Params*, eles não identificam um recurso único de forma direta, mas sim **filtram, ordenam, paginam ou organizam** a resposta de uma lista de dados.

---

### Sintaxe e Funcionamento

* **Início:** A lista de parâmetros começa sempre após o símbolo de interrogação (`?`).
* **Estrutura:** São estruturados no formato **`chave=valor`**.
* **Separação:** Para enviar múltiplos parâmetros em uma única URL, utiliza-se o comercial (`&`) entre cada par.
* **Verbos Associados:** São predominantemente utilizados em requisições do tipo `GET`.

---

### Exemplos de Aplicação

* `/clientes?idade=20` (filtra apenas os clientes com 20 anos)
* `/clientes?nome=Jose&idade=30` (aplica múltiplos filtros combinando nome e idade)
* `/clientes?pagina=1&registros_por_pagina=10` (define o controle de paginação)
* `GET https://api.com/books?year=2024&pages=100` (busca livros do ano de 2024 que possuem 100 páginas)
