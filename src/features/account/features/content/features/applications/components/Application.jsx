import '../styles/application.css';

const renderDecision = (accepted) => {
    if (accepted === true) {
        return {class: "accepted", message: "Zaakceptowane"}
    } else if (accepted === false) {
        return {class: "rejected", message: "Odrzucone"}
    } else if (accepted === null) {
        return {message: "Niepodjęta"}
    }
}

const Application = ({application, index}) => {
    const decision = renderDecision(application.accepted);

    const date = new Date(application.createdAt).toLocaleDateString() + " " + new Date(application.createdAt).toLocaleTimeString()
    return (
        <div className="application">
            <span>{index}</span>
            <span>{parseFloat(application.offered_payment).toFixed(2)} zł</span>
            <span>{date}</span>
            <span className={`status${decision.class ? " " + decision.class : ''}`}>{decision.message}</span>
        </div>
    )
}

export default Application;