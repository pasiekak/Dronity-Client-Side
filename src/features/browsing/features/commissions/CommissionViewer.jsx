import React from "react";
import ItemsInfo from "../../components/ItemsInfo";
import './styles/commission-viewer.css';
import LoaderSVG from "../../../../shared/assets/media/svg/LoaderSVG/LoaderSVG";
import LimitPicker from "../pagination/components/LimitPicker";
import CommissionList from "./features/commission-listing/CommissionList";
import PaginationPanel from "../pagination/components/PaginationPanel";
import Sorting from "../sorting/Sorting";
import Filtering from "../filtering/Filtering";
import Searching from "../searching/Searching";
import {useOutletContext} from "react-router-dom";


const CommissionViewer = () => {
    const {
        commissions,
        loading,
        pagination
    } = useOutletContext()
    return (
        <div className={`content commission-viewer${loading ? ' loading' : ''}`}>
            {commissions &&
                <>
                    <div className="top">
                        <h1>Dostępne zlecenia({pagination.count})</h1>
                        <div className="right">
                            <div className="sorting-and-searching-and-filtering">
                                <Searching/>
                                <div className="sorting-and-filtering">
                                    <Filtering/>
                                    <Sorting/>
                                </div>
                            </div>
                            <LimitPicker/>

                        </div>
                    </div>
                    {loading ? <div className="loader-wrapper"><LoaderSVG className="loader"/></div> :
                        <CommissionList/>}
                    <ItemsInfo/>
                    <PaginationPanel/>
                </>
            }

        </div>
    );

}

export default CommissionViewer;