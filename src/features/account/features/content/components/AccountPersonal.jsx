import { useOutletContext } from "react-router-dom";
import DatabaseProperty from "../../../../../shared/component/DatabaseProperty/DatabaseProperty";

const AccountPersonal = () => {
  const [userDetails, setUserDetails] = useOutletContext();
  const type =
    userDetails.Role.name[0].toUpperCase() + userDetails.Role.name.slice(1);
  const updateURL = `/api/${type.toLowerCase() + "s"}/${userDetails[type].id}`;

  return (
    <div className="account-personal account-bottom">
      <h1>Ustawienia personalne</h1>
      <DatabaseProperty
        actualValue={userDetails[type].firstName}
        setUserDetails={setUserDetails}
        updateURL={updateURL}
        type="text"
        name="firstName"
        placeholder="Podaj nowe imię"
        label="Imię"
        editable={true}
        detailPath={type}
      />
      <DatabaseProperty
        actualValue={userDetails[type].lastName}
        setUserDetails={setUserDetails}
        updateURL={updateURL}
        type="text"
        name="lastName"
        placeholder="Podaj nowe nazwisko"
        label="Nazwisko"
        editable={true}
        detailPath={type}
      />
      <DatabaseProperty
        actualValue={userDetails[type].phone}
        setUserDetails={setUserDetails}
        updateURL={updateURL}
        type="text"
        name="phone"
        placeholder="Podaj nowy numer telefonu"
        label="Numer telefonu"
        editable={true}
        detailPath={type}
      />
      {type === "Operator" && (
        <>
          <DatabaseProperty
            actualValue={userDetails[type].license}
            setUserDetails={setUserDetails}
            updateURL={updateURL}
            type="text"
            name="license"
            placeholder="Podaj numer pilota"
            label="Numer pilota"
            editable={true}
            detailPath={type}
          />
          <DatabaseProperty
            actualValue={userDetails[type].city}
            setUserDetails={setUserDetails}
            updateURL={updateURL}
            type="text"
            name="city"
            placeholder="Podaj swoje miasto działalności"
            label="City"
            editable={true}
            detailPath={type}
          />
          <DatabaseProperty
            actualValue={userDetails[type].operational_range}
            setUserDetails={setUserDetails}
            updateURL={updateURL}
            type="number"
            name="operational_range"
            placeholder="Podaj swój zasięg operacyjny"
            label="Zasięg operacyjny"
            editable={true}
            detailPath={type}
          />
          <DatabaseProperty
            actualValue={userDetails[type].description}
            setUserDetails={setUserDetails}
            updateURL={updateURL}
            type={"textarea"}
            name={"description"}
            placeholder={
              "Wpisz swój opis (Shift + Enter przechodzi do następnej linii)"
            }
            label={"Opis twojego profilu"}
            editable={true}
            detailPath={type}
          />
        </>
      )}
    </div>
  );
};

export default AccountPersonal;
