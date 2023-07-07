import { Box, Button, Alert } from '@mui/material';
import { useAuthContext } from '../../context/AuthContext';
import loginico from '../../assets/loginico.gif';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import loginbg2 from '../../assets/loginbg2.gif';
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
    email: "",
    password: "",
};

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup
        .string()
        .matches(passwordRules, {
            message:
                "Min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit",
        })
        .required("Required"),

});

export default function LoginFormikView({ onSubmit }) {
    const { errorMessage } = useAuthContext(); // es una respuesta del backend

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    }
        = useFormik({ initialValues, onSubmit })

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
                                    id="email"
                                    placeholder="Type your e-mail address"
                                    name='email'
                                    type='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.email && touched.email ? "input-error" : ""}
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="password"
                                    placeholder="Type your password"
                                    type="password"
                                    id="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.email && touched.email ? "input-error" : ""}

                                />
                                {errorMessage ? (<Alert variant="filled" severity="info">
                                    {errorMessage}
                                </Alert>) : null}
                                <Button
                                    disabled={isSubmitting}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color='secondary'
                                    sx={{ mt: 2, mb: 2 }}
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