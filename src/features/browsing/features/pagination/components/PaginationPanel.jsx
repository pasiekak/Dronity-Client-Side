import '../styles/pagination-panel.css';
import {useEffect, useState} from "react";
import {isNumeric} from "../../../../../shared/utils/utils";
import CaretLeftSVG from "../../../../../shared/assets/media/svg/CaretSVG/left/CaretLeftSVG";
import CaretRightSVG from "../../../../../shared/assets/media/svg/CaretSVG/right/CaretRightSVG";
import {useOutletContext} from "react-router-dom";


const PaginationPanel = () => {
    const {pagination, setPagination, incPage, decPage} = useOutletContext();
    const [inputValue, setInputValue] = useState(`${pagination.page}/${pagination.maxPage}`)

    useEffect(() => {
        setInputValue(`${pagination.page}/${pagination.maxPage}`)
    }, [pagination.page, pagination.maxPage]);

    const handleChange = (e) => {
        e.preventDefault();
        const stringValue = e.target.value;
        const firstPart = stringValue.split('/')[0];
        if (isNumeric(firstPart)) {
            const num = parseInt(firstPart);
            if (num > 0 && num <= pagination.maxPage) {
                setInputValue(`${num}/${pagination.maxPage}`);
                setPagination(prev => {
                    return {...prev, page: num}
                });
            }
        }
    }

    return (
        <div className="pagination-panel">
            <CaretLeftSVG className="caret" onClick={decPage} disabled={pagination.page !== 1}/>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <CaretRightSVG className="caret" onClick={incPage} disabled={pagination.page !== pagination.maxPage}/>
        </div>
    )
}

export default PaginationPanel;