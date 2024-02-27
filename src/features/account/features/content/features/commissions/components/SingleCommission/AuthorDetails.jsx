const AuthorDetails = ({author}) => {
    return (
        <div className="author">
            <table className="big-screen">
                <caption className="title">Dane autora zlecenia</caption>
                <thead>
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Email</th>
                    <th>Numer telefonu</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{author?.firstName}</td>
                    <td>{author?.lastName}</td>
                    <td>{author?.email}</td>
                    <td>{author?.phone}</td>
                </tr>
                </tbody>
            </table>
            <div className="small-screen">
                <span className="title">Dane autora zlecenia</span>
                <span>{author?.firstName}</span>
                <span>{author?.lastName}</span>
                <span>{author?.email}</span>
                <span>{author?.phone}</span>
            </div>
        </div>
    );
};

export default AuthorDetails;
