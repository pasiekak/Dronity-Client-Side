import './styles.css';
import {useContext} from "react";
import {OverlayContext} from "../../shared/context/overlay/OverlayContext";

const Overlay = () => {
    const {type, message} = useContext(OverlayContext);

    return (
        <div className='overlay'>
                {type === 'loading' &&
                    <div className='loading-spinner'></div>}
                {type === 'message' &&
                    <div className='message-container'>
                        <h1>{message}</h1>
                        <div className='loading-spinner'></div>
                    </div>}
        </div>
    )
}

export default Overlay;