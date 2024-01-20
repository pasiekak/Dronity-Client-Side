import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {ServerCommunicator} from "../../../../shared/services/ServerCommunicator";
import '../../styles/forAll.css'

const CommissionOutlet = () => {
    const [pagination, setPagination] = useState({
        limit: 5, page: 1, maxPage: 1, count: 0
    });
    const [searchWord, setSearchWord] = useState('');
    const [loading, setLoading] = useState(true);
    const [commissions, setCommissions] = useState(null);
    const [sorting, setSorting] = useState({by: "createdAt", order: "DESC"})
    const [filters, setFilters] = useState({
        minPayment: 1,
        maxPayment: 99999,
        minStartDate: new Date(),
        maxStartDate: null
    });
    const incPage = () => {
        setPagination(prev => {
            return {...prev, page: prev.page + 1}
        })
    }
    const decPage = () => {
        setPagination(prev => {
            return {...prev, page: prev.page - 1}
        })
    }

    useEffect(() => {
        setLoading(true);
        const reqURL = `/api/commissions?page=${pagination.page}&limit=${pagination.limit}&by=${sorting.by}&order=${sorting.order}&searchWord=${searchWord}&minPayment=${filters.minPayment}&maxPayment=${filters.maxPayment}&minStartDate=${filters.minStartDate}&maxStartDate=${filters.maxStartDate}&clientDate=${Date.now()}`;
        ServerCommunicator.handleRequest('get', reqURL).then(res => {
            if (res.success) {
                setCommissions(res.data.rows);
                setPagination(prev => {
                    return {...prev, count: res.data.count, maxPage: Math.ceil(res.data.count / prev.limit)}
                })
                setLoading(false);
            }
            if (pagination.page > pagination.maxPage) {
                setPagination(prev => {
                    return {...prev, page: 1}
                })
            }
        })
    }, [pagination.page, pagination.limit, pagination.maxPage, pagination.count, sorting, searchWord, filters]);

    return (
        <div className={'commissions-outlet'}>
            <Outlet context={{
                searchWord, setSearchWord,
                loading, setLoading,
                commissions, setCommissions,
                pagination, setPagination,
                sorting, setSorting,
                filters, setFilters,
                incPage, decPage
            }}/>
        </div>
    )
}
export default CommissionOutlet;