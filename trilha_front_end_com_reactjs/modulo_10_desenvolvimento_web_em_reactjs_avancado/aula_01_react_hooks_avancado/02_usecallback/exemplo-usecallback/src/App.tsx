import { useCallback, useState } from "react"
import { TaskList } from "./components/TaskList";

export function App() {

    const [tarefas, setTarefas] = useState<string[]>([]);
    const [contador, setContador] = useState(0);

    const handleAdicionarTarefa = useCallback((novaTarefa: string) => {
        setTarefas((estadoAnterior) => [...estadoAnterior, novaTarefa]);
    }, []);

    return (
        <>
            <h1>Gerenciador de Tarefas</h1>

            <p>Contador: {contador}</p>
            <button onClick={() => {setContador(contador + 1)}}>Incrementar contador</button>

            <TaskList tasks={tarefas} onAddTask={handleAdicionarTarefa} />
            <p></p>
        </>
    )
}