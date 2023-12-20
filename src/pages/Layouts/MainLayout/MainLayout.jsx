import Header from "../../../shared/component/Header/Header";
import Footer from "../../../shared/component/Footer/Footer";
import {Outlet} from "react-router-dom";
import Overlay from "../../../feature/Overlay/Overlay";
import {useContext} from "react";
import {OverlayContext} from "../../../shared/context/overlay/OverlayContext";

const MainLayout = () => {
    const {type} = useContext(OverlayContext);
    return (
        <>
            {type && <Overlay/>}
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default MainLayout;