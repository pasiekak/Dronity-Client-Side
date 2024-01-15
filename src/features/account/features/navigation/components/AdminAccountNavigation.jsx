import { Link } from "react-router-dom";

const AdminAccountNavigation = ({ selected }) => {
  return (
    <nav className="admin-account-navigation navigation">
      <Link to="/account/settings" className={selected === 1 ? "selected" : ""}>
        Ustawienia konta
      </Link>
      <Link
        to="/account/administrator"
        className={selected === 2 ? "selected" : ""}
      >
        Panel administracyjny
      </Link>
    </nav>
  );
};
export default AdminAccountNavigation;
