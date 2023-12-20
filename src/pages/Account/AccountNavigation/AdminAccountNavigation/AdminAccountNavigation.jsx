import {Link} from "react-router-dom";

const AdminAccountNavigation = ({selected, set}) => {
    return (
        <nav className='admin-account-navigation navigation'>
            <Link to='/account/settings'
                  onClick={() => set(1)}
                  className={selected === 1 ? 'selected' : ''}>Ustawienia konta</Link>
            <Link to='/account/administrator'
                  onClick={() => set(2)}
                  className={selected === 2 ? 'selected' : ''}>Panel administracyjny</Link>
        </nav>
    )
}
export default AdminAccountNavigation