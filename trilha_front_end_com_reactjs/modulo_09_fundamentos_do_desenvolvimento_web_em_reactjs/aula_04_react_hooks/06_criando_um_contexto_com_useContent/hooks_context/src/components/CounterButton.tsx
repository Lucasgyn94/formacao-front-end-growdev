import { useCounter } from "../hooks/useCounter"

export function CounterButton() {
    const {increment} = useCounter();
    return <button onClick={increment}>Incrementar Contador</button>
}