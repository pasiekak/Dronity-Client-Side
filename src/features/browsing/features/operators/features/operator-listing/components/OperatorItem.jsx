import '../styles/operator-item.css';
import profilePlaceholder from '../../../../../../../shared/assets/media/images/profile-placeholder.png';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const OperatorItem = ({operator, index}) => {
    const imageID = operator.Account.Images[0]?.id;
    const navigate = useNavigate();
    const [innerClass, setInnerClass] = useState("inner")
    useEffect(() => {
        setTimeout(() => {
            setInnerClass("inner expanded")
        }, 1000 + 100 * index)
    }, [index]);

    return (
        <div className="operator-item"
             onClick={() => navigate(`/operator-viewer/operator/${operator.id}`, {replace: true})}>
            {imageID ? <img src={`/api/images/${imageID}`} alt='' className="profile-image"/> :
                <img src={profilePlaceholder} alt='' className="profile-image"/>}

            <span className="first-last-name">{operator.firstName} {operator.lastName}</span>
            <span className="license">{operator.license}</span>
            <span className="city">{operator.city}</span>
            <div className={innerClass}>

            </div>
        </div>
    )
}

export default OperatorItem;