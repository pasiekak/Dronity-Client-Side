import AddImageForm from "./components/AddImageForm";
import './styles/add-image.css';

const AddImage = ({operatorID, setReloadGallery}) => {
    return (
        <div className="add-image">
            <AddImageForm operatorID={operatorID} setReloadGallery={setReloadGallery}/>
        </div>
    )
}

export default AddImage;