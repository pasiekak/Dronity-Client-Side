import '../styles/middle-content.css';

const MiddleContent = ({authorFullName, description}) => {
    return (
        <div className="middle-content">
            <span className="all">
                <div className="full-name">
                    <span
                        className="full-name-content">{authorFullName === "undefined undefined" ? 'Loading...' : authorFullName}</span>
                </div>
                <span className="description">{description}</span>
            </span>
        </div>
    )
}

export default MiddleContent;