import { Link } from 'react-router-dom';
import { Box, Grid, Typography, Paper, Button, Skeleton } from '@mui/material'
import { styled } from '@mui/material/styles';
import back from '../../assets/back.gif'
import background2 from '../../assets/background2.webp';



export default function CharDetailsView({ char }) {

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });

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


                    <Box xs={12} md={4} spacing={2} rowSpacing={1}
                        sx={{

                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>

                        <Paper
                            sx={{
                                p: 8,
                                margin: '6',
                                maxWidth: 350,
                                flexGrow: 1,
                            }}
                        >
                            <Box container marginBottom={4} spacing={1} >

                                <Box >
                                    <Box marginBottom={3}>
                                        <Img src={char.image} alt={char.name} sx={{
                                            borderRadius: 8,
                                            border: '6px solid',
                                            borderColor: '#884032',
                                        }} />
                                    </Box>
                                    <Box marginBottom={3}>

                                        <Typography variant="h4" component="h4" color="#884032">
                                            {char.name}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box >
                                    <Box item xs>
                                        <Box item xs>
                                            <Typography variant="h6" component="h6">
                                                Status
                                            </Typography>
                                            <Box marginTop={1} marginBottom={1}>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    color='primary'>
                                                    {char.status}
                                                </Button>
                                            </Box>
                                            <Typography variant="h6" component="h6">
                                                Origin
                                            </Typography>
                                            <Box marginTop={1} marginBottom={1}>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    color='secondary'>
                                                    {char.location.name}
                                                </Button>
                                            </Box>
                                            <Typography variant="h6" component="h6">
                                                Gender
                                            </Typography>
                                            <Box marginTop={1} marginBottom={1}>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    color='primary'>
                                                    {char.gender}
                                                </Button>
                                            </Box>
                                            <Typography variant="h6" component="h6">
                                                Species
                                            </Typography>
                                            <Box marginTop={1} marginBottom={1}>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    color='secondary'>
                                                    {char.species}
                                                </Button>
                                            </Box>

                                            <Typography variant="h6" component="h6">
                                                Type
                                            </Typography>
                                            <Box marginTop={1} marginBottom={1}>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    color='primary'>
                                                    {char.type}
                                                </Button>
                                            </Box>

                                            <Typography variant="h6" component="h6">
                                                Created
                                            </Typography>
                                            <Box marginTop={1} marginBottom={1}>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    color='secondary'>
                                                    {char.created}
                                                </Button>
                                            </Box>

                                            <Box marginTop={5}>
                                                <Link to="/chars">
                                                    <img src={back} />
                                                </Link>
                                            </Box>

                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </>
        ) : (

            <>
                <Skeleton
                    sx={{
                        backgroundColor: "#eee",
                    }} >
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


                        <Box rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                            sx={{

                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>

                            <Paper
                                sx={{
                                    p: 12,
                                    margin: '2',
                                    maxWidth: 500,
                                    flexGrow: 1,
                                }}
                            >
                                <Box container spacing={2}>

                                    <Box item >
                                        <Box marginTop={1} marginBottom={1}>
                                            <Img sx={{
                                                borderRadius: 8,
                                                border: '6px solid',
                                                borderColor: '#884032',
                                            }} />
                                        </Box>
                                        <Typography variant="h4" component="h4" color="#884032">
                                        </Typography>

                                    </Box>
                                    <Box item xs={12} sm>
                                        <Box item xs>
                                            <Box item xs>
                                                <Typography variant="h6" component="h6">
                                                    Status
                                                </Typography>
                                                <Box marginTop={1} marginBottom={1}>
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        color='primary'>
                                                    </Button>
                                                </Box>
                                                <Typography variant="h6" component="h6">
                                                    Origin
                                                </Typography>
                                                <Box marginTop={1} marginBottom={1}>
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        color='secondary'>
                                                    </Button>
                                                </Box>
                                                <Typography variant="h6" component="h6">
                                                    Gender
                                                </Typography>
                                                <Box marginTop={1} marginBottom={1}>
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        color='primary'>
                                                    </Button>
                                                </Box>
                                                <Typography variant="h6" component="h6">
                                                    Species
                                                </Typography>
                                                <Box marginTop={1} marginBottom={1}>
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        color='secondary'>
                                                    </Button>
                                                </Box>

                                                <Typography variant="h6" component="h6">
                                                    Type
                                                </Typography>
                                                <Box marginTop={1} marginBottom={1}>
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        color='primary'>
                                                    </Button>
                                                </Box>

                                                <Typography variant="h6" component="h6">
                                                    Created
                                                </Typography>
                                                <Box marginTop={1} marginBottom={1}>
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        color='secondary'>
                                                    </Button>
                                                </Box>

                                                <Box marginTop={5}>
                                                    <Link to="/chars">
                                                        <img src={back} />
                                                    </Link>
                                                </Box>

                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Box>
                </Skeleton>
            </>

        )

        }
        </>
    )
}