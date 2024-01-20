import Dropdown from "../../../../shared/component/Dropdown/Dropdown";
import FilteringForm from "./components/FilteringForm";

import './styles/filtering.css';
import {useOutletContext} from "react-router-dom";

const Filtering = () => {
    const {filters, setFilters} = useOutletContext();

    return (
        <div className="filtering">
            <Dropdown trigger="Filtrowanie" component={<FilteringForm filters={filters} setFilters={setFilters}/>}/>
        </div>
    )
}
export default Filtering;