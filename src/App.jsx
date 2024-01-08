import { RouterProvider } from "react-router-dom";
import router from "./features/routing/Router";
import React from "react";
import { OverlayProvider } from "./features/overlay/context/OverlayContext";
import { UserProvider } from "./features/account/context/UserContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <OverlayProvider>
          <RouterProvider router={router} />
        </OverlayProvider>
      </UserProvider>
    </>
  );
};

export default App;
