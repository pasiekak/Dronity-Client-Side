import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {ServerCommunicator} from "../../../../shared/services/ServerCommunicator";
import './styles/operator-outlet.css';
import '../../styles/forAll.css';

const OperatorOutlet = () => {
    const [pagination, setPagination] = useState({
        limit: 5, page: 1, maxPage: 1, count: 0
    });
    const [sorting, setSorting] = useState({
        by: "id", order: "ASC"
    });
    const [searchWord, setSearchWord] = useState('');

    const [loading, setLoading] = useState(true);

    const [operators, setOperators] = useState(null);

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
        setOperators([]);
        const URL = `/api/operators?page=${pagination.page}&limit=${pagination.limit}&by=${sorting.by}&order=${sorting.order}${searchWord !== undefined && searchWord !== '' && searchWord !== null ? `&searchWord=${searchWord}` : ''}`
        ServerCommunicator.handleRequest('get', URL).then(res => {
            if (res.success) {
                const maxPage = Math.ceil(res.data.count / pagination.limit)

                setOperators(res.data.rows)
                setPagination(prevPagination => {
                    return {
                        ...prevPagination,
                        count: res.data.count,
                        maxPage: maxPage
                    }
                })
                if (pagination.page > maxPage) {
                    setPagination(prev => {
                        return {...prev, page: 1}
                    })
                }
            }
        }).finally(() => setLoading(false))
    }, [pagination.limit, pagination.page, searchWord, sorting.by, sorting.order]);


    return (
        <div className={`content operators-outlet${loading ? ' loading' : ''}`}>
            <Outlet
                context={{
                    pagination,
                    incPage, decPage,
                    setPagination,
                    searchWord,
                    setSearchWord,
                    sorting,
                    setSorting,
                    loading,
                    setLoading,
                    operators,
                    setOperators,
                }}/>
        </div>
    )
}

export default OperatorOutlet;