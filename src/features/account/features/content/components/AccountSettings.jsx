import { useOutletContext } from "react-router-dom";
import DatabaseProperty from "../../../../../shared/component/DatabaseProperty/DatabaseProperty";

const AccountSettings = () => {
  const [userDetails, setUserDetails] = useOutletContext();

  return (
    <div className="account-settings account-bottom">
      <h1>Ustawienia konta</h1>
      <DatabaseProperty
        actualValue={userDetails.email}
        setUserDetails={setUserDetails}
        updateURL={`/api/accounts/${userDetails.id}`}
        type="text"
        name="email"
        placeholder="Podaj nowy email"
        label="Adres e-mail"
        editable={true}
      />
      <DatabaseProperty
        actualValue={userDetails.login}
        label="Login"
        editable={false}
      />
    </div>
  );
};

export default AccountSettings;
