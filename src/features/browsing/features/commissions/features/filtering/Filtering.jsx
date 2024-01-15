import Dropdown from "../../../../../../shared/component/Dropdown/Dropdown";
import FilteringForm from "./components/FilteringForm";

import './styles/filtering.css';

const Filtering = ({filters, setFilters}) => {
    return (
        <div className="filtering">
            <Dropdown trigger="Filtrowanie" component={<FilteringForm filters={filters} setFilters={setFilters}/>}/>
        </div>
    )
}
export default Filtering;