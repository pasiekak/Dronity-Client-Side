import AdminAccountNavigation from "./components/AdminAccountNavigation";
import OperatorAccountNavigation from "./components/OperatorAccountNavigation";
import ClientAccountNavigation from "./components/ClientAccountNavigation";

import "./styles/account-navigation.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AccountNavigation = ({ userDetails }) => {
  const [selectedTab, setSelectedTab] = useState(
    parseInt(sessionStorage.getItem("acc-nav")) || 1,
  );
  let location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname.includes("/account/settings")) {
      updateSelectedTab(1);
    } else if (pathname.includes("/account/administrator")) {
      updateSelectedTab(2);
    } else if (pathname.includes("/account/personal")) {
      updateSelectedTab(2);
    } else if (pathname.includes("/account/commissions")) {
      updateSelectedTab(3);
    } else if (pathname.includes("/account")) {
      updateSelectedTab(1);
    }
  }, [location.pathname]);

  const updateSelectedTab = (value) => {
    sessionStorage.setItem("acc-nav", value);
    setSelectedTab(value);
  };

  const navigation = {
    administrator: (
      <AdminAccountNavigation selected={selectedTab} set={updateSelectedTab} />
    ),
    operator: (
      <OperatorAccountNavigation
        selected={selectedTab}
        set={updateSelectedTab}
      />
    ),
    client: (
      <ClientAccountNavigation selected={selectedTab} set={updateSelectedTab} />
    ),
  };

  return navigation[userDetails.Role.name];
};

export default AccountNavigation;
