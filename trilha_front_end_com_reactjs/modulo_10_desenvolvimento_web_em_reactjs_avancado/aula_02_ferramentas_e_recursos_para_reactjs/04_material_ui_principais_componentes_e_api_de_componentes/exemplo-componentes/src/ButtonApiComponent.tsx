import { Button, TextField } from "@mui/material";

export function ButtonApiComponent() {
    return (
    <>
        <Button 
            variant="contained" 
            sx={{ 
                borderRadius: 8,
                backgroundColor: "secondary.dark",
                marginRight: 10 
            }}
        >
            Botão
        </Button>

        <TextField 
            label="nome"
            slotProps={{
                input: {
                    sx: {
                        backgroundColor: "grey.300",
                        borderRadius: 6
                    }
                }
            }}
        />

    </>);
}