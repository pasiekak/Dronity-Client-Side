import ApplicationItem from "./components/ApplicationItem";
import './styles/application-list.css';

const ApplicationList = ({applications}) => {
    const accepted = applications.some(ob => ob.accepted === true)
    const count = applications.length;
    const rejectedCount = applications.filter(ob => ob.accepted === false).length;

    return (
        <div className="application-list">
            <h2>Historia twoich zgłoszeń</h2>
            <div className="info">
                <div>
                    <span className="left">Liczba złożonych zgłoszeń: </span>
                    <span>{count}</span>
                </div>
                <div>
                    <span className="left">Liczba odrzuconych zgłoszeń: </span>
                    <span>{rejectedCount}</span>
                </div>
            </div>
            <div className="columns">
                <span>Numer zgłoszenia</span>
                <span>Twoja kwota</span>
                <span>Data złożenia zgłoszenia</span>
                <span>Godzina złożenia zgłoszenia</span>
                <span>Decyzja klienta</span>
            </div>
            {accepted && <span>Jedno z twoich zgłoszeń zostało zaakceptowane przez właściciela zlecenia.</span>}
            {applications.map((application, index) => <ApplicationItem key={index} index={index + 1}
                                                                       application={application}/>)}
        </div>
    )
}

export default ApplicationList;