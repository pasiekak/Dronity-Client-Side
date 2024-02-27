import {useEffect, useState} from "react";
import './styles/apply.css';
import ApplyForm from "./components/ApplyForm";
import {ServerCommunicator} from "../../../../../../../../shared/services/ServerCommunicator";

const Apply = ({id, setCommission, suggestedPayment, setApplications, applications}) => {
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [haveConsiderableApplication, setHaveConsiderableApplication] = useState(applications?.some(ob => ob.accepted === null));

    useEffect(() => {
        if (applications?.some(ob => ob?.accepted === null)) {
            setHaveConsiderableApplication(true);
        }
    }, [applications]);
    const handleClick = () => {
        if (haveConsiderableApplication) {
            setLoading(true);
            ServerCommunicator.handleRequest('delete', `/api/applications/${id}`).then(res => {
                if (res.success) {
                    setCommission(prev => {
                        return {...prev}
                    })
                    setApplications(prev => {
                        return prev.filter(ob => ob.accepted !== null);
                    })
                    setHaveConsiderableApplication(false);
                }
            }).finally(() => setLoading(false))
        } else {
            setShowForm(true);
        }
    }
    return (
        <div className="apply">
            <button className="dark_blue_button" disabled={showForm || loading} onClick={handleClick}>
                {haveConsiderableApplication ? "Anuluj zgłoszenie" : "Zgłoś się"}
            </button>
            {showForm && <ApplyForm suggestedPayment={parseFloat(suggestedPayment).toFixed(2)} setShowForm={setShowForm}
                                    id={id} setApplications={setApplications}
                                    setHaveConsiderableApplication={setHaveConsiderableApplication}/>}
        </div>
    )
}

export default Apply;