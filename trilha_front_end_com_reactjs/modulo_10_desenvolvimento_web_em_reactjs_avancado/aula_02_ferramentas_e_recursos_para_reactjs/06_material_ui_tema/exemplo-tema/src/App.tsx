import { Button, Container, CssBaseline, Paper, ThemeProvider, Typography } from "@mui/material"
import { theme } from "./theme";
export function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            
            <Container
                
                maxWidth="sm"
                sx={{ 
                    marginTop: "50px",
                    textAlign: "center"
                }}
            >
                <Typography 
                    variant="h1" 
                    color="primary"
                >
                    {" "}
                    Teste de tema
                </Typography>

                <Typography
                    variant="h6"
                    color="secondary"
                >
                    Testando a personalização do tema ui
                </Typography>

                <Paper
                    sx={{ 
                        padding: "20px",
                        marginTop: "20px" 
                    }}
                >
                    <Typography variant="body1" color="textPrimary">
                        Este é um Paper com fundo personalizado
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{ 
                            marginTop: "20px",
                        }}
                    >
                        Botão primário
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                            marginLeft: "10px",
                            marginTop: "20px",
                        }}
                    >
                        Botão secundário
                    </Button>
                </Paper>

            </Container>

        </ThemeProvider>
    );
}