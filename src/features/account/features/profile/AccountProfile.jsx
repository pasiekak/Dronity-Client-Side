import "./styles/account-profile.css";
import { useEffect, useRef, useState } from "react";
import placeholderImage from "./assets/user-placeholder.png";
import AddImageSVG from "../../../../shared/assets/media/svg/AddImageSVG/AddImageSVG";
import { ServerCommunicator } from "../../../../shared/services/ServerCommunicator";
import BlurredUpImage from "../../../../shared/component/BlurredUpImage/BlurredUpImage";

const AccountProfile = ({ userDetails }) => {
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    if (file) {
      formData.append("profileImage", file);
      ServerCommunicator.handleFilesRequest(
        `/api/images/accounts/${userDetails.id}`,
        formData,
      ).then((res) => {
        if (res.success) setProfileImage(URL.createObjectURL(file));
      });
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useEffect(() => {
    const userImages = userDetails?.Images;
    if (userImages?.length > 0) {
      const id = userImages.find((image) => image.profile === true)?.id;
      if (id) setProfileImage(`/api/images/${id}`);
    }
  }, [userDetails, profileImage]);

  return (
    <div className="profile">
      <div className="profile-image-wrapper">
        {profileImage ? (
          <BlurredUpImage
            lowQualitySrc={profileImage}
            highQualitySrc={profileImage}
          />
        ) : (
          <BlurredUpImage
            lowQualitySrc={placeholderImage}
            highQualitySrc={placeholderImage}
          />
        )}
        <AddImageSVG onClick={handleImageClick} />
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>
      <div className="details-wrapper">
        <div className="top-details">
          <span className="login">{userDetails.login}</span>
          {(userDetails.Client || userDetails.Operator) && (
            <span className="name">
              {userDetails.Client?.firstName || userDetails.Operator?.firstName}{" "}
              {userDetails.Client?.lastName || userDetails.Operator?.lastName}
            </span>
          )}
        </div>
        <div className="bottom-details">
          <span className="role">{userDetails.Role.name}</span>
          <div className="dot"></div>
          {(userDetails.Client?.phone || userDetails.Operator?.phone) && (
            <>
              <span className="phone">
                {userDetails.Client?.phone || userDetails.Operator?.phone}
              </span>
              <div className="dot"></div>
            </>
          )}
          <span className="created">
            Dołączono {new Date(userDetails.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccountProfile;
