import {useEffect, useState} from "react";
import {ServerCommunicator} from "../../../../../../../../../shared/services/ServerCommunicator";
import '../styles/single-application.css';
import YesOrNo from "../../../../../../../../../shared/component/YesOrNo/YesOrNo";
import LoaderSVG from "../../../../../../../../../shared/assets/media/svg/LoaderSVG/LoaderSVG";

const SingleApplication = ({application, setCommission}) => {
    const [operator, setOperator] = useState();
    const [showQuestionForReject, setShowQuestionForReject] = useState(false);
    const [showQuestionForAccept, setShowQuestionForAccept] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (operator === undefined) {
            setLoading(true)
            ServerCommunicator.handleRequest("get", `/api/operators/${application.OperatorId}`).then(res => {
                if (res.success) {
                    setOperator(res.operator);
                }
            }).finally(() => setLoading(false));
        }
    }, [application, operator]);

    // const handleReject = () => {
    //     setLoading(true);
    //     setShowQuestionForReject(false);
    //     ServerCommunicator.handleRequest("delete", `/api/commissions/${application.CommissionId}/applicant/${application.OperatorId}`).then(res => {
    //         if (res.success) {
    //             setCommission(prev => {
    //                 const newApplications = prev.applications.filter((ob) => {
    //                     return ob !== application
    //                 })
    //                 if (JSON.stringify(newApplications) === '[]') {
    //                     return {...prev, applications: null}
    //                 } else {
    //                     return {...prev, applications: newApplications}
    //                 }
    //             })
    //         }
    //     }).finally(() => {
    //         setLoading(false)
    //     })
    //
    // }
    //
    // const handleAccept = () => {
    //     setLoading(true);
    //     setShowQuestionForAccept(false);
    //     ServerCommunicator.handleRequest("put", `/api/commissions/${application.CommissionId}/applicant/${application.OperatorId}`).then(res => {
    //         if (res.success) {
    //             setCommission(prev => {
    //                 return {
    //                     ...prev,
    //                     applications: res.data.applications,
    //                     details: res.data.commission,
    //                     contractor: res.data.contractor
    //                 }
    //             })
    //         }
    //     }).finally(() => setLoading(false));
    // }

    const handleClick = (type) => {
        setLoading(true);
        setShowQuestionForAccept(false);
        setShowQuestionForReject(false);
        if (type === 'accept') {
            ServerCommunicator.handleRequest("put", `/api/commissions/${application.CommissionId}/applicant/${application.OperatorId}`, {type}).then(res => {
                if (res.success) {
                    setCommission(prev => {
                        return {
                            ...prev,
                            contractor: res.data.contractor,
                            applications: res.data.applications,
                            details: {...prev.details, agreed_payment: application.offered_payment}
                        }
                    })
                }
            }).finally(() => setLoading(false));
        } else if (type === 'reject') {
            ServerCommunicator.handleRequest("put", `/api/commissions/${application.CommissionId}/applicant/${application.OperatorId}`, {type}).then(res => {
                if (res.success) {
                    setCommission(prev => {
                        return {...prev, applications: res.data.applications}
                    })
                }
            }).finally(() => setLoading(false));
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
                        <button className="dark_blue_button">Zobacz profil</button>
                        <button className="violet_button" onClick={() => setShowQuestionForReject(true)}>Odrzuć</button>
                        <button className="violet_button" onClick={() => setShowQuestionForAccept(true)}>Zatwierdź
                        </button>
                    </div>
                    {showQuestionForAccept &&
                        <YesOrNo
                            question="Czy na pewno chcesz zatwierdzić tego operatora jako wykonawcę twojego zlecenia?"
                            approveFn={() => handleClick('accept')} cancelFn={() => setShowQuestionForAccept(false)}/>}
                    {showQuestionForReject && <YesOrNo
                        question="Czy na pewno chcesz odrzucić tego operatora? Operacja jest ostateczna i nie będzie można potem zatwierdzić tego operatora jako wykonawcy zlecenia, o ile nie zgłosi się jeszcze raz."
                        approveFn={() => handleClick('reject')} cancelFn={() => setShowQuestionForReject(false)}
                    />}
                </>}
        </div>
    )
}
export default SingleApplication;