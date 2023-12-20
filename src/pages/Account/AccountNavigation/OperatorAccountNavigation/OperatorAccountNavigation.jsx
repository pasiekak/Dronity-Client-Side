import {Link} from "react-router-dom";

const OperatorAccountNavigation = ({selected, set}) => {
    return (
        <nav className='operator-account-navigation navigation'>
            <Link to='/account/settings'
                  onClick={() => set(1)}
                  className={selected === 1 ? 'selected' : ''}>Ustawienia konta</Link>
            <Link to='/account/commissions'
                  onClick={() => set(2)}
                  className={selected === 2 ? 'selected' : ''}>Twoje zlecenia</Link>
        </nav>
    )
}

export default OperatorAccountNavigation;