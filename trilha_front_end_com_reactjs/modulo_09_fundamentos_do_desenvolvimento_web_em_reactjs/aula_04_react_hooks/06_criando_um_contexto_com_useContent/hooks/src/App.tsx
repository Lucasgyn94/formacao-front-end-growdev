import { useState } from "react";
import { Dashboard } from "./components/Dashboard";

export function App() {

    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount((prevState) => prevState + 1);
    }

    return (
        <>
            <h1>Aplicação com prop drilling</h1>
            <Dashboard count={count} increment={handleIncrement} />
        </>
    );
}