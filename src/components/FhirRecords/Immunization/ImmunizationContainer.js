import React from "react";
import { ImmunizationHeader } from "../../../utils/constants";
import { formatDateToDDMMYYYY } from "../../../utils/date-utils";
import PropTypes from "prop-types";
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "carbon-components-react";
import "./Immunization.scss";

function ImmunizationContainer({ itemList, record }) {
  function filterProps(itemList) {
    const rowsArray = [];
    itemList.map((immunization) => {
      const immunizationObj = {
        id: immunization?.id,
        date: formatDateToDDMMYYYY(immunization?.occurrenceDateTime),
        vaccine: fetchVaccine(immunization?.vaccineCode),
        status: immunization?.status,
        lotnumber: immunization?.lotNumber,
        manufacturer: fetchManufacturer(immunization?.manufacturer),
        dosenumber: fetchDoseNumber(immunization?.protocolApplied),
      };
      rowsArray.push(immunizationObj);
    });

    return rowsArray;
  }

  const fetchVaccine = (vaccineCode) => {
    const vaccineArray = [];

    vaccineCode?.coding?.forEach((code) => {
      if (code?.display) {
        vaccineArray.push(code.display);
      }
    });

    return <p>{vaccineArray}</p>;
  };

  const fetchManufacturer = (manufacturer) => {
    const Manufacturer = record?.entry?.find(
      (entry) => entry.fullUrl === manufacturer.reference
    );
    if (Manufacturer) {
      return Manufacturer?.resource?.name;
    }
    return null;
  };

  const fetchDoseNumber = (protocolArray) => {
    const doseArray = [];
    protocolArray.forEach((dose) => {
      if (dose.doseNumberPositiveInt) {
        doseArray.push(dose.doseNumberPositiveInt);
      }
    });

    return doseArray;
  };

  return (
    <div className="immunization__record__container">
      <DataTable rows={filterProps(itemList)} headers={ImmunizationHeader}>
        {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader
                    key={header.id}
                    className="immunization__table__head"
                    {...getHeaderProps({ header })}
                  >
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} {...getRowProps({ row })}>
                  {row.cells.map((cell) => (
                    <TableCell
                      className="immunization__table__row"
                      key={cell.id}
                    >
                      {cell.value}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </DataTable>
    </div>
  );
}

ImmunizationContainer.propTypes = {
  itemList: PropTypes.array.isRequired,
  record: PropTypes.object.isRequired,
};

export default ImmunizationContainer;
