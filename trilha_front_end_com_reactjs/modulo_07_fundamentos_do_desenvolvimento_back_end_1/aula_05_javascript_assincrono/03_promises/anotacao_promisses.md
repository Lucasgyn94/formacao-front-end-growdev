# Promises

Promises são um padrão de desenvolvimento que visa **representar a conclusão de operações assíncronas**.

Elas não eram nativas do JavaScript até o ES6, quando houve uma implementação oficial na linguagem.

Antes das Promises, a maioria das funções usavam callbacks.

# Promises

Essencialmente, uma promise é um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função.

Isto permite que métodos assíncronos retornem valores como métodos síncronos: ao invés do valor final, **o método assíncrono retorna uma promessa** ao valor em algum momento no futuro.

```text
             new Promise()
                 |
              resolve()
                 |
              reject()
             /        \
    Handle Error    Go to Next Action
```
# Estados

Uma promise pode ter os seguintes estados:

- **Pending:** Em andamento.

- **Fulfilled:** Concluída com sucesso.

- **Rejected:** Concluída com erro.

```text
                    State:
                   pending
                     |
                 New promise
                  /       \
                 /         \
                ↓           ↓
        State: fulfilled   State: rejected
              |                  |
       Resolved promise    Rejected promise
```
# Then...catch

No JavaScript, as Promises oferecem os métodos `.then()` e `.catch()` para gerenciar operações assíncronas.

Ambos são fundamentais para lidar com o resultado ou erros de uma Promise.

```text
                  PROMISE
                 /       \
                /         \
       Resolve (X1)     Reject (E1)
            |               |
            ↓               ↓
          .then           .catch
      OnFulfilled (X1)  OnRejected (E1)
            \               /
             \             /
              ↓           ↓
                .finally
```
# Async...await

O `async/await` foi introduzido no ES2017 (ES8) como uma forma de simplificar o uso de Promises e melhorar a legibilidade do código assíncrono.

Ele fornece uma sintaxe mais clara e intuitiva, semelhante à programação síncrona, enquanto ainda trabalha de maneira assíncrona.

### Utilizando `.then()` e `.catch()`

```javascript
function doWithThenCatch() {
    asyncFunction()
        .then((result) => {
            console.log("Async concluído.");
        })
        .catch((error) => {
            console.log("Async com erro.");
        });
}
```

### Utilizando `async/await`

```javascript
async function doWithAsyncAwait() {
    try {
        const result = await asyncFunction();
        console.log("Async concluído");
    } catch (error) {
        console.log("Async com erro.");
    }
}
```
