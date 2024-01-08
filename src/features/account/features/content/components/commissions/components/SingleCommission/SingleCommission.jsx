import { useEffect, useState } from "react";
import { ServerCommunicator } from "../../../../../../../../shared/services/ServerCommunicator";
import CaretSVG from "../../../../../../../../shared/assets/media/svg/CaretSVG/CaretSVG";
import "./style.css";
import AuthorDetails from "./AuthorDetails";
import OtherDetails from "./OtherDetails";
import ContractorDetails from "./ContractorDetails";

const SingleCommission = ({ id, type }) => {
  const [commission, setCommission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [detailsOpen, setDetailsOpen] = useState(false);
  useEffect(() => {
    ServerCommunicator.handleRequest("get", `/api/commissions/${id}`)
      .then((res) => {
        if (res.success) setCommission(res.data);
        console.log(res.data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="commission">
      {!loading && (
        <>
          <div className="important-details">
            <div>
              <span className="label">ID: </span>
              <span>#{id}</span>
            </div>
            <div>
              {type === "operator" && (
                <>
                  <span className="label">Autor: </span>
                  <span>
                    {commission?.author?.firstName}{" "}
                    {commission?.author?.lastName}
                  </span>
                </>
              )}
              {type === "client" && (
                <>
                  <span className="label">Operator: </span>
                  <span>
                    {commission?.contractor?.firstName}{" "}
                    {commission?.contractor?.lastName}
                  </span>
                </>
              )}
            </div>
            <div>
              <span
                className={`completion ${
                  commission?.details?.completed ? "completed" : "not-completed"
                }`}
              >
                {commission?.details?.completed ? "Zakończone" : "W trakcie"}
              </span>
            </div>
            <div>
              <span className="label">Zapłata: </span>
              <span>{commission?.details?.payment} zł</span>
            </div>
          </div>
          <div className={`details ${detailsOpen ? "open" : "closed"}`}>
            <div className="inner">
              {type === "operator" && (
                <AuthorDetails author={commission?.author} />
              )}
              {type === "client" && (
                <ContractorDetails contractor={commission?.contractor} />
              )}

              <OtherDetails details={commission?.details} />
            </div>
          </div>
          <div className="svg-wrapper">
            <div
              className="svg-circle"
              onClick={() => setDetailsOpen((prev) => !prev)}
            >
              <CaretSVG />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleCommission;
