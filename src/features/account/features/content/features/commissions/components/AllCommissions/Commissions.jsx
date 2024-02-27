import React from 'react';
import PaginatedItems from "../../features/pagination/PaginatedItems";
import SingleCommission from "../SingleCommission/SingleCommission";

const Commissions = ({commissions, type}) => {
    return (
        <div className="commissions">
            {commissions.length === 0 && <span>Nie masz jeszcze żadnych zleceń.</span>}
            {commissions.length > 0 &&
                <PaginatedItems items={commissions} itemsPerPage={5} Component={SingleCommission} typeOfUser={type}/>}
        </div>
    );
};

export default Commissions;
