import {Navigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../account/context/UserContext";

const ProtectedRoute = ({redirectPath = "/", children, accessRoles}) => {
    const {user} = useContext(UserContext);
    const access = accessRoles.includes(user?.Role?.name)
    if (!user || !access) {
        return <Navigate to={redirectPath} replace/>;
    }
    return children;
};

export default ProtectedRoute;
