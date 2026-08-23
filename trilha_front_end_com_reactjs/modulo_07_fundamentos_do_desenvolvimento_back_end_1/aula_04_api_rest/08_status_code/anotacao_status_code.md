# Status Code HTTP

**O que é um Status Code HTTP?**
Os **HTTP Status Codes** (Códigos de Status HTTP) são números de três dígitos emitidos pelo servidor em resposta a uma requisição feita pelo cliente. Eles informam de forma padronizada se a solicitação foi bem-sucedida, se houve algum erro de envio/autenticação ou se ocorreu uma falha interna na aplicação.

Toda resposta de uma requisição HTTP **obrigatoriamente** retorna juntamente com um Status Code.

---

### Categorias e Códigos Principais

* **1XX: Informational (Informativo)**
  * Indica que a requisição foi recebida e o processo ainda está em andamento.

* **2XX: Success (Sucesso)**
  * Indica que a ação solicitada foi recebida, compreendida e aceita com êxito.
  * `200 OK / SUCCESS`: Requisição processada com sucesso (comum em leituras e atualizações).
  * `201 CREATED`: Novo recurso criado com sucesso (comum em cadastros via POST).
  * `204 NO CONTENT`: Requisição bem-sucedida, mas não há conteúdo para retornar (comum em deleções).

* **3XX: Redirection (Redirecionamento)**
  * Indica que o cliente precisa realizar ações adicionais para concluir a requisição.
  * `301 MOVED PERMANENTLY`: O recurso mudou permanentemente de URL.
  * `302 MOVED / FOUND`: O recurso foi movido temporariamente.

* **4XX: Client Error (Erro do Cliente)**
  * Indica que a requisição contém sintaxe incorreta ou não pode ser processada por falha do lado do cliente.
  * `400 BAD REQUEST`: Requisição malformatada ou com dados inválidos.
  * `401 UNAUTHORIZED`: Requer autenticação/login prévio.
  * `404 NOT FOUND`: O recurso ou rota solicitada não foi encontrado no servidor.

* **5XX: Server Error (Erro do Servidor)**
  * Indica que o servidor falhou ao tentar processar uma requisição válida.
  * `500 INTERNAL SERVER ERROR`: Ocorreu um erro genérico não tratado no servidor.
