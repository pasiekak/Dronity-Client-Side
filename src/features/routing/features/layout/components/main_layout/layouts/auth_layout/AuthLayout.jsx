import "./styles/auth-layout.css";
import BlurredUpImage from "../../../../../../../../shared/component/BlurredUpImage/BlurredUpImage";
import low from "./assets/bck-100-64.png";
import high from "./assets/bck-4498-2874.png";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="content auth">
      <BlurredUpImage lowQualitySrc={low} highQualitySrc={high} height="100%" />
      <div className="outlet-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
