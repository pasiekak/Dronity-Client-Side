import NewCommissionForm from "./components/NewCommissionForm";
import './styles/style.css';
import {useOutletContext} from "react-router-dom";

const AddCommission = () => {
    const [userDetails, setUserDetails] = useOutletContext()

    const handleAddCommission = (id) => {
        setUserDetails(prev => {
            console.log(prev)
            const temp = JSON.parse(JSON.stringify(prev));
            temp.Client.AuthorCommissions = [{id}, ...temp.Client.AuthorCommissions]
            return temp;
        })
    }

    return (
        <div className='add-commission account-bottom'>
            <h1>Dodawanie nowego zlecenia</h1>
            <NewCommissionForm handleAddCommission={handleAddCommission}/>
        </div>
    )
}

export default AddCommission;