import SingleCommission from "../SingleCommission/SingleCommission";

const Commissions = ({ commissions, type }) => {
  return (
    <div className="commissions">
      {commissions.map((commission, index) => (
        <SingleCommission id={commission.id} type={type} key={index} />
      ))}
    </div>
  );
};

export default Commissions;
