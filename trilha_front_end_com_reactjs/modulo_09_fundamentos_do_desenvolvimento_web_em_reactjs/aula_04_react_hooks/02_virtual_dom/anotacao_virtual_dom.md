# React Hooks — Virtual DOM

O **Virtual DOM** é uma representação leve da interface que o React mantém em memória. Ele não é um Hook, mas ajuda a entender como o React atualiza a tela quando usamos Hooks como `useState`.

## Como funciona

1. O componente renderiza e o React cria uma representação da interface.
2. Quando o estado ou as propriedades mudam, o componente renderiza novamente.
3. O React compara a nova representação com a anterior.
4. O React atualiza no DOM real somente as partes necessárias.

Esse processo de comparação e atualização é chamado de **reconciliação**.

## Relação com Hooks

Quando chamamos uma função como `setContador` para atualizar o estado, o React agenda uma nova renderização. A mudança no estado pode alterar a interface, e o React calcula quais atualizações são necessárias.

```jsx
function Contador() {
  const [valor, setValor] = useState(0);

  return (
    <button onClick={() => setValor(valor + 1)}>
      Cliques: {valor}
    </button>
  );
}
