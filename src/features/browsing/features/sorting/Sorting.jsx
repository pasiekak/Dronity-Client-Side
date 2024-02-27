import './sorting.css';
import Dropdown from "../../../../shared/component/Dropdown/Dropdown";
import {useLocation, useOutletContext} from "react-router-dom";

const Sorting = () => {
    const {sorting, setSorting} = useOutletContext();
    const location = useLocation();
    const pathname = location.pathname;


    const sortingOperatorsChoices = [{
        text: "Imię rosnąco", handleClick: () => {
            setSorting({by: "firstName", order: "ASC"})
        }
    }, {
        text: "Imię malejąco", handleClick: () => {
            setSorting({by: "firstName", order: "DESC"})
        }
    }, {
        text: "Nazwisko rosnąco", handleClick: () => {
            setSorting({by: "lastName", order: "ASC"})
        }
    }, {
        text: "Nazwisko malejąco", handleClick: () => {
            setSorting({by: "lastName", order: "DESC"})
        }
    }, {
        text: "Miasto rosnąco", handleClick: () => {
            setSorting({by: "city", order: "ASC"})
        }
    }, {
        text: "Miasto malejąco", handleClick: () => {
            setSorting({by: "city", order: "DESC"})
        }
    }]

    const sortingCommissionsChoices = [{
        text: "Sugerowana kwota rosnąco", handleClick: () => {
            setSorting({by: "suggested_payment", order: "ASC"})
        }

    }, {
        text: "Sugerowana kwota malejąco", handleClick: () => {
            setSorting({by: "suggested_payment", order: "DESC"})
        }
    }, {
        text: "Data rozpoczęcia rosnąco", handleClick: () => {
            setSorting({by: "start_date", order: "ASC"})
        }
    }, {
        text: "Data rozpoczęcia malejąco", handleClick: () => {
            setSorting({by: "start_date", order: "DESC"})
        }
    }, {
        text: "Data utworzenia zlecenia rosnąco", handleClick: () => {
            setSorting({by: "createdAt", order: "ASC"})
        }
    }, {
        text: "Data utworzenia zlecenia malejąco", handleClick: () => {
            setSorting({by: "createdAt", order: "DESC"})
        }
    }, {
        text: "Miasta rosnąco", handleClick: () => {
            setSorting({by: "city", order: "ASC"})
        }
    }, {
        text: "Miasta malejąco", handleClick: () => {
            setSorting({by: "city", order: "DESC"})
        }
    }]

    const renderSortingChoices = () => {
        if (pathname.includes('/operator-viewer')) {
            return sortingOperatorsChoices;
        } else if (pathname.includes('/commission-viewer')) {
            return sortingCommissionsChoices;
        }
    }

    return (
        <div className="sorting">
            <Dropdown trigger="Sortowanie" itemList={renderSortingChoices()}/>
        </div>
    )
}

export default Sorting;