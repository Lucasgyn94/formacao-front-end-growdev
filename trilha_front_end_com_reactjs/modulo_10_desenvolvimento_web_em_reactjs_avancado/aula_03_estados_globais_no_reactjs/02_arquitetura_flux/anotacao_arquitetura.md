# Arquitetura Flux

## 1. O que é Flux?

Flux é uma arquitetura de gerenciamento de estado desenvolvida pelo Facebook (atualmente Meta) para organizar o fluxo de dados em aplicações JavaScript, especialmente aplicações React.

Seu principal objetivo é tornar o fluxo de atualização de dados mais previsível e organizado.

Diferentemente de arquiteturas tradicionais que podem permitir fluxos de dados em várias direções, o Flux trabalha com um **fluxo unidirecional de dados**.

Isso significa que as informações seguem uma sequência definida, facilitando o entendimento, a manutenção e a identificação de problemas na aplicação.

## 2. Principais objetivos do Flux

- Organizar o gerenciamento de estados da aplicação.
- Evitar fluxos de dados difíceis de acompanhar.
- Centralizar a lógica de atualização dos estados.
- Facilitar a comunicação entre diferentes componentes.
- Tornar as alterações de estado mais previsíveis.

## 3. Principais elementos da arquitetura Flux

A arquitetura Flux é composta por quatro elementos principais:

### 3.1. Actions

Actions representam as ações ou eventos que acontecem na aplicação.

Elas são responsáveis por transportar informações que indicam o que deve ser realizado.

Normalmente, uma Action possui:

- `type`: identifica o tipo da ação.
- `payload`: transporta os dados necessários para executar a ação.

Exemplo:

```javascript
{
  type: "ADICIONAR_PRODUTO",
  payload: {
    id: 1,
    nome: "Notebook"
  }
}
```

### 3.2. Dispatcher

O Dispatcher é responsável por receber as Actions e distribuí-las para os Stores registrados.

Ele funciona como um intermediário entre as Actions e os Stores.

Sua responsabilidade é garantir que as ações sejam encaminhadas corretamente.

### 3.3. Stores

Stores são responsáveis por armazenar os dados e a lógica relacionada ao estado da aplicação.

Eles recebem as Actions encaminhadas pelo Dispatcher e determinam como os dados devem ser atualizados.

Uma aplicação pode possuir diferentes Stores, cada uma responsável por uma parte específica dos dados.

Exemplo:

- UserStore: armazena informações dos usuários.
- ProductStore: armazena informações dos produtos.
- CartStore: armazena informações do carrinho de compras.

### 3.4. Views

Views representam a interface visual da aplicação.

No contexto do React, são os componentes responsáveis por apresentar os dados ao usuário.

Quando uma Store é atualizada, as Views interessadas nesses dados recebem a notificação e podem atualizar a interface.

## 4. Como funciona o fluxo do Flux?

O Flux trabalha com um fluxo unidirecional, seguindo uma sequência definida:

1. O usuário realiza uma interação na interface.
2. A View dispara uma Action.
3. O Dispatcher recebe a Action.
4. O Dispatcher encaminha a Action para as Stores registradas.
5. As Stores processam a Action e atualizam seus estados.
6. As Views são notificadas sobre as alterações.
7. A interface é atualizada com os novos dados.

### Representação do fluxo

```text
          Actions
             |
             v
         Dispatcher
             |
             v
           Stores
             |
             v
           Views
             |
             |
             +----------+
                        |
                        v
                     Actions
```

Esse ciclo garante que o fluxo de informações siga uma direção definida.

## 5. Flux e React

Flux foi desenvolvido para trabalhar com aplicações React, ajudando a organizar o gerenciamento de estados compartilhados entre componentes.

O React fica responsável pela construção da interface, enquanto a arquitetura Flux organiza como os dados são atualizados e disponibilizados para essa interface.

É importante entender que React e Flux possuem responsabilidades diferentes:

- **React:** construção e atualização da interface.
- **Flux:** organização do fluxo de dados e gerenciamento dos estados.

## 6. Diferença entre Flux e Redux

Redux foi inspirado na arquitetura Flux, mas apresenta algumas diferenças importantes.

| Característica | Flux | Redux |
|---|---|---|
| Store | Pode possuir várias Stores. | Geralmente utiliza uma Store centralizada. |
| Dispatcher | Possui um Dispatcher central. | Não possui Dispatcher separado. |
| Reducers | Não são obrigatórios. | Utiliza Reducers para atualizar o estado. |
| Estado | Gerenciado pelas Stores. | Centralizado na Store. |
| Fluxo de dados | Unidirecional. | Unidirecional. |
| Actions | Representam eventos e ações. | Descrevem as alterações solicitadas. |

### Principal diferença

No Flux, o Dispatcher recebe as Actions e as encaminha para as Stores.

No Redux, o Dispatch envia uma Action para a Store, que utiliza os Reducers para determinar o próximo estado.

O Redux simplifica alguns conceitos presentes na arquitetura Flux.

## 7. Vantagens da arquitetura Flux

- **Previsibilidade:** o fluxo unidirecional facilita acompanhar as alterações dos dados.
- **Organização:** separa as responsabilidades entre Actions, Dispatcher, Stores e Views.
- **Manutenção:** facilita identificar onde determinada alteração acontece.
- **Escalabilidade:** ajuda a organizar aplicações com muitos componentes e estados compartilhados.
- **Depuração:** torna mais fácil acompanhar o caminho percorrido pelos dados.

## 8. Resumo dos principais conceitos

| Elemento | Responsabilidade |
|---|---|
| Actions | Representam as ações realizadas na aplicação. |
| Dispatcher | Recebe e distribui as Actions. |
| Stores | Armazenam os dados e controlam as atualizações do estado. |
| Views | Apresentam os dados e representam a interface. |

## 9. Conclusão

Flux é uma arquitetura que organiza o gerenciamento de estados por meio de um fluxo unidirecional de dados.

Seus quatro elementos fundamentais são Actions, Dispatcher, Stores e Views.

Redux surgiu inspirado nessa arquitetura, simplificando seu funcionamento e adotando uma Store centralizada e Reducers para controlar as atualizações do estado.

Compreender a arquitetura Flux facilita o entendimento de como o Redux funciona e por que ele utiliza um fluxo de dados unidirecional.

---

**Observação de estudo:** Guarde principalmente esta diferença: Flux possui Dispatcher e pode trabalhar com várias Stores; Redux utiliza uma Store centralizada e não possui um Dispatcher separado.
