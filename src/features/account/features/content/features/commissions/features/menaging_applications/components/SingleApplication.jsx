import {useEffect, useState} from "react";
import {ServerCommunicator} from "../../../../../../../../../shared/services/ServerCommunicator";
import '../styles/single-application.css';
import YesOrNo from "../../../../../../../../../shared/component/YesOrNo/YesOrNo";
import LoaderSVG from "../../../../../../../../../shared/assets/media/svg/LoaderSVG/LoaderSVG";
import RejectApplicationForm from "./RejectApplicationForm";
import {useNavigate} from "react-router-dom";

const SingleApplication = ({application, setApplications, setCommission}) => {
    const [operator, setOperator] = useState();
    const [showQuestionForReject, setShowQuestionForReject] = useState(false);
    const [showQuestionForAccept, setShowQuestionForAccept] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (operator === undefined && application?.OperatorId !== undefined) {
            setLoading(true)
            ServerCommunicator.handleRequest("get", `/api/operators/${application.OperatorId}`).then(res => {
                if (res.success) {
                    setOperator(res.operator);
                }
            }).finally(() => {
                setLoading(false);
            });
        }
    }, [application, operator]);

    const handleClick = (type, rejectData) => {
        setLoading(true);
        setShowQuestionForAccept(false);
        setShowQuestionForReject(false);
        if (type === 'accept') {
            ServerCommunicator.handleRequest("put", `/api/commissions/${application.CommissionId}/applicant/${application.OperatorId}`,
                {
                    type,
                    applicationID: application.id
                }).then(res => {
                if (res.success) {
                    customSet(res.data.applications, res.data.contractor, res.data.newStatus);
                }
            }).finally(() => setLoading(false));
        } else if (type === 'reject') {
            ServerCommunicator.handleRequest("put", `/api/commissions/${application.CommissionId}/applicant/${application.OperatorId}`, {
                type,
                rejectData,
                applicationID: application.id
            }).then(res => {
                if (res.success) {
                    customSet(res.data.applications, null, res.data.newStatus);
                }
            }).finally(() => setLoading(false));
        }
    }

    const customSet = (applications, contractor, newStatus) => {
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
        if (newStatus) {
            setCommission(prev => {
                return {...prev, details: {...prev.details, status: newStatus}}
            })
        }
        if (contractor) {
            setCommission(prev => {
                return {
                    ...prev,
                    contractor: contractor,
                    details: {...prev.details, agreed_payment: application.offered_payment}
                }
            })
        }
    }

    return (
        <div className={`single-application${loading ? ' loading' : ''}`}>
            {loading ? <LoaderSVG className="loader"/> :
                <>
                    <div className="field">
                        <span>{operator?.firstName} {operator?.lastName}</span>
                    </div>
                    <div className="field">
                        <span>{operator?.email}</span>
                    </div>
                    <div className="field">
                        <span>{operator?.phone}</span>
                    </div>
                    <div className="field">
                        <span>{operator?.city}</span>
                    </div>
                    <div className="field">
                        <span>{parseFloat(application?.offered_payment).toFixed(2)}zł</span>
                    </div>
                    <div className="field application-actions">
                        <button className="dark_blue_button"
                                onClick={() => navigate(`/operator-viewer/operator/${application.OperatorId}`)}>Zobacz
                            profil
                        </button>
                        <button className="violet_button" onClick={() => setShowQuestionForReject(true)}>Odrzuć</button>
                        <button className="violet_button" onClick={() => setShowQuestionForAccept(true)}>Zatwierdź
                        </button>
                    </div>
                    {showQuestionForAccept &&
                        <YesOrNo
                            question="Czy na pewno chcesz zatwierdzić tego operatora jako wykonawcę twojego zlecenia?"
                            approveFn={() => handleClick('accept')} cancelFn={() => setShowQuestionForAccept(false)}/>}
                    {showQuestionForReject && <RejectApplicationForm
                        question="Czy na pewno chcesz odrzucić tego operatora? Operacja jest ostateczna i nie będzie można potem zatwierdzić tego operatora jako wykonawcy zlecenia, o ile nie zgłosi się jeszcze raz."
                        approveFn={(rejectData) => handleClick('reject', rejectData)}
                        cancelFn={() => setShowQuestionForReject(false)}
                    />}
                </>}
        </div>
    )
}
export default SingleApplication;