import { useMemo, useState } from "react"

function calcularFatorial(n: number): number {
    return n <= 1? 1 : n * calcularFatorial(n - 1);
}

export function App() {
    const [numero, setNumero] = useState(5);
    const [contador, setContador] = useState(0);

    const fatorial = useMemo(() => calcularFatorial(numero), [numero]);

    return (
        <>
            <h2>
                Fatorial de {numero}: {fatorial}
            </h2>
            <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
            <button onClick={() => setNumero(numero - 1)}>Diminuir</button>
            <button onClick={() => setContador(contador + 1)}>Contador</button>
        </>
    );
}

