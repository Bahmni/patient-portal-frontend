import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  callGet,
  getDiagnosticReport,
  getDischargeSummary,
  getImmunization,
  getOPCOnsult,
  getPrescription,
} from "../../utils/api-utils";
import DiagnosticReport from "../FhirRecords/DiagnosticReport/DiagnosticReport";
import DischargeSummary from "../FhirRecords/DischargeSummary/DischargeSummary";
import OPConsult from "../FhirRecords/OPConsult/OPConsult";
import Immunization from "../FhirRecords/Immunization/Immunization";
import Prescription from "../FhirRecords/Prescription/Prescription";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";

function RecordRenderer({ uuid, fromDate, endDate }) {
  const [immunizationBundle, setImmunizationBundle] = useState([]);
  const [prescriptionBundle, setPrescriptionBundle] = useState([]);
  const [summaryBundle, setSummaryBundle] = useState([]);
  const [reportsBundle, setReportsBundle] = useState([]);
  const [opConsultBundle, setOpConsultBundle] = useState([]);

  const { user } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (uuid && fromDate && endDate && user) {
          const Prescription = await callGet(
            getPrescription(uuid, fromDate, endDate),
            user.accessToken
          );
          if (Prescription && Prescription.status === 200) {
            setPrescriptionBundle(Prescription.data);
          }
          const OPConsult = await callGet(
            getOPCOnsult(uuid, fromDate, endDate),
            user.accessToken
          );
          if (OPConsult && OPConsult.status === 200) {
            setOpConsultBundle(OPConsult.data);
          }
          const DischargeSummary = await callGet(
            getDischargeSummary(uuid, fromDate, endDate),
            user.accessToken
          );
          if (DischargeSummary && DischargeSummary.status === 200) {
            setSummaryBundle(DischargeSummary.data);
          }
          const DiagnosticReport = await callGet(
            getDiagnosticReport(uuid, fromDate, endDate),
            user.accessToken
          );
          if (DiagnosticReport && DiagnosticReport.status === 200) {
            setReportsBundle(DiagnosticReport.data);
          }
          const Immunization = await callGet(
            getImmunization(uuid, fromDate, endDate),
            user.accessToken
          );
          if (Immunization && Immunization.status === 200) {
            setImmunizationBundle(Immunization.data);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [uuid, fromDate, endDate]);

  return (
    <div>
      {immunizationBundle &&
        immunizationBundle?.recordList?.length > 0 &&
        immunizationBundle.recordList.map((record, index) => (
          <Immunization key={index} record={record} />
        ))}
      {summaryBundle &&
        summaryBundle?.recordList?.length > 0 &&
        summaryBundle.recordList.map((record, index) => (
          <DischargeSummary key={index} record={record} />
        ))}
      {reportsBundle &&
        reportsBundle?.recordList?.length > 0 &&
        reportsBundle.recordList.map((record, index) => (
          <DiagnosticReport key={index} record={record} />
        ))}
      {prescriptionBundle &&
        prescriptionBundle?.recordList?.length > 0 &&
        prescriptionBundle.recordList.map((record, index) => (
          <Prescription key={index} record={record} />
        ))}
      {opConsultBundle &&
        opConsultBundle?.recordList?.length > 0 &&
        opConsultBundle.recordList.map((record, index) => (
          <OPConsult key={index} record={record} />
        ))}
      {!(
        immunizationBundle &&
        summaryBundle &&
        reportsBundle &&
        prescriptionBundle &&
        opConsultBundle
      ) && <p>No Documents to Display</p>}
    </div>
  );
}

RecordRenderer.propTypes = {
  uuid: PropTypes.string.isRequired,
  fromDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default RecordRenderer;
