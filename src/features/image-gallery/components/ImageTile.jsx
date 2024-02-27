import '../styles/image-tile.css';
import TrashCanSVG from "../../../shared/assets/media/svg/TrashCanSVG/TrashCanSVG";
import {useState} from "react";
import YesOrNo from "../../../shared/component/YesOrNo/YesOrNo";
import {ServerCommunicator} from "../../../shared/services/ServerCommunicator";
import FullScreenOutSVG from "../../../shared/assets/media/svg/FullscreenSVG/out/FullScreenOutSVG";
import FullScreenInSVG from "../../../shared/assets/media/svg/FullscreenSVG/in/FullScreenInSVG";

const ImageTile = ({id, setReloadGallery, type}) => {
    const [showDeleteQuestion, setShowDeleteQuestion] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);

    const handleDelete = () => {
        setShowDeleteQuestion(false)
        ServerCommunicator.handleRequest('delete', `/api/images/${id}`).then(res => {
            console.log(res);
            setReloadGallery(prev => !prev)
        })
    }

    return (
        <>

            <div className="image-tile">
                <img src={`/api/images/${id}`} className={fullScreen ? 'full-screen' : ''} alt={''}/>
                {type === 'operator' &&
                    <TrashCanSVG className="delete-trash" onClick={() => setShowDeleteQuestion(true)}/>}
                {fullScreen ?
                    <FullScreenOutSVG className="full-screen-svg" onClick={() => setFullScreen(false)}/> :
                    <FullScreenInSVG className="full-screen-svg" onClick={() => setFullScreen(true)}/>
                }

            </div>
            {showDeleteQuestion &&
                <YesOrNo question={"Na pewno chcesz usunąć to zdjęcie?"}
                         cancelFn={() => setShowDeleteQuestion(false)}
                         approveFn={handleDelete}/>}
        </>
    )
}

export default ImageTile;