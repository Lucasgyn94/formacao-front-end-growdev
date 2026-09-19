# Axios no Node.js

## 1. O que é o Axios?

O **Axios** é uma biblioteca JavaScript utilizada para realizar **requisições HTTP**.

Em outras palavras, o Axios permite que uma aplicação se comunique com servidores, APIs e outros serviços através da internet utilizando métodos HTTP como:

- `GET`
- `POST`
- `PUT`
- `PATCH`
- `DELETE`

Por exemplo, imagine que existe uma API disponível em:

```text
https://api.exemplo.com/usuarios
```

Nossa aplicação Node.js pode utilizar o Axios para fazer uma requisição para essa API e obter os usuários cadastrados.

Exemplo:

```javascript
import axios from "axios";

const response = await axios.get("https://api.exemplo.com/usuarios");

console.log(response.data);
```

O Axios realiza a requisição HTTP e disponibiliza a resposta recebida do servidor.

---

# 2. Para que serve o Axios?

O Axios é utilizado principalmente quando nossa aplicação precisa **consumir uma API** ou se comunicar com outro servidor.

Por exemplo:

```text
Aplicação Node.js
       |
       | GET /usuarios
       ↓
      API
       |
       | JSON
       ↓
Aplicação Node.js
```

A aplicação poderia receber:

```json
[
    {
        "id": 1,
        "nome": "João"
    },
    {
        "id": 2,
        "nome": "Maria"
    }
]
```

O Axios fica responsável por realizar essa comunicação.

---

# 3. Axios e Promises

Um ponto muito importante é que os métodos do Axios são **assíncronos**.

Uma chamada como:

```javascript
axios.get("https://api.exemplo.com/usuarios");
```

não retorna imediatamente os usuários.

Ela retorna uma **Promise**.

Portanto, podemos trabalhar com Axios utilizando:

```text
.then()
.catch()
```

ou:

```text
async
await
try
catch
```

Atualmente, é muito comum utilizar Axios juntamente com `async/await`.

---

# 4. Criando um projeto Node.js

Primeiro, podemos criar uma pasta para o projeto:

```bash
mkdir projeto-axios
```

Entramos nela:

```bash
cd projeto-axios
```

Agora inicializamos um projeto Node.js:

```bash
npm init -y
```

Isso criará o arquivo:

```text
package.json
```

A estrutura inicialmente ficará parecida com:

```text
projeto-axios/
└── package.json
```

---

# 5. Instalando o Axios

Dentro da pasta do projeto, execute:

```bash
npm install axios
```

Também podemos utilizar a forma abreviada:

```bash
npm i axios
```

Depois da instalação, teremos:

```text
projeto-axios/
├── node_modules/
├── package-lock.json
└── package.json
```

O Axios também aparecerá nas dependências do `package.json`:

```json
{
    "dependencies": {
        "axios": "..."
    }
}
```

O número da versão dependerá da versão instalada no momento.

---

# 6. Importando o Axios

Existem duas formas comuns de trabalhar com módulos no Node.js:

- ES Modules (`import`)
- CommonJS (`require`)

## ES Modules

Para utilizar:

```javascript
import axios from "axios";
```

podemos configurar no `package.json`:

```json
{
    "type": "module"
}
```

Por exemplo:

```json
{
    "name": "projeto-axios",
    "version": "1.0.0",
    "type": "module",
    "dependencies": {
        "axios": "..."
    }
}
```

Então podemos importar o Axios:

```javascript
import axios from "axios";
```

Essa será a sintaxe utilizada nos próximos exemplos.

---

# 7. Fazendo uma requisição GET

O método HTTP `GET` é utilizado para **buscar dados**.

Exemplo:

```javascript
import axios from "axios";

async function buscarUsuarios() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );

    console.log(response.data);
}

buscarUsuarios();
```

Nesse exemplo:

```javascript
axios.get(...)
```

realiza uma requisição HTTP utilizando o método `GET`.

Como o Axios retorna uma Promise, utilizamos:

```javascript
await axios.get(...)
```

para aguardar a resposta.

---

# 8. Entendendo o objeto `response`

Quando fazemos:

```javascript
const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
);
```

o Axios não coloca somente os dados dentro de `response`.

Ele retorna um objeto contendo várias informações sobre a resposta HTTP.

Simplificadamente:

```javascript
{
    data: ...,
    status: 200,
    statusText: "OK",
    headers: ...,
    config: ...
}
```

Algumas propriedades importantes são:

```text
response
├── data
├── status
├── statusText
├── headers
└── config
```

---

# 9. `response.data`

Na maioria das vezes, estamos interessados principalmente em:

```javascript
response.data
```

Essa propriedade contém os **dados enviados pelo servidor**.

Por exemplo:

```javascript
const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
);

console.log(response.data);
```

Se a API retornar:

```json
[
    {
        "id": 1,
        "name": "Leanne Graham"
    },
    {
        "id": 2,
        "name": "Ervin Howell"
    }
]
```

esses dados estarão disponíveis em:

```javascript
response.data
```

---

# 10. Utilizando `try...catch`

Como estamos realizando uma operação que pode falhar, é recomendado utilizar:

```javascript
try {
    // operação
} catch (error) {
    // tratamento do erro
}
```

Exemplo:

```javascript
import axios from "axios";

async function buscarUsuarios() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        console.log(response.data);
    } catch (error) {
        console.log("Erro ao buscar usuários.");
    }
}

buscarUsuarios();
```

O fluxo será:

```text
buscarUsuarios()
       |
       ↓
     try
       |
       ↓
axios.get(...)
       |
   ┌───┴───┐
   ↓       ↓
Sucesso   Erro
   |       |
   ↓       ↓
response  catch
```

---

# 11. Utilizando Axios com `.then()` e `.catch()`

Também podemos trabalhar diretamente com a Promise retornada pelo Axios.

Exemplo:

```javascript
import axios from "axios";

axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log("Erro ao buscar usuários.");
    });
```

O funcionamento é:

```text
axios.get()
     |
     ↓
  Promise
   /    \
  ↓      ↓
.then() .catch()
sucesso   erro
```

---

# 12. Axios com `async/await`

O mesmo código pode ser escrito utilizando `async/await`:

```javascript
import axios from "axios";

async function buscarUsuarios() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        console.log(response.data);
    } catch (error) {
        console.log("Erro ao buscar usuários.");
    }
}

buscarUsuarios();
```

Essa abordagem normalmente deixa o código mais fácil de ler.

---

# 13. Fazendo uma requisição POST

O método `POST` normalmente é utilizado para **enviar/criar dados**.

Por exemplo:

```javascript
import axios from "axios";

async function criarUsuario() {
    try {
        const response = await axios.post(
            "https://jsonplaceholder.typicode.com/users",
            {
                name: "João",
                email: "joao@email.com"
            }
        );

        console.log(response.data);
    } catch (error) {
        console.log("Erro ao criar usuário.");
    }
}

criarUsuario();
```

Observe:

```javascript
axios.post(URL, dados)
```

Temos:

```text
axios.post(
    URL,
    dados enviados
)
```

No exemplo:

```javascript
axios.post(
    "https://jsonplaceholder.typicode.com/users",
    {
        name: "João",
        email: "joao@email.com"
    }
);
```

O objeto:

```javascript
{
    name: "João",
    email: "joao@email.com"
}
```

será enviado no corpo (`body`) da requisição.

---

# 14. Fazendo uma requisição PUT

O método `PUT` geralmente é utilizado para **atualizar um recurso**.

Exemplo:

```javascript
import axios from "axios";

async function atualizarUsuario() {
    try {
        const response = await axios.put(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                name: "João Silva",
                email: "joao@email.com"
            }
        );

        console.log(response.data);
    } catch (error) {
        console.log("Erro ao atualizar usuário.");
    }
}

atualizarUsuario();
```

A estrutura básica é:

```javascript
axios.put(URL, dados);
```

---

# 15. Fazendo uma requisição PATCH

O método `PATCH` também é utilizado para atualizações, geralmente quando queremos modificar **apenas parte de um recurso**.

Exemplo:

```javascript
import axios from "axios";

async function atualizarEmail() {
    try {
        const response = await axios.patch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                email: "novoemail@email.com"
            }
        );

        console.log(response.data);
    } catch (error) {
        console.log("Erro ao atualizar usuário.");
    }
}

atualizarEmail();
```

Estrutura:

```javascript
axios.patch(URL, dados);
```

---

# 16. Fazendo uma requisição DELETE

O método `DELETE` é utilizado para excluir um recurso.

Exemplo:

```javascript
import axios from "axios";

async function excluirUsuario() {
    try {
        const response = await axios.delete(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        console.log(response.status);
    } catch (error) {
        console.log("Erro ao excluir usuário.");
    }
}

excluirUsuario();
```

Estrutura:

```javascript
axios.delete(URL);
```

---

# 17. Resumo dos principais métodos

| Operação | Método HTTP | Axios |
|---|---|---|
| Buscar dados | GET | `axios.get()` |
| Criar dados | POST | `axios.post()` |
| Atualizar dados | PUT | `axios.put()` |
| Atualizar parcialmente | PATCH | `axios.patch()` |
| Excluir dados | DELETE | `axios.delete()` |

Exemplos:

```javascript
axios.get(url);

axios.post(url, dados);

axios.put(url, dados);

axios.patch(url, dados);

axios.delete(url);
```

---

# 18. Enviando parâmetros pela URL

Muitas APIs permitem enviar parâmetros através da URL.

Por exemplo:

```text
/posts?userId=1
```

Com Axios, podemos fazer:

```javascript
const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    {
        params: {
            userId: 1
        }
    }
);
```

O Axios transformará:

```javascript
params: {
    userId: 1
}
```

em algo equivalente a:

```text
?userId=1
```

Portanto:

```javascript
axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    {
        params: {
            userId: 1
        }
    }
);
```

resultará em uma requisição para:

```text
https://jsonplaceholder.typicode.com/posts?userId=1
```

---

# 19. Enviando headers

Também podemos enviar **headers HTTP**.

Por exemplo:

```javascript
const response = await axios.get(
    "https://api.exemplo.com/usuarios",
    {
        headers: {
            Authorization: "Bearer TOKEN"
        }
    }
);
```

Isso é muito comum em APIs que utilizam autenticação.

Exemplo:

```text
Authorization: Bearer TOKEN
```

---

# 20. Enviando dados e headers juntos

Em uma requisição `POST`, podemos enviar:

```text
URL
dados
configurações
```

Exemplo:

```javascript
const response = await axios.post(
    "https://api.exemplo.com/usuarios",
    {
        name: "João",
        email: "joao@email.com"
    },
    {
        headers: {
            Authorization: "Bearer TOKEN"
        }
    }
);
```

A estrutura é:

```javascript
axios.post(
    url,
    dados,
    config
);
```

Ou seja:

```text
axios.post()
     |
     ├── URL
     |
     ├── Body
     |
     └── Config
          |
          └── headers
```

---

# 21. Tratando erros do Axios

O Axios fornece algumas informações úteis quando ocorre um erro.

Exemplo:

```javascript
try {
    const response = await axios.get(
        "https://api.exemplo.com/usuarios"
    );

    console.log(response.data);
} catch (error) {
    console.log(error);
}
```

Podemos verificar se o erro foi gerado pelo Axios:

```javascript
if (axios.isAxiosError(error)) {
    console.log("Erro do Axios");
}
```

Exemplo:

```javascript
try {
    const response = await axios.get(
        "https://api.exemplo.com/usuarios"
    );

    console.log(response.data);
} catch (error) {
    if (axios.isAxiosError(error)) {
        console.log("Erro na requisição:", error.message);
    } else {
        console.log("Outro erro:", error);
    }
}
```

---

# 22. `error.response`

Quando o servidor respondeu à requisição, mas retornou um status de erro, podemos acessar:

```javascript
error.response
```

Por exemplo:

```javascript
catch (error) {
    if (axios.isAxiosError(error)) {
        console.log(error.response?.status);
        console.log(error.response?.data);
    }
}
```

Imagine que a API retorne:

```text
404 Not Found
```

Podemos acessar:

```javascript
error.response.status
```

que poderá conter:

```text
404
```

E:

```javascript
error.response.data
```

poderá conter a mensagem enviada pela API.

---

# 23. Criando uma instância do Axios

Em projetos maiores, repetir a URL base não é interessante.

Imagine:

```javascript
axios.get("https://api.exemplo.com/usuarios");

axios.get("https://api.exemplo.com/produtos");

axios.get("https://api.exemplo.com/pedidos");
```

Estamos repetindo:

```text
https://api.exemplo.com
```

Podemos criar uma instância configurada do Axios.

Por exemplo:

```javascript
import axios from "axios";

const api = axios.create({
    baseURL: "https://api.exemplo.com"
});

export default api;
```

Podemos salvar isso em:

```text
src/services/api.js
```

---

# 24. Utilizando a instância criada

Estrutura:

```text
projeto/
├── src/
│   ├── services/
│   │   └── api.js
│   │
│   └── index.js
│
├── package.json
└── package-lock.json
```

Arquivo:

```text
src/services/api.js
```

```javascript
import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export default api;
```

Agora no `index.js`:

```javascript
import api from "./services/api.js";

async function buscarUsuarios() {
    try {
        const response = await api.get("/users");

        console.log(response.data);
    } catch (error) {
        console.log("Erro ao buscar usuários.");
    }
}

buscarUsuarios();
```

Não precisamos mais escrever:

```javascript
axios.get(
    "https://jsonplaceholder.typicode.com/users"
);
```

Podemos simplesmente utilizar:

```javascript
api.get("/users");
```

porque nossa instância já possui:

```javascript
baseURL: "https://jsonplaceholder.typicode.com"
```

Então:

```text
baseURL
https://jsonplaceholder.typicode.com

+

endpoint
/users

=

https://jsonplaceholder.typicode.com/users
```

---

# 25. Configurando headers na instância

Também podemos definir configurações padrão:

```javascript
import axios from "axios";

const api = axios.create({
    baseURL: "https://api.exemplo.com",
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;
```

Dessa forma, essas configurações podem ser reutilizadas nas requisições feitas através de:

```javascript
api
```

---

# 26. Axios com variáveis de ambiente

Em um projeto real, geralmente não queremos espalhar URLs e configurações pelo código.

Podemos utilizar variáveis de ambiente.

Por exemplo:

```env
API_URL=https://api.exemplo.com
```

No Node.js, dependendo da configuração e da versão utilizada, podemos carregar essa variável e utilizar:

```javascript
const api = axios.create({
    baseURL: process.env.API_URL
});
```

Isso deixa nossa aplicação mais fácil de configurar para diferentes ambientes.

Por exemplo:

```text
Desenvolvimento
     ↓
http://localhost:3000

Produção
     ↓
https://api.meusistema.com
```

---

# 27. Exemplo completo

Considere:

```text
projeto-axios/
├── src/
│   ├── services/
│   │   └── api.js
│   │
│   └── index.js
│
├── package.json
└── package-lock.json
```

## `package.json`

```json
{
    "name": "projeto-axios",
    "version": "1.0.0",
    "type": "module",
    "scripts": {
        "start": "node src/index.js"
    },
    "dependencies": {
        "axios": "..."
    }
}
```

## `src/services/api.js`

```javascript
import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export default api;
```

## `src/index.js`

```javascript
import api from "./services/api.js";

async function buscarUsuarios() {
    try {
        const response = await api.get("/users");

        const usuarios = response.data;

        console.log(usuarios);
    } catch (error) {
        console.log("Não foi possível buscar os usuários.");

        if (error.response) {
            console.log("Status:", error.response.status);
        }
    }
}

buscarUsuarios();
```

Execute:

```bash
npm start
```

O fluxo será:

```text
index.js
   |
   ↓
buscarUsuarios()
   |
   ↓
api.get("/users")
   |
   ↓
Axios
   |
   ↓
GET https://jsonplaceholder.typicode.com/users
   |
   ↓
Servidor/API
   |
   ↓
Resposta HTTP
   |
   ↓
Axios
   |
   ↓
response
   |
   ↓
response.data
   |
   ↓
usuarios
```

---

# 28. Relação entre Axios, Promise e async/await

Axios, Promises e `async/await` estão diretamente relacionados.

Quando fazemos:

```javascript
axios.get("/users");
```

o Axios retorna uma:

```text
Promise
```

Por isso podemos utilizar:

```javascript
axios.get("/users")
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
```

Ou utilizar:

```javascript
async function buscarUsuarios() {
    try {
        const response = await axios.get("/users");

        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}
```

Podemos visualizar assim:

```text
Axios
  |
  ↓
axios.get()
  |
  ↓
Promise
  |
  ├───────────────┐
  ↓               ↓
.then()        async/await
.catch()       try/catch
```

O `async/await` **não substitui o Axios**.

Eles possuem responsabilidades diferentes:

```text
Axios
↓
realiza a requisição HTTP

Promise
↓
representa o resultado futuro da operação

async/await
↓
permite trabalhar com a Promise de forma mais legível
```

---

# 29. Axios não é uma API

É importante não confundir os conceitos.

O Axios **não é uma API**.

Axios é uma biblioteca utilizada para **fazer requisições para APIs**.

Por exemplo:

```text
Seu projeto Node.js
       |
       ↓
     Axios
       |
       ↓
Requisição HTTP
       |
       ↓
      API
       |
       ↓
Banco de dados
```

Depois:

```text
Banco de dados
       |
       ↓
      API
       |
       ↓
Resposta HTTP
       |
       ↓
     Axios
       |
       ↓
Seu projeto Node.js
```

---

# 30. Axios x Fetch

O JavaScript também possui a API `fetch()` para realizar requisições HTTP.

Exemplo com `fetch`:

```javascript
const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
);

const data = await response.json();

console.log(data);
```

Com Axios:

```javascript
const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
);

console.log(response.data);
```

Uma diferença perceptível é que o Axios já disponibiliza o conteúdo JSON normalmente através de:

```javascript
response.data
```

Enquanto com `fetch` frequentemente fazemos:

```javascript
const data = await response.json();
```

O Node.js moderno já possui `fetch` nativamente, então **Axios não é obrigatório**. Ele continua sendo útil por oferecer uma API conveniente e diversos recursos para configuração e tratamento de requisições.

---

# 31. Resumo

O **Axios** é uma biblioteca JavaScript utilizada para realizar requisições HTTP.

Instalação:

```bash
npm install axios
```

Importação:

```javascript
import axios from "axios";
```

Principais métodos:

```javascript
axios.get(url);

axios.post(url, dados);

axios.put(url, dados);

axios.patch(url, dados);

axios.delete(url);
```

Como os métodos do Axios retornam Promises, podemos utilizar:

```javascript
.then()
.catch()
```

ou:

```javascript
async
await
try
catch
```

Exemplo recomendado:

```javascript
import axios from "axios";

async function buscarDados() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        console.log(response.data);
    } catch (error) {
        console.log("Erro na requisição:", error.message);
    }
}

buscarDados();
```

Em projetos maiores, é comum criar uma instância:

```javascript
const api = axios.create({
    baseURL: "https://api.exemplo.com"
});
```

e utilizá-la:

```javascript
const response = await api.get("/usuarios");
```

A ideia central pode ser resumida como:

```text
Aplicação Node.js
       |
       ↓
     Axios
       |
       ↓
Requisição HTTP
       |
       ↓
      API
       |
       ↓
Resposta HTTP
       |
       ↓
     Axios
       |
       ↓
response.data
       |
       ↓
Aplicação
```
