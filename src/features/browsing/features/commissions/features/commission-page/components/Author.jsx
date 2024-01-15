const Author = ({author}) => {
    return (
        <div className="author-details">
            <h2>Dane klienta</h2>
            <div className="field">
                <span>{author.firstName} {author.lastName}</span>
            </div>
            <div className="field">
                <span>Email: </span>
                <span>{author.email}</span>
            </div>
            <div className="field">
                <span>Numer telefonu: </span>
                <span>{author.phone}</span>
            </div>
        </div>
    )
}

export default Author;