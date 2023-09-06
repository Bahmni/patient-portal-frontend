import React from "react";
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
import { formatDateToDDMMYYYY } from "../../../utils/date-utils";
import { medicationHeaders } from "../../../utils/constants";
import { GiMedicines } from "react-icons/gi";
import "./MedicationRequest.scss";

function MedicationRequest({ itemList }) {
  function filterProps(itemList) {
    const rowsArray = [];
    itemList.map((request) => {
      const requestObj = {
        id: request.id,
        date: formatDateToDDMMYYYY(request.authoredOn),
        medication: (
          <span>
            <GiMedicines /> {request.medicationReference.display}
          </span>
        ),
        dosage: getDosage(request.dosageInstruction),
        info: <p>Priority : {request.priority}</p>,
      };
      rowsArray.push(requestObj);
    });

    return rowsArray;
  }

  function getDosage(dosageArray) {
    return (
      <ul>
        {dosageArray.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="medication__request__container">
      <DataTable rows={filterProps(itemList)} headers={medicationHeaders}>
        {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader
                    key={header.id}
                    className="medication__table__head"
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
                    <TableCell className="medication__table__row" key={cell.id}>
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

MedicationRequest.propTypes = {
  itemList: PropTypes.array.isRequired,
};

export default MedicationRequest;
