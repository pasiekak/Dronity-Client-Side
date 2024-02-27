import {useLocation, useOutletContext} from "react-router-dom";

const ItemsInfo = () => {
    const {pagination} = useOutletContext();
    const location = useLocation();

    const renderCountInfo = () => {
        if (location.pathname.includes('/commission-viewer')) {
            if (pagination.count === 1) {
                return `Dostępne jest ${pagination.count} zlecenie.`
            } else if (pagination.count >= 2 && pagination.count <= 4) {
                return `Dostępne są ${pagination.count} zlecenia.`
            } else {
                return `Dostępne jest ${pagination.count} zleceń`
            }
        } else if (location.pathname.includes('/operator-viewer')) {
            if (pagination.count === 1) {
                return `Dostępny jest ${pagination.count} operator.`
            } else {
                return `Dostępnych jest ${pagination.count} operatorów.`
            }
        }
    }

    return (
        <div className="list-info">
            <span>{renderCountInfo()}</span>
        </div>
    )
}

export default ItemsInfo;