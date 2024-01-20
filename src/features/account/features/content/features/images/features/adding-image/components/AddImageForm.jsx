import {useForm} from "react-hook-form";
import {ServerCommunicator} from "../../../../../../../../../shared/services/ServerCommunicator";

const AddImageForm = ({operatorID, setReloadGallery}) => {
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        for (let i = 0; i < data.files.length; i++) {
            formData.append(`file${i}`, data.files[i]);
        }
        ServerCommunicator.handleFilesRequest(`/api/images/operators/${operatorID}`, formData).then(res => {
            if (res.success) {
                setReloadGallery(prev => !prev);
            }
            reset();
        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="files">Dodaj zdjęcia</label>
            <div className="buttons">
                <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    multiple
                    {...register('files')}
                />
                <button type="submit">Zapisz</button>
            </div>
        </form>
    )
}

export default AddImageForm;