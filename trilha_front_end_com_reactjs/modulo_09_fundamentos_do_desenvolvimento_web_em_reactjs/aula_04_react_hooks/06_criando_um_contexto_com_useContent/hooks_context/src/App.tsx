import { Dashboard } from "./components/Dashboard";
import { CounterProvider } from "./contexts/CounterContext";

export function App() {

    return (
        <CounterProvider>
            <h1>Aplicação com prop drilling</h1>
            {/* <Dashboard count={count} increment={handleIncrement} /> */}
            <Dashboard />
        </CounterProvider>
    );
}