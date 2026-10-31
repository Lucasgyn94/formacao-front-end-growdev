import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

export function ModalComponent() {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggleModal() {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <>
            <Button variant="outlined" onClick={handleToggleModal}>
                Abrir Modal
            </Button>

            <Dialog open={isOpen} onClose={handleToggleModal}>
                <DialogTitle>Cadastrar contato</DialogTitle>

                <form>
                    <DialogContent>
                        <TextField fullWidth label="nome"/>
                        <TextField fullWidth label="email"/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleToggleModal}>Cancelar</Button>
                        <Button type="submit" >Enviar</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}