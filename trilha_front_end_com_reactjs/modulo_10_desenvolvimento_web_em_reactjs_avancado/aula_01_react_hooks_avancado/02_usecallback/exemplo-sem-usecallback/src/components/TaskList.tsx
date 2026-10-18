import { useState } from "react";

interface TaskListProps {
    tasks: string[];
    onAddTask: (task: string) => void;
}
export function TaskList({ tasks, onAddTask }: TaskListProps) {
    const [newTask, setNewTask] = useState("");

    console.log("🎯 TaskList re-renderizou!");

    return (
        <div>
            <h3>Lista de Tarefas</h3>

            <input 
                type="text" 
                placeholder="Nova Tarefa"
                value={newTask}
                onChange={(event) => setNewTask(event.target.value)}
            />

            <button
                onClick={() => {
                    onAddTask(newTask);
                    setNewTask("");
                }}
            >
                Adicionar Tarefa
            </button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
    
}