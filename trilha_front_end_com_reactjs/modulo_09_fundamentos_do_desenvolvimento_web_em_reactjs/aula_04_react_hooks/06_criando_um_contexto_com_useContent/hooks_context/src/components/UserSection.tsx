import { useCounter } from "../hooks/useCounter";
import { CounterButton } from "./CounterButton"


export function UserSection() {
    const {  count } = useCounter();

    return (
        <>
            <h3>Seção do usuário</h3>
            <p>O valor atual do contador é: {count}</p>

            <CounterButton />
        </>
    );
}