import AdminAccountNavigation from "./AdminAccountNavigation/AdminAccountNavigation";
import OperatorAccountNavigation from "./OperatorAccountNavigation/OperatorAccountNavigation";
import ClientAccountNavigation from "./ClientAccountNavigation/ClientAccountNavigation";

import './account-navigation.css';
import {useState} from "react";

const AccountNavigation = ({userDetails}) => {
    const [selectedTab, setSelectedTab] = useState(1);
    const renderNavigation = () => {
        switch (userDetails.Role.name) {
            case 'administrator' : return <AdminAccountNavigation selected={selectedTab} set={setSelectedTab}/>;
            case 'operator' : return <OperatorAccountNavigation selected={selectedTab} set={setSelectedTab}/>;
            case 'client' : return <ClientAccountNavigation selected={selectedTab} set={setSelectedTab}/>;
            default: break;
        }
    }

    return (
        <>
            {renderNavigation()}
        </>
    )
}

export default AccountNavigation;