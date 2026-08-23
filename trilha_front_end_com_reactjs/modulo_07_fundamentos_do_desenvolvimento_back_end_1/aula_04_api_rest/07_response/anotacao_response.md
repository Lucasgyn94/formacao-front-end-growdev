# JSON (JavaScript Object Notation)

**O que é uma Response JSON?**
A **Response JSON** (resposta JSON) é o formato estruturado no qual o servidor envia os dados de volta para o cliente após receber uma requisição HTTP. 

Trata-se de um formato leve de troca de dados baseado em texto puro, estruturado em pares de **chave: valor** e **listas (arrays)**. Ele é legível tanto para humanos quanto para máquinas e se tornou o padrão universal de comunicação para APIs REST web.

* **Chaves:** Sempre escritas entre aspas duplas (`"user"`, `"name"`).
* **Valores:** Podem ser texto (`string`), número, booleano, array (`[]`) ou outro objeto (`{}`).

---

### Exemplo de Estrutura

```json
{
  "user": {
    "name": "Mentor Growdev",
    "email": "mentor@growdev.com.br",
    "techs": [
      "HTML",
      "CSS",
      "JS"
    ],
    "company": {
      "name": "Growdev",
      "website": "[https://growdev.com.br/](https://growdev.com.br/)"
    }
  }
}


