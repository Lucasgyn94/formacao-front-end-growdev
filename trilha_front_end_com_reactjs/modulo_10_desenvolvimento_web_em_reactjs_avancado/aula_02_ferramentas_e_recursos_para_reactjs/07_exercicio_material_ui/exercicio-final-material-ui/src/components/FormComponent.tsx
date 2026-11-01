import { Button, Container, Grid, TextField, Typography } from "@mui/material";

export function FormComponent() {
    return (
        <Container>
            <form>
                <Typography variant="h6" gutterBottom>
                    Fazer Login
                </Typography>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                        <TextField fullWidth label="E-mail" />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField fullWidth label="Senha" />
                    </Grid>
                    <Grid>
                        <Button
                            type="submit"
                            variant="contained"
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}