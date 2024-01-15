import "./styles/styles.css";
import {useContext} from "react";
import {OverlayContext} from "./context/OverlayContext";
import LoaderSVG from "../../shared/assets/media/svg/LoaderSVG/LoaderSVG";

const Overlay = () => {
    const {type, message} = useContext(OverlayContext);

    return (
        <div className="overlay">
            {type === "loading" && <LoaderSVG height="128px"/>}
            {type === "message" && (
                <div className="message-container">
                    <h1>{message}</h1>
                    <LoaderSVG height="128px"/>
                </div>
            )}
        </div>
    );
};

export default Overlay;
