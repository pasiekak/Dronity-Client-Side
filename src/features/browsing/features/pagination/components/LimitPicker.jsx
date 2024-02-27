import '../styles/limit-picker.css';
import {useOutletContext} from "react-router-dom";

const LimitPicker = () => {
    const {pagination, setPagination} = useOutletContext();
    return (
        <div className="limit-picker" title="Wybór ilości wyświetlanych zleceń.">
            <button className={pagination.limit === 5 ? 'selected' : ''} onClick={() => setPagination(prev => {
                return {...prev, limit: 5}
            })}>5
            </button>
            <button className={pagination.limit === 10 ? 'selected' : ''} onClick={() => setPagination(prev => {
                return {...prev, limit: 10}
            })}>10
            </button>
            <button className={pagination.limit === 20 ? 'selected' : ''} onClick={() => setPagination(prev => {
                return {...prev, limit: 20}
            })}>20
            </button>
            <button className={pagination.limit === 40 ? 'selected' : ''} onClick={() => setPagination(prev => {
                return {...prev, limit: 40}
            })}>40
            </button>
        </div>
    )
}

export default LimitPicker;