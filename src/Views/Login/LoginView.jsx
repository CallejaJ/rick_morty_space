import { Box, Button, Alert, Typography } from '@mui/material';
import { useAuthContext } from '../../context/AuthContext';
import loginico from '../../assets/loginico.gif';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import loginbg2 from '../../assets/loginbg2.gif';



export default function LoginView({ auth, onChange, onSubmit }) {
    const { errorMessage } = useAuthContext();
    return (
        <>
            <Box
                sx={{
                    position: "absolute",
                    backgroundImage: `url(${loginbg2})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    minHeight: "100vh",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        top: "modal",
                        position: "center",
                    }}
                >
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{

                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',

                            }}
                        >
                            <Box container >
                                <img src={loginico} />
                            </Box>

                            <Typography component="h4" variant="h6">
                                Sign in
                            </Typography>

                            <Box component="form" onSubmit={onSubmit}>
                                <TextField
                                    margin="normal"
                                    height={200}
                                    fullWidth
                                    id="email"
                                    placeholder="Type your e-mail address"
                                    name='email'
                                    type='email'
                                    value={auth.email}
                                    onChange={onChange}
                                    autoFocus
                                />
                                <TextField className="textfield"
                                    margin="normal"
                                    fullWidth
                                    name="password"
                                    placeholder="Type your password"
                                    type="password"
                                    id="password"
                                    value={auth.password}
                                    onChange={onChange}
                                />
                                {errorMessage ? (<Alert variant="filled" severity="info">
                                    {errorMessage}
                                </Alert>) : null}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color='primary'
                                    sx={{ mt: 1, mb: 2 }}
                                    onSubmit={onSubmit}
                                >
                                    ENTER
                                </Button>
                                <Grid container>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    )
}