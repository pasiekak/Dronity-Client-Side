import "./styles/header.css";
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../../../../../../account/context/UserContext";
import Dropdown from "../../../../../../../../shared/component/Dropdown/Dropdown";
import LogoSVG from "../../../../../../../../shared/assets/media/svg/LogoSVG/LogoSVG";

const Header = () => {
    const {user, logout} = useContext(UserContext);
    const navigate = useNavigate();
    const dropdownItems = [
        {
            text: "Twoje konto",
            handleClick: () => navigate("account"),
        },
        {
            text: "Wyloguj",
            handleClick: () => {
                logout();
            },
        },
    ];

    if (user) {
        return (
            <header>
                <Link to="/" className="logo-link">
                    <LogoSVG className="logo"/>
                </Link>
                <nav>
                    <Link to="/">Strona główna</Link>
                    {user.Role.name === 'operator' && <Link to="/commission-viewer">Przeglądaj zlecenia</Link>}
                    {user.Role.name === 'client' && <Link to="/operator-viewer">Przeglądaj operatorów</Link>}
                    <Dropdown trigger="Konto" itemList={dropdownItems}/>
                </nav>
            </header>
        );
    } else {
        return (
            <header>
                <Link to="/" className="logo-link">
                    <LogoSVG className="logo"/>
                </Link>
                <nav>
                    <Link to="/">Strona główna</Link>
                    <Link to="/auth/login">Zaloguj się</Link>
                </nav>
            </header>
        );
    }
};

export default Header;
