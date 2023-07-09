import { useAuthContext } from '../../context/AuthContext';
import { Box, Container, Button, TextField, Alert } from '@mui/material';
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
                        <Box
                            sx={{

                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',

                            }}
                        >
                            <Box >
                                <img src={loginico} />
                            </Box>

                            <Box>
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        autoFocus
                                        name='email'
                                        label="Type your e-mail address"
                                        value={values.email}
                                        onChange={handleChange}
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                    />
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        name="password"
                                        label="Type your password"
                                        value={values.password}
                                        onChange={handleChange}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}

                                    />
                                    {errorMessage ? (
                                        <Alert variant="outlined" severity="info">
                                            {errorMessage}
                                        </Alert>
                                    ) : null}
                                    <Button
                                        sx={{ mt: 2 }}
                                        variant="contained"
                                        color='secondary'
                                        fullWidth
                                        type="submit"
                                    >
                                        ENTER
                                    </Button>
                                </form>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box >

        </>
    )
}