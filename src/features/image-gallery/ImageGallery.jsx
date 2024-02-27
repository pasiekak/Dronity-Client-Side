import {useEffect, useState} from "react";
import {ServerCommunicator} from "../../shared/services/ServerCommunicator";
import './styles/image-gallery.css';
import ImageTile from "./components/ImageTile";

const ImageGallery = ({operatorID, reloadGallery, setReloadGallery, type}) => {
    const [imagesIDs, setImagesIDs] = useState(null);
    const [count, setCount] = useState(null);

    useEffect(() => {
        ServerCommunicator.handleRequest('get', `/api/images/operator/${operatorID}`).then(res => {
            if (res.success) {
                setImagesIDs(res.data.imagesData.ids);
                setCount(res.data.imagesData.count);
            }
        })
    }, [operatorID, reloadGallery]);

    return (
        <section className="image-gallery">
            {imagesIDs && imagesIDs.map((id) => <ImageTile id={id} key={id} setReloadGallery={setReloadGallery}
                                                           type={type}/>)}
        </section>
    )
}

export default ImageGallery;