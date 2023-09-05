import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Composition from "../Composition/Composition";
import RecordTemplate from "../../Records/RecordTemplate";

function DischargeSummary({ record }) {
  const [composition, setComposition] = useState({});

  useEffect(() => {
    record?.entry?.forEach((item) => {
      if (item?.resource?.resourceType === "Composition") {
        setComposition(item.resource);
      }
    });
  }, [record]);

  return (
    <RecordTemplate docName={"Discharge Summary"}>
      {composition && <Composition record={record} />}
    </RecordTemplate>
  );
}

DischargeSummary.propTypes = {
  record: PropTypes.object.isRequired,
};

export default DischargeSummary;
