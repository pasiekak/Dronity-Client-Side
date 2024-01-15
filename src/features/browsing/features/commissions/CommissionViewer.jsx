import React, {useEffect, useState} from "react";
import {ServerCommunicator} from "../../../../shared/services/ServerCommunicator";
import CommissionsInfo from "./components/CommissionsInfo";
import './styles/commission-viewer.css';
import LoaderSVG from "../../../../shared/assets/media/svg/LoaderSVG/LoaderSVG";
import LimitPicker from "./features/picking-limit/LimitPicker";
import CommissionList from "./features/commission-listing/CommissionList";
import PaginationPanel from "./features/managing-pagination/PaginationPanel";
import Sorting from "./features/sorting/Sorting";
import Filtering from "./features/filtering/Filtering";
import Searching from "./features/searching/Searching";


const CommissionViewer = () => {
    const [searchWord, setSearchWord] = useState('');
    const [limit, setLimit] = useState(10);
    const [loading, setLoading] = useState(true);
    const [commissions, setCommissions] = useState(null);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);
    const [count, setCount] = useState(0);
    const [sorting, setSorting] = useState({by: "createdAt", order: "ASC"})
    const [filters, setFilters] = useState({
        minPayment: 1,
        maxPayment: 99999,
        minStartDate: new Date(),
        maxStartDate: null
    });
    const incPage = () => {
        if (page !== maxPage)
            setPage(page => page + 1);
    }

    const decPage = () => {
        if (page !== 1)
            setPage(page => page - 1);
    }

    useEffect(() => {
        setLoading(true);
        const reqURL = `/api/commissions?page=${page}&limit=${limit}&by=${sorting.by}&order=${sorting.order}&searchWord=${searchWord}&minPayment=${filters.minPayment}&maxPayment=${filters.maxPayment}&minStartDate=${filters.minStartDate}&maxStartDate=${filters.maxStartDate}&clientDate=${Date.now()}`;
        ServerCommunicator.handleRequest('get', reqURL).then(res => {
            if (res.success) {
                setCommissions(res.data.rows);
                setCount(res.data.count)
                setMaxPage(Math.ceil(res.data.count / limit));
                setLoading(false);
            }
            if (page > maxPage) {
                setPage(1);
            }
        })
    }, [page, maxPage, limit, sorting, searchWord, filters]);

    return (
        <div className={`content commission-viewer${loading ? ' loading' : ''}`}>
            {commissions &&
                <>
                    <div className="top">
                        <h1>Dostępne zlecenia</h1>
                        <div className="right">
                            <div className="sorting-and-searching-and-filtering">
                                <Searching searchWord={searchWord} setSearchWord={setSearchWord}/>
                                <div className="sorting-and-filtering">
                                    <Filtering filters={filters} setFilters={setFilters}/>
                                    <Sorting sorting={sorting} setSorting={setSorting}/>
                                </div>
                            </div>
                            <LimitPicker limit={limit} setLimit={setLimit}/>

                        </div>
                    </div>
                    {loading ? <LoaderSVG className="loader"/> : <CommissionList commissions={commissions}/>}
                    <CommissionsInfo count={count}/>
                    <PaginationPanel incPage={incPage} decPage={decPage} page={page} maxPage={maxPage} setPage={setPage}
                                     limit={limit}
                                     count={count}/>
                </>
            }

        </div>
    );

}

export default CommissionViewer;