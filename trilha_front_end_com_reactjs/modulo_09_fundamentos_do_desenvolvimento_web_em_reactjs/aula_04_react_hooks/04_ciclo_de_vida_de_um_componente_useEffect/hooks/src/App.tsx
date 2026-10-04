import { useEffect, useState } from "react";

// CICLO DE VIDA - UNMOUNT - DESMONTANDO COMPONENTE
function Timer() {
    const [ seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval  = setInterval(() => {
            setSeconds(prevState => prevState + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log("Intervalo limpo na desmontagem");
            
        }
    }, []);
    return <p>Segundos: {seconds}</p>

}
export function App() {
    const [ showTimer, setShowTimer ] = useState(false);


    
    return (
        <>
            <button onClick={() => setShowTimer(!showTimer)}>
                {showTimer ? "Parar timer" : "Iniciar Timer"}
            </button>
            {showTimer && <Timer />}
        </>
    );
}

// CICLO DE VIDA - UPDATE
// export function App() {
//     const [ count, setCount ] = useState(0);

//     useEffect(() => {
//         console.log("Componente montado!");
        
//     }, [count])
    
//     return (
//         <>
//             <button onClick={() => setCount(count + 1)}>
//                 Você clicou {count} vezes.
//             </button>
//         </>
//     );
// }

// CICLO DE VIDA - MOUNT
// export function App() {
//     const [ count, setCount ] = useState(0);

//     useEffect(() => {
//         console.log("Componente montado!");
        
//     }, [])
    
//     return (
//         <>
//             <button onClick={() => setCount(count + 1)}>
//                 Você clicou {count} vezes.
//             </button>
//         </>
//     );
// }