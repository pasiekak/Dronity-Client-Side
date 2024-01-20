import '../styles/description.css';

const Description = ({description}) => {
    
    return (
        <section className="description-wrapper">
            <h2>O mnie</h2>
            <span className="description">
                {description}
            </span>
        </section>
    )
}

export default Description;