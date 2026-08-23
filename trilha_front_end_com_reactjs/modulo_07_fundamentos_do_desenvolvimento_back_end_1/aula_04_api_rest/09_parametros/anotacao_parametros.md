# Parâmetros

**O que são Parâmetros em uma API?**
Parâmetros são **dados enviados pelo cliente ao servidor para personalizar uma requisição**.

Eles permitem, por exemplo, especificar filtros de pesquisa, definir paginação, ordenar dados ou enviar informações adicionais para a criação e atualização de recursos.

---

### Tipos Principais de Parâmetros

Existem quatro tipos principais de parâmetros em APIs REST:

* **Body:** Corpo da requisição; dados mais estruturados e pesados (como objetos JSON) enviados em requisições `POST`, `PUT` ou `PATCH`.
* **Query:** Parâmetros passados diretamente na URL após a interrogação (`?`), muito usados para buscas, filtros, ordenação e paginação.
* **Route (ou Path Params):** Variáveis embutidas diretamente no caminho da rota da URL para identificar um recurso específico (ex: `/usuarios/{id}`).
* **Headers:** Metadados e cabeçalhos da requisição enviados para controle de contexto, autorização/tokens e tipo de conteúdo.


# Parâmetros – Body

**O que é o Body (Corpo da Requisição)?**
O **body** é a parte interna de uma requisição HTTP utilizada para transportar conjuntos complexos ou grandes volumes de dados de maneira privada do cliente para o servidor. Diferente das variáveis de URL, os dados no corpo não ficam expostos no endereço de navegação.

---

### Principais Características

* **Uso Principal:** Utilizado para **criar** ou **atualizar** recursos.
* **Verbos Associados:** Presente em requisições dos tipos `POST`, `PUT` e `PATCH` (raramente utilizado em requisições `GET` ou `DELETE`).
* **Formatos Aceitos:** O formato mais comum em APIs REST é o **JSON**, mas também pode transportar formulários (`x-www-form-urlencoded`), arquivos/mídias (`multipart/form-data`) ou dados em formato XML.

# Parâmetros – Route (Path)

**O que são Parâmetros de Rota (Route/Path Params)?**
Os **parâmetros de rota** fazem parte do próprio endereço URL da aplicação. Eles funcionam como valores dinâmicos incorporados no caminho do endpoint e são essenciais para **identificar de forma única um recurso específico** no banco de dados.

---

### Principais Características

* **Uso Principal:** Apontar um recurso individual direto na hierarquia da rota.
* **Valores Típicos:** Geralmente representam identificadores únicos, como IDs (numéricos ou UUIDs) e *usernames*.
* **Verbos Associados:** Bastante comuns em requisições `GET` (buscar um por ID), `PUT`/`PATCH` (atualizar um registro específico) e `DELETE` (deletar um registro específico).

---

### Exemplos de Estrutura

* `/clientes/42` (busca o cliente com ID 42)
* `/clientes/my_username` (busca o cliente com o nome de usuário especificado)
* `/clientes/42/produtos` (acessa todos os produtos vinculados ao cliente 42)
* `GET https://api.com/books/44a7926b-1e69-41a2-8d70-3bcb1a23cb1a` (exemplo utilizando UUID no endpoint)

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
