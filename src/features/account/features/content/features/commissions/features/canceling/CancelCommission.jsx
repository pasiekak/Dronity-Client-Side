import CancelSVG from "../../../../../../../../shared/assets/media/svg/CancelSVG/CancelSVG";
import {ServerCommunicator} from "../../../../../../../../shared/services/ServerCommunicator";

const CancelCommission = ({setCommission, id}) => {

    const handleClick = () => {
        ServerCommunicator.handleRequest('put', `/api/commissions/${id}`, {status: 5}).then(res => {
            if (res.success) {
                setCommission(prev => {
                    return {...prev, details: {...res.data.newCommission}}
                })
            }
        })
    }

    return (
        <CancelSVG className={'cancel'} title={'Tymczasowo anuluj zgłoszenie.'} onClick={handleClick}/>
    )
}

export default CancelCommission;