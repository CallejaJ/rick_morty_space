import { Box, Grid, Typography } from '@mui/material'
import { Card as CardMUI } from '@mui/material'
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import background2 from '../../assets/background2.webp';
import { Link } from 'react-router-dom';
import back from '../../assets/back.gif'



export default function CharDetailsView({ char }) {
    return (
        <>{char ? (
            <>
                <Box
                    sx={
                        {
                            // posición del fondo de pantalla
                            position: "absolute",
                            backgroundImage: `url(${background2})`,
                            backgroundPosition: "right",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            minHeight: "100vh",
                            width: "100%",
                        }}
                >


                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        sx={{

                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: "0%",
                                right: "1%",
                            }}
                        >
                            <Link to="/chars">
                                <img src={back} />
                            </Link>
                        </Box>

                        <CardMUI container>
                            <CardMedia
                                component="img"
                                image={char.image}
                                alt={char.name}
                            />
                            <CardContent>
                                <Box sx={{ width: '100%' }}>
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                        <Grid item xs={6} spacing={2}>
                                            <Typography component="h4" variant="h5">
                                                Status
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button
                                                variant="contained"
                                                size="large"
                                                color='primary'>
                                                {char.status}
                                            </Button>

                                        </Grid>

                                        <Grid item xs={6}>
                                            <Typography component="h4" variant="h5">
                                                Origin
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button
                                                variant="contained"
                                                size="large"
                                                color='secondary'>
                                                {char.location.name}
                                            </Button>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Typography component="h4" variant="h5">
                                                Species
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button
                                                variant="contained"
                                                size="large"
                                                color='primary'>
                                                {char.species}
                                            </Button>

                                        </Grid>

                                        <Grid item xs={6}>
                                            <Typography component="h4" variant="h5">
                                                Gender
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button
                                                variant="contained"
                                                size="large"
                                                color='secondary'>
                                                {char.gender}
                                            </Button>

                                        </Grid>

                                        <Grid item xs={6}>
                                            <Typography component="h4" variant="h5">
                                                Type
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button
                                                variant="contained"
                                                size="large"
                                                color='primary'>
                                                {char.type}
                                            </Button>

                                        </Grid>

                                        <Grid item xs={6}>
                                            <Typography component="h4" variant="h5">
                                                Origin
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button
                                                variant="contained"
                                                size="large"
                                                color='primary'>
                                                {char.origin.name}
                                            </Button>

                                        </Grid>

                                    </Grid>
                                </Box>
                            </CardContent>
                        </CardMUI>
                    </Grid>
                </Box>
            </>
        ) : (<p>Loading...</p>)

        }
        </>
    )
}