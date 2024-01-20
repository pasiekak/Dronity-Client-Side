import AddImageForm from "./components/AddImageForm";

const AddImage = ({operatorID, setReloadGallery}) => {
    return (
        <div className="add-image">
            <AddImageForm operatorID={operatorID} setReloadGallery={setReloadGallery}/>
        </div>
    )
}

export default AddImage;