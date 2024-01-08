import { useOutletContext } from "react-router-dom";
import "./style.css";
import Commissions from "./components/Commissions/Commissions";

const AccountCommissions = () => {
  const [userDetails, setUserDetails] = useOutletContext();
  const operatorCommissions = userDetails?.Operator?.ContractorCommissions;
  const clientCommissions = userDetails?.Client?.AuthorCommissions;

  const renderCommissions = () => {
    if (operatorCommissions) {
      return (
        <Commissions commissions={operatorCommissions} type={"operator"} />
      );
    } else if (clientCommissions) {
      return <Commissions commissions={clientCommissions} type={"client"} />;
    }
  };

  return (
    <div className="account-commissions account-bottom">
      <h1>Twoje zlecenia</h1>
      {renderCommissions()}
    </div>
  );
};

export default AccountCommissions;
