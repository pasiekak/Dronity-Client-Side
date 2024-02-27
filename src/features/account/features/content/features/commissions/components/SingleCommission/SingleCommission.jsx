import {useEffect, useState} from "react";
import {ServerCommunicator} from "../../../../../../../../shared/services/ServerCommunicator";
import CaretDownSVG from "../../../../../../../../shared/assets/media/svg/CaretSVG/down/CaretDownSVG";
import "../../styles/single-commission.css";
import AuthorDetails from "./AuthorDetails";
import OtherDetails from "./OtherDetails";
import ContractorDetails from "./ContractorDetails";
import DeleteCommission from "../../features/deleting/DeleteCommission";
import EditCommission from "../../features/editing/components/EditCommission";
import EditCommissionForm from "../../features/editing/components/EditCommissionForm";
import CancelCommission from "../../features/canceling/CancelCommission";
import ResumeCommission from "../../features/resuming/ResumeCommission";

const SingleCommission = ({id, type}) => {
    const [commission, setCommission] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showEditForm, setShowEditForm] = useState(false);
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [applications, setApplications] = useState({
        considerable: [],
        rejected: [],
        accepted: null
    })
    //rebuild applications

    useEffect(() => {
        setCommission(null)
        ServerCommunicator.handleRequest("get", `/api/commissions/${id}`)
            .then((res) => {
                if (res.success) {
                    const {author, details, contractor, applications} = res.data;
                    setCommission({author, details, contractor})
                    setApplications({
                        considerable: applications?.map(ob => {
                            if (ob.accepted === false) {
                                return null
                            } else if (ob.accepted === null) {
                                return ob;
                            }
                        }),
                        rejected: applications?.filter(ob => ob.accepted === false),
                        accepted: applications?.filter(ob => ob.accepted === true)
                    })
                }
            })
            .finally(() => setLoading(false));
    }, [id]);


    return (
        <div className={`commission${commission?.details?.status?.id === 5 ? ' canceled' : ''}`}>
            {!loading && (
                <>
                    {commission?.contractor === undefined && applications?.considerable?.some(application => application?.accepted === null) && !detailsOpen &&
                        <div className="applications-info">
                            Operator wyraził chęć zrealizowania zlecenia. Używając strzałki wejdź w szczegóły zlecenia,
                            i potwierdź lub odrzuć operatora.
                        </div>
                    }
                    <div className="important-details">
                        <div>
                            <span className="label">ID: </span>
                            <span>#{id}</span>
                        </div>
                        <div>
                            {type === "operator" && (
                                <>
                                    <span className="label">Autor: </span>
                                    <span>

                                        {commission?.author?.firstName}{" "}
                                        {commission?.author?.lastName}
                                    </span>
                                </>
                            )}
                            {type === "client" && (
                                <>
                                    <span className="label">Operator: </span>
                                    <span>
                                        {commission?.contractor ? commission.contractor?.firstName + " " + commission.contractor?.lastName : "Brak"}
                                    </span>
                                </>
                            )}
                        </div>
                        <div>
                            <span className={`status ${commission?.details?.status?.class}`}>
                                {commission?.details?.status?.shortMessage}
                            </span>
                        </div>
                        <div>
                            <span className="label">Zapłata: </span>
                            <span>{commission?.details?.agreed_payment ? `${Number(commission?.details?.agreed_payment).toFixed(2)} zł` : "Nieustalona"}</span>
                        </div>
                    </div>
                    <div className={`details ${detailsOpen ? "open" : "closed"}`}>
                        <div className="inner">
                            {showEditForm ?
                                <>
                                    {commission?.details && <EditCommissionForm
                                        hideForm={() => setShowEditForm(false)}
                                        details={commission.details}
                                        set={setCommission}
                                    />}
                                </>
                                :
                                <>
                                    {type === "operator" && (
                                        <AuthorDetails author={commission?.author}/>
                                    )}
                                    {type === "client" && (
                                        <ContractorDetails contractor={commission?.contractor}
                                                           applications={applications}
                                                           setApplications={setApplications}
                                                           setCommission={setCommission}/>
                                    )}

                                    <OtherDetails details={commission?.details}/>
                                    {type === "client" && <>
                                        <div className={'actions'}>
                                            {commission?.contractor === undefined &&
                                                <>
                                                    <DeleteCommission id={id}/>
                                                </>}
                                            <EditCommission onClick={() => setShowEditForm(true)}/>
                                            {commission?.details?.status?.id !== 5 && commission &&
                                                <CancelCommission setCommission={setCommission}
                                                                  id={commission.details.id}/>}
                                            {commission?.details?.status?.id === 5 && commission &&
                                                <ResumeCommission setCommission={setCommission}
                                                                  id={commission.details.id}/>}
                                        </div>
                                    </>}
                                </>
                            }
                        </div>
                    </div>
                    <div className="svg-wrapper">
                        <div
                            className="svg-circle"
                            onClick={() => setDetailsOpen((prev) => !prev)}
                        >
                            <CaretDownSVG/>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default SingleCommission;
