import {useEffect, useState} from "react";
import {ServerCommunicator} from "../../../../../../../../shared/services/ServerCommunicator";
import CaretDownSVG from "../../../../../../../../shared/assets/media/svg/CaretSVG/down/CaretDownSVG";
import "./style.css";
import AuthorDetails from "./AuthorDetails";
import OtherDetails from "./OtherDetails";
import ContractorDetails from "./ContractorDetails";
import DeleteCommission from "../../features/deleting/DeleteCommission";
import EditCommission from "../../features/editing/components/EditCommission";
import EditCommissionForm from "../../features/editing/components/EditCommissionForm";

const SingleCommission = ({id, type}) => {
    const [commission, setCommission] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showEditForm, setShowEditForm] = useState(false);
    const [detailsOpen, setDetailsOpen] = useState(false);
    useEffect(() => {
        setCommission(null)
        ServerCommunicator.handleRequest("get", `/api/commissions/${id}`)
            .then((res) => {
                if (res.success) setCommission(res.data);
            })
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <div className="commission">
            {!loading && (
                <>
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
                                        {commission?.contractor?.firstName}{" "}
                                        {commission?.contractor?.lastName}
                                    </span>
                                </>
                            )}
                        </div>
                        <div>
                            <span className={`completion ${
                                commission?.details?.completed ? "completed" : "not-completed"
                            }`}>
                                {commission?.details?.completed ? "Zakończone" : "W trakcie"}
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
                                    <EditCommissionForm
                                        hideForm={() => setShowEditForm(false)}
                                        details={commission.details}
                                        set={setCommission}
                                    />
                                </>
                                :
                                <>
                                    {type === "operator" && (
                                        <AuthorDetails author={commission?.author}/>
                                    )}
                                    {type === "client" && (
                                        <ContractorDetails contractor={commission?.contractor}/>
                                    )}

                                    <OtherDetails details={commission?.details}/>
                                    <div className={'actions'}>
                                        {commission?.contractor === undefined &&
                                            <>
                                                <DeleteCommission id={id}/>
                                                <EditCommission onClick={() => setShowEditForm(true)}/>
                                            </>}
                                    </div>
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
