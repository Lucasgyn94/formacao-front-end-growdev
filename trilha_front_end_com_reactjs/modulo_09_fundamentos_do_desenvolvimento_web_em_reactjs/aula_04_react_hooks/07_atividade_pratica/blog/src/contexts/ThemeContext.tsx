import { createContext, useState, type ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import themes from "../themes";

interface IThemeContext {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export function ThemeProviderComponent({children}: ThemeProviderProps) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    function toggleTheme() {
        setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
}
