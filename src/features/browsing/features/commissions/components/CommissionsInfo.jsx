const CommissionsInfo = ({count}) => {

    const renderCountInfo = () => {
        if (count === 1) {
            return `Dostępne jest ${count} zlecenie.`
        } else if (count >= 2 && count <= 4) {
            return `Dostępne są ${count} zlecenia.`
        } else {
            return `Dostępne jest ${count} zleceń`
        }
    }

    return (
        <div className="list-info">
            <span>{renderCountInfo()}</span>
        </div>
    )
}

export default CommissionsInfo;