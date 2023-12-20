import './account.css';
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../shared/context/user/UserContext";
import {ServerCommunicator} from "../../services/ServerCommunicator";
import AccountNavigation from "./AccountNavigation/AccountNavigation";
import {Outlet} from "react-router-dom";
import {OverlayContext} from "../../shared/context/overlay/OverlayContext";
import AccountProfile from "./AccountProfile/AccountProfile";

const Account = () => {
    const { user } = useContext(UserContext);
    const [userDetails, setUserDetails] = useState(null);
    const {setType, clearOverlay} = useContext(OverlayContext);
    useEffect(() => {
        setType('loading');
        ServerCommunicator.handleRequest('get', `/api/accounts/${user.id}`).then(res => {
            if(res.success) {
                setUserDetails(res.data);
            }
            clearOverlay();
        })
    }, [user])

    return (
        <div className='content account'>
            {
                userDetails &&
                    <>
                        <AccountProfile userDetails={userDetails}/>
                        <AccountNavigation userDetails={userDetails}/>
                        <Outlet context={userDetails}/>
                    </>
            }
        </div>
    )
}

export default Account;
