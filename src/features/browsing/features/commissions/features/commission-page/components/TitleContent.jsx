import '../styles/title-content.css';
import CaretLeftSVG from "../../../../../../../shared/assets/media/svg/CaretSVG/left/CaretLeftSVG";
import {useNavigate} from "react-router-dom";
import Apply from "../features/applying/Apply";

const TitleContent = ({id, title, haveContractor, setCommission, suggestedPayment, applications, setApplications}) => {
    const navigate = useNavigate();


    return (
        <div className="title-content">
            <button className="dark_blue_button" onClick={() => navigate('/commission-viewer')}>
                <CaretLeftSVG/>
            </button>
            <h1 className="title">{title}</h1>
            {!haveContractor && <Apply setCommission={setCommission} id={id} applications={applications}
                                       setApplications={setApplications}
                                       suggestedPayment={suggestedPayment}/>}
        </div>
    )
}

export default TitleContent;