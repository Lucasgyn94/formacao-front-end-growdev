import { Box, Button, Typography } from '@mui/material';
export function App() {
    return (
        <>
            <Box component="section">
                <Typography
                    gutterBottom
                    variant='h6'>
                        Exemplo de Material UI
                </Typography>
                <div className="btn__group">
                    <Button 
                        color='error' 
                        size='large' 
                        variant="text">
                            Text
                    </Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </div>
            </Box>
        </>
  )
}