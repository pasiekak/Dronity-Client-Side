import '../styles/single-commission.css';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const SingleCommission = ({commission, index}) => {
    const navigate = useNavigate();
    const [innerClass, setInnerClass] = useState("inner")

    useEffect(() => {
        setTimeout(() => {
            setInnerClass("inner expanded")
        }, 1000 + 100 * index)
    }, [index]);


    return (
        <div className="single-commission"
             onClick={() => navigate(`/commission-viewer/commission/${commission.id}`, {replace: true})}>
            <span className="title">{commission.title}</span>
            <span className="start_date">{new Date(commission.start_date).toLocaleDateString()}</span>
            <span className="city">{commission.city}</span>
            <span className="suggested_payment">{commission.suggested_payment.toFixed(2)} zł</span>
            <div className={innerClass} style={{animationDelay: `${100 * index}ms`}}>

            </div>
        </div>
    )
}

export default SingleCommission;