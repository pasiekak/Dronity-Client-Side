const Commission = ({details}) => {
    return (
        <div className="commission">
            <h2>Dane zlecenia</h2>
            <div className="field">
                <span>Data rozpoczęcia: </span>
                <span>{new Date(details.start_date).toLocaleDateString()}</span>
            </div>
            <div className="field">
                <span>Data zakończenia: </span>
                <span>{new Date(details.end_date).toLocaleDateString()}</span>
            </div>
            <div className="field">
                <span>Miasto: </span>
                <span>{details.city}</span>
            </div>
            <div className="field">
                <span>Proponowana zapłata: </span>
                <span>{parseFloat(details.suggested_payment).toFixed(2)} zł</span>
            </div>
        </div>
    )
}

export default Commission;