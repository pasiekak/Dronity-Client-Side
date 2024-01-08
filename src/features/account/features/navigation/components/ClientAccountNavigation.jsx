import { Link } from "react-router-dom";

const ClientAccountNavigation = ({ selected }) => {
  return (
    <nav className="client-account-navigation navigation">
      <Link to="/account/settings" className={selected === 1 ? "selected" : ""}>
        Ustawienia konta
      </Link>
      <Link to="/account/personal" className={selected === 2 ? "selected" : ""}>
        Ustawienia personalne
      </Link>
      <Link
        to="/account/commissions"
        className={selected === 3 ? "selected" : ""}
      >
        Twoje zlecenia
      </Link>
    </nav>
  );
};

export default ClientAccountNavigation;
