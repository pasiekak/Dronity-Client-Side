import OperatorList from "./features/operator-listing/OperatorList";
import './styles/operator-viewer.css';
import PaginationPanel from "../pagination/components/PaginationPanel";
import ItemsInfo from "../../components/ItemsInfo";
import Searching from "../searching/Searching";
import Sorting from "../sorting/Sorting";
import LimitPicker from "../pagination/components/LimitPicker";
import React from "react";
import {useOutletContext} from "react-router-dom";

const OperatorViewer = () => {
    const {pagination} = useOutletContext();
    return (
        <div className="operator-viewer">

            <div className="top">
                <h1>Dostępni operatorzy({pagination.count})</h1>
                <div className="right">
                    <div className="sorting-and-searching-and-filtering">
                        <Searching/>
                        <div className="sorting-and-filtering">
                            <Sorting/>
                        </div>
                    </div>
                    <LimitPicker/>
                </div>
            </div>
            <OperatorList/>
            <ItemsInfo/>
            <PaginationPanel/>
        </div>
    )
}

export default OperatorViewer;