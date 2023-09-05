import React from "react";
import RecordsSection from "../../components/Records/RecordsSection";
import "./Records.scss";

const Records = () => {
  return (
    <div data-testid="records-container" className="records__container">
      <RecordsSection />
    </div>
  );
};

export default Records;
