import ApplicationsForCommission from "../../features/menaging_applications/ApplicationsForCommission";

const ContractorDetails = ({contractor, applications, setApplications, setCommission}) => {
    return (
        <div className="contractor">
            {contractor && <table className="big-screen">
                <caption className="title">Dane wykonawcy zlecenia</caption>
                <thead>
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Email</th>
                    <th>Numer telefonu</th>
                    <th>Licencja</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{contractor?.firstName}</td>
                    <td>{contractor?.lastName}</td>
                    <td>{contractor?.email}</td>
                    <td>{contractor?.phone}</td>
                    <td>{contractor?.license}</td>
                </tr>
                </tbody>
            </table>}
            {contractor && <div className="small-screen">
                <span className="title">Dane wykonawcy zlecenia</span>
                <span>{contractor?.firstName}</span>
                <span>{contractor?.lastName}</span>
                <span>{contractor?.email}</span>
                <span>{contractor?.phone}</span>
                <span>{contractor?.license}</span>
            </div>}
            {(!contractor && !applications?.considerable?.some(application => application?.accepted === null)) ?
                <span>
                    Zlecenie nie posiada przydzielonego operatora oraz brakuje nowych zgłoszeń.

                </span> : <ApplicationsForCommission applications={applications} setApplications={setApplications}
                                                     setCommission={setCommission}/>}
        </div>
    );
};
export default ContractorDetails;
