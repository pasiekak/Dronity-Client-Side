import Author from "./Author";
import Commission from "./Commission";
import '../styles/details.css';

const Details = ({author, details}) => {
    return (
        <div className="details">
            <Author author={author}/>
            <div className="separator"></div>
            <Commission details={details}/>
        </div>
    )
}

export default Details;