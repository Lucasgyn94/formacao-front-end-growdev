interface CounterButtonProps{
    increment: () => void;
}

export function CounterButton({ increment }: CounterButtonProps) {
    return <button onClick={increment}>Incrementar Contador</button>
}