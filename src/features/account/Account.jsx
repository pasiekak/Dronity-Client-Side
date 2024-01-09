import "./styles/account.css";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./context/UserContext";
import {ServerCommunicator} from "../../shared/services/ServerCommunicator";
import AccountNavigation from "./features/navigation/AccountNavigation";
import {Outlet} from "react-router-dom";
import {OverlayContext} from "../overlay/context/OverlayContext";
import AccountProfile from "./features/profile/AccountProfile";

const Account = () => {
    const {user} = useContext(UserContext);
    const [userDetails, setUserDetails] = useState(null);
    const {setType, clearOverlay} = useContext(OverlayContext);

    useEffect(() => {
        setType("loading");
        ServerCommunicator.handleRequest("get", `/api/accounts/${user.id}`).then(
            (res) => {
                if (res.success) {
                    setUserDetails(res.data);
                    console.log(res.data)
                }
                clearOverlay();
            },
        );
    }, [user.id]);

    return (
        <div className="content account">
            {userDetails && (
                <>
                    <AccountProfile userDetails={userDetails}/>
                    <AccountNavigation userDetails={userDetails}/>
                    <Outlet context={[userDetails, setUserDetails]}/>
                </>
            )}
        </div>
    );
};

export default Account;
