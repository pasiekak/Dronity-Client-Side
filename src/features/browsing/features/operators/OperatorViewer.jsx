import {useState} from "react";
import {Outlet} from "react-router-dom";

const OperatorViewer = () => {
    const [pagination, setPagination] = useState({
        limit: 10, page: 1, maxPage: 0, count: 0
    })

    const [loading, setLoading] = useState(true);
    const [operators, setOperators] = useState(null);


    return (
        <div className="content operator-viewer">
            <Outlet/>
        </div>
    )
}

export default OperatorViewer;