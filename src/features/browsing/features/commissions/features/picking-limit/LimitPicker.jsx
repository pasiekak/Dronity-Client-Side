import './limit-picker.css';

const LimitPicker = ({limit, setLimit}) => {
    return (
        <div className="limit-picker" title="Wybór ilości wyświetlanych zleceń.">
            <button className={limit === 5 ? 'selected' : ''} onClick={() => setLimit(5)}>5</button>
            <button className={limit === 10 ? 'selected' : ''} onClick={() => setLimit(10)}>10</button>
            <button className={limit === 20 ? 'selected' : ''} onClick={() => setLimit(20)}>20</button>
            <button className={limit === 40 ? 'selected' : ''} onClick={() => setLimit(40)}>40</button>
        </div>
    )
}

export default LimitPicker;