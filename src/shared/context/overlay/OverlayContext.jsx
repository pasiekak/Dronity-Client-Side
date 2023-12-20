import {createContext, useState} from "react";

export const OverlayContext = createContext();

export const OverlayProvider = ({children}) => {
    const [type, setType] = useState(null);
    const [message, setMessage] = useState(null);

    const clearOverlay = () => {
        setType(null);
        setMessage(null);
    }

    return (
        <OverlayContext.Provider
        value={{
            type, message,
            setType, setMessage,
            clearOverlay
        }}>
            {children}
        </OverlayContext.Provider>
    )
}