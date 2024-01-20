import ApplicationsForCommission from "../../features/menaging_applications/ApplicationsForCommission";

const ContractorDetails = ({contractor, applications, setApplications, setCommission}) => {
    return (
        <div className="contractor">
            {contractor && <table>
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
            {(!contractor && !applications?.considerable?.some(application => application?.accepted === null)) ?
                <span>
                    Zlecenie nie posiada przydzielonego operatora oraz brakuje nowych zgłoszeń.

                </span> : <ApplicationsForCommission applications={applications} setApplications={setApplications}
                                                     setCommission={setCommission}/>}
        </div>
    );
};
export default ContractorDetails;
