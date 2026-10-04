import { useState } from "react"

/*EXEMPLO 3 */
interface ITodo {
    id: number,
    title: string
}

export function App() {

    const [ todos, setTodos ] = useState<ITodo[]>([]);
    
    function handleAddTodo() {
        setTodos((prevState) => [
            ...prevState,
            {
                id: prevState.length + 1,
                title: `Tarefa ${prevState.length + 1}`
            }
        ]);
    }

    function handleRemoveTodo(id: number) {
        setTodos((prevState) => prevState.filter(todo => todo.id !== id))
    }

    return (
        <>
            <h1>Lista de tarefas</h1>

            <button onClick={handleAddTodo}>Adicionar tarefa</button>

            <ul>
                { todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => handleRemoveTodo(todo.id)}>Remover</button>
                    </li>
                    
                )) }
            </ul>
        </>
    );
}




/*EXEMPLO 2 */
// export function App () {

//     const [ text, setText ] = useState("");

//     function handleChange(event: ChangeEvent<HTMLInputElement>) {
//         setText(event.target.value);
//     }
//     return (
//         <>
//             <input type="text" value={text} onChange={handleChange} />

//             <p>Você digitou: {text}</p>
//             <button onClick={() => setText("Hello")}>Trocar</button>
//         </>
//     )
    
// }
/*EXEMPLO 1 */
// export function App() {


//   const [contador, setContador] = useState(0);

//   function handleClick() {
//     setContador(contador + 1);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>Você clicou {contador} vezes.</button>
//     </>
//   )
// }

// export default App
