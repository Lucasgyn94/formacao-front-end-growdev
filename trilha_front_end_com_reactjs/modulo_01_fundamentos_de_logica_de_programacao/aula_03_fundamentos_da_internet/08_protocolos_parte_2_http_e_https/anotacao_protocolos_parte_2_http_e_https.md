# PROTOCOLOS HTTP / HTTPS

## Protocolo HTTP
Navegador Web (Pessoa Usuária) -> Requisição (Request) -> Website(https://www.seusite) -> Requisição (Request) -> Servidor Web

Navegador Web (Pessoa Usuária) <- Resposta (Response) <- Website (https://www.seusite) <- Resposta(Response) <- Servidor Web

* __HTTP__ significa HyperText Transfer Protocol (Protocolo de Transferência de Hipertexto). 

* Podemos imaginá-lo como uma linguagem comum. Quando digitamos um endereço de site e damos [ENTER], o nosso navegador envia uma __mensagem__ (request) para um servidor pedindo para ver aquela página. O servidor responde (response) com o texto, imagens e códigos que formam o site.

## Protocolo HTTP - Outras Partes
### Método
* GET
* POST
* PUT
* DELETE

### Parâmetros
* Header
* Body
* Path

### Status
**1xx - Infomativo**
**2xx - Sucesso**
**3xx - Redirecionamento**
**4xx - Erro Cliente**
**5xx - Erro Servidor (Não Programado)**

## HTTPS
* **HTTPS** significa HyperText Transfer Protocol Secure (Protocolo de Transferência de Hipertexto Seguro).

* Ele faz exatamente a mesma coisa que o HTTP, mas com uma camada de segurança adicional chamada **SSL/TLS** (Secure Sockets Layer / Transport Layer Security).

  * Podemos fazer analogia do Envelope Lacrado (Carro-forte): Imagine que enviar dados via HTTPS é como enviar uma carta em um cofre indestrutível do qual apenas nós e o destinatário têm a chave.

    * Antes de enviar os dados, o nosso navegador e o servidor trocam "chaves" digitais para criar um código secreto (isso é a criptografia).

    * Se alguém interceptar os dados no meio do caminho, verá apenas um amontoado de caracteres sem sentido, impossíveis de ler.


