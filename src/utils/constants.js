import React from "react";
import { TbVaccine } from "react-icons/tb";

export const visitHeadersDesktop = [
  {
    key: "startdate",
    header: "Start Date",
  },
  {
    key: "enddate",
    header: "End Date",
  },
  {
    key: "type",
    header: "Type",
  },
  {
    key: "view",
    header: "",
  },
];

export const conditionsHeaders = [
  {
    key: "date",
    header: "Recorded Date",
  },
  {
    key: "condition",
    header: "Condition",
  },
  {
    key: "status",
    header: "Status",
  },
  {
    key: "notes",
    header: "Notes",
  },
];

export const medicationHeaders = [
  {
    key: "date",
    header: "Date",
  },
  {
    key: "medication",
    header: "Medication",
  },
  {
    key: "dosage",
    header: "Dosage",
  },
  {
    key: "info",
    header: "Info",
  },
];

export const ImmunizationHeader = [
  {
    key: "date",
    header: "Date",
  },
  {
    key: "vaccine",
    header: "Vaccine",
  },
  {
    key: "status",
    header: "Status",
  },
  {
    key: "lotnumber",
    header: "Lot Number",
  },
  {
    key: "manufacturer",
    header: "Manufacturer",
  },
  {
    key: "dosenumber",
    header: "Dose Number",
  },
];

export const ImmunizationData = [
  {
    id: "a",
    vaccine: (
      <span>
        <TbVaccine style={{ color: "blue" }} /> COVID-19 antigen vaccine
      </span>
    ),
    status: <p className="ipd__type">Completed</p>,
  },
];

export const ERROR_MESSAGES = {
  ID: "Please Enter a valid ID",
};
