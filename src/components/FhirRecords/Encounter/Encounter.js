import React from "react";
import PropTypes from "prop-types";
import { formatDateToDDMMYYYY } from "../../../utils/date-utils";
import { getCodingDisplay, getConceptDisplay } from "../../../utils/fhir-utils";

function Encounter({ encounter }) {
  const getEncDetails = (enc) => {
    const details = [getCodingDisplay(enc.class), enc.status];
    if (enc.period) {
      details.push(
        `${enc.period.start ? formatDateToDDMMYYYY(enc.period.start) : null} ${
          -enc.period.end ? formatDateToDDMMYYYY(enc.period.end) : ""
        }`
      );
    }
    const fields = ["Class", "Status", "Period"];
    return (
      <ul>
        {details.map((item, index) => {
          return (
            <li key={index}>
              <span className="field">{fields[index]}</span>: {item}
            </li>
          );
        })}
      </ul>
    );
  };

  const getEncDiagnosis = (encounter) => {
    const diagnosis = encounter && encounter.diagnosis;
    if (diagnosis) {
      return diagnosis
        .map((diag) => {
          if (diag.condition && diag.condition.resource) {
            return getConceptDisplay(diag.condition.resource.code);
          }
          return "";
        })
        .join(", ");
    }
    return undefined;
  };

  return (
    <div>
      <h3>Encounter</h3>
      {getEncDetails(encounter)}
      {getEncDiagnosis(encounter)}
    </div>
  );
}

Encounter.propTypes = {
  encounter: PropTypes.object.isRequired,
};

export default Encounter;
