import './sorting.css';
import Dropdown from "../../../../../../shared/component/Dropdown/Dropdown";

const Sorting = ({sorting, setSorting}) => {
    const sortingChoices = [{
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

    return (
        <div className="sorting">
            <Dropdown trigger="Sortowanie" itemList={sortingChoices}/>
        </div>
    )
}

export default Sorting;