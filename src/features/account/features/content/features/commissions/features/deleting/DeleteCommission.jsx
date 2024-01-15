import TrashCanSVG from "../../../../../../../../shared/assets/media/svg/TrashCanSVG/TrashCanSVG";
import {useState} from "react";
import YesOrNo from "../../../../../../../../shared/component/YesOrNo/YesOrNo";
import {ServerCommunicator} from "../../../../../../../../shared/services/ServerCommunicator";
import {useOutletContext} from "react-router-dom";

const DeleteCommission = ({id}) => {
    const [userDetails, setUserDetails] = useOutletContext();
    const [showQuestion, setShowQuestion] = useState(false);

    const handleDelete = () => {
        ServerCommunicator.handleRequest('delete', `/api/commissions/${id}`).then(res => {
            if (res.success) {
                setUserDetails(prev => {
                    const temp = JSON.parse(JSON.stringify(prev));
                    const newCommissions = temp.Client.AuthorCommissions.filter(com => com.id !== id);
                    temp.Client.AuthorCommissions = [...newCommissions];
                    return temp;
                })
            }
        }).finally(() => {
            setShowQuestion(false);
        })
    }

    return (
        <>
            <TrashCanSVG className={'trash-can'}
                         onClick={() => setShowQuestion(true)}
                         title="Usuń to zamówienie"/>
            {showQuestion &&
                <YesOrNo question={'Na pewno chcesz usunąć to zlecenie?'}
                         cancelFn={() => setShowQuestion(false)}
                         approveFn={handleDelete}/>}
        </>
    )
}

export default DeleteCommission;