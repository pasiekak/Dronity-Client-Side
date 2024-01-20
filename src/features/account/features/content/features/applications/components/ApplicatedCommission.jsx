import '../styles/applicated-commission.css';
import {useEffect, useState} from "react";
import {ServerCommunicator} from "../../../../../../../shared/services/ServerCommunicator";
import CaretDownSVG from "../../../../../../../shared/assets/media/svg/CaretSVG/down/CaretDownSVG";
import Application from "./Application";
import {Link} from "react-router-dom";

const renderStatus = (status) => {
    if (status === null) {
        return "Klient nie rozważył jeszcze twojego ostatniego zgłoszenia."
    } else if (status === true) {
        return "Klient zatwierdził Cie jako wykonawce zlecenia."
    } else if (status === false) {
        return "Klient odrzucił twoje ostatnie zgłoszenie."
    }
}

const ApplicatedCommission = ({commissionID}) => {
    const [commissionDetails, setCommissionDetails] = useState({});
    const [lastApplicationStatus, setLastApplicationStatus] = useState();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        ServerCommunicator.handleRequest("get", `/api/commissions/${commissionID}`).then(res => {
            if (res.success) {
                setCommissionDetails(res.data);
                setLastApplicationStatus(res.data.applications[res.data.applications.length - 1].accepted);
            }
        })
    }, [commissionID]);

    return (
        <div className="applicated-commission">
            {JSON.stringify(commissionDetails) !== '{}' &&
                <>
                    <div className="always-visible">
                        <span>{commissionDetails.author.firstName} {commissionDetails.author.lastName}</span>
                        <span>{commissionDetails.details.title}</span>
                        <span>{renderStatus(lastApplicationStatus)}</span>
                    </div>
                    <div className={`wrapper${open ? " open" : ""}`}>
                        <div className="inner">
                            <h3>Twoje aplikacje na to zlecenie</h3>
                            <div className="application-columns">
                                <span>Numer zgłoszenia</span>
                                <span>Twoja kwota</span>
                                <span>Data złożenia zgłoszenia</span>
                                <span>Decyzja klienta</span>
                            </div>
                            {commissionDetails.applications.map((application, index) => {
                                return <Application application={application} key={index} index={index + 1}/>
                            })}
                            <Link to={`/commission-viewer/commission/${commissionID}`}>
                                Kliknij tutaj aby przejść na stronę zlecenia
                            </Link>
                        </div>
                    </div>
                    <div className="actions">
                        <CaretDownSVG onClick={() => setOpen(prev => !prev)}
                                      className={`caret${open ? " rotated" : ""}`}/>
                    </div>
                </>}
        </div>
    )
}

export default ApplicatedCommission;