import './searching.css';
import {useForm} from "react-hook-form";
import {useOutletContext} from "react-router-dom";

const Searching = () => {
    const {searchWord, setSearchWord} = useOutletContext();
    const {register, handleSubmit} = useForm({
        defaultValues: {
            tempSearchWord: searchWord
        }
    });

    const onSubmit = (data) => {
        setSearchWord(data.tempSearchWord);
    }

    return (
        <form className="searching" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="searchWord">Wyszukiwarka:</label>
            <input type="text" placeholder="Szukaj..." {...register("tempSearchWord")}/>
            <button type="submit" className="dark_blue_button">Szukaj</button>
        </form>
    )
}

export default Searching;