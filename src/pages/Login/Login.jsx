import LoginForm from "../../feature/Authentication/LoginForm/LoginForm";
import Links from "../../shared/component/Links/Links";

const Login = () => {
    return (
        <>
            <h1>Logowanie</h1>
            <LoginForm/>
            <Links toRegister/>
        </>
    )
}

export default Login;