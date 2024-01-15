import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import Overlay from "../../../../../overlay/Overlay";
import { useContext } from "react";
import { OverlayContext } from "../../../../../overlay/context/OverlayContext";

const MainLayout = () => {
  const { type } = useContext(OverlayContext);
  return (
    <>
      {type && <Overlay />}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default MainLayout;
