import {useState} from "react";
import './styles/apply.css';
import ApplyForm from "./components/ApplyForm";
import {ServerCommunicator} from "../../../../../../../../shared/services/ServerCommunicator";

const Apply = ({applied, id, setCommission, suggestedPayment}) => {
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
        if (applied) {
            setLoading(true);
            ServerCommunicator.handleRequest('delete', `/api/applications/${id}`).then(res => {
                if (res.success) {
                    setCommission(prev => {
                        return {...prev, applied: false}
                    })
                }
            }).finally(() => setLoading(false))
        } else {
            setShowForm(true);
        }
    }

    return (
        <div className="apply">
            <button className="dark_blue_button" disabled={showForm || loading} onClick={handleClick}>
                {applied ? "Anuluj zgłoszenie" : "Zgłoś się"}
            </button>
            {showForm && <ApplyForm suggestedPayment={parseFloat(suggestedPayment).toFixed(2)} setShowForm={setShowForm}
                                    setCommission={setCommission} id={id}/>}
        </div>
    )
}

export default Apply;