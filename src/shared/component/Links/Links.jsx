import {Link} from "react-router-dom";

const Links = (props) => {
    return (
        <div className='links'>
            {props.toLogin && (
                <p>Masz już konto? <Link to='/auth/login'>Zaloguj się</Link></p>
            )}
            {props.toRegister && (
                <p>Nie masz konta? <Link to='/auth/register'>Zarejestruj się</Link></p>
            )}
        </div>
    )
}

export default Links;