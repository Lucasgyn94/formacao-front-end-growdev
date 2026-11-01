import { ThemeProvider } from "@emotion/react";
import themes  from './themes';
import { Header } from "./components/Header";
import { FormComponent } from "./components/FormComponent";

export function App() {
    return (
        <ThemeProvider theme={themes.dark}>

            <Header />
            <FormComponent />

        </ThemeProvider>
    );
}