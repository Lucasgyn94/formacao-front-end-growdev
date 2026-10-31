import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

export function CardComponent() {
    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        Card
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Leia Mais</Button>
                </CardActions>
            </Card>
        </>
    );
}