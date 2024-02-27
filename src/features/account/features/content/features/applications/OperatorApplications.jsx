import {useEffect, useState} from "react";
import {useOutletContext} from "react-router-dom";
import {ServerCommunicator} from "../../../../../../shared/services/ServerCommunicator";
import LoaderSVG from "../../../../../../shared/assets/media/svg/LoaderSVG/LoaderSVG";
import './styles/operator-applications.css'
import ApplicatedCommission from "./components/ApplicatedCommission";

const OperatorApplications = () => {
    const [applicatedCommissions, setApplicatedCommissions] = useState([]);
    const [userDetails, setUserDetails] = useOutletContext();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        ServerCommunicator.handleRequest("get", `/api/applications/operator/${userDetails.Operator.id}?type=applicatedCommissions`).then(res => {
            if (res.success) {
                setApplicatedCommissions(res.data.applicatedCommissions)
            }
        }).finally(() => setLoading(false));
    }, [userDetails.Operator.id]);


    return (
        <div className={`account-bottom operator-applications${loading ? " loading" : ""}`}>
            <div className="columns">
                <span>Autor zlecenia</span>
                <span>Tytuł</span>
                <span>Stan ostatniej aplikacji</span>
            </div>
            {loading && applicatedCommissions.length === 0 ? <LoaderSVG className="loader"/> :
                applicatedCommissions.map((id, index) => {
                    return <ApplicatedCommission commissionID={id} key={index} index={index}/>
                })
            }
        </div>
    )
}

export default OperatorApplications;