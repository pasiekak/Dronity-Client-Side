const AuthorDetails = ({ author }) => {
  return (
    <div className="author">
      <table>
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
    </div>
  );
};

export default AuthorDetails;
