import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";

export function Header() {
    return (
        <AppBar
            position="static"
            sx={{ 
                marginBottom: "1rem" 
            }}
        >
            <CssBaseline />

            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                >
                    GrowAvalia
                </Typography>
            </Toolbar>
        </AppBar>
    );
}