import LoginView from "./LoginView";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

// tengo que gestionar el formulario

export default function Login() {
    const { login } = useAuthContext();
    const [auth, setAuth] = useState({
        email: "",
        password: "",
    })

    function handleAuth(e) {
        setAuth({
            ...auth, // todo lo que tengo en el objeto me lo dejas igual
            [e.target.name]: e.target.value,
        })
    }
    function onSubmit(e) {
        e.preventDefault();
        login(auth);
    }



    return (
        <LoginView auth={auth} onChange={handleAuth} onSubmit={onSubmit} />
    )
}