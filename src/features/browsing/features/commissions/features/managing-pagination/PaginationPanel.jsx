import './pagination-panel.css';
import {useEffect, useState} from "react";
import {isNumeric} from "../../../../../../shared/utils/utils";
import CaretLeftSVG from "../../../../../../shared/assets/media/svg/CaretSVG/left/CaretLeftSVG";
import CaretRightSVG from "../../../../../../shared/assets/media/svg/CaretSVG/right/CaretRightSVG";


const PaginationPanel = ({incPage, decPage, page, maxPage, setPage}) => {
    const [inputValue, setInputValue] = useState(`${page}/${maxPage}`)

    useEffect(() => {
        setInputValue(`${page}/${maxPage}`)
    }, [page, maxPage]);

    const handleChange = (e) => {
        e.preventDefault();
        const stringValue = e.target.value;
        const firstPart = stringValue.split('/')[0];
        if (isNumeric(firstPart)) {
            const num = parseInt(firstPart);
            if (num > 0 && num <= maxPage) {
                setInputValue(`${num}/${maxPage}`);
                setPage(num);
            }
        }
    }

    return (
        <div className="pagination-panel">
            <CaretLeftSVG className="caret" onClick={decPage}/>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <CaretRightSVG className="caret" onClick={incPage}/>
        </div>
    )
}

export default PaginationPanel;