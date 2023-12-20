import {useOutletContext} from "react-router-dom";
import DatabaseProperty from "../../../../shared/component/DatabaseProperty/DatabaseProperty";

const AccountSettings = () => {
    const [userDetails, setUserDetails] = useOutletContext();

    const handleFieldUpdateLocal = (fieldName, newValue) => {
        setUserDetails(prev => ({
            ...prev,
            [fieldName]: newValue
        }))
    }

    return (
        <div className='account-settings account-bottom'>
            <h1>Ustawienia konta</h1>
            <DatabaseProperty
                actualValue={userDetails.email}
                setActualValue={(newValue) => handleFieldUpdateLocal('email', newValue)}
                updateURL={`/api/accounts/${userDetails.id}`}
                type='text'
                name='email'
                placeholder='Podaj nowy email'
                label='Adres e-mail'
            />
        </div>
    )
}

export default AccountSettings;