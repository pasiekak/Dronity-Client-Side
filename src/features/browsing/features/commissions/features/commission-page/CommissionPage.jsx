import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ServerCommunicator} from "../../../../../../shared/services/ServerCommunicator";
import TitleContent from "./components/TitleContent";
import MiddleContent from "./components/MiddleContent";
import './styles/commission-page.css';
import Details from "./components/Details";
import LoaderSVG from "../../../../../../shared/assets/media/svg/LoaderSVG/LoaderSVG";
import ApplicationList from "./features/applications-listing/ApplicationList";

const CommissionPage = () => {
    const id = parseInt(useParams().id);
    const [commission, setCommission] = useState(null);
    const [loading, setLoading] = useState(true);
    const [applications, setApplications] = useState([]);


    useEffect(() => {
        setLoading(true);
        ServerCommunicator.handleRequest('get', `/api/commissions/${id}`).then(res => {
            if (res.success) {
                setCommission(res.data);
                setLoading(false);
            }
        }).finally(() => {
            setLoading(false)
        })
    }, [id]);

    useEffect(() => {
        setLoading(true)
        ServerCommunicator.handleRequest('get', `/api/commissions/${id}/operatorApplications`).then(res => {
            if (res.success) {
                setApplications(res.data.applications);
            }
        }).finally(() => setLoading(false))
    }, [id]);

    return (
        <div className={`content commission-page${loading ? ' loading' : ''}`}>
            {loading ? <LoaderSVG className="loader"/> :
                commission && applications &&
                <>
                    <TitleContent title={commission?.details.title} id={id}
                                  setCommission={setCommission} applications={applications}
                                  setApplications={setApplications} haveContractor={commission.contractor !== undefined}
                                  suggestedPayment={commission?.details?.suggested_payment}/>
                    <MiddleContent authorFullName={commission?.author.firstName + " " + commission?.author.lastName}
                                   description={commission?.details.description}/>
                    <Details author={commission?.author} details={commission?.details}/>
                    {applications.length > 0 && <ApplicationList applications={applications}/>}
                </>}

        </div>
    )
}
export default CommissionPage;