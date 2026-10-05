import { CounterButton } from "./CounterButton"

interface UserSectionProps {
    count: number,
    increment: () => void;
}

export function UserSection({ count, increment }: UserSectionProps) {
    return (
        <>
            <h3>Seção do usuário</h3>
            <p>O valor atual do contador é: {count}</p>

            <CounterButton increment={increment} />
        </>
    );
}