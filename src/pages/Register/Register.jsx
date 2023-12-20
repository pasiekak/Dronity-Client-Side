import Links from "../../shared/component/Links/Links";
import RegisterForm from "../../feature/Authentication/RegisterForm/RegisterForm";

const Register = () => {
    return (
        <>
            <h1>Rejestracja</h1>
            <RegisterForm/>
            <Links toLogin/>
        </>
    )
}

export default Register;