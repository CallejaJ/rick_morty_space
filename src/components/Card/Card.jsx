import { Box, Card as CardMUI } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';



export default function Card({ id, name, image, status }) {
    return (
        <CardMUI>
            <CardMedia component="img"
                image={image}
            />
            <CardContent>
                <Typography
                    color="#884032"
                    noWrap
                    gutterBottom variant="h5"
                    component="div">
                    {name}
                </Typography>
                <Button
                    variant="contained"
                    sx={{ mb: 1, mt: 1 }}
                    size="large"
                    color='secondary'>
                    Status: {status}
                </Button>

            </CardContent>
            <Box>
                <Link to={`/chars/${id}`} >
                    <Button
                        variant="contained"
                        sx={{ mb: 2 }}
                        size="large"
                        color='primary'>
                        More details
                    </Button>

                </Link>
            </Box>
        </CardMUI>
    );
}