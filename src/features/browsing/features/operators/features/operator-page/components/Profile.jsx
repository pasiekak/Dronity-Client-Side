import '../styles/operator-profile.css';

const Profile = ({imageID, name, info}) => {
    return (
        <section className="operator-profile">
            <div className="left">
                {name &&
                    <>
                        <span className="name first-name">{name?.firstName}</span>
                        <span className="name last-name">{name?.lastName}</span>
                    </>}
            </div>
            <div className="image-wrapper">
                {imageID && <img src={`/api/images/${imageID}`} alt=''/>}
            </div>
            <div className="right">
                <h3>Dane operatora</h3>
                <div className="properties">
                    {info?.phone && <>
                        <span>Numer telefonu: </span>
                        <span>{info.phone}</span>
                    </>}
                    {info?.email && <>
                        <span>Email: </span>
                        <span>{info.email}</span>
                    </>}
                    {info?.city && <>
                        <span>Miasto: </span>
                        <span>{info.city}</span>
                    </>}
                    {info?.license && <>
                        <span>Licencja: </span>
                        <span>{info.license}</span>
                    </>}
                </div>
            </div>
        </section>
    )
}

export default Profile;