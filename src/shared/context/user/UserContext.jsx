import {createContext, useEffect, useState} from "react";
import { useCookies } from "react-cookie";
import {ServerCommunicator} from "../../../services/ServerCommunicator";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [cookies, setCookie] = useCookies(['User']);
    const [user, setUser] = useState(cookies.User);

    useEffect(() => {
        setUser(cookies.User)
    }, [cookies.User]);

    const setUserCookie = (userData) => {
        setCookie('User', userData, { path: '/' });
        setUser(userData);
    };

    const logout = async () => {
        return await ServerCommunicator.handleRequest('delete','/logout').then();
    };

    return (
        <UserContext.Provider
            value={{
                user,
                setUserCookie,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
