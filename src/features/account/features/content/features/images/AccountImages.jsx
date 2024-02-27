import {useOutletContext} from "react-router-dom";
import ImageGallery from "../../../../../image-gallery/ImageGallery";
import AddImage from "./features/adding-image/AddImage";
import {useState} from "react";

const AccountImages = () => {
    const [userDetails, setUserDetails] = useOutletContext();
    const [reloadGallery, setReloadGallery] = useState(false);

    return (
        <div className="account-images account-bottom">
            <h1>Twoje zdjęcia</h1>
            <div className="actions">
                <AddImage operatorID={userDetails?.Operator.id} setReloadGallery={setReloadGallery}/>
            </div>
            {userDetails && <ImageGallery operatorID={userDetails?.Operator.id} reloadGallery={reloadGallery}
                                          setReloadGallery={setReloadGallery} type="operator"/>}
        </div>
    )
}

export default AccountImages;