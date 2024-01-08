const OtherDetails = ({ details }) => {
  return (
    <div className="commission-details">
      <span className="title">Szczegóły zlecenia</span>
      <span className="label">Tytuł zlecenia</span>
      <span className="description">{details?.title}</span>
      <div className="line"></div>

      <span className="label">Opis</span>
      <span className="description">{details?.description}</span>
      <div className="line"></div>

      <div>
        <div>
          <span className="label">Miasto: </span>
          <span>{details?.city}</span>
        </div>
        <div>
          <span className="label">Data rozpoczęcia zdjęć: </span>
          <span>{new Date(details?.start_date).toLocaleString()}</span>
        </div>
        <div>
          <span className="label">Data zakończenia zdjęć: </span>
          <span>{new Date(details?.end_date).toLocaleString()}</span>
        </div>
        <div>
          <span className="label">Zapłata: </span>
          <span>{details?.payment} zł</span>
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
