import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { formatDateToDDMMYYYY } from "../../../utils/date-utils";
import Condition from "../Condition/Condition";
import MedicationRequest from "../Medication/MedicationRequest";
import DiagnosticReportContainer from "../DiagnosticReport/DiagnosticReportContainer";
import Encounter from "../Encounter/Encounter";
import DocumentReference from "../DocumentReference/DocumentReference";
import "./Composition.scss";
import ImmunizationContainer from "../Immunization/ImmunizationContainer";

function Composition({ record }) {
  const [composition, setComposition] = useState({});

  useEffect(() => {
    record?.entry?.forEach((item) => {
      if (item?.resource?.resourceType === "Composition") {
        setComposition(item.resource);
      }
    });
  }, [record]);

  const getAuthorsList = (authorArray) => {
    if (!authorArray) return "";
    const finalArray = [];

    authorArray?.forEach((author) => {
      const practitionerArray = record?.entry?.filter(
        (item) => item?.fullUrl === author?.reference
      );
      practitionerArray?.forEach((prac) => {
        finalArray.push(prac?.resource?.name);
      });
    });

    return <ul>{finalArray}</ul>;
  };

  const getSectionItems = (sectionArray, title, Component) => {
    const Array = [];
    sectionArray?.forEach((section) => {
      if (section?.title === title) {
        section?.entry?.forEach((entry) => {
          record?.entry?.forEach((item) => {
            if (item.fullUrl === entry?.reference) {
              Array.push(item.resource);
            }
          });
        });
      }
    });

    return (
      <div>
        <hr />
        <h3 className="doc__title">{title?.toUpperCase()}</h3>
        <Component itemList={Array} record={record} />
      </div>
    );
  };

  const getDocuments = (composition) => {
    const renderedDocuments = composition?.section
      ?.map((item) => {
        switch (item?.title) {
          case "Medical history":
            return getSectionItems(
              composition?.section,
              "Medical history",
              Condition
            );
          case "Medication request":
            return getSectionItems(
              composition?.section,
              "Medication request",
              MedicationRequest
            );
          case "Diagnostic Report":
            return getSectionItems(
              composition?.section,
              "Diagnostic Report",
              DiagnosticReportContainer
            );
          case "OPD Prescription":
            return getSectionItems(
              composition?.section,
              "OPD Prescription",
              MedicationRequest
            );
          case "Patient Document":
            return getSectionItems(
              composition?.section,
              "Patient Document",
              DocumentReference
            );
          case "Immunization":
            return getSectionItems(
              composition?.section,
              "Immunization Record",
              ImmunizationContainer
            );
          default:
            return null; // Handle other cases if needed
        }
      })
      .filter(Boolean); // Filter out null values

    return renderedDocuments;
  };

  const getPatientDetails = (record) => {
    const details = [];

    record?.entry?.forEach((item) => {
      if (item?.resource?.resourceType === "Patient") {
        const gender = item?.resource?.gender;
        const dob = item?.resource?.birthDate;
        const givenname = item?.resource?.name[0]?.given;
        const familyname = item?.resource?.name[0]?.family;
        const name = givenname[0] + " " + givenname[1] + " " + familyname;
        details.push({ title: "Name", value: name });
        details.push({ title: "Gender", value: gender });
        details.push({ title: "DOB", value: dob });
      }
    });

    return (
      <ul>
        {details.map((item, index) => (
          <li key={index}>
            <span className="field">{item.title} : </span>
            {item.value}
          </li>
        ))}
      </ul>
    );
  };

  const getEncounter = (reference) => {
    const encounter = record?.entry?.filter(
      (item) => item?.fullUrl === reference
    );
    return <Encounter encounter={encounter[0]?.resource} />;
  };

  return (
    <div className="composition__component">
      <div className="patient__details__comp">
        <h3>Patient : </h3>
        {getPatientDetails(record)}
      </div>
      <p>
        <span className="field">Date : </span>
        {formatDateToDDMMYYYY(composition?.date)}
      </p>
      <p>
        <span className="field">Status : </span>
        <span className="status">{composition?.status?.toUpperCase()}</span>
      </p>
      <p>
        <span className="field">Authors : </span>
        {getAuthorsList(composition?.author)}
      </p>
      <hr />
      <div>
        {composition?.encounter?.reference &&
          getEncounter(composition?.encounter?.reference)}
        {composition && getDocuments(composition)}
      </div>
    </div>
  );
}

Composition.propTypes = {
  record: PropTypes.object.isRequired,
};

export default Composition;
