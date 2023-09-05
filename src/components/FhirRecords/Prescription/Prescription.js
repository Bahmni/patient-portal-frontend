import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Composition from "../Composition/Composition";
import RecordTemplate from "../../Records/RecordTemplate";

function Prescription({ record }) {
  const [composition, setComposition] = useState({});

  useEffect(() => {
    record?.entry?.forEach((item) => {
      if (item?.resource?.resourceType === "Composition") {
        setComposition(item.resource);
      }
    });
  }, [record]);

  return (
    <RecordTemplate docName={"Prescription Record"}>
      {composition && <Composition record={record} />}
    </RecordTemplate>
  );
}

Prescription.propTypes = {
  record: PropTypes.object.isRequired,
};

export default Prescription;
