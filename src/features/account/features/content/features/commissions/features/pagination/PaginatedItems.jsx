import {useState} from "react";
import CaretLeftSVG from "../../../../../../../../shared/assets/media/svg/CaretSVG/left/CaretLeftSVG";
import CaretRightSVG from "../../../../../../../../shared/assets/media/svg/CaretSVG/right/CaretRightSVG";

import './styles/style.css';

const PaginatedItems = ({itemsPerPage, items, Component, typeOfUser}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handlePageInc = () => {
        if (currentPage !== totalPages) setCurrentPage(prev => prev + 1);
    }

    const handlePageDec = () => {
        if (currentPage !== 1) setCurrentPage(prev => prev - 1);
    }

    return (
        <>
            {currentItems.map((item, index) => (
                <Component key={index} {...item} type={typeOfUser}/>
            ))}
            <div className="pagination-panel">
                <CaretLeftSVG className={'caret'} onClick={handlePageDec}/>
                {Array.from({length: totalPages}, (_, index) => index + 1).map((page) => (
                    <div key={page}
                         onClick={() => handlePageChange(page)}
                         className={`dot${page === currentPage ? ' selected' : ''}`}>

                    </div>
                ))}
                <CaretRightSVG className={'caret'} onClick={handlePageInc}/>
            </div>
        </>
    )
}

export default PaginatedItems;