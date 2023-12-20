import WidthController from "./feature/WidthController/WidthController";
import {RouterProvider} from "react-router-dom";
import router from "./feature/Routing/Router";
import React from "react";
import {OverlayProvider} from "./shared/context/overlay/OverlayContext";
import {UserProvider} from "./shared/context/user/UserContext";


const App = () => {
    return (
        <>
            <UserProvider>
                <OverlayProvider>
                    {/*<WidthController/>*/}
                    <RouterProvider router={router}/>
                </OverlayProvider>
            </UserProvider>
        </>
    )
}

export default App;