import Grid from "@mui/material/Grid";

export function GridComponent() {
    return (
        <>
            <h1>Grid Component</h1>
            <Grid container spacing={2}>
                <Grid size={{ xs: 6, md: 8 }}>
                    xs: 6, md: 8
                </Grid>
                <Grid size={{ xs: 6, md: 4 }} >
                    xs: 6, md: 8
                </Grid>
            </Grid>
        </>
    );
}