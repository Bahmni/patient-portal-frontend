import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Composition from "../Composition/Composition";
import RecordTemplate from "../../Records/RecordTemplate";

function Immunization({ record }) {
  const [composition, setComposition] = useState({});

  useEffect(() => {
    record?.entry?.forEach((item) => {
      if (item?.resource?.resourceType === "Composition") {
        setComposition(item.resource);
      }
    });
  }, [record]);

  return (
    <RecordTemplate docName={"Immunization"}>
      {composition && <Composition record={record} />}
    </RecordTemplate>
  );
}

Immunization.propTypes = {
  record: PropTypes.object.isRequired,
};

export default Immunization;
