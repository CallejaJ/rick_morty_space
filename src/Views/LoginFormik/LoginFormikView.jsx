import { useAuthContext } from '../../context/AuthContext';
import { Box, CssBaseline, Container, Grid, Button, Alert, TextField } from '@mui/material';
import loginbg2 from '../../assets/loginbg2.gif';
import loginico from '../../assets/loginico.gif';


export default function LoginFormikView({ formik }) {

    const { errorMessage } = useAuthContext();
    // es una respuesta del backend si hay errores en el endpoint

    const {
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
    } = formik;

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
                            <Box sx={{ width: '30%' }}  >
                                <img src={loginico} />
                            </Box>

                            <Box component="form" onSubmit={handleSubmit}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    autoFocus
                                    name="email"
                                    id="email"
                                    type="email"
                                    placeholder="Type your e-mail address"
                                    value={values.email}
                                    onChange={handleChange}
                                    error={touched.email && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="password"
                                    id="password"
                                    type="password"
                                    placeholder="Type your password"
                                    value={values.password}
                                    onChange={handleChange}
                                    error={touched.password && Boolean(errors.password)}
                                    helperText={touched.password & errors.password}
                                />
                                {errorMessage ? (
                                    <Alert variant="filled" severity="info">
                                        {errorMessage}
                                    </Alert>
                                ) : null}
                                <Button
                                    sx={{ mt: 2, mb: 2 }}
                                    variant="contained"
                                    color='secondary'
                                    fullWidth
                                    type="submit"
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