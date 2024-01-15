import SingleCommission from "./components/SingleCommission";
import './styles/commission-list.css';

const CommissionList = ({commissions}) => {
    return (
        <div className="commission-list">
            <div className="columns">
                <span>Tytuł zlecenia</span>
                <span>Data rozpoczęcia</span>
                <span>Miasto</span>
                <span>Sugerowana zapłata</span>
            </div>
            <div className="commissions-wrapper">
                {commissions.map((commission, index) => <SingleCommission key={commission.id} commission={commission}
                                                                          index={index}/>)}
            </div>
        </div>
    )
}

export default CommissionList