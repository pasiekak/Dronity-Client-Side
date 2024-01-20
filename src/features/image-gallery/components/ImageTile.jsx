import '../styles/image-tile.css';

const ImageTile = ({id}) => {

    return (
        <div className="image-tile">
            <img src={`/api/images/${id}`} alt={''}/>
        </div>
    )
}

export default ImageTile;