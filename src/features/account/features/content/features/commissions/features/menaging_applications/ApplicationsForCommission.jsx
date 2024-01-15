import SingleApplication from "./components/SingleApplication";
import './styles/applications-for-commission.css';

const ApplicationsForCommission = ({applications, setCommission}) => {
    return (
        <div className="commission-applications">
            <span className="title">Zgłoszenia operatorów na to zlecenie</span>
            <div className="columns">
                <span>Imię i nazwisko</span>
                <span>Email</span>
                <span>Numer telefonu</span>
                <span>Miasto zamieszkania</span>
                <span>Kwota oferowana za to zlecenie</span>
            </div>
            {applications?.map((application, index) => <SingleApplication key={index} application={application}
                                                                          setCommission={setCommission}/>)}
        </div>
    )
}

export default ApplicationsForCommission;