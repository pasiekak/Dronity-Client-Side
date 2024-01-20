import '../styles/application-item.css';
import CaretDownSVG from "../../../../../../../../../shared/assets/media/svg/CaretSVG/down/CaretDownSVG";
import {useState} from "react";

const renderDecision = (accepted) => {
    if (accepted === true) {
        return {class: "accepted", message: "Zaakceptowane"}
    } else if (accepted === false) {
        return {class: "rejected", message: "Odrzucone"}
    } else if (accepted === null) {
        return {message: "Niepodjęta"}
    }
}

const ApplicationItem = ({application, index}) => {
    const decision = renderDecision(application.accepted);
    const [open, setOpen] = useState(false);

    return (
        <div className={`application-item${decision.class ? " " + decision.class : ''}`}>
            <div className="top">
                <span>{index}</span>
                <span>{application.offered_payment.toFixed(2)} zł</span>
                <span>{new Date(application.createdAt).toLocaleDateString()}</span>
                <span>{new Date(application.createdAt).toLocaleTimeString()}</span>
                <span className={decision.class ? decision.class : ''}>{decision.message}</span>
            </div>
            {decision.class === "rejected" &&
                <div className={`wrapper${open ? " open" : ""}`}>
                    <div className="inner">
                        <h2>Dodatkowe informacje</h2>
                        <div>
                            <span>Powód: {application.rejectType}</span>
                        </div>
                        {application.customComment && <div>
                            <span>Komentarz: {application.customComment}</span>
                        </div>}
                    </div>
                    <CaretDownSVG className={`caret${open ? " rotated" : ""}`} onClick={() => setOpen(prev => !prev)}/>
                </div>}
        </div>
    )
}

export default ApplicationItem;