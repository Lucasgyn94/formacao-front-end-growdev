# Parâmetros – Headers

**O que são Headers (Cabeçalhos HTTP)?**
Os **headers** são parâmetros incluídos no cabeçalho das requisições e respostas HTTP para transmitir **metadados**. Eles servem para enviar dados de contexto sobre a comunicação entre o cliente e o servidor, como credenciais de segurança, preferências do cliente e o tipo de formato de dados trafegado.

---

### Principais Características

* **Invisíveis para o usuário:** Ficam contidos no cabeçalho do protocolo HTTP, sem poluir a URL ou o corpo principal (`body`).
* **Estrutura:** Seguem o formato de chave-valor (ex: `Chave: Valor`).
* **Aplicações:** Essenciais para autenticação, autorização, gerenciamento de sessão, controle de cache e negociação de conteúdo.

---

### Exemplos Comuns

* **`Authorization: Bearer <token>`**
  * Usado para autenticar e autorizar o usuário no sistema enviando um token de acesso (como um JWT).

* **`Content-Type: application/json`**
  * Informa ao servidor qual é o formato dos dados que estão sendo enviados no corpo (`body`) da requisição.

* **`Accept: application/json`**
  * Informa ao servidor qual formato de dados o cliente espera receber na resposta.


