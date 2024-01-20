import ResumeSVG from "../../../../../../../../shared/assets/media/svg/ResumeSVG/ResumeSVG";
import {ServerCommunicator} from "../../../../../../../../shared/services/ServerCommunicator";

const ResumeCommission = ({setCommission, id}) => {

    const handleClick = () => {
        ServerCommunicator.handleRequest('put', `/api/commissions/${id}?type=resume`).then(res => {
            if (res.success) {
                setCommission(prev => {
                    return {...prev, details: {...res.data.newCommission}}
                })
            }
        })
    }

    return (
        <ResumeSVG className={'resume'} title={'Aktywuj ponownie zlecenie.'} onClick={handleClick}/>
    )
}

export default ResumeCommission;