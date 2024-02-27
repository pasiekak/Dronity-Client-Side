import {Link} from "react-router-dom";

const ClientAccountNavigation = ({selected}) => {
    return (
        <nav className="client-account-navigation navigation">
            <Link to="/account/settings"
                  className={selected === 1 ? "selected" : ""}>
                Konto
            </Link>
            <Link to="/account/personal"
                  className={selected === 2 ? "selected" : ""}>
                Dane
            </Link>
            <Link to="/account/commissions"
                  className={selected === 3 ? "selected" : ""}>
                Zlecenia
            </Link>
            <Link to="/account/add_commission"
                  className={selected === 4 ? "selected" : ""}>
                Dodaj zlecenie
            </Link>
        </nav>
    );
};

export default ClientAccountNavigation;
