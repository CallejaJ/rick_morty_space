import {
    createContext,
    useState,
    useContext,

} from "react";

const AuthContext = createContext({
    user: null,
    errorMessage: null,
    login: () => { },
    logout: () => { }
});

const RICK_MORTY_KEY = "RICK_MORTY_KEY"

export function AuthContextProvider({ children }) {

    // children es todo lo que abraza el contexto en la APP
    // el estado lo inicializo nulo porque no hay usuario
    const [user, setUser] = useState(localStorage.getItem(RICK_MORTY_KEY) ?? null);
    const [errorMessage, setErrorMessage] = useState(null);


    function login({ email, password }) {

        if (email === "ricky@mail.com" && password === "5678") {
            setUser({ email })
            localStorage.setItem(RICK_MORTY_KEY, email)
            setErrorMessage(null)
        }
        setErrorMessage("Please try again!")
    }


    function logout() {
        localStorage.removeItem(RICK_MORTY_KEY);
        setUser(null)
    }


    const value = {
        user, login, logout, errorMessage
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}






