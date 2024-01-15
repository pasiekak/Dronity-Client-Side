import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ServerCommunicator} from "../../../../../../shared/services/ServerCommunicator";
import TitleContent from "./components/TitleContent";
import MiddleContent from "./components/MiddleContent";
import './styles/commission-page.css';
import Details from "./components/Details";
import LoaderSVG from "../../../../../../shared/assets/media/svg/LoaderSVG/LoaderSVG";

const CommissionPage = () => {
    const id = parseInt(useParams().id);
    const [commission, setCommission] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        ServerCommunicator.handleRequest('get', `/api/commissions/${id}`).then(res => {
            if (res.success) {
                setCommission(res.data);
                setLoading(false);
            }
        })
    }, [id]);

    return (
        <div className={`content commission-page${loading ? ' loading' : ''}`}>
            {loading ? <LoaderSVG className="loader"/> :
                commission &&
                <>
                    <TitleContent title={commission?.details.title} applied={commission.applied} id={id}
                                  setCommission={setCommission}
                                  suggestedPayment={commission?.details?.suggested_payment}/>
                    <MiddleContent authorFullName={commission?.author.firstName + " " + commission?.author.lastName}
                                   description={commission?.details.description}/>
                    <Details author={commission?.author} details={commission?.details}/>
                </>}

        </div>
    )
}
export default CommissionPage;