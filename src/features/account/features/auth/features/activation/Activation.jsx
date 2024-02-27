import {useContext, useEffect, useState} from "react";
import {ServerCommunicator} from "../../../../../../shared/services/ServerCommunicator";
import {OverlayContext} from "../../../../../overlay/context/OverlayContext";
import Links from "../../../../../../shared/component/Links/Links";

const Activation = () => {
    const {setType, clearOverlay} = useContext(OverlayContext);
    const [success, setSuccess] = useState(false);
    const [show, setShow] = useState(true);
    useEffect(() => {
        setType("loading");
        const queryParams = new URLSearchParams(document.location.search);
        ServerCommunicator.handleRequest(
            "get",
            `/activation?token=${queryParams.get("token")}`,
        ).then((res) => {
            if (res.success) {
                setSuccess(true);
            }
            setShow(true);
            clearOverlay();
        });
    }, []);

    return (
        <div className="activation">
            <h1>Weryfikacja konta</h1>
            {show && (
                <>
                    {success ? (
                        <p>
                            Pomyślnie zweryfikowano użytkownika i utworzono konto. Możesz
                            teraz zalogować się na swoje konto.
                        </p>
                    ) : (
                        <p>Konto zostało już zweryfikowane. Spróbuj się zalogować.</p>
                    )}
                </>
            )}
            <Links toLogin/>
        </div>
    );
};

export default Activation;
