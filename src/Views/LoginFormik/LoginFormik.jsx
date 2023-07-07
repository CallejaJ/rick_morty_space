import LoginFormikView from "../LoginFormik/LoginFormikView";


export default function LoginFormik() {

    function onSubmit(e) {
        e.preventDefault();
    }

    return <LoginFormikView onSubmit={onSubmit} />

}