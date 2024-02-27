import SingleApplication from "./components/SingleApplication";
import './styles/applications-for-commission.css';

const ApplicationsForCommission = ({applications, setApplications, setCommission}) => {
    return (

        <div className="commission-applications">
            {applications?.accepted.length === 0 && <>
                <span className="title">Zgłoszenia operatorów na to zlecenie</span>
                <div className="columns">
                    <span>Imię i nazwisko</span>
                    <span>Email</span>
                    <span>Numer telefonu</span>
                    <span>Miasto zamieszkania</span>
                    <span>Kwota oferowana za to zlecenie</span>
                </div>
            </>}
            {applications?.considerable?.map((application, index) => {
                if (application) {
                    return <SingleApplication key={index}
                                              application={application}
                                              setApplications={setApplications}
                                              setCommission={setCommission}/>
                }
            })}
        </div>
    )
}

export default ApplicationsForCommission;