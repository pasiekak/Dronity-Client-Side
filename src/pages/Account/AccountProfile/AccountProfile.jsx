import './account-profile.css';
import {useEffect, useRef, useState} from "react";
import placeholderImage from './user-placeholder.png';
import AddImageSVG from "../../../shared/component/SVG/AddImageSVG/AddImageSVG";
import {ServerCommunicator} from "../../../services/ServerCommunicator";
import BlurredUpImage from "../../../shared/component/BlurredUpImage/BlurredUpImage";

const AccountProfile = ({userDetails}) => {
    const [showedImage, setShowedImage] = useState(placeholderImage);
    const fileInputRef = useRef();
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        if (file) {
            formData.append('profileImage', file);
            ServerCommunicator.handleFilesRequest(`/api/images/accounts/${userDetails.id}`, formData).then(res => {
                if(res.success) setShowedImage(URL.createObjectURL(file));
            })


        }
    }

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    useEffect(() => {
        const userImages = userDetails?.Images;
        if (userImages?.length > 0) {
            const id = userImages.find(image => image.profile === true)?.id;
            if(id) setShowedImage(`/api/images/${id}`)
        }

    },[userDetails])

    return (
        <div className='profile'>
            <div className='profile-image-wrapper'>
                <BlurredUpImage lowQualitySrc={showedImage}
                                highQualitySrc={showedImage}
                                onClick={handleImageClick}/>
                <AddImageSVG onClick={handleImageClick}/>
                <input
                    type='file'
                    accept='.jpg, .jpeg, .png'
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{display: 'none'}}
                />
            </div>
            <div className='details-wrapper'>
                <div className='top-details'>
                    <span className='login'>{userDetails.login}</span>
                    {(userDetails.Client || userDetails.Operator) &&
                        <span className='name'>
                            {userDetails.Client?.firstName || userDetails.Operator?.firstName} {userDetails.Client?.lastName || userDetails.Operator?.lastName}
                        </span>}
                </div>
                <div className='bottom-details'>
                    <span className='role'>{userDetails.Role.name}</span>
                    <div className='dot'></div>
                    {(userDetails.Client?.phone || userDetails.Operator?.phone) &&
                        <>
                            <span className='phone'>
                                {userDetails.Client?.phone || userDetails.Operator?.phone}
                            </span>
                            <div className='dot'></div>
                        </>
                    }
                    <span className='created'>Dołączono {new Date(userDetails.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    )
}

export default AccountProfile;