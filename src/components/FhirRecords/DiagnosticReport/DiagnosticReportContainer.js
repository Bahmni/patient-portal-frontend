import React from "react";
import PropTypes from "prop-types";
import "./DiagnosticReport.scss";

function DiagnosticReportContainer({ itemList, record }) {
  const fetchPerformer = (performerArray, record) => {
    const finalList = [];
    if (record?.entry && performerArray) {
      performerArray.forEach((item) => {
        record.entry.forEach((entry) => {
          if (entry.fullUrl === item.reference) {
            const name =
              entry.resource?.name?.[0]?.given?.[0] +
              " " +
              entry.resource?.name?.[0]?.family;
            if (name) {
              finalList.push(name);
            }
          }
        });
      });
    }
    return (
      <ul>
        {finalList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
  };

  return (
    <div>
      {itemList.map((diagnosticReport, index) => (
        <div key={index} className="diagnostic__report__container">
          <div className="diagnostic__report__title">
            <h4>Report {index + 1}</h4>
            <p>Title : {diagnosticReport?.code?.text}</p>
          </div>
          <div className="diagnostic__report__details__subsection">
            <p>
              <span className="title">Issued : </span>
              {diagnosticReport?.issued && formatDate(diagnosticReport?.issued)}
            </p>
            <p>
              <span className="title">Conclusion : </span>
              {diagnosticReport?.conclusion}
            </p>
            <p>
              <span className="title">Status : </span>
              <span className="status">
                {diagnosticReport?.status?.toUpperCase()}
              </span>
            </p>
            <p>
              <span className="title">Practioner : </span>
              {diagnosticReport?.resultsInterpreter &&
                fetchPerformer(diagnosticReport?.resultsInterpreter, record)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

DiagnosticReportContainer.propTypes = {
  itemList: PropTypes.array.isRequired,
  record: PropTypes.object.isRequired,
};

export default DiagnosticReportContainer;
