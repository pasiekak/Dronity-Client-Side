import './header.css';
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../context/user/UserContext";
import Dropdown from "../Dropdown/Dropdown";

const Header = () => {
    const {user, logout} = useContext(UserContext);
    const navigate = useNavigate();
    const dropdownItems = [
        {
            text: 'Twoje konto',
            handleClick: () => navigate('account')
        },
        {
            text: 'Wyloguj',
            handleClick: () => {
                logout()
            }
        }
    ]

    if(user) {
        return (
            <div className='header'>
                <nav>
                    <Link to='/'>Strona główna</Link>
                    <Link to='/about'>O nas</Link>
                    <Dropdown trigger='Konto' itemList={dropdownItems}/>
                </nav>
            </div>
        )
    } else {
        return (
            <div className='header'>
                <nav>
                    <Link to='/'>Strona główna</Link>
                    <Link to='/about'>O nas</Link>
                    <Link to='/auth/login'>Zaloguj się</Link>
                </nav>
            </div>
        )
    }


}

export default Header;