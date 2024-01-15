import {useOutletContext} from "react-router-dom";
import "./styles/style.css";
import Commissions from "./components/AllCommissions/Commissions";
import {useEffect, useState} from "react";

const AccountCommissions = () => {
    const [userDetails, setUserDetails] = useOutletContext();
    const [operatorCommissions, setOperatorCommissions] = useState(userDetails?.Operator?.ContractorCommissions);
    const [clientCommissions, setClientCommissions] = useState(userDetails?.Client?.AuthorCommissions);
    const type = userDetails?.Operator?.ContractorCommissions ? 'operator' : 'client'

    useEffect(() => {
        setOperatorCommissions(userDetails?.Operator?.ContractorCommissions);
        setClientCommissions(userDetails?.Client?.AuthorCommissions);
    }, [userDetails]);

    const renderCommissions = () => {
        if (operatorCommissions) {
            return (
                <Commissions commissions={operatorCommissions} type={type}/>
            );
        } else if (clientCommissions) {
            return <Commissions commissions={clientCommissions} type={type}/>;
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
