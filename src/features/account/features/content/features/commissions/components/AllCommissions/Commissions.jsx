import React from 'react';
import PaginatedItems from "../../features/pagination/PaginatedItems";
import SingleCommission from "../SingleCommission/SingleCommission";

const Commissions = ({commissions, type}) => {
    return (
        <div className="commissions">
            <PaginatedItems items={commissions} itemsPerPage={5} Component={SingleCommission} typeOfUser={type}/>
        </div>
    );
};

export default Commissions;
