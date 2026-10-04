import { useRef, type FormEvent } from "react";


// Exemplo formulário não controlado com useRef
export function App() {

    const inputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const typedName = inputRef.current?.value;

        console.log("Nome digitado: ", typedName);
        
    }    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Nome:</label>
                <input type="text" ref={inputRef} />
            </div>

            {/* <p>{inputRef.current?.value}</p> */}
            <button>Enviar</button>
        </form>
    
    );
}



// Exemplo formulário controlado
// export function App() {

//     const [name, setName] = useState('');

//     function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
//         setName(event.target.value);
//     }

    
//     return (
//         <>
//             <input type="text" value={name} onChange={handleInputChange} />
//             <p>Seu nome é: {name}</p>
//         </>
//     )
// }