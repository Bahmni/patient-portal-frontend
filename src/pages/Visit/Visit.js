import React from "react";
import VisitSection from "../../components/Visit/VisitSection";
import "./Visit.scss";

const Visit = () => {
  return (
    <div data-testid="visit-container" className="visit__container">
      <VisitSection />
    </div>
  );
};

export default Visit;
