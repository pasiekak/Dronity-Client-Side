import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ServerCommunicator} from "../../../../../../shared/services/ServerCommunicator";
import Profile from "./components/Profile";
import './styles/operator-page.css';
import Description from "./components/Description";
import ImageGallery from "../../../../../image-gallery/ImageGallery";

const OperatorPage = () => {
    const id = parseInt(useParams().id);
    const [operator, setOperator] = useState(null);
    const [operatorImagesID, setOperatorImagesID] = useState(null);

    useEffect(() => {
        ServerCommunicator.handleRequest('get', `/api/operators/${id}`).then(res => {
            if (res.success) {
                setOperator(res.operator);
                setOperatorImagesID(res.operator?.Account?.Images[0]?.id)
            }
        })
    }, [id]);

    return (
        <div className="operator-page">
            <Profile imageID={operatorImagesID}
                     name={{firstName: operator?.firstName, lastName: operator?.lastName}}
                     info={{
                         phone: operator?.phone,
                         email: operator?.Account?.email,
                         city: operator?.city,
                         license: operator?.license
                     }}
            />
            <Description description={operator?.description}/>
            <ImageGallery operatorID={id}/>
        </div>
    )
}

export default OperatorPage;