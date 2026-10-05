import { createContext, useState, type ReactNode } from "react";

interface ICountContext {
    count: number,
    increment: () => void
}

interface CounterProviderProps{
    children: ReactNode
}

export const CounterContext = createContext<ICountContext | undefined> (undefined)

export function CounterProvider({children}: CounterProviderProps) {
    const [count, setCount] = useState(0);

    function increment() {
        setCount((prevState) => prevState + 1);
    }

    return (
        <CounterContext.Provider value={{count, increment}}>
            {children}
        </CounterContext.Provider>
    )
}