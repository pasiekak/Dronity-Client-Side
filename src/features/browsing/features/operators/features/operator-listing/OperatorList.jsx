import {useOutletContext} from "react-router-dom";
import OperatorItem from "./components/OperatorItem";
import './styles/operator-list.css';

const OperatorList = () => {
    const {operators} = useOutletContext();
    return (
        <div className="operator-list">
            <div className="columns">
                <span></span>
                <span>Imię i nazwisko</span>
                <span>Licencja</span>
                <span>Miasto</span>
            </div>
            {operators?.map((operator, index) => <OperatorItem key={index} operator={operator} index={index}/>)}
        </div>
    )
}

export default OperatorList;