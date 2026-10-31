import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";
export function ExemploDoisComponent() {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClickFavorite = () => {
        setIsFavorite(!isFavorite);
    }
    return (
        <>
            <IconButton onClick={handleClickFavorite}>
                {isFavorite ? <Favorite color="primary" /> : <FavoriteBorder />}
            </IconButton>
        </>
    );
}