import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { FormComponent } from "./components/FormComponent";
import { Header } from "./components/Header";
import themes from "./themes";

import { useAppSelector } from "./store/hooks";

export function Root() {
    const themeMode = useAppSelector((state) => state.theme);

    return (
        <ThemeProvider theme={themes[themeMode]}>
            <CssBaseline />

            <Header />
            <FormComponent />
        </ThemeProvider>
    );
}