import {useOutletContext} from "react-router-dom";

const AccountSettings = () => {
    const userDetails = useOutletContext();
    console.log(userDetails)

    return (
        <div className='account-settings account-bottom'>
            <h1>Ustawienia konta</h1>
        </div>
    )
}

export default AccountSettings;