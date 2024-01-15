import '../styles/title-content.css';
import CaretLeftSVG from "../../../../../../../shared/assets/media/svg/CaretSVG/left/CaretLeftSVG";
import {useNavigate} from "react-router-dom";
import Apply from "../features/applying/Apply";

const TitleContent = ({id, title, applied, setCommission, suggestedPayment}) => {
    const navigate = useNavigate();


    return (
        <div className="title-content">
            <button className="dark_blue_button" onClick={() => navigate('/commission-viewer')}>
                <CaretLeftSVG/>
            </button>
            <h1 className="title">{title}</h1>
            <Apply applied={applied} setCommission={setCommission} id={id} suggestedPayment={suggestedPayment}/>
        </div>
    )
}

export default TitleContent;