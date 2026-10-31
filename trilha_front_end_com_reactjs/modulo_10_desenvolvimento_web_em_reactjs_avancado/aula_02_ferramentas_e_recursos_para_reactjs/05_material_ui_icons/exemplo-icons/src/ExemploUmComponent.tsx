import {Add, Delete, Favorite, Home, Search, ShoppingCart} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

export function ExemploUmComponent() {
    return (
        <>
            <Home sx={{ fontSize: 50, color: "green" }}/>
            <Search />
            <ShoppingCart />

            <div className="btn-group">
                <Button variant="contained" startIcon={<Add />}>Adicionar</Button>
                <Button variant="contained" endIcon={<Delete />}>Remover</Button>
                <IconButton>
                    <Favorite />
                </IconButton>
            </div>
        </>
    );
}